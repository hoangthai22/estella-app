import React from "react";
import HelpMeChoose from "../components/Content/HelpMeChoose/HelpMeChoose";
import HotProduct from "../components/Content/HotProduct/HotProduct";
import ListCategory from "../components/Content/ListCategory/ListCategory";
import Policy from "../components/Content/Policy/Policy";
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
        <ListCategory/>
        <HelpMeChoose/>
        <Policy/>
        <HotProduct/>
      </div>
    </div>
  );
}

export default HomePage;
