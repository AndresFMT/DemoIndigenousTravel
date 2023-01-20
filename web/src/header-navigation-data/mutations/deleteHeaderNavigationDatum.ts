import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const DeleteHeaderNavigationDatum = z.object({
  id: z.number(),
});

export default resolver.pipe(
  resolver.zod(DeleteHeaderNavigationDatum),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const headerNavigationDatum = await db.headerNavigationDatum.deleteMany({
      where: { id },
    });

    return headerNavigationDatum;
  }
);
