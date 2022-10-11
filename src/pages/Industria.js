import { topic } from "../exports/data";
import "./Page.css";

import React from "react";

const Industria = () => {
  return (
        <div className="layout">
          <div className="topic__container">
            <div className="topic-container__img">
              <img
                className="topic__img"
                src={topic[0].img}
                alt={topic[0].title}
              ></img>
            </div>
            <div className="topic__description">
              <p className="phrase">{topic[0].phrase}</p>
              <h2 className="title">{topic[0].title}</h2>
              <p className="categories">{topic[0].categories}</p>
            </div>
          </div>
        </div>
  );
};

export default Industria;
