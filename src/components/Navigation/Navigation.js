import React from "react";

const Navigation = (props) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => props.onRouteChange('signin')} className="f3 link dim black underlined pa3 pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation;