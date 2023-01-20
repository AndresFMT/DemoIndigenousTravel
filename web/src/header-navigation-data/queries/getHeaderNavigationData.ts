import { paginate } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db";

import client from 'integrations/sanity.client';

export default resolver.pipe(
  resolver.authorize(),
  async () => {
    const {
      items: headerNavigationData,
      count,
    } = await paginate({
      count: () => db.headerNavigationDatum.count(),
      query: (paginateArgs) =>
        db.headerNavigationDatum.findMany({ ...paginateArgs }),
    });

    return {
      headerNavigationData,
      count,
    };
  }
);
