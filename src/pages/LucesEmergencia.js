import React from "react";

const LucesEmergencia = ({topic}) => {
  return (
    <div className="layout">
      <div className="topic__container">
        <div className="topic-container__img">
          <img
            className="topic__img"
            src={topic[8].img}
            alt={topic[8].title}
          ></img>
        </div>
        <div className="topic__description">
          <p className="phrase">{topic[8].phrase}</p>
          <h2 className="title">{topic[8].title}</h2>
          <p className="categories">{topic[8].categories}</p>
        </div>
      </div>
    </div>
  );
};

export default LucesEmergencia;
