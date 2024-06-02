import { useContext, useState } from "react";
import { Context } from "../../utils/GlobalContext";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { data } from "../../utils/data";

import HorseFrame from "../../assets/horse-frame.png";
import PhotoFrame from "../../assets/photo-frame.jpg";
import AnniversaryFrame from "../../assets/anniversary-frame.jpg";
import Gift from "../../assets/gift.jpg";
import WishCard from "../../assets/wish-cards.jpg";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const product = data[id - 1];

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  // if (!data) return;
  // const product = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.image} className="max-h-[600px] object-contain" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(product, quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              {/* <span className="text-bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span> */}
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
