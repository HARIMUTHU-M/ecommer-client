import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css"

const Shop = () => {
  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1>Ecommer</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, idx) => (
          <Product key={idx} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
