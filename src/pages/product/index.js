import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductHero from "../../components/product/ProductHero";
import BreadCrumb from "../../components/application-specifc/BreadCrumb";
import ProductBox from "../../components/product/ProductBox";
import ProductDescription from "../../components/product/ProductDescription";

const Product = () => {
  return (
    <>
      <Header />
      <ProductHero />
      <BreadCrumb />
      <ProductBox />
      <ProductDescription />
      <Footer />
    </>
  );
};

export default Product;
