import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [stage, setStage] = useState(0)
  return (
    <div className="content">
      <text className='q1'>If someone sent you this it's because you hold a special place in their heart. And they want to let you know that...</text>
      {stage > 0 ?<text className='q1'>You are loved...</text>: <></>}
      {stage > 1 ?<text className='q1'>You are beautiful...</text>: <></>}
      {stage > 2 ?<text className='q1'>You are kind...</text>: <></>}
      {stage > 3 ?<text className='q1'>You are Barack Obama, the 44th president of the United States...</text>: <></>}
      {stage > 4 ?<img className='img1' src = {require("./obamaquirky.png")}></img>: <></>}
      {stage > 5 ?<text className='q1'>Haha <it>quirky</it>.</text>: <></>}
      {stage > 6 ?<text className='q1'>You rock.</text>: <></>}
      {stage > 7 ?<img className='img1' src = {require("./barock.png")}></img>: <></>}
      {stage > 8 ?<text className='q1'>You make me happy...</text>: <></>}
      {stage > 9 ?<text className='q1'>You make me proud...</text>: <></>}
      {stage > 10 ?<text className='q1'>You inspire me...</text>: <></>}
      {stage > 11 ?<text className='q1'>I love you Barock...</text>: <></>}
      {stage > 12 ?<text className='q1'>This is everything I wish I told you...</text>: <></>}
      { stage < 13 ? <button className = "link" onClick={() => {setStage(stage+1)}}>Next</button>:
      <a className ='link' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">Next</a>
        }
    </div>
  );
}

export default App;
