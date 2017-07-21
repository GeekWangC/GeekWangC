import React, { Component } from 'react';

class BoilingVerdict extends Component{

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		const props = this.props;
    	if (props.celsius >= 100) {
    		return <p>The water would boil.</p>;
  		}
		return <p>The water would not boil.</p>;

  	}
}

export default BoilingVerdict