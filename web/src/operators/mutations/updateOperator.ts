import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const UpdateOperator = z.object({
  id: z.number(),
  name: z.string(),
});

export default resolver.pipe(
  resolver.zod(UpdateOperator),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const operator = await db.operator.update({ where: { id }, data });

    return operator;
  }
);
