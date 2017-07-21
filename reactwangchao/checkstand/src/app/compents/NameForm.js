import React, { Component } from 'react';

class NameForm extends Component{

	constructor(props) {
		super(props);
		this.state = {
			value:"",
			selectValue:"xiaobo"
		};
	}

	handleChange = (event)=>{
		const target = event.target;
    	const value = target.value;
    	const name = target.name;
		this.setState({
			[name]: value
		})
	}

	handleSubmit = (event)=>{
		alert('姓名 was submitted: ' + this.state.value);
		alert('选秀 was submitted: ' + this.state.selectValue);
    	event.preventDefault();
	}

	render(){
		return  (
			<form onSubmit={this.handleSubmit}>
				<label>
				姓名:
				<textarea name="value" type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<label>
				选秀:
					<select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
						<option value="tuotuo">拓拓</option>
						<option value="xiaofang">小芳</option>
						<option value="xiaobo">小博</option>
						<option value="jiaomei">娇妹</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default NameForm