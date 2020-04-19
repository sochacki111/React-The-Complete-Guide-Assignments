import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state = {
    text: ''
  };

  textChangedHandler = (event) => {
    let text = this.state.text;

    text = event.target.value;
    this.setState({ text: text });
  }

  deleteCharComponentHandler = (charComponentIndex) => {
    const chars = [...this.state.text.split('')];
    chars.splice(charComponentIndex, 1);
    this.setState({ text: chars.join('') });
  }

  render() {
    let prompt = '';

    if (this.state.text.length <= 5) {
      prompt = "Text too short";
    } else if (this.state.text.length >= 10) {
      prompt = "Text long enough";
    }

    let chars = this.state.text.split('');
    // console.log(chars);
    let charComponents = null;

    if (chars && chars.length) {
      charComponents = (
        <div>
          {
            chars.map((char, index) => {
              return <CharComponent
                click={() => this.deleteCharComponentHandler(index)}
                key={index}
                index={index}
              >{char}
              </CharComponent>
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <input
          onChange={(event) => this.textChangedHandler(event)}
          type="text"
          placeholder="Type to see the result..."
          value={this.state.text} />
        <p>{this.state.text}</p>
        <ValidationComponent
          prompt={prompt} />
        {charComponents}
      </div>
    );
  }
}

export default App;
