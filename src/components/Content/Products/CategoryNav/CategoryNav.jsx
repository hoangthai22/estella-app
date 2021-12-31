import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { Categorys, productList } from "../../../../constants/DataMock";
import { AppContext } from "../../../../contexts/AppProvider";
import "./CategoryNav.scss";

const CategoryNav = (props) => {
  const { categoryList, setListProductsCurrent } = useContext(AppContext);
  const location = useLocation();
  const history = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(location?.pathname?.slice(1));

  const handleSubmitCategory = (id, slug, categoryName) => {
    history("/" + slug, { state: { id, categoryName } });
    setCurrentCategory(id);
    let productsCurrent = productList.filter((item) => item.category.id === id);
    setListProductsCurrent(productsCurrent);
  };

  useEffect(() => {
    setCurrentCategory(location?.pathname?.slice(1));
  }, [location]); 

  return (
    <div className="category__nav__wrapper">
      <div className="category__nav__title">
        <span>Danh mục sản phẩm</span>
      </div>
      {categoryList.map((item) => {
        return (
          <div key={item.id} className={`category__nav__item ${currentCategory === item.slug && "active"}`} onClick={() => handleSubmitCategory(item.id, item.slug, item.categoryName)}>
            <span>{item.categoryName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNav;
