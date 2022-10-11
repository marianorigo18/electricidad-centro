import React from "react";

const LineaAerea = ({topic}) => {
  return (
    <div className="layout">
      <div className="topic__container">
        <div className="topic-container__img">
          <img
            className="topic__img"
            src={topic[6].img}
            alt={topic[6].title}
          ></img>
        </div>
        <div className="topic__description">
          <p className="phrase">{topic[6].phrase}</p>
          <h2 className="title">{topic[6].title}</h2>
          <p className="categories">{topic[6].categories}</p>
        </div>
      </div>
    </div>
  );
};

export default LineaAerea;
