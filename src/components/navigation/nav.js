import SideDrawer from "../sideDrawer"
import "./nav.css"
import { useState } from "react"
import NavLinks from "./navlinks";

const Nav=()=>{
  const [DrawerisOpen,SetDrawer]=useState(false);
const OpenDrawer=()=>{
  SetDrawer(true)
}
const CloseDrawer=()=>{
  SetDrawer(false)
}
const ComeHome=()=>{
  window.location.href = "/";

}
    return(
        <>
        <SideDrawer show={DrawerisOpen} onClick={CloseDrawer}>
          <button className="close-drawer" onClick={CloseDrawer}>X</button>
          <NavLinks></NavLinks>
        </SideDrawer>
        <div className="navy">
        <div class={`open-navbar-icon navbar-icon center`} onClick={OpenDrawer}>
        <div class="line"></div>
        <div class="line"></div>
      </div>
     <div>
      <h2 className="logo" onClick={ComeHome}>Horeca</h2>
     </div>
     <div>
      <a className="git" href="https://github.com/omkarjninja" target="_blank">Github</a>
     </div>
        </div>
       
      </>
    )
}
export default Nav;