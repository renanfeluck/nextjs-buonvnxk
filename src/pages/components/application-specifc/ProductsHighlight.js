import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import FeatureProductCard from "./FeatureProductCard";
import { products } from "../../../mocks/featureProducts";

const useStyles = makeStyles({
  title: {
    fontSize: "20px",
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
  container: {
    background: "#EBEBEB",
    justifyContent: "space-around",
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
      <Typography className={classes.title}> HÀNG VNXK NỔI BẬT </Typography>
      <div className={classes.featuredProductsBox}>
        <Grid container>
          {products.map((product) => (
            <Grid className={classes.featuredProductCard} item sm={4} xs={12}>
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
