import "./image.css";

function Images(props){
    return(
        <>
        <img className={`image-set ${props.class}`} src={props.imagename}></img>
        </>
    )
}
export default Images;