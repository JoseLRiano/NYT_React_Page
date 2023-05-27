import React from 'react';
import '../Styles/SectionSeven.css';
import { useInView } from 'react-intersection-observer';


function SectionSeven() {
  const { ref: myRef, inView: myInView} = useInView();
  return (
    <section id="Sec7">
      <div class={`${myInView ? 'opacityIn' : 'opacityOut'} css-f3l07n`} id="HorizSec8">
        <div class="css-1arp4xr" id="StreetMid" ></div>
        <a id="StreetMidInfo" class="css-1su5h8z" href="https://www.nytimes.com/2003/01/26/nyregion/out-damned-spot.html" target="_blank" rel="noreferrer" >
          <h5 class="css-qioh90">New York</h5>
          <h3 class="css-1xm9qaa">Out, Damned Spot</h3>
          <p class="css-8w0z1x">By Deborah Stead<br/>
          <span ref={myRef} class="css-lixfoc">Jan. 26, 2003</span>
          </p>
        </a>
      </div>
    </section>
  )
}

export default SectionSeven;