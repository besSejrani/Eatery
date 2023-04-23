import React from "react";

// Material-UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";
import { Breakpoints } from "@mui/material";

// Components
import ProductCard from "@Components/Product/ProductCard/ProductCard";

//===================================================================================

const Meals = ({ meals }) => {
  return (
    <Container>
      <Typography variant="h3" sx={{ color: "text.primary" }}>
        Kebab
      </Typography>
      <Box style={{ display: "flex" }}>
        {meals?.kebabs?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </Box>

      <Typography variant="h3" sx={{ color: "text.primary" }}>
        Burgers
      </Typography>
      <Box style={{ display: "flex" }}>
        {meals?.burgers?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </Box>

      <Typography variant="h3" sx={{ color: "text.primary" }}>
        Pizzas
      </Typography>

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
