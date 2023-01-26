import { Suspense } from "react";
import { Routes } from "@blitzjs/next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@blitzjs/rpc";
import { useParam } from "@blitzjs/next";

import Layout from "src/core/layouts/Layout";
import getOperator from "src/operators/queries/getOperator";
import deleteOperator from "src/operators/mutations/deleteOperator";

export const Operator = () => {
  const router = useRouter();
  const operatorId = useParam("operatorId", "number");
  const [deleteOperatorMutation] = useMutation(deleteOperator);
  const [operator] = useQuery(getOperator, { id: operatorId });

  return (
    <>
      <Head>
        <title>Operator {operator.id}</title>
      </Head>

      <div>
        <h1>Operator {operator.id}</h1>
        <pre>{JSON.stringify(operator, null, 2)}</pre>

        <Link href={Routes.EditOperatorPage({ operatorId: operator.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteOperatorMutation({ id: operator.id });
              await router.push(Routes.OperatorsPage());
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

const ShowOperatorPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.OperatorsPage()}>
          <a>Operators</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Operator />
      </Suspense>
    </div>
  );
};

ShowOperatorPage.authenticate = true;
ShowOperatorPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ShowOperatorPage;
