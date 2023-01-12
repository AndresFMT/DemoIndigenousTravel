import { paginate } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db";

import client from 'integrations/sanity.client';

interface GetPostsInput
  extends Pick<
    Prisma.PostFindManyArgs,
    "where" | "orderBy" | "skip" | "take"
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetPostsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const paths = await getStaticPaths(where, orderBy, skip, take);

    
    const {
      items: posts,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.post.count({ where }),
      query: (paginateArgs) =>
        db.post.findMany({ ...paginateArgs, where, orderBy }),
    });

    return {
      posts,
      nextPage,
      hasMore,
      count,
    };
  }
);


export async function getStaticPaths(where, orderBy, skip, take) {
  const query = `
  *
  [_type == "post" && defined(slug.current)]
  [${skip}...${skip+take}]
  `;
  const paths = await client.fetch(query);

  return {
    paths: paths.map((slug: string) => ({params: {slug }})),
    fallback: true,
  }
}
