import React, { Component } from 'react'

const api_key = "bb4d7e1fa9d1c3d0899f27b1cf01c93c";

class SelectedCity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: "",
            country: "",
            temperature: ""
        }
        this.updateWeatherCity = this.updateWeatherCity.bind(this)
        this.updateWeatherCountry = this.updateWeatherCountry.bind(this)
    }

    getWeather = async () => {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=imerial&appid=${api_key}`);
        const response = await api_call.json();
        console.log(response)
        if(this.state.city && this.state.country)
        this.setState({
            temperature: response.main.temp
        })
    }
    
    updateWeatherCity(city) {
        this.setState({
            city:city
        })
    }

    updateWeatherCountry(country) {
        this.setState({
            country:country
        })
    }

    render() {
        const { name, onChange, disabled ,city} = this.props;
		const attrs = {
			name,
			onChange: (e) => onChange(e.target.value, e),
			disabled
        };
        if(!disabled)
        this.getWeather()
        var temp = (this.state.temperature / 10).toFixed(2);
        const tempa = temp;
        const title = !disabled ? ('The selected city is: '+ city +'\nand the tempature is ' + tempa + ' degrees'): '';
        return (
            <div className="background-box">
            <h3 className={name}>{title}</h3>
            </div>
        )
    }
}

export default SelectedCity
