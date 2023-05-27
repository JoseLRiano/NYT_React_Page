import React from 'react';
import "../Styles/HorizontalSect.css";
import { useInView } from 'react-intersection-observer';
// import SectionTwo from "./SectionTwo";


function HorizontalSect() {
    const images = [
        {
            title: "Air Jordan One",
            url: "https://mwcm.nyt.com/dam/LP/brand/life/images/air_jordan_1_og.png"
          }
        ];
  const { ref:myRef , inView: myElementVisible} = useInView();
  const { ref:jordanRef , inView: jordanElementVisible} = useInView();
  const { ref:jordanInfoRef , inView: jordanInfoElementVisible} = useInView();


 
  return (
    <div id="horizontalSect" >
            <div className="Horizontal_container">
            <h2 ref={myRef} className={`${myElementVisible ? 'textOpacity' : ''}`}>
            If you understand&nbsp; 
            <a 
            href = "https://www.nytimes.com/interactive/2021/10/15/style/sneaker-bots.html"
            target = "_blank" rel="noopener noreferrer"> Sneakers </a>
            <span >,</span> you start to understand <a className = "css-3td0x2"
            href = "https://www.nytimes.com/2017/03/17/sports/ncaabasketball/squeaky-shoes-hardwood.html"
            target = "_blank" rel="noopener noreferrer"> Squeaking, Hardwood </a><span >,</span> and the art of Kareem’ s famous <a className = "css-3td0x2"
            href = "https://theathletic.com/4265115/2023/03/02/kareem-abdul-jabbar-sky-hook-shot-origin/"
            target = "_blank" rel="noopener noreferrer"> Sky Hook </a><span >.</span> So you get <a className = "css-3td0x2"
            href = "https://www.nytimes.com/2003/12/09/news/staying-aloft-what-does-keep-them-up-there.html"
            target = "_blank" rel="noopener noreferrer"> Flying </a><span >,</span> our <a className = "css-3td0x2"
            href = "https://www.nytimes.com/2022/11/08/world/climate-change-global-photos.html"
            target = "_blank" rel="noopener noreferrer"> Changing World </a> and <a href="https:/ / www.nytimes.com / 2021 / 02 / 10 / well / move / running - body - evolution.html " target="
            _blank">Human Evolution</a><span className="
            css - g90fw7 ">,</span> which was shaped by <a className="
            css - 3 td0x2 " href="https: //www.nytimes.com/2022/08/17/science/chewing-human-evolution.html" target="_blank" rel="noopener noreferrer">Chewing</a>
            <span >.</span> So you can understand 
            <a href="https://www.nytimes.com/2020/01/20/style/quit-chewing-gum.html" target="_blank" rel="noopener noreferrer">Gum</a><span className="css-g90fw7">,</span> and when you realize how much of it is on the&nbsp; 
            <a href="https://www.nytimes.com/2003/01/26/nyregion/out-damned-spot.html" target="_blank" rel="noopener noreferrer">Street</a><span className="css-g90fw7">,</span> you understand why some people never wear their 
            <a href="https://www.nytimes.com/2019/06/26/technology/trading-sneakers-stockx.html" target="_blank" rel="noopener noreferrer">Sneakers</a>.
            </h2>
            <img ref={jordanRef} className={`${jordanElementVisible ? 'textOpacity' : ''}`} id="JordanOne" src={images[0].url} alt={images[0].description} />
            <a id = "SneakersInfo" ref={jordanInfoRef} className={`${jordanInfoElementVisible ? 'textOpacity' : ''}`}
            href = "https://www.nytimes.com/interactive/2021/10/15/style/sneaker-bots.html"
            target = "_blank"
            rel = "noreferrer"> 
            <h4 className = "css-qioh90" > Styles </h4><h3 className="css-1xm9qaa">The Fight for Sneakers</h3> <p className = "css-8w0z1x" > By Daisuke Wakabayashi <br/> 
            <span className = "css-1q1eqql" > Oct.15, 2021 </span></p> 
            </a>
            </div>
   
    </div>
  )
}

export default HorizontalSect;