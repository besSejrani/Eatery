import React from "react";

//Components
import Meals from "@Components/Meals/Meals";

// GraphQL
import { useGetMealsQuery } from "@Graphql/graphql-hooks";

// Apollo
import withApollo from "../Apollo/ssr";

//===================================================================================

const Home = () => {
  // GraphQL
  const { data, loading } = useGetMealsQuery();
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Meals meals={data} />;
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
