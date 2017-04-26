import React, { Component } from 'react';
import './App.css';
import InputField from './InputField.js';
import Weather from './Weather.js';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filtertext: 'Oslo',
      city: 'Oslo'
    };

  }
  handleInput(e) {
    e.preventDefault()
    this.setState({
      filtertext: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get('https://api.apixu.com/v1/current.json?key=791351f004e04867990230211172404&q=' + this.state.filtertext)
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data,
          name: res.data.location.name,
          region: `${res.data.location.region}, `,
          country: res.data.location.country,
          temp: `${res.data.current.temp_c}º`,
          icon: res.data.current.condition.icon,
          text: res.data.current.condition.text
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App" style={{padding: '5em'}}>

        <InputField
          handleInput={this.handleInput.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />

        <Weather
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
          region={this.state.region}
          temp={this.state.temp}
          text={this.state.text}
          icon={this.state.icon}
        />

      </div>
    );
  }
}

export default App;
