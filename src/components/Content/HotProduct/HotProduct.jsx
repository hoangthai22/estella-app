import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { caculatorSale } from "../../../constants/Caculator";
import "./HotProduct.scss";
const productList = [
  {
    productName: "Áo khoát đà lạt Áo khoát đà lạt",
    productImg:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/245912367_2775055286126144_4784325153263455317_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=SLsUG5oTgNcAX_DSgnu&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT_xMpnNMU6m92ancogYDJQ9Oo1_xIRg_zIvCtKGho-XNA&oe=61CC40E9",
    price: 300.0,
    sale: 15,
    id: 1,
  },
  {
    productName: "Áo khoát đà lạt Áo khoát đà lạt",
    productImg:
      "https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/245841258_2775031302795209_6718433759879970621_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=22xzFx9s1r8AX_qOg99&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT_T2lvZlG54ds1gohxpqOUkuepp5z2gDsR1GdaB3UmfzQ&oe=61CDBCDA",
    price: 100.0,
    sale: 20,
    id: 1,
  },
  {
    productName: "Áo khoát đà lạt Áo khoát đà lạt",
    productImg:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/246120710_2774951452803194_5096876050326077778_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=ywg4un7KdpsAX-qG1bN&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8beW8BVv0YrkpxVeCmIf8xOyHIQ0vxfmLmTEbzS2B9WQ&oe=61CC500D",
    price: 150.0,
    sale: 0,
    id: 1,
  },
  {
    productName: "Áo khoát đà lạt Áo khoát đà lạt",
    productImg:
      "https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/245977579_2774753026156370_4499363827339358393_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0debeb&_nc_ohc=vGxiyPYZ_FYAX9OM5XH&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT8U4oLo0GAxtvn_x6y3aBg0sZrtW-bASPE0VI-F6_h4Hg&oe=61CC2930",
    price: 200.0,
    sale: 15,
    id: 1,
  },
  {
    productName: "Áo khoát đà lạt Áo khoát đà lạt",
    productImg:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/245439293_2774752889489717_993608571578656781_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=VJHGxH-Y8V0AX9ea4lA&_nc_ht=scontent.fsgn5-10.fna&oh=00_AT-wzLuTzcadSyfyYqHRULnnLo4rHs03jA2Kye5tU_oATA&oe=61CD3B06",
    price: 120.0,
    sale: 0,
    id: 1,
  },
];
const HotProduct = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    className: "slider__container",
    lazyLoad: true,
    pauseOnFocus: true,
  };

  useEffect(() => {
    setProducts(productList);
  }, [products]);

  return (
    <div className="hot__product__wrapper">
      <Slider {...settings}>
        {products.map((item) => {
          return (
            <div className="hot__product__item">
              <div className="hot__product__item__wrapper">
                <div className="hot__product__item__sale__icon" style={{ display: item.sale > 0 ? "block" : "none" }}>
                  <span>15%</span>
                </div>
                <img className="hot__product__item__img" src={item.productImg} alt="" />
                <span className="hot__product__item__text">{item.productName}</span>
                <div className="hot__product__item__text-price__wrapper">
                  <span className="hot__product__item__text-price__sale" style={{ display: item.sale > 0 ? "block" : "none" }}>
                    {item.price + ",000"}
                  </span>
                  <span className="hot__product__item__text-price">{caculatorSale(item.sale, item.price) + ",000"}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HotProduct;
