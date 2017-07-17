import React from 'react'
import ReactDOM from 'react-dom';

class App extends React.Component{
	static propTypes = {
		name:React.PropTypes.string,
		names:React.PropTypes.array
	};
	static defaultProps = {
		name:"Cindy",
		names:[
			{key:"01",value:"拓拓"},
			{key:"01",value:"小博"},
			{key:"01",value:"小芳"},
			{key:"01",value:"娇妹"},
			{key:"01",value:"大侠"}
		]
	};
	constructor(props){
        super(props)
    }
    render() {
    	const names = this.props.names;
		const listItems = names.map((name) =>
			<li>{name.value}</li>
		);
    	return (
      		<div>
        		<h1>App</h1>
        		<ul>
        			<li><a>{this.props.name}</a></li>
    				{listItems}
        		</ul>
      		</div>
    	)
  	}
}


ReactDOM.render(<App name="geekwangc" />, document.getElementById("app"))