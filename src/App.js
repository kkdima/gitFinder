import "./App.css";
import React, { Component } from "react";
import Navbar from './components/NavBar';
import Users from './users/Users'

export class App extends Component {
	render() {
		return (
			<div className="App">
        <Navbar/>
        <Users/>
			</div>
		);
	}
}

export default App;
