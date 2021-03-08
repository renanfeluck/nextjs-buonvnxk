import Head from "next/head";
import Header from "./components/Header";
import HeroBanner from "./components/home/HeroBanner";
import ProductsHighligts from "./components/application-specifc/ProductsHighlight";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductsHighligts />
    </>
  );
}
