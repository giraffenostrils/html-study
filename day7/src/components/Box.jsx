import { useState } from "react";


//컴포넌트 파리미터 propss(객체)
const Box = ({width,height}) =>{
    const [color,setColor]=useState("black")

    console.log("width","height");

    return(
     <>
        <input type='color' onChange={( (e) =>{setColor(e.target.value)})}></input>

        
        <div 
        style={{
            width,
            height,
            backgroundColor:color,
        }}
        ></div>
       
    </>
    );
};
export default Box;