import React, { Component } from 'react';

class Blog extends Component{
	constructor(props) {
		super(props);
		this.state = {
			posts:[
				{id: 1, title: 'AAA', content: 'geekwangc.com'},
				{id: 2, title: 'BBB', content: 'geekwangc.github.io'}
			]
		}
	}

  	render(){
  		const posts = this.state.posts;
  		const content =  (		
			posts.map((post) =>
			    <div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
			    </div>

		  	)
		)
		const sidebar = (
			<ul>
				{posts.map((post) =>
					<li key={post.id}>
						{post.title}
					</li>
				)}
			</ul>
		)
  		return(
  			<div>
				{sidebar}
				<hr />
				{content}
			</div>
  		)
  	}
}

export default Blog;