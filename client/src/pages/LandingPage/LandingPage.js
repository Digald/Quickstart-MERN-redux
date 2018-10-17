import React, { Component } from "react";
import "./LandingPage.css";
import Booklist from "../../Components/Booklist/Booklist";

/*
Landing Page of application
*/

class LandingPage extends Component {
  componentDidMount() {
    document.title = "Welcome to My App";
  }

  render() {
    return (
      <div className="LandingPage">
        <h1>My App</h1>
        <Booklist />
      </div>
    );
  }
}

export default LandingPage;
