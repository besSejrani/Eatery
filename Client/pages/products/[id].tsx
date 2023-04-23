import React from "react";

import { useRouter } from "next/router";

//===================================================================================

const Product = () => {
  // Route
  const router = useRouter();
  const { query } = router;

  return <div>{query.id}</div>;
};

export default Product;
