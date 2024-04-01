import { useState } from "react";


const Person = ({age})=>{


    
     const [name,setNname]= useState("ㅇㄹㄷㄹ");
    
    console.log("Person");
    return(
    <>
        <input onChange={( (e) =>{setNname(e.target.value)})}></input>
      
        <p>이름: {name}</p>
        <p>나이: {age}</p>
    </>    
    );
};

export default Person;