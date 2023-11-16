import "./first.css";
import frontimg from '../../images/int2.jpg'
function FrontPage(){
    return(
        <>
        <h1 className="Title">Horeca</h1>
        <img className="front-image" src={frontimg}></img>
        </>
    )
}
export default FrontPage;