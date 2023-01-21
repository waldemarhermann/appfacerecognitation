import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank.js/Rank';
import ParticlesBg from 'particles-bg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg type="color" bg={true} />
        <Navigation />
        <Logo />
        < Rank />
        <ImageLinkForm />
        
        {/* <FaceRecognitation /> */}
      </div>
    );
  }
}

export default App;
