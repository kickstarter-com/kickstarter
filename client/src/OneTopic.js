import React from 'react';
import './OneTopic.css';

class OneTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                <div>
                   <div className="second-section">                      
                       <div className="second-section-img-div">
                           <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/026/920/261/bc262b06aa26da212fffdb7d0ef589fb_original.png?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1571647553&auto=format&frame=1&q=92&s=05b8ef9e066d9d54f2bced4868115db9"></img>
                       </div>
                       <div className="second-section-link-div">
                           <a href="/">
                               <h3>Make what matters to you, on your own terms.</h3>
                               <p>Launch a project to test a new idea and connect with a community that wants to see it succeed.</p>
                           </a>
                       </div>
                   </div>
                </div> 
                );
    }
}

export default OneTopic;