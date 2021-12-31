import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import HelpMeChoose from "../components/Content/Home/HelpMeChoose/HelpMeChoose";
import ProductDetail from "../components/Content/Products/ProductDetail/ProductDetail";
import ProductInfo from "../components/Content/Products/ProductInfo/ProductInfo";
import { productList } from "../constants/DataMock";
import { CATEGORY_PAGE, PRODUCT_DETAIL } from "../constants/Pages";
import { AppContext } from "../contexts/AppProvider";
import "./main.scss";

function ProductDetailPage(props) {
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    props.callbackFunc(CATEGORY_PAGE);
    setCurrentPage(PRODUCT_DETAIL);
  });

  useEffect(() => {
    if (location?.state) {
      let newProducts = location.state.product;
      newProducts.listImgDetail = [newProducts.productImg, ...location.state.product.listImgDetail];
      setProduct(newProducts);
    } else {
      let slugProduct = location?.pathname?.slice(1).split("/")[1];
      productList.map((item) => {
        if (item.slug === slugProduct) {
          setProduct(item);
          return true;
        }
      });
    }
  }, [location.state, location?.pathname]);

  const [imgCurrent, setImgCurrent] = useState("");

  const changeCurrentImg = (childData) => {
    setImgCurrent(childData);
  };

  return (
    <div className="product__detail__content">
      <div className="product__detail__container">
        <ProductDetail data={product} imgUrl={imgCurrent} />
        <ProductInfo data={product} callbackFunc={changeCurrentImg} />
      </div>
      <HelpMeChoose />
    </div>
  );
}

export default ProductDetailPage;
