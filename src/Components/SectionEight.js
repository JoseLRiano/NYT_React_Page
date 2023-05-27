import React from 'react';
import '../Styles/SectionEight.css';
import { useInView } from 'react-intersection-observer';

function SectionEight() {
  const { ref: myRef, inView: myInView} = useInView()

  return (
    <section  id="sec8">
      <div class={`${myInView ? 'opacityIn' : 'opacityOut'} css-3pfreo`} id="HorizSec9">
        <a id="NikeInfo" class="css-13rtyw0" href="https://www.nytimes.com/2019/06/26/technology/trading-sneakers-stockx.html" target="_blank" rel="noreferrer" >
          <h5 class="css-qioh90">Technology</h5>
          <h3 class="css-1xm9qaa">Buy Low-Tops, Sell High-Tops: StockX Sneaker Exchange Is Worth $1 Billion</h3>
          <p class="css-8w0z1x">By Erin Griffith<br/>
          <span ref={myRef} class="css-lixfoc">June 26, 2019</span></p>
        </a>
        <img id="NikeImg" class="css-6isj8w" src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/13_NFA_LP_Video_Cling_Wrap_Higher-Res.gif" alt="Nike Air Forces" />
      </div>

    </section>
  )
}

export default SectionEight;