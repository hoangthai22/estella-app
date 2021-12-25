import React from "react";
import "./HeaderBot.scss";
const HeaderBot = (props) => {
  return (
    <div className="header__bot__wrapper">
      <div className="header__bot__container">
        <ul className="header__bot__menuList">
          <li className="header__bot__item">
            <span className="header__bot__item__text category__menu">DANH MỤC SẢN PHẨM</span>
            <ul className="sub__menu__list">
                <li className="sub__menu__category">Category 1</li>
                <li className="sub__menu__category">Category 2</li>
                <li className="sub__menu__category">Category 3</li>
                <li className="sub__menu__category">Category 4</li>
                <li className="sub__menu__category">Category 4</li>
                <li className="sub__menu__category">Category 4</li>
                <li className="sub__menu__category">Category 4</li>
            </ul>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text special">HELP ME CHOOSE</span>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text">kHUYẾN MÃI</span>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text">VỀ CHÚNG MÌNH</span>
          </li>
          <li className="header__bot__item">
            <span className="header__bot__item__text">CÂU HỎI THƯỞNG GẶP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBot;
