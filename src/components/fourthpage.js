import Images from "./navigation/image";
import "./secondpage.css";
import sideimg3 from '../images/food2.jpg'
import Paragraph from "./navigation/para-text";

function FourthPage(){
    return(
        <>
        <div className="boxy-area">
        <Images imagename={sideimg3} class="lefty"></Images>
        <Paragraph side="left-side"
        content={"At Horeca, we prioritize personalized service, ensuring your stay exceeds expectations. From the moment you arrive, our dedicated staff is committed to curating an unforgettable experience tailored to your desires. Discover the epitome of luxury hospitality at Horeca, where every moment is crafted to perfection, leaving you with cherished memories that linger long after your departure."}></Paragraph>
        </div>
       
        </>
    )
}
export default FourthPage;