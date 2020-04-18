import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    users: [
      { username: 'Michaś' },
      { username: 'Zdziś' }
    ]
  };

  switchUsernameHander = (username) => {
    this.setState({
      users: [
        { username: username },
        { username: 'Zdziś' }
      ]
    });
  };

  usernameChangedHandler = event => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: 'Zdziś' }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      padding: '16px'
    };

    return (
      <div style={style} className="App">
        <UserInput
          username={this.state.users[0].username}
          changed={this.usernameChangedHandler} />

        <UserOutput
          username={this.state.users[0].username}
          click={this.switchUsernameHander.bind(this, 'Michaś111')} />
        <UserOutput
          username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;
