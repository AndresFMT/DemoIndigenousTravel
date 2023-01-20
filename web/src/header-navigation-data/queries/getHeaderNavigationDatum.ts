import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const GetHeaderNavigationDatum = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
});

export default resolver.pipe(
  resolver.zod(GetHeaderNavigationDatum),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const headerNavigationDatum = await db.headerNavigationDatum.findFirst({
      where: { id },
    });

    if (!headerNavigationDatum) throw new NotFoundError();

    return headerNavigationDatum;
  }
);
