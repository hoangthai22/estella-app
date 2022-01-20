import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { LOCALSTORAGE_NAME } from "../../../constants/Pages";
import "./CartList.scss";

const CartList = () => {
  const [listCart, setlistCart] = useState([]);
  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME));
    setlistCart(carts);
  }, []);

  return (
    <div className="cart__wrapper">
      <div className="cart__container">
        <div>
          <h1>Giỏ hàng</h1>
        </div>
        <div className="cart__title">
          <div className="cart__img">
            <span>Hình ảnh</span>
          </div>
          <div className="cart__name">
            <span>Tên sản phẩm</span>
          </div>
          <div className="cart__price">
            <span>Đơn giá</span>
          </div>
          <div className="cart__quantity">
            <span>Số lượng</span>
          </div>
          <div className="cart__total">
            <span>Tổng</span>
          </div>
          <div className="cart__delete">
            <span>Xóa</span>
          </div>
        </div>
        {listCart?.map((item) => {
          return (
            <div className="cart__item">
              <div className="cart__img">
                <img src={item.img} alt="" />
              </div>
              <div className="cart__name">
                <span>Tên sản phẩm</span>
              </div>
              <div className="cart__price">
                <span>Đơn giá</span>
              </div>
              <div className="cart__quantity">
                <span>Số lượng</span>
              </div>
              <div className="cart__total">
                <span>Tổng</span>
              </div>
              <div className="cart__delete">
                <span>Xóa</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartList;
