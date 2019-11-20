import React from 'react';
import './App.css';
import Nav from './Nav';
import Recommend from './Recommend';
import OneTopic from './OneTopic';
import SliderPart from './SliderPart';
import Login from './Login'
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Nav />
      <Recommend />
      <OneTopic />
      <SliderPart />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
      <Signup />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
