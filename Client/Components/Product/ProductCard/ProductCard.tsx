import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Material-UI
import { Box, Button, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";

// Icons
import AddIcon from "@material-ui/icons/Add";

// ========================================================================================================

type IProduct = {
  product: {
    id?: string;
    name?: string;
    price?: number;
    ingredients?: [string];
    publishedAt?: Date;
    image: {
      url?: string;
      id?: string;
      __typename?: string;
    };
    __typename?: string;
  };
};

const Product: React.FC<IProduct> = ({ product }) => {
  const classes = useStyles();

  // Events
  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Eatery",
          url: "https://gatsbys-restaurant.netlify.app",
          text: "Eatery",
        });
      }
      // else {
      //   await dispatch(shareMovie({ id: movieId, movie: movieName }));
      //   await dispatch(openShareDialog());
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.area}>
        <Link href="/products/[id]">
          <Image src={product?.image.url} alt={product?.name} height="222" width="315" />
        </Link>
      </CardActionArea>

      <CardContent className={classes.content}>
        <div className={classes.titlePrice}>
          <Typography variant="h6" component="h2" className={classes.title}>
            {product?.name}
          </Typography>

          <Typography variant="h6" color="secondary" className={classes.price}>
            {product?.price}.-
          </Typography>
        </div>

        <Box style={{ maxWidth: 280, height: "60px", wordWrap: "break-word" }}>
          {/* <Typography variant="body2">{product?.ingredients.split("", 110).concat("...")}</Typography> */}
          {/* <Typography variant="body2">{product?.ingredients}</Typography> */}
        </Box>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button size="small" title="Recommend" color="secondary" variant="outlined" onClick={() => shareContent()}>
          Recommend
        </Button>
        <Button
          size="small"
          title="Add to cart"
          color="secondary"
          variant="outlined"
          startIcon={<AddIcon fontSize="small" />}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

// =================================================================

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "20px 20px 20px 0px",

    width: "315px",
    height: "415px",

    borderRadius: 10,
  },
  area: {
    display: "flex",
    padding: "0px",
    backgroundColor: "#ffffff",
  },
  content: {
    padding: "20px",
    width: "280px",
  },
  titlePrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    width: "100%",
    minHeight: "45px",
    fontSize: "1.15rem",
  },
  price: {
    fontSize: "1.15rem",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  ratingReview: {
    margin: "0px 0px 0px 3px",
    fontSize: "0.85rem",
  },
  actions: {
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
});
