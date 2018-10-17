import React, { Component } from "react";
import "./LandingPage.css";
import Booklist from "../../Components/Booklist/Booklist";

/*
Landing page is going to be the front of my application. The page will consist of the 
basic UI of the nintendo switch and will handle all the sites navigation through the boxes displayed 
in the middle of the screen.
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
