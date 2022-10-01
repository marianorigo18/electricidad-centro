import { Component } from "react";

import "./TopicSection.css"

class TopicSection extends Component{
    render(){
        return(
            <div className="topic__container">
                <div className="topic__img"></div>
                <div className="topic__description">Topic Description</div>
            </div>
        )
    }
}

export default TopicSection;