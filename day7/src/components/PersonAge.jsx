import { useState } from "react";
import Person from "./Person";

const PersonAge = ()=> {
  
    const [age,setAge]=useState(22);
    console.log("PersonAge")

    return(
        <>
        <input type='nunber' onChange={((e) =>{setAge(e.target.value)})}></input>
        <Person age={age}/>
        <Person age={age}/>    
        <Person age={age}/>
        </>
    );
};

export default PersonAge;