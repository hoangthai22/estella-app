import { faCaretLeft, faCaretRight, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { caculatorSale } from "../../../../constants/Caculator";
import "./ProductInfo.scss";

const ProductInfo = (props) => {
  const { productName, price, size, totalSize, sale } = props.data;
  const [indexActive, setIndexActive] = useState(0);
  const [colorActive, setColorActive] = useState(0);
  const [countQuantity, setcountQuantity] = useState(1);
  const [sizeListCurrent, setSizeListCurrent] = useState([]);
  const [isValidForm, setisValidForm] = useState(true);

  useEffect(() => {
    setSizeListCurrent(totalSize);
  }, [totalSize]);

  useEffect(() => {
    props.callbackFunc(size ? size[0]?.imgTitle : "");
  }, []);

  const handleChangeIndexSize = (size) => {
    if (size === indexActive) {
      setIndexActive(0);
    } else {
      setIndexActive(size);
      compareSizeWithColor(size);
    }
  };

  const handleChangeColor = (color) => {
    let imgUrl = "";
    let sizeList = [];
    if (color === colorActive) {
      setColorActive("");
      setSizeListCurrent(totalSize);
    } else {
      setTimeout(() => {
        size?.map((item) => {
          if (item.color === color) {
            sizeList = item.listSize;
            imgUrl = item.imgTitle;
            return true;
          }
        });
        props.callbackFunc(imgUrl);
        setSizeListCurrent(sizeList);
        setColorActive(color);
      }, 10);
    }
  };

  const compareSizeWithColor = () => {
    let result = [];
    size?.map((size) => {
      size?.listSize?.map((item) => {
        if (item?.sizeName === indexActive) {
          if (item?.quantity === 0) {
            result = [...result, true];
          } else {
            result = [...result, false];
          }
        }
      });
    });
    return result;
  };

  const getCountQuantity = () => {
    let count = 0;
    sizeListCurrent?.map((item) => {
      if (item.sizeName === indexActive) {
        count = item.quantity;
      }
    });
    return count;
  };

  function handleChange(e) {
    const { value } = e.target;
    if (value > getCountQuantity()) {
      setcountQuantity(parseInt(getCountQuantity()));
    } else if (value < 1) {
      setcountQuantity(parseInt(1));
    } else setcountQuantity(parseInt(value));
  }

  const handleAddCart = () => {
    let isValid = true;
    if (indexActive <= 0) {
      isValid = false;
      setisValidForm(isValid);
    }
    if (colorActive <= 0) {
      isValid = false;
      setisValidForm(isValid);
    }
    if (isValid) {
      setisValidForm(isValid);
      
    }
  };
  const handleChangeQuantity = () => {
    if (countQuantity >= getCountQuantity()) {
      setcountQuantity(parseInt(getCountQuantity()));
      return;
    }
    countQuantity > 0 && setcountQuantity(countQuantity + 1);
  };

  return (
    <div className="product__info__wrapper">
      <div className="product__info__container">
        <h1 className="product__info__title">{productName}</h1>
        <div className="product__info__price__wrapper">
          <span className="product__info__price__sale" style={{ display: sale > 0 ? "block" : "none" }}>
            {price + ".000 ₫"}
          </span>
          <span className="product__info__price">{caculatorSale(sale, price) + ".000 ₫"}</span>
          <div className="product__info__price__sale__percent" style={{ display: sale > 0 ? "block" : "none" }}>
            <span>{sale}% Giảm</span>
          </div>
        </div>

        <div className="product__info__size__wrapper">
          <span className="product__info__size__title">Kích cỡ</span>
          <div className="product__info__size">
            {sizeListCurrent?.map((item) => {
              return (
                <button
                  onClick={() => handleChangeIndexSize(item.sizeName ? item.sizeName : item)}
                  className={`product__info__size__btn${(item.sizeName ? item.sizeName : item) === indexActive ? " active" : ""}`}
                  key={item.sizeName ? item.sizeName : item}
                  disabled={item.quantity === 0}
                >
                  {item.sizeName ? item.sizeName : item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="product__info__color__wrapper">
          <span className="product__info__size__title">
            Màu sắc: <span>{colorActive}</span>
          </span>
          <div className="product__info__color">
            {size?.map((item, ind) => {
              return (
                <img
                  alt="imgTitle"
                  src={item.imgTitle}
                  onClick={() => !compareSizeWithColor()[ind] && handleChangeColor(item.color)}
                  className={`product__info__color__btn ${!compareSizeWithColor()[ind] && (item.color === colorActive ? " active-btn-color" : "")} ${
                    compareSizeWithColor()[ind] ? "sold-btn-color" : ""
                  }`}
                  key={item.color}
                />
              );
            })}
          </div>
        </div>
        <div className="product__info__quantity">
          <div>
            <span className="product__info__size__title">Số lượng</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 10 }}>
            <div className="product__info__quantity__wrapper">
              <FontAwesomeIcon
                className="product__info__quantity__btn"
                icon={faCaretLeft}
                onClick={() => {
                  countQuantity > 1 && setcountQuantity(countQuantity - 1);
                }}
              />
              <input className="product__info__quantity__input" name="quantity" type="number" value={countQuantity} onChange={handleChange} />
              <FontAwesomeIcon className="product__info__quantity__btn" icon={faCaretRight} onClick={handleChangeQuantity} />
            </div>
            <div className="product__info__quantity__text">
              <span>{getCountQuantity()} sản phẩm có sẵn</span>
            </div>
          </div>
        </div>
        <div className="product__info__error" style={{display: isValidForm ? "none" : "block"}}>
          <span>Vui lòng chọn phân loại hàng</span>
        </div>
        <div className="product__info__btn-cart__wrapper">
          <button onClick={handleAddCart}>
            <FontAwesomeIcon icon={faCartPlus} style={{ marginRight: 5 }} /> Thêm Vào Giỏ Hàng
          </button>
          <button onClick={handleAddCart}>Mua Ngay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;