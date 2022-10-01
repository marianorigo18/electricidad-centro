import {Component} from 'react'

import TopicSection from '../components/TopicSection';
import "./Page.css";

class Home extends Component{
    render(){
        const { topicSection } = this.props
        return(
            <div className='layout'>
                <TopicSection TopicSection={topicSection} />
            </div>
        )
    }
}

export default Home;