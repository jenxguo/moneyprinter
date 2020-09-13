import React, { Component } from 'react';
import './App.css';

import AlgoPage from './Components/AlgoPage'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="App">
            </div>
          </Route>
          <Route exact path="/create-algo">
            <div className="App">
              <AlgoPage/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
