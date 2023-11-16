import Images from "./navigation/image";
import "./secondpage.css";
import sideimg from '../images/int1.jpg'
import Paragraph from "./navigation/para-text";

function SecondPage(){
    return(
        <>
        <div className="boxy-area">
        <Images imagename={sideimg} class="lefty"></Images>
        <Paragraph side="left-side"
        content={"Welcome to Horeca, where luxury meets comfort in the heart of breathtaking landscapes. Nestled amidst serene mountains and overlooking pristine lakes, Horeca stands as a beacon of elegance and hospitality. Our hotel boasts a seamless blend of modern sophistication and timeless charm, offering an oasis of tranquility for every guest."}></Paragraph>
        </div>
       
        </>
    )
}
export default SecondPage;