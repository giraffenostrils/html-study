import { useState } from "react";

const Conunter = ()=>{

    let count = 0;
    const[i,setI]=useState(0);
    const[p,setP]=useState(0);
    const [logs,setLogs]=useState([]);
    const onClickDiv = () =>{ if(p !== 0)setI(i/p);
    else alert("0이 아닌거 넣어주세요.");};

    const onClickAdd = () =>{
        setI(i + p);
        setLogs([...logs,`${i}+${p}=${i + p}`]);
      
    };


    console.log(logs);
     return (

    <div>
        <h1>{count}</h1>
        <button onClick={()=>count++}>up</button>
        <button onClick={()=>console.log(count)}>check</button>
        <h1>{i}</h1>
        <button onClick={()=>setI(i+1)}>up</button>
        <button onClick={()=>console.log(i)}>check</button>
        <input 
        type="number" 
        onChange={
            (e)=>{setP(Number(e.target.value))}
        
           }></input>
    
        <button onClick={onClickAdd}>+</button>
        <button onClick={()=>setI(i-p)}>-</button>
        
        <button onClick={()=>setI(i*p)}>*</button>
           {p !==0 && <button onClick={onClickDiv}>/</button> }
        
        {logs.map((str,i)=>(
            <p key={i}>{str}</p>
        ))}
    </div>

     );
};
export default Conunter;