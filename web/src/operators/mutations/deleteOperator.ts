import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const DeleteOperator = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeleteOperator),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const operator = await db.operator.deleteMany({ where: { id } });

    return operator;
  }
);
