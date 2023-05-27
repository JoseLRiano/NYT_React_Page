import React from 'react';
import "../Styles/SectionTwo.css";
import { useInView } from 'react-intersection-observer';

function SectionTwo() {
    const { ref: myRef, inView: myInView } = useInView();
    const { ref: secondRef, inView: secondInView } = useInView();
  return (
    <section id="main-Section2" className={`${myInView ? 'opacityIn' :''} ${!secondInView ? 'opacityOut' :''} `}>
    <div id="test-div-section2" ref={secondRef}></div>
        <div id="SqueakLeft" >
            <img className="css-g0apr0" src="https://mwcm.nyt.com/dam/LP/brand/life/images/bball_layup.png" id="SqueakingImg1" alt="Blurry Basketball Layup"></img>
            <a className = "css-13o10xn" 
            id = "SqueakingInfo"
            rel = "noreferrer"
            href = "https://www.nytimes.com/2017/03/17/sports/ncaabasketball/squeaky-shoes-hardwood.html"
            target = "_blank" > <h5 className = "css-qioh90" > Sports </h5>
            <h3 className="css-1xm9qaa">Why Are Basketball Games So Squeaky? Consider the Spiny<br/> Lobster</h3> 
            <p className = "css-8w0z1x" > By John Branch <br /> <span className = "css-lixfoc" > March 17, 2017 </span></p> </a>
        </div>
        <div ref={myRef} id="SqueakRight" >
            <img  className="css-1vesvfr" src="https://mwcm.nyt.com/dam/LP/brand/life/images/bball_squeaking.png" id="SqueakingImg2" alt="Basketball Court Squeaking"></img>
        </div>
    </section>
  )
}

export default SectionTwo;