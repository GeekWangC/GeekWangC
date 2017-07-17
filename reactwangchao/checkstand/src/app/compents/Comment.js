import React, { Component } from 'react';

class Comment extends Component{

	state = {
		date: new Date(),
		text: 'I hope you enjoy learning React!',
	  	author: {
	    	name: 'Hello Kitty',
	    	avatarUrl: 'http://placekitten.com/g/64/64'
	  	}
	}

	avatar =()=>{
		return (
	    	<img className="Avatar" src={this.state.author.avatarUrl} alt={this.state.author.name}/>
	  	)
	};	

	render(){
		
		function formatDate(date){
			return date.toLocaleDateString();
		}
		return (
			<div className="Comment">
				<div className="UserInfo">
					{this.avatar()}
					<div className="UserInfo-name">
					{this.state.author.name}
					</div>
				</div>
				<div className="Comment-text">
					{this.state.text}
				</div>
				<div className="Comment-date">
					{formatDate(this.state.date)}
				</div>
			</div>
		);
	}

}

export default Comment;
