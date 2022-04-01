import Layout from "components/layout";
import Links from "components/links";

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function IndexPage() {
  return (
    <Layout>
      <Links />
    </Layout>
  );
}
