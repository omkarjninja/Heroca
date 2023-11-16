
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group"; 
import "./SideDrawer.css";

const SideDrawer = props=>{
    const content =( <CSSTransition
    mountOnEnter
    unmountOnExit
    classNames="slide-in-left"
    in={props.show}
    timeout={200}
    >

     <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
     </CSSTransition>);
    return ReactDOM.createPortal(content, document.getElementById("drawer-hook"))
}
   
export default SideDrawer;