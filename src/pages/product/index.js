import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductHero from "../../components/product/ProductHero";
import BreadCrumb from "../../components/application-specifc/BreadCrumb";
import ProductBox from "../../components/product/ProductBox";
import ProductDescription from "../../components/product/ProductDescription";
import ProductFeature from "../../components/product/ProductFeature";
import ProductNote from "../../components/product/ProductNote";
import ProductStats from "../../components/product/ProductStats";
import ProductForm from "../../components/product/ProductForm";
import News from "../../components/application-specifc/News";
import Reviews from "../../components/application-specifc/Reviews";
import FindWhatYouNeed from "../../components/application-specifc/FindWhatYouNeed";
import HomeTags from "../../components/home/HomeTags";
import HomeButtons from "../../components/home/HomeButtons";
import Portifolio from "../../components/application-specifc/Portiflio";
import ProductComments from "../../components/application-specifc/ProductComments";
import Map from "../../components/application-specifc/Map";

const Product = () => {
  return (
    <>
      <Header />
      <ProductHero />
      <BreadCrumb />
      <ProductBox />
      <ProductDescription />
      <ProductFeature />
      <ProductNote />
      <ProductStats />
      <Map />
      <ProductForm />
      <News onlyChia />
      <Portifolio />
      <ProductFeature />
      <ProductComments />
      <News onlyChia />
      <Reviews />
      <FindWhatYouNeed />
      <HomeButtons />
      <HomeTags />
      <Footer />
    </>
  );
};

export default Product;
