import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FeatureProductCard from "./FeatureProductCard";
import { products } from "../../mocks/featureProducts";
import Title from "../design/Title";

const useStyles = makeStyles({
  backgroundBox: {
    background: "#EBEBEB",
  },
  title: {
    fontSize: "20px",
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
  container: {
    background: "#EBEBEB",
    justifyContent: "space-around",
    paddingTop: "26px",
  },
  featuredProductsBox: {},
  featuredProductCard: {
    marginBottom: "8px",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
  },
});

const ProductsHighligts = () => {
  const classes = useStyles();
  console.log("products", products);
  return (
    <Container className={classes.container}>
      <Title title="HÀNG VNXK NỔI BẬT" black />
      <div className={classes.featuredProductsBox}>
        <Grid container>
          {products.map((product, index) => (
            <Grid
              key={index}
              className={classes.featuredProductCard}
              item
              sm={4}
              xs={12}
            >
              <FeatureProductCard
                image1={product.image1}
                image2={product.image2}
                title={product.title}
                code={product.code}
                description={product.description}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default ProductsHighligts;
