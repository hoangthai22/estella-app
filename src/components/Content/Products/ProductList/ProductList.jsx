import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { productList } from "../../../../constants/DataMock";
import { AppContext } from "../../../../contexts/AppProvider";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";

const ProductList = () => {
  const { listProductsCurrent, setListProductsCurrent } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    let productsCurrent = productList.filter((item) => item.category.slug === location?.pathname?.slice(1));
    setListProductsCurrent(productsCurrent);
  }, [location, setListProductsCurrent]);

  return (
    <div className="productList__wrapper">
      <div className="productList__container">
        {listProductsCurrent.map((item) => {
          return <ProductItem data={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default ProductList;
