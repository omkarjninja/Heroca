import Images from "./navigation/image";
import "./secondpage.css";
import sideimg2 from '../images/int3.jpg'
import bigimg from '../images/int2.jpg'
import Paragraph from "./navigation/para-text";

function AboutInfo(){
    return(
        <>
         <div className={`boxy-area ${'about-section'}`}>
         <Images imagename={sideimg2} class="righty about-set"></Images>
         <Paragraph side="right-side paragraph-about"
        content={"Since opening in Buenos Aires in 2001, SUCRE has been at the forefront of contemporary Argentinian cuisine. Founded by Chef Fernando Trocca the restaurant pays tribute to Argentina and its Mediterranean roots. Largely, it is a representation of Argentina’s unique heritage: warm, inclusive, lively and experiential. The food draws inspiration from Trocca’s Spanish-Italian heritage and his extensive travels around South America."}></Paragraph>
        </div>
        <img src={bigimg} className="big-image"></img>
        </>
    )
}
export default AboutInfo;