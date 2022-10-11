const ConjuntosArmados = ({topic}) => {
  return (
    <div className="layout">
      <div className="topic__container">
        <div className="topic-container__img">
          <img
            className="topic__img"
            src={topic[7].img}
            alt={topic[7].title}
          ></img>
        </div>
        <div className="topic__description">
          <p className="phrase">{topic[7].phrase}</p>
          <h2 className="title">{topic[7].title}</h2>
          <p className="categories">{topic[7].categories}</p>
        </div>
      </div>
    </div>
  );
};

export default ConjuntosArmados;
