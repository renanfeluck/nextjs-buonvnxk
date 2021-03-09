import Head from "next/head";
import Header from "./components/Header";
import HeroBanner from "./components/home/HeroBanner";
import ProductsHighligts from "./components/application-specifc/ProductsHighlight";
import Portifolio from "./components/application-specifc/Portiflio";
import Map from "./components/application-specifc/Map";
import { Grid } from "@material-ui/core";
import CommentaryNews from "./components/application-specifc/CommentaryNews";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductsHighligts />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Portifolio />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
      </Grid>
      <CommentaryNews />
    </>
  );
}
