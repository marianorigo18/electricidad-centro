import { topic} from "../exports/data";
import "./Page.css";

const Home = () => {
  
  return (
    <div className="layout">
      <div className="topic__container">
        <div className="topic-container__img">
          <img
            className="topic__img"
            src={topic[1].img}
            alt={topic[1].title}
          ></img>
        </div>
        <div className="topic__description">
          <p className="phrase">{topic[1].phrase}</p>
          <h2 className="title">{topic[1].title}</h2>
          <p className="categories">{topic[1].categories}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
