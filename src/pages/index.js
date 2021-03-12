import Head from "next/head";
import Header from "../components/Header";
import HeroBanner from "../components/home/HeroBanner";
import ProductsHighligts from "../components/application-specifc/ProductsHighlight";
import Portifolio from "../components/application-specifc/Portiflio";
import Map from "../components/application-specifc/Map";
import { Grid, Container, makeStyles, Box } from "@material-ui/core";
import CommentaryNews from "../components/application-specifc/CommentaryNews";
import TypicalProducts from "../components/application-specifc/TypicalProducts";
import News from "../components/application-specifc/News";
import Review from "../components/application-specifc/Reviews";
import FindWhatYouNeed from "../components/application-specifc/FindWhatYouNeed";
import HomeButtons from "../components/home/HomeButtons";
import HomeTags from "../components/home/HomeTags";
import Footer from "../components/Footer";
import LastComments from "../components/application-specifc/LastComments";

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
          <Grid item xs={12} md={6} lg={3}>
            <Portifolio />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Map />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <CommentaryNews />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <LastComments />
          </Grid>
        </Grid>
      </Container>
      <TypicalProducts />
      <Container className={classes.portifoliContainer}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <News />
          </Grid>

          <Grid item xs={12} md={4}>
            <Review />
            <FindWhatYouNeed />
          </Grid>
        </Grid>
      </Container>

      <Grid container>
        <Grid item xs={12}>
          <HomeButtons />
        </Grid>
        <Grid item xs={12} className={classes.portifoliContainer}>
          <HomeTags />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
