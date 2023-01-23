import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return (
        <div>
            <p className="f3"> {'This programm is able to find faces on any pictures'} </p>
            <div className='center' >
                <div className="center form pa4 br3 shadow-5">
                <input className="f4 pa2 w-70" type="tex" onChange={props.onInputChange}/>
                <button 
                className="f4 w-30 grow link ph3 pv2 dib white bg-green"
                onClick={props.onButtonSubmit}
                >Click</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;