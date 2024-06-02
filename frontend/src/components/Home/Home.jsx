import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { Context } from "../../utils/GlobalContext";
import { data } from "../../utils/data";

const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setProducts(data);
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
