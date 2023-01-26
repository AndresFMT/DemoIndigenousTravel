import { paginate } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db";

interface GetOperatorsInput
  extends Pick<
    Prisma.OperatorFindManyArgs,
    "where" | "orderBy" | "skip" | "take"
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetOperatorsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: operators,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.operator.count({ where }),
      query: (paginateArgs) =>
        db.operator.findMany({ ...paginateArgs, where, orderBy }),
    });

    return {
      operators,
      nextPage,
      hasMore,
      count,
    };
  }
);
