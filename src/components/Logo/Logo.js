import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Kibrain from './Kibrain.png';

const Logo = () => {
    return (
        <div className="ma4 mt 0">
            <Tilt className='Tilt br2 shadow-2' options={{max: 40}} style={{height: 150, width: 150}}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '10px'}} src={Kibrain} alt="img" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;