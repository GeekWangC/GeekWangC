import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypecheckingWithPropTypes extends Component{

	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
		return(
			<h1>{this.props.name}</h1>
		)
	}
}

TypecheckingWithPropTypes.propTypes = {
	name: PropTypes.oneOf(['geekwangc.com', 'Photos'])
}

TypecheckingWithPropTypes.defaultProps = {
	name : "geekwangc.com"
}

export default TypecheckingWithPropTypes;