import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const UpdateHeaderNavigationDatum = z.object({
  id: z.number(),
  name: z.string(),
});

export default resolver.pipe(
  resolver.zod(UpdateHeaderNavigationDatum),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const headerNavigationDatum = await db.headerNavigationDatum.update({
      where: { id },
      data,
    });

    return headerNavigationDatum;
  }
);
