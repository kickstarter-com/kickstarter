import React from 'react';
import './Nav.css';
import {Redirect} from 'react-router-dom';
class Nav extends React.Component {
  onSubmit = () => {   
        return  <Redirect  to="/login/" />
 }
    constructor(props) {
        super(props);
        this.state = { 
            navLinks: ['Arts',
            'Comics & Illustration',
            'Design & Tech',
            'Film',
            'Food & Craft',
            'Games',
            'Music',
            'Publishing'] 
      }
    } 
 render() {   
  return (
    <div className="Navbar">
  
      <div className="Upper-nav">

       <div className="Nav-link">  
         <a href="/">Explore</a>
         <a href="/">Start a project</a>
       </div> 

       <div className="Nav-logo">
         <a href="/"><img alt="sorry" src="../kickstarter-logo.png"></img></a> 
       </div>

       <div className="Nav-login">
         <a href="/">Search</a>
         
         <a href="/login" onClick={this.onSubmit}>Log in</a>
         
       </div>

      </div>


      <div className="Upper-nav Lower-nav">
        <ul>
            {this.state.navLinks.map(item =>{
                return <a href="/" key={item}>{item}</a>
            })}    
        </ul>
      </div>
    </div>
  );
}
}

export default Nav;