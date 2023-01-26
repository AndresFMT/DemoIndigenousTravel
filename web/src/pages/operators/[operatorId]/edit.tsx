import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getOperator from "src/operators/queries/getOperator";
import updateOperator from "src/operators/mutations/updateOperator";
import {
  OperatorForm,
  FORM_ERROR,
} from "src/operators/components/OperatorForm";

export const EditOperator = () => {
  const router = useRouter();
  const operatorId = useParam("operatorId", "number");
  const [operator, { setQueryData }] = useQuery(
    getOperator,
    { id: operatorId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  );
  const [updateOperatorMutation] = useMutation(updateOperator);

  return (
    <>
      <Head>
        <title>Edit Operator {operator.id}</title>
      </Head>

      <div>
        <h1>Edit Operator {operator.id}</h1>
        <pre>{JSON.stringify(operator, null, 2)}</pre>

        <OperatorForm
          submitText="Update Operator"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateOperator}
          initialValues={operator}
          onSubmit={async (values) => {
            try {
              const updated = await updateOperatorMutation({
                id: operator.id,
                ...values,
              });
              await setQueryData(updated);
              await router.push(
                Routes.ShowOperatorPage({ operatorId: updated.id })
              );
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

const EditOperatorPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditOperator />
      </Suspense>

      <p>
        <Link href={Routes.OperatorsPage()}>
          <a>Operators</a>
        </Link>
      </p>
    </div>
  );
};

EditOperatorPage.authenticate = true;
EditOperatorPage.getLayout = (page) => <Layout>{page}</Layout>;

export default EditOperatorPage;
