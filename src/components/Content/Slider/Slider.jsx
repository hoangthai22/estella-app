import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="slider__img" src="https://storage.googleapis.com/cdn.nhanh.vn/store/22767/bn/Screen_Shot_2021_12_08_at_7_42_37_PM.png" alt="" />
        </div>
        <div>
          <img className="slider__img" src="https://storage.googleapis.com/cdn.nhanh.vn/store/22767/bn/1fcea151d8de13804acf.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
