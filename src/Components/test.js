import React from "react";
import { useRef, useEffect } from "react";
import "../Styles/test.css";
import HorizontalSect from "./HorizontalSect";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";

export default function App() {
  const slider = useRef(null);
  const itemWrap = useRef(null);
  const pan = useRef(null);
  const countRefTranslateX = useRef(0);

  const handleOnRender = () => {
    pan.current.style.height = itemWrap.current.scrollWidth + "px";
  };

  const handleScroll = () => {
    if (window.scrollY <= pan.current.offsetTop ) {
      slider.current.style.position = "relative";
    }
    if (window.scrollY >= slider.current.offsetTop) {
      slider.current.style.position = "fixed";
      countRefTranslateX.current = window.scrollY - pan.current.offsetTop;
      itemWrap.current.style.transform = `translate3d(-${countRefTranslateX.current}px, 0, 0)`;
    }
  };

  useEffect(() => {
    handleOnRender();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <div className="App">
      
      
      <div ref={slider} className="slider">
        <div ref={itemWrap} className="item-wrap">
          <SectionOne className="item"/>
          <HorizontalSect className="item">
           
          </HorizontalSect>
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
        </div>
      </div>
      <div ref={pan} className="pan"></div>

      
      <div className="box bg-violet">Footer</div>
    </div>
  );
}
