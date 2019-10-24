import React, { Component } from 'react'
import World from '../mock.json'

class ContinentDropdown extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             continents: []
        }
    }

    componentDidMount() {
        this.setState({
            continents: World.continents
        })
    }
    
    getContinents () {
        const { continents } = World;
        
        return continents.map((continent) => (
            <option key={continent.id}>{continent.name}</option>
        ));
	}

	getDefaultOption () {
		return (
            <option key="default">Continents..</option>
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
				{this.getContinents()}
			</select>
		);
    }
}

export default ContinentDropdown