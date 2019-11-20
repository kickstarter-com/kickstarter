import React from 'react';
import './App.css';
import Nav from './Nav';
import Recommend from './Recommend';
import OneTopic from './OneTopic';
import SliderPart from './SliderPart';

function App() {
  return (
    <div className="App">
      <Nav />
      <Recommend />
      <OneTopic />
      <SliderPart />
    </div>
  );
}

export default App;
