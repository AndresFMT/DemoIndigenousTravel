import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getPost from "src/posts/queries/getPost";
import deletePost from "src/posts/mutations/deletePost";
import client from 'integrations/sanity.client';

export const Post = ({post})=> {
  // const router = useRouter();
  // const postId = useParam("postId", "number");

  // const [deletePostMutation] = useMutation(deletePost);
  // const [post] = useQuery(getPost, { id: postId });
  const {title = "missing title", slug, author, body} = post; 
  return (
    <>
      <Head>
        <title>Post {title}</title>
      </Head>

      <div>
        <h1>Post {title}</h1>
        <pre>{JSON.stringify(body, null, 2)}</pre>

        <Link href={Routes.EditPostPage({ slug: slug})}>
          <a>Edit</a>
        </Link>

      </div>
    </>
  );
};

const ShowPostPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.PostsPage()}>
          <a>Posts</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Post />
      </Suspense>
    </div>
  );
};

ShowPostPage.authenticate = true;
ShowPostPage.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({params: {slug }})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = ""} = context.params;
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {title, "name": author -> name, body, slug}
  `, { slug })
  return {
    props: {
      post
    }
  }
}

export default ShowPostPage;
