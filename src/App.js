import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank.js/Rank';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '07e9ec392e7f42ec9577848524ef4ead'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
    .predict(
      {
        id: 'face-detection',
        name: 'face-detection',
        version: '6dc7e46bc9124c5c8824be4822abe105',
        type: 'visual-detector',
      }, this.state.input)
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="color" bg={true} />
        <Navigation />
        <Logo />
        < Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        
        {/* <FaceRecognitation /> */}
      </div>
    );
  }
}

export default App;
