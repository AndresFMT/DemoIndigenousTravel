import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Layout from "src/core/layouts/Layout";
import createOperator from "src/operators/mutations/createOperator";
import {
  OperatorForm,
  FORM_ERROR,
} from "src/operators/components/OperatorForm";

const NewOperatorPage = () => {
  const router = useRouter();
  const [createOperatorMutation] = useMutation(createOperator);

  return (
    <Layout title={"Create New Operator"}>
      <h1>Create New Operator</h1>

      <OperatorForm
        submitText="Create Operator"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateOperator}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const operator = await createOperatorMutation(values);
            await router.push(
              Routes.ShowOperatorPage({ operatorId: operator.id })
            );
          } catch (error: any) {
            console.error(error);
            return {
              [FORM_ERROR]: error.toString(),
            };
          }
        }}
      />

      <p>
        <Link href={Routes.OperatorsPage()}>
          <a>Operators</a>
        </Link>
      </p>
    </Layout>
  );
};

NewOperatorPage.authenticate = true;

export default NewOperatorPage;
