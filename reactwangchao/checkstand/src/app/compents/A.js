import React, { Component } from 'react';
import B from "./B.js"

class A extends Component{

	constructor(props) {
		super(props);
		this.state = {
			resetB:true
		}
	}

	componentDidMount() {
		
	}


	tick=()=>{
		this.setState({
			resetB:false
		})
	}

	render(){
		let resetB = this.state.resetB;
		let Bcc = (<B />)
		if(resetB){
			Bcc = (<B resetB = "a"/>)
		}else{
			Bcc = (<B resetB = "a1"/>)
		}
		
		return (
			<div>
				<div onClick={this.tick}><h2>重置B</h2></div>
				{Bcc}
			</div>
		);
	}

}

export default A;
