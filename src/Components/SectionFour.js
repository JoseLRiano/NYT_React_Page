import React from 'react'
import '../Styles/SectionFour.css';
import { useInView } from 'react-intersection-observer';

function SectionFour() {

  const {ref: firstRef , inView: firstView } = useInView();
  const {ref: secondRef , inView: secondView } = useInView();

  return (
    <section id="HorizSec4">
        <div className="HorizSecFour">
            <div id="HorizSec5Content" className={`${(firstView) && 'opacityIn'} ${(!secondView) && 'opacityOut'}`}>
                <div  className="css-gtw0nl"></div>
                <div className="css-1o5usgc">
                <div className="css-6s0y3v">
                <img className="css-1xiiuye" src="https://mwcm.nyt.com/dam/LP/brand/life/images/08_NFA_LP_Video_Running.gif" alt="Wellness One" />
                <a ref={firstRef} className="css-1txb5n8" href="https://www.nytimes.com/2021/02/10/well/move/running-body-evolution.html" target="_blank" rel="noreferrer">
                <h5 ref={secondRef} className="css-qioh90">Wellness</h5><h3 className="css-1xm9qaa">Running Is a Total Body Affair</h3>
                <p className="css-8w0z1x">By Gretchen Reynolds<br />
                <span className="css-lixfoc">Published Feb. 10, 2021</span></p>
                </a>
                </div>
                <div className="css-1lnnpj8">
                <img className="css-c0lj11" src="https://mwcm.nyt.com/dam/LP/brand/life/images/09_NFA_LP_Video_Human_Evolution.gif" alt="Ancient Runner" />
                </div></div>
            </div>
        </div>

    </section>
  )
}

export default SectionFour;