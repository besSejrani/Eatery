import React from "react";

// Material-UI
import { Container, Box, Typography } from "@material-ui/core";

// Components
import ProductCard from "@Components/Product/ProductCard/ProductCard";

//===================================================================================

const Meals = ({ meals }) => {
  return (
    <Container>
      <Typography variant="h3">Kebab</Typography>
      <Box style={{ display: "flex" }}>
        {meals?.kebabs?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </Box>

      <Typography variant="h3">Burgers</Typography>
      <Box style={{ display: "flex" }}>
        {meals?.burgers?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </Box>

      <Typography variant="h3">Pizzas</Typography>

      <Box style={{ display: "flex" }}>
        {meals?.pizzas?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </Box>
    </Container>
  );
};

export default Meals;

//===================================================================================
