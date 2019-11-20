import React from 'react';
import Nav from './Nav';
import './Login.css';
class Signup extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( <div>
                   <Nav />
                    <div className="login-container"> 
                      <div className="login-div">
                        <div className="login-contant">
                           <h1>Sign Up</h1>
                           <input type="email" name="email" placeholder="Email"></input>
                           <input type="password" name="password" placeholder="Password"></input>
                           
                           <input  value="Sign Up" class="log-but"></input>
                          
                        </div>
                      </div>
                    </div>
                 </div> 
                );
    }
}
 
export default Signup;