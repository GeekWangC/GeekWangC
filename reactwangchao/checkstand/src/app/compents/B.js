import React, { Component } from 'react';

class B extends Component{

	constructor(props) {
		super(props);
		this.state = {
			date:"请选择"
		}
	}
	componentWillReceiveProps(nextProps) {
        this.setState ({
			date:"请选择"
		})
    }
	componentDidMount() {
		this.setState ({
			date:"请选择"
		})
	}

	tick=()=>{
		this.setState({
			date:"啥子"
		})
	}

	render(){
		
		return (
			<div>
				<h2>{this.state.date}</h2>
				<div  onClick={this.tick}><h2>点击</h2></div>
			</div>
		);
	}

}

export default B;
