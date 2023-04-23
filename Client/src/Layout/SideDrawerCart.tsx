import React from "react";

// Next
import Link from "next/link";

// Material-UI
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";
import { Breakpoints } from "@mui/material";

// Icons
// import DeleteIcon from "@material-ui/icons/Delete";

// Hooks
// import useCalculateCartTotal from "@Hook/useCalculateCartTotal";

// Apollo State
import { useReactiveVar } from "@Apollo/client";
import { ui } from "@Apollo/state/ui/index";

// ========================================================================================================

type Anchor = "right";

const SideDrawerCart: React.FC = () => {
  const classes = useStyles();

  // GraphQL

  // Hook
  //   const { cartTotal } = useCalculateCartTotal(data?.getCart?.cart);

  const changeCart = () => {
    ui({ isCartOpen: false });
  };
  const cart = useReactiveVar(ui);

  //   if (loading) return <div>loading...</div>;

  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      <div className={classes.listProduct}>
        {/* {data?.getCart?.cart.map((item) => (
          <div key={item._id} className={classes.product}>
            <Link href={`/products/${item._id}`}>
              <img src={item.productImageUrl || "/images/unknownProduct.png"} width={100} height={100} alt="" />
            </Link>

            <div className={classes.information}>
              <Typography variant="body1">{item.name}</Typography>
              <Button
                disabled
                variant="outlined"
                className={classes.actionButton}
                onClick={() => console.log(item._id)}
              >
                -
              </Button>
              <Button disabled variant="outlined" className={classes.actionButton}>
                {1}
              </Button>
              <Button
                disabled
                variant="outlined"
                className={classes.actionButton}
                onClick={() => console.log(item._id)}
              >
                +
              </Button>

              <IconButton onClick={() => deleteProductCart(item._id)}>
                <DeleteIcon />
              </IconButton>

              <Typography variant="body2" color="secondary" className={classes.priceProduct}>
                {item.price}.-
              </Typography>
            </div>
          </div>
        ))} */}
      </div>
      <div>
        <div className={classes.amount}>
          <Typography variant="body1">Cart Total</Typography>
          <Typography variant="subtitle2" color="secondary">
            {/* {cartTotal}.- */}
            0.-
          </Typography>
        </div>

        <Divider />
        <Link href="/checkout">
          <Button variant="contained" size="large" color="primary" className={classes.checkout}>
            Checkout
          </Button>
        </Link>

        <Button
          disabled
          variant="outlined"
          size="large"
          color="primary"
          className={classes.clearCart}
          onClick={() => console.log("clear")}
        >
          Clear Cart
        </Button>

        <Divider />
      </div>
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={cart.isCartOpen} onClose={() => changeCart()}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideDrawerCart;

// =================================================================

const useStyles = makeStyles(() => ({
  list: {
    width: 380,
    overflow: "auto",
    overflowX: "hidden",
  },
  listProduct: {
    maxHeight: "75%",
    overflow: "auto",
  },
  product: {
    display: "flex",
    alignItems: "center",
    margin: "30px 20px",
  },
  information: {
    marginLeft: 20,
    width: "60%",
    position: "relative",
  },
  priceProduct: {
    position: "absolute",
    top: "42px",
    right: "-7px",
  },
  actionButton: {
    minWidth: "40px",
    marginTop: "10px",
    padding: 5,
  },
  media: {
    height: "110px",
    width: "110px",
  },
  amount: {
    margin: "50px 20px 10px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
  checkout: {
    margin: "20px 20px 10px 20px",
    width: "90%",
  },

  clearCart: {
    margin: "10px 20px 20px 20px",
    width: "90%",
  },
}));
