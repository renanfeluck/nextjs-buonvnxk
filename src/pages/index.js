import Head from "next/head";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
    </>
  );
}
