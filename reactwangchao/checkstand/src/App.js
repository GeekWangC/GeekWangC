import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './app/compents/Clock.js'
import Toggle from './app/compents/Toggle.js'
import Blog from './app/compents/Blog.js'
import NameForm from './app/compents/NameForm.js'
import Calculator from './app/compents/Calculator.js'


class App extends Component {
    state = {
        localeTime:new Date().toLocaleTimeString()
    }
    setlocaleTime = ()=>{
        this.setState({
            localeTime:new Date().toLocaleTimeString()
        })
    }
    handleClick = (e)=>{//事件绑定
        e.preventDefault();
        console.warn("Handling Events玩玩")
    }
    render() {
        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        const user = {
            firstName: '王',
            lastName: '超'
        };
        // setInterval(this.setlocaleTime,1000);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 onClick={this.handleClick}>我曾认真的怀念你</h2>
                    <h2>但也不曾亏待自己</h2>
                </div>
                <h1>
                    Hello, {formatName(user)}!
                </h1>
                <h3>当能力撑不起野心时，所有的路，都是旁路</h3>
                <h4>能力匹配机遇，最重要</h4>
                <p className="App-intro">
                    It is {this.state.localeTime}
                </p>
                <Clock />
                <Clock />
                <Toggle />
                <Blog />
                <NameForm />
                <Calculator />
            </div>
        );
    }
}

export default App;
