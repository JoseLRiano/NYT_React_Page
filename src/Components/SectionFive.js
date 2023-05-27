import React from 'react';
import '../Styles/SectionFive.css';
import { useInView } from 'react-intersection-observer';

function SectionFive() {
  const {ref: myRef, inView: myInView} = useInView();

  return (
    <section ref={myRef} id="Sec5">
    <div className={`${myInView ? 'opacityIn' : 'opacityOut'} css-7e4pe6`} id="HorizSec6Content">
      <div className="css-1o5usgc"></div>
      <div className="css-1yhpxj0">
        <img className="css-xs6s3z" src="https://mwcm.nyt.com/dam/LP/brand/life/images/10_NFA_LP_Video_Chewing.gif" alt="Skull" />
        <a className="css-yjfjnv" href="https://www.nytimes.com/2022/08/17/science/chewing-human-evolution.html" target="_blank" rel="noreferrer">
          <h5 className="css-qioh90">Science</h5><h3 className="css-1xm9qaa">How Chewing Shaped Human Evolution</h3>
          <p className="css-8w0z1x">By Kate Golembiewski<br/><span className="css-lixfoc">Published Aug. 17, 2022</span></p>
          </a>
          </div>
    </div>
    </section>
  )
}

export default SectionFive;