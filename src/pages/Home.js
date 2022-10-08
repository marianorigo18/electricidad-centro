import { Component } from "react";
import { topic } from "../exports/data";
import "./Page.css";

class Home extends Component {
  render() {
    return (
      <div className="layout">
        <h1>Home...</h1>
        <div className="topic__container">
          <div className="topic-container__img">
            <img className="topic__img" src={topic[2].img} alt={topic[0].name}></img>
          </div>
          <div className="topic__description">Topic Description</div>
        </div>
      </div>
    );
  }
}

export default Home;
