import React from 'react';
import Nav from './Nav';
import {Redirect} from 'react-router-dom';
import './Login.css';
class Login extends React.Component {
    onSubmit = () => {   
        return  <Redirect  to="/signup/" />
 }
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
                           <h1>Log in</h1>
                           <input type="email" name="email" placeholder="Email"></input>
                           <input type="password" name="password" placeholder="Password"></input>
                           <p>Forgot your password?</p>
                           <input  value="Log In" className="log-but"></input>
                           <div className="radio">
                           <input type="checkbox" checked></input>
                           </div>
                           <div>
                           <a href="/signup" onClick={this.onSubmit}>Sign up</a>
                           </div>
                        </div>
                      </div>
                    </div>
                 </div> 
                );
    }
}
 
export default Login;