import { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank.js/Rank';
import ParticlesBg from 'particles-bg';
import FaceRecognitation from './components/FaceRecognitation/FaceRecognitation';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'dccf89db237d4a289a1e30ac87e105a4'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(
        {
          id: 'face-detection',
          name: 'face-detection',
          version: '6dc7e46bc9124c5c8824be4822abe105',
          type: 'visual-detector',
        }, this.state.input)
      .then(response => {
        console.log(response.output[0].data.regions[0].region_info.bounding_box);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="color" bg={true} />
        <Navigation />
        <Logo />
        < Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognitation imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
