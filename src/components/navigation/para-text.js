import "./para.css";

function Paragraph(props){
    return(
        <>
        <p className={`paragraph ${props.side}`}>{props.children}{props.content}</p>
        </>
    )
}
export default Paragraph;