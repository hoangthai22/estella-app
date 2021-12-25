import React from "react";
import "./HeaderTop.scss";
import "./../../../pages/main.scss";
import { ReactComponent as IconCart } from "./../../../assests/img/iconCart.svg";
import { ReactComponent as IconSearch } from "./../../../assests/img/iconsearch.svg";

const HeaderTop = (props) => {
  return (
    <div className="header__top__wrapper">
      <div className=""></div>
      <div className="header__top__content">
        <div className="header__top__content__search">
          <input className="header__top__content__search__input"></input>
          <IconSearch className="header__top__content__search__icon"/>
        </div>
        <div className="header__top__content__cart">
          <IconCart className="header__top__content__cart__icon" />
          <span>Giỏ hàng (0)</span>
        </div>
      </div>
      <div className="header__top__content"></div>
    </div>
  );
};

export default HeaderTop;
