import React, { Component } from 'react'
import './App.css'
import ContinentDropdown from './components/ContinentDropdown'
import CountryDropdown from './components/CountryDropdown'
import CityDropdown from './components/CityDropdown'
import SelectedCity from './components/SelectedCity'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { continent: '', country: '' , city: ''};
    this.countryElement = React.createRef();
    this.cityElement = React.createRef();
    this.weatherElement = React.createRef();
  }

  selectContinent (val) {
    if(val==='Continents..'){
      this.setState({ 
        continent: '' , country: '' , city: ''
      });
    }
    else{
    this.setState({ 
      continent: val , country: '' , city: ''
    });}
    this.countryElement.current.updateContinent(val);
    this.cityElement.current.updateContinent(val);
    this.cityElement.current.updateCountry('');
    this.weatherElement.current.updateWeatherCountry('');
    this.weatherElement.current.updateWeatherCity('');
  }

  selectCountry (val) {
    if(val==='Countries..'){
      this.setState({ 
        country: '' , city: ''
      });
    }
    else{
    this.setState({ country: val , city: ''});}
    this.cityElement.current.updateCountry(val);
    this.weatherElement.current.updateWeatherCountry(val);
  }

  selectCity (val) {
    if(val==='Cities..'){
      this.setState({ 
        city: ''
      });
    }
    else{
    this.setState({ city: val });}
    this.weatherElement.current.updateWeatherCity(val);
  }

  render () {
    const { continent, country , city} = this.state;
    return (
      <div className="container">
        <div className="header"><h1>Location</h1></div>
        <div className="main">
        <div className="drop-downs">
        <ContinentDropdown
          name="continents"
          value={continent}
          onChange={(val) => this.selectContinent(val)} />
        <CountryDropdown
          ref={this.countryElement}
          name="country"
          continent={continent}
          value={country}
          disabled={!continent}
          onChange={(val) => this.selectCountry(val)} />
          <CityDropdown
          ref={this.cityElement}
          name="city"
          continent={continent}
          country={country}
          disabled={!continent || !country}
          value={city}
          onChange={(val) => this.selectCity(val)} />
          </div>
          <div className="weather-box">
          <SelectedCity 
          ref={this.weatherElement}
          disabled={!continent || !country || !city} 
          name="selected-city" 
          continent={continent}
          country={country}
          city={city}
          onChange={(val) => this.selectCity(val)}
          />
          </div>
          </div>
          <div className="buttom"><h1>Online</h1></div>
      </div>
    );
  }
}

export default App
