import React from "react";
import Sliders from "../components/Content/Slider/Slider";
import HeaderBot from "../components/Header/Bottom/HeaderBot";
import HeaderTop from "../components/Header/Top/HeaderTop";
import "./main.scss";

function HomePage() {
  //   const history = useHistory();

  return (
    <div>
      <div className="header">
        <HeaderTop />
        <HeaderBot />
      </div>
      <div className="content">
        <Sliders/>
      </div>
    </div>
  );
}

export default HomePage;
