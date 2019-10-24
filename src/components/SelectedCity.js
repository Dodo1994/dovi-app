import React, { Component } from 'react'

class SelectedCity extends Component {

    constructor(props) {
        super(props)
    }
    

    render() {
        const { name, onChange, disabled ,city} = this.props;
        const title = !disabled? 'The selected city is: '+ city : '';
		const attrs = {
			name,
			onChange: (e) => onChange(e.target.value, e),
			disabled
		};
        return (
            <div className="background-box">
            <h3 className={name}>{title}</h3>
            </div>
        )
    }
}

export default SelectedCity
