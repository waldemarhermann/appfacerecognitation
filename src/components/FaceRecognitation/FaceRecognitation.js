import React from 'react';
import './FaceRecognitation.css';

const FaceRecognitation = (props) => {
    return(
        <div className="center ma">
            <div className="absolute mt2">
            <img id="inputimage" src={props.imageUrl} alt="img" width='500px' height='auto' />
            <div className="bounding-box" style={{top: props.box.topRow , left: props.box.leftCol, right: props.box.rightCol, bottom: props.box.bottomRow}}></div>
            </div>
        </div>
    )
}

export default FaceRecognitation;