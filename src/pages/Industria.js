import { Component } from "react";

import TopicSection from '../components/TopicSection';
import "./Page.css";

class Industria extends Component{
    render(){
        return(
            <div className="layout">
                <h1>Industria</h1>
                <TopicSection/>
            </div>

        )
    }
}
export default Industria;