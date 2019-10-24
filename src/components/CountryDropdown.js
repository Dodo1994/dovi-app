import React, { Component } from 'react'
import World from '../mock.json'

class CountryDropdown extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            continent: '',
            continents: []
        }
        this.getCountries = this.getCountries.bind(this)
        this.updateContinent = this.updateContinent.bind(this)
    }

    updateContinent (continent) {
        this.setState({
            continent: continent
        })
    }

    componentDidMount() {
        this.getCountries();
    }
    
    getCountries () {
            const {continents} = World;
            return continents.map((continent) =>{
                if(continent.name===this.state.continent)
            return  (continent.countries.map((country) => (
            <option key={country.id}>{country.name}</option>
        )))})
	}

	getDefaultOption () {
		return (
            <option key="default">Countries..</option>
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
				{this.getCountries()}
			</select>
		);
    }
}

export default CountryDropdown
