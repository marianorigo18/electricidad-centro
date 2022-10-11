import React from "react";

const Morceteria = ({topic}) => {
  return (
    <div className="layout">
      <div className="topic__container">
        <div className="topic-container__img">
          <img
            className="topic__img"
            src={topic[10].img}
            alt={topic[10].title}
          ></img>
        </div>
        <div className="topic__description">
          <p className="phrase">{topic[10].phrase}</p>
          <h2 className="title">{topic[10].title}</h2>
          <p className="categories">{topic[10].categories}</p>
        </div>
      </div>
    </div>
  );
};

export default Morceteria;
