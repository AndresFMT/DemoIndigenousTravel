import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { usePaginatedQuery } from "@blitzjs/rpc";
import client from 'integrations/sanity.client';
import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
import getPosts from "src/posts/queries/getPosts";

const ITEMS_PER_PAGE = 100;


export const PostsList = (props) => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } });
  const goToNextPage = () => router.push({ query: { page: page + 1 } });


  const { posts } = props;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={Routes.ShowPostPage({ slug: post.id })}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
    </div>
  );
};

const PostsPage = ({posts}) => {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewPostPage()}>
            <a>Create Post</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <PostsList posts={posts}/>
        </Suspense>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const posts = await client.fetch(`
    *[_type == "post" ] {title, "name": author -> name, body, slug}
  `, { })
  return {
    props: {
      posts
    }
  }
}

export default PostsPage;
