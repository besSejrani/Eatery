// Apollo
import { InMemoryCache, ApolloClient } from "@apollo/client";

// SSR
import { withApollo } from "next-apollo";

// State
import { ui } from "../Apollo/state/ui";
// ========================================================================================================
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        ui: {
          read() {
            return ui();
          },
        },
      },
    },
  },
});

// Docker
let uri;
if (typeof window !== "undefined" && process.env.NODE_ENV == "development") {
  uri = process.env.NEXT_PUBLIC_GRAPH_CMS_CONTENT_API;
} else {
  uri = process.env.NEXT_PUBLIC_DOCKER || process.env.NEXT_PUBLIC_GRAPH_CMS_CONTENT_API;
}

export const apolloClient = new ApolloClient({
  uri,
  cache,
  ssrMode: true,
});
export default withApollo(apolloClient);
