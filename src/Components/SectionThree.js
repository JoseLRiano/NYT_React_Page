import React from 'react'
import '../Styles/SectionThree.css';
import { useInView } from 'react-intersection-observer';


function SectionThree() {
  const { ref: firstRef, inView: firstInView } = useInView();
  const { ref: secondRef, inView: secondInView } = useInView();
  const { ref: thirdRef, inView: thirdInView } = useInView();
  const { ref: codeRedRef, inView: codeRedInView } = useInView();
  const { ref: anchorRef, inView: anchorInView } = useInView();
  const { ref: dummyrRef, inView: dummyInView } = useInView();

  
console.log(thirdInView)
  return (
    <section ref={codeRedRef} id="main-section3">
        <div id='test-div-section3' ref={dummyrRef}></div>
        <div id="HorizSec3">
        <img id="ChangingWorld" className={`${!codeRedInView && 'opacityIn'} ${!anchorInView && 'opacityOut' } css-qdja2l`} src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/Changing-World-nyt.gif" alt="Changing World" />
        <div ref={thirdRef}  id="SkyImg1" className={`${firstInView? 'opacityIn' : 'opacityOut'} css-6qa522`} ></div>
        <img ref={secondRef}  id="SkyImg2" className={`${firstInView ? 'opacityIn' : 'opacityOut'} css-7oza9u`} src="https://mwcm.nyt.com/dam/LP/brand/life/images/kareem_abdul_jabbar.png" alt="Kareem Abdul-Jabbar" />
        <a id="OceanEat" className={`${!codeRedInView && 'opacityIn' } ${!anchorInView && 'opacityOut' } css-xzwbxp`} href="https://www.nytimes.com/2022/11/08/world/climate-change-global-photos.html" target="_blank" rel="noreferrer" ><h5 className="css-qioh90">World</h5><h3 className="css-1xm9qaa">Ocean-Eaten Islands, Fire-Scarred Forests: Our Changing World in Pictures</h3><p className="css-8w0z1x">By The New York Times<br /><span className="css-lixfoc">Nov. 8, 2022</span></p></a>     
        <a  id="CodeRed" className={`${!codeRedInView && 'opacityIn' } ${!anchorInView && 'opacityOut' } css-1vff6d6`} href="https://www.nytimes.com/2021/08/13/podcasts/the-daily/climate-change-IPCC.html" target="_blank" rel="noreferrer" ><h5 className="css-qioh90">The Daily</h5><h3 className="css-1xm9qaa">A ‘Code Red for Humanity’</h3><p className="css-8w0z1x">By The New York Times<br /><span className="css-lixfoc">Aug. 13, 2021</span></p></a>
        <a ref={anchorRef} id="SkyRightInfo" className={`${firstInView ? 'opacityIn' : 'opacityOut'} css-17aads9`} href="https://www.nytimes.com/2023/02/07/sports/basketball/kareem-abdul-jabbar-record-legacy.html" target="_blank" rel="noreferrer" ><h4 className="css-qioh90">Sports</h4><h3 className="css-1xm9qaa">Kareem Abdul-Jabbar Is Greater<br /> Than Any Basketball Record</h3><p className="css-8w0z1x">By Kurt Streeter<br/><span className="css-lixfoc">Feb. 7, 2023</span></p></a>
            <div className = "css-slyfbs"
            id = "HorizSec4Content" > <div className = "css-1m5ao79" > 
            <a id = "SkyLeftInfo" 
            className ={`${firstInView ? 'opacityIn' : 'opacityOut'} css-ul2jnc`}
            href = "https://theathletic.com/4265115/2023/03/02/kareem-abdul-jabbar-sky-hook-shot-origin/"
            target = "_blank"
            rel = "noreferrer"> <img ref={firstRef} id = "AthleticLogo"
            className = "css-1t3l27q"
            src = "https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/NYT-ATHLETIC-1-hor-rgb-w.svg"
            alt = "The Athletic Logo" />
            <h3 className = "css-19yb6zs"> Who really taught Kareem Abdul - Jabbar his hook shot ? The answer might depend on whose story you believe </h3>
            <p  className="css-8w0z1x">By Joe Vardon<br />
            <span className="css-lixfoc">March 2, 2023</span> </p></a> </div><div id="SkyRight" className="css-1aiip4y"><div>
            </div> 
            <a id="FlyLeftInfo" className={`${!secondInView ? 'opacityOut' : ''} ${dummyInView ? 'opacityIn' : ''}   css-dokk0q`}
            href = "https://www.nytimes.com/2003/12/09/news/staying-aloft-what-does-keep-them-up-there.html"
            target = "_blank"
            rel = "noreferrer"> <h4 className="css-1c7x6rz"> . </h4><h3 className="css-1xm9qaa">STAYING ALOFT; What Does Keep Them Up There?</h3> 
            <p className = "css-8w0z1x" > By Kenneth Chang <br /> <span className = "css-lixfoc"> Dec.9, 2003 </span></p> 
            </a><img id="FlyImg" className={`${(!secondInView) ? 'opacityOut' : ''} ${dummyInView ? 'opacityIn' : ''}  css-w9zr22`} src="https://mwcm.nyt.com/dam/mkt_assets/oma_brand_lp/planefade-1920-LP_2_rd.gif " alt="Flying Aircraft "/>
            </div>
            </div>       
        </div>
    </section>
  )
}

export default SectionThree;