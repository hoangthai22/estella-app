import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { caculatorSale } from "../../../../constants/Caculator";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const { sale, productImg, productName, price, slug, category, id } = props.data;
  const history = useNavigate();
  const location = useLocation();

  const handleProductDeatail = () => {
    history(`${location.pathname}/${slug}_${id}`, { state: { product: props.data } });
  };
  return (
    <div className={`hot__product__item ${location.pathname !== "/" && "product__item__detail"}`} onClick={handleProductDeatail}>
      <div className={`hot__product__item__wrapper ${location.pathname !== "/" && "product__item__wrapper__detail"}`}>
        <div className="hot__product__item__sale__icon" style={{ display: sale > 0 ? "block" : "none" }}>
          <span>{sale}%</span>
        </div>
        <img className={`hot__product__item__img ${location.pathname !== "/" && "product__item__img__detail"}`} src={productImg} alt="" />
        <span className="hot__product__item__text">{productName}</span>
        <div className="hot__product__item__text-price__wrapper">
          <span className="hot__product__item__text-price__sale" style={{ display: sale > 0 ? "block" : "none" }}>
            {price + ".000 ₫"}
          </span>
          <span className="hot__product__item__text-price">{caculatorSale(sale, price) + ".000 ₫"}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
