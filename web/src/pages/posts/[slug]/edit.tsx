import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getPost from "src/posts/queries/getPost";
import updatePost from "src/posts/mutations/updatePost";
import { PostForm, FORM_ERROR } from "src/posts/components/PostForm";

export const EditPost = () => {
  const router = useRouter();
  const postSlug = useParam("postSlug", "string");
  const [post, { setQueryData }] = useQuery(
    getPost,
    { slug: postSlug},
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updatePostMutation] = useMutation(updatePost);

  return (
    <>
      <Head>
        <title>Edit Post {post.id}</title>
      </Head>

      <div>
        <h1>Edit Post {post.id}</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>

        <PostForm
          submitText="Update Post"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdatePost}
          initialValues={post}
          onSubmit={async (values) => {
            try {
              const updated = await updatePostMutation({
                id: post.id,
                ...values,
              });
              await setQueryData(updated);
              await router.push(Routes.ShowPostPage({ slug: updated.id }));
            } catch (error: any) {
              console.error(error);
              return {
                [FORM_ERROR]: error.toString(),
              };
            }
          }}
        />
      </div>
    </>
  );
};

const EditPostPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditPost />
      </Suspense>

      <p>
        <Link href={Routes.PostsPage()}>
          <a>Posts</a>
        </Link>
      </p>
    </div>
  );
};

EditPostPage.authenticate = true;
EditPostPage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditPostPage;
