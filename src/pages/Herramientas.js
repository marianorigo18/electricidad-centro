const Herramientas = ({topic}) => {
  return (
    <div className="layout">
      <div className="topic__container">
        <div className="topic-container__img">
          <img
            className="topic__img"
            src={topic[9].img}
            alt={topic[9].title}
          ></img>
        </div>
        <div className="topic__description">
          <p className="phrase">{topic[9].phrase}</p>
          <h2 className="title">{topic[9].title}</h2>
          <p className="categories">{topic[9].categories}</p>
        </div>
      </div>
    </div>
  );
};

export default Herramientas;
