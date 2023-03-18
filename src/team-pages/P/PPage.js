import "./styles/css/App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// styles
import "./styles/css/bootstrap.min.css";
import "./styles/css/now-ui-kit.css";
import "./styles/demo/demo.css";
import "./styles/css/scroll.css";

// import js
import IndexHeader from "./components/components/Headers/IndexHeader";
import IndexNavbar from "./components/components/Navbars/IndexNavbar";
import DarkFooter from "./components/components/Footers/DarkFooter";

// sections for this page
import Images from "./components/views/index-sections/Images";
import BasicElements from "./components/views/index-sections/BasicElements";
import Tabs from "./components/views/index-sections/Tabs";
import Javascript from "./components/views/index-sections/Javascript";
import Carousel from "./components/views/index-sections/Carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));

function PPage() {
  const [showScroll, setShowScroll] = useState(false);

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper" style={{ position: "relative" }}>
        <IndexHeader />
        <div className="main">
          <BasicElements />
          <Images />
          <Carousel />
          <Tabs />
          <Javascript />
        </div>
        <div
          className="scroll-to-top"
          style={{
            display: showScroll ? "flex" : "none",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
          }}
          onClick={scrollTop}
        >
          <i className="now-ui-icons arrows-1_minimal-up"></i>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default PPage;
