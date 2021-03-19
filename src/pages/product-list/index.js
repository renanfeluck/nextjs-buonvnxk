import { Grid, Container, makeStyles, Box } from "@material-ui/core";
import BreadCrumb from "../../components/application-specifc/BreadCrumb";
import CategoryDetails from "../../components/application-specifc/CategoryDetails";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductHeroBanner from "../../components/product-list/ProductListHero";
import TypicalProducts from "../../components/application-specifc/TypicalProducts";
import ProductComments from "../../components/application-specifc/ProductComments";
import Map from "../../components/application-specifc/Map";
import Portifolio from "../../components/application-specifc/Portiflio";
import News from "../../components/application-specifc/News";
import CommentaryNews from "../../components/application-specifc/CommentaryNews";
import Review from "../../components/application-specifc/Reviews";
import FindWhatYouNeed from "../../components/application-specifc/FindWhatYouNeed";
import HomeButtons from "../../components/home/HomeButtons";
import HomeTags from "../../components/home/HomeTags";

const useStyles = makeStyles({
  portifoliContainer: {
    padding: 0,
  },
});

export default function ProductList() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <ProductHeroBanner />
      <BreadCrumb />
      <CategoryDetails />
      <TypicalProducts />
      <ProductComments />
      <Portifolio />
      <Map />
      <News onlyChia />
      <Review />
      <FindWhatYouNeed />
      <HomeButtons />
      <HomeTags />

      <Footer />
    </>
  );
}
