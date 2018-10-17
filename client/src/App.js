// React Package and library imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux imports
import rootReducer from "./rootReducer";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
// File imports
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";

// Middleware logger is only for development purposes. It should be deleted close to production so that it doesn't clog up the console with redux logs.
const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
