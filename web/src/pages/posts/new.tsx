import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import createPost from "src/posts/mutations/createPost";
import { PostForm, FORM_ERROR } from "src/posts/components/PostForm";

const NewPostPage = () => {
  const router = useRouter();
  const [createPostMutation] = useMutation(createPost);

  return (
    <Layout title={"Create New Post"}>
      <h1>Create New Post</h1>

      <PostForm
        submitText="Create Post"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreatePost}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const post = await createPostMutation(values);
            await router.push(Routes.ShowPostPage({ slug: post.id }));
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />

      <p>
        <Link href={Routes.PostsPage()}>
          <a>Posts</a>
        </Link>
      </p>
    </Layout>
  );
};

NewPostPage.authenticate = true;

export default NewPostPage;
