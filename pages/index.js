import React from "react";
import { client } from "../lib/client";
import product from "../xili-sanity/schemas/product";
import {
  Footer,
  Cart,
  ooterBanner,
  HeroBaner,
  Layout,
  NavBar,
  Product,
  FooterBanner,
} from "../components";
import banner from "../xili-sanity/schemas/banner";

const Home = ({ products, bannerData }) => {
  console.log(bannerData);
  return (
    <div>
      <HeroBaner heroBaner={bannerData.length && bannerData[0]}/>
      <div className="products-heading">
        <h2>Articulo con mas ventas!</h2>
        <p>Los dulces mas ricos y enchilados de Irapuato</p>
      </div>
      <div className="products-container">
        {products?.map((prod) => {
          return <Product key={prod._id} product={prod} />;
        })}
      </div>
      <FooterBanner footerBanner={bannerData&& bannerData[0]}/>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
