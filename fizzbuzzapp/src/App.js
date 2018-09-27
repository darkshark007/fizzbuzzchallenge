import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 100,
      fizzBuzzText: "None"
    }
    this.updateFizzBuzzText();
  }

  render() {
    var updateHandler = this.updateFizzBuzzText.bind(this);
    return (
      <div className="App">
        <p className="App-intro">
          <input type="text" value={this.state.inputValue} onChange={updateHandler} />
          <br/><br/>fizzBuzzText for value ({this.state.inputValue}): <br/>{this.state.fizzBuzzText}
        </p>
      </div>
    );
  }

  updateFizzBuzzText(event) {
    var value = this.state.inputValue;
    if (event !== undefined) {
      value = event.target.value;
      this.setState({inputValue: value});
    }

    var self = this;
    axios({
      method: 'post',
      url: 'https://us-central1-seismic-glow-217720.cloudfunctions.net/fizzbuzz',
      data: {
        max_range: value
      },
    })
    .then(function (response) {
      console.log(response);
      self.setState({
        fizzBuzzText: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
      self.setState({
        fizzBuzzText: "Error"
      })
    });
  }
}

export default App;
