import { Component } from "react";

import TopicSection from '../components/TopicSection';
import "./Page.css"

class Iluminacion extends Component{
    render(){
        return(
            <div className="layout">
                <h1>Iluminacion...</h1>
                <TopicSection/>
            </div>
        )
    }
}
export default Iluminacion;