import React from 'react';
import '../Styles/SectionSix.css';
import { useInView } from 'react-intersection-observer';

function SectionSix() {
  const { ref: myRef, inView: myInView} = useInView();

  return (
    <section  className={`${myInView ? 'opacityIn' : 'opacityOut'}`} id="Sec6">
    <div class="css-6zxpkh" id="HorizSec7">
      <div class="css-1wd4uy5" id="HorizSec7Content" >
          <div class="css-du8xe7"></div>
          <div class="css-udl396">
            <a class="css-16t9n6h" href="https://www.nytimes.com/2020/01/20/style/quit-chewing-gum.html" target="_blank" rel="noreferrer">
              <h5 class="css-qioh90">Style</h5>
              <h3 class="css-1xm9qaa">I Quit Chewing Gum</h3>
              <p class="css-8w0z1x">By Alexandra Jacobs<br/><span class="css-lixfoc">Jan. 20, 2020</span></p>
            </a>
            <img class="css-261mrm" src="https://mwcm.nyt.com/dam/LP/brand/life/images/11_NFA_LP_Video_Gum.gif" alt="Chewing Gum" />
          </div>
        <div ref={myRef} class="css-1oskuwq">
        </div>
      </div>
    </div>
    
    </section>
  )
}

export default SectionSix;