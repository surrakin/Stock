import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from './home/home.jsx';
import Login from "./user/login.jsx";
import Main from "./main/main.jsx";

class App extends Component {

  render() {
    return (
	    <Switch>
		    <Route path="/login" component={Login}></Route>
			<Route path="/main" component={Main}></Route>			
			<Route path="*" component={Home}></Route>
		</Switch>
    );
  }
}

export default App;
