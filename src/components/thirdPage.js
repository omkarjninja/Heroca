import Images from "./navigation/image";
import "./secondpage.css";
import sideimg2 from '../images/int3.jpg'
import Paragraph from "./navigation/para-text";

function ThirdPage(){
    return(
        <>
         <div className="boxy-area">
         <Images imagename={sideimg2} class="righty"></Images>
         <Paragraph side="right-side"
        content={"Indulge in a world of opulence within our meticulously designed rooms and suites, each exuding its unique character and style. Whether you seek a romantic getaway, a family retreat, or a corporate escape, Horeca caters to your every need. Enjoy panoramic views from private balconies, savor exquisite cuisine crafted by our skilled chefs, and unwind in our spa sanctuary, where relaxation knows no bounds."}></Paragraph>
        </div>
        </>
    )
}
export default ThirdPage;