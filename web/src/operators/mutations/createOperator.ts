import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const CreateOperator = z.object({
  name: z.string(),
});

export default resolver.pipe(
  resolver.zod(CreateOperator),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const operator = await db.operator.create({ data: input });

    return operator;
  }
);
