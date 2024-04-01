import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Box from "./components/Box.jsx";
import Person from './components/Person.jsx';
import PersonAge from './components/PersonAge';
import Conunter from './components/Counter.jsx';

//html 태그를 리턴하는 파일을 jsx

function App() {
  // [변수,set함수 ]= useState(초기값);
  const [width,setWidth]=useState(500);
  const [height,setHeight]=useState(500);
  

  console.log("APP")

  return (
    <div className="App">
      
      <Conunter/>




   



    
     <PersonAge/>
      <input type='number' onChange={( (e) =>{setWidth(e.target.value + "px")})}></input>
      <input type='range' onChange={( (e) =>{setHeight(e.target.value + "px")})}></input>
      <Box width={width} height={height}/>
      <Box width={width} height={height}/>
      
    </div>
  ); 
}

export default App;
