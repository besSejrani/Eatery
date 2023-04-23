// Styles
import "../App/index.css";

//Next
import { AppProps } from "next/app";

// Layout
import Layout from "../Layout/index";

// SSR
import withApollo from "@Apollo/ssr";

//===================================================================================

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
//@ts-ignore
export default withApollo({ ssr: true })(App);
