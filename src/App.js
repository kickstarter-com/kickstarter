import React from 'react';
import './App.css';
import $ from "jquery";
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


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      articls:[]
     }
}

componentDidMount(){
  this.retriveData();
}


updateState(data){
  this.setState({
    articls: data
  })  
}

//------retrive Data---------
retriveData(){
  
  var that = this;
  //var path = window.location.href.split("=");
  //var article_id = path[1];
  $.ajax({
    url: "/",
    method: "GET",
    success: function(data){
      that.updateState(data)
      console.log(data)
    },
    error: function(error){
      console.log(error);
    }
  })
}

render() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
      <Nav />
      <Recommend />
      <OneTopic />
      <SliderPart articls ={this.state.articls}/>
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
}

export default App;

