import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Ingredients from "./Components/Ingredients";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Ingredients" component={Ingredients} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
