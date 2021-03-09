import Head from "next/head";
import Header from "./components/Header";
import HeroBanner from "./components/home/HeroBanner";
import ProductsHighligts from "./components/application-specifc/ProductsHighlight";
import Portifolio from "./components/application-specifc/Portiflio";
import Map from "./components/application-specifc/Map";
import { Grid, Container, makeStyles } from "@material-ui/core";
import CommentaryNews from "./components/application-specifc/CommentaryNews";
import TypicalProducts from "./components/application-specifc/TypicalProducts";

const useStyles = makeStyles({
  portifoliContainer: {
    padding: 0,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductsHighligts />
      <Container className={classes.portifoliContainer}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Portifolio />
          </Grid>
          <Grid item xs={12} md={6}>
            <Map />
          </Grid>
        </Grid>
      </Container>
      <CommentaryNews />
      <TypicalProducts />
    </>
  );
}
