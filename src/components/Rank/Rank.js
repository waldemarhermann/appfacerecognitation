import React from "react";

const Rank = (props) => {
    return (
        <div>
            <div className="f3 white">
                {`Hello ${props.name}, you are at position...`}
            </div>
            <div className="f1 white">
                {`#: ${props.entries}`}
            </div>
        </div>
    )
}

export default Rank;