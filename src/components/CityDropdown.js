import React, { Component } from 'react'
import World from '../mock.json'

class CityDropdown extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            continent: '',
             country: '',
             cities: []
        }
        this.updateContinent = this.updateContinent.bind(this)
        this.updateCountry = this.updateCountry.bind(this)
    }

    componentDidMount() {
        this.getCities();
    }

    updateContinent (continent) {
        this.setState({
            continent: continent
        })
    }

    updateCountry (country) {
        this.setState({
            country: country
        })
    }
    
    getCities () {
        const {continents} = World;
            return continents.map((continent) =>
                (continent.countries.map((country) =>{
                    if(country.name===this.state.country)
                    return  ( country.cities.map((city) =>
            (<option key={city.id}>{city.name}</option>)
        ))})))
	}

	getDefaultOption () {
		return (
            <option key="default">Cities..</option>
        )
	}

    render() {
        const { name, id, value, onChange,disabled } = this.props;

		const attrs = {
			name,
			value,
			onChange: (e) => onChange(e.target.value, e),
			disabled
		};
		if (id) {
			attrs.id = id;
		}
		if (name) {
			attrs.className = name;
		}

		return (
			<select {...attrs}>
				{this.getDefaultOption()}
				{this.getCities()}
			</select>
		);
    }
}

export default CityDropdown
