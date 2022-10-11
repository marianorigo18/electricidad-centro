import { topic } from "../exports/data";
import "./Page.css";

const Conductores = () => {
  return (
      <div className="layout">
        <div className="topic__container">
          <div className="topic-container__img">
            <img
              className="topic__img"
              src={topic[2].img}
              alt={topic[2].title}
            ></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic[2].phrase}</p>
            <h2 className="title" >{topic[2].title}</h2>
            <p className="categories" >{topic[2].categories}</p>
          </div>
        </div>
      </div>
  )
}

export default Conductores

