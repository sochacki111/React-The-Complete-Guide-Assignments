import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    text: ''
  };

  textChangedHandler = (event) => {
    let text = this.state.text;

    text = event.target.value;
    this.setState({ text: text });
  }

  deleteCharComponentHandler = (charIndex) => {
    const text = [...this.state.text.split('')];
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({ text: updatedText });
  }

  render() {
    const characters = this.state.text.split('').map((char, index) => {
      return <Char
        character={char}
        clicked={() => this.deleteCharComponentHandler(index)}
        key={index}
      >{char}
      </Char>
    });

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <input
          onChange={(event) => this.textChangedHandler(event)}
          type="text"
          placeholder="Type to see the result..."
          value={this.state.text} />
        <p>{this.state.text}</p>
        <Validation text={this.state.text} />
        {characters}
      </div>
    );
  }
}

export default App;
