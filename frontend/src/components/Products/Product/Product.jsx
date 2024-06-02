import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
import HorseFrame from "../../../assets/horse-frame.png";
import PhotoFrame from "../../../assets/photo-frame.jpg";
import AnniversaryFrame from "../../../assets/anniversary-frame.jpg";
import Gift from "../../../assets/gift.jpg";
import WishCard from "../../../assets/wish-cards.jpg";

const Product = ({ title, price, id, image }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={image} />
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price">&#8377;{price}</span>
      </div>
    </div>
  );
};

export default Product;
