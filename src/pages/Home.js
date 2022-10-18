import { Link } from "react-router-dom";
import { topic } from "../exports/data";
import "./Page.css";

const Home = () => {
  return (
    <div className="layout">
      {topic.map((topic) => (
        <div className="topic__container">
          <div className="topic-container__img">
            <img className="topic__img" src={topic.img} alt={topic.title}></img>
          </div>
          <div className="topic__description">
            <p className="phrase">{topic.phrase}</p>
            <h2 className="title">{topic.title}</h2>
            <p className="categories">{topic.categories}</p>
            <Link to={topic.link} className="topic__link">
              <button className="topic__button">Ver Mas</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
