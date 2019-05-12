import React, { Component } from 'react';
import { Grommet, Box } from 'grommet'
import AppBar from './components/AppBar'
import './App.css';
import ProductListPage from './pages/ProductListPage'
import CheckoutPage from './pages/CheckoutPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Grommet plain full>
          <Box direction="column" fill>
            <AppBar />

            <Switch>
              <Route path="/" exact component={ProductListPage} />
              <Route path="/checkout" exact component={CheckoutPage} />
              <Route path="**" component={() => <h1>Not Found</h1>} />
            </Switch>
          </Box>
        </Grommet>
      </Router>
    );
  }
}

export default App;
