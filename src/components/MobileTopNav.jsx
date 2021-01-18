import React from "react" 
import Logo from "../assets/images/logo.jpeg"

const MobileTopNav = () => {
    return(
        <div className="mobile-top-nav">
            <img src={Logo} alt=""/>
            <h4>Tracka</h4>
        </div>
    )
}

export default MobileTopNav