const list =[1,4,5,21,42,1,3,57,9,5231]
//짝수인지 아닌지 하나 하나 계산해서 리스트로 만드렁 보여주기 


// const isEvenList = [];


// for (let index = 0; index < list.length; index++) {
   
//     (list[index] % 2 === 0) ? isEvenList.push("true") : isEvenList.push("false");


    
// }
//     console.log(isEvenList);


// map 은 기준 리스트를 가지고 새로운 값이 다른 리스트를 만드는 것 
   const isEvenList = list.map((Element,index,arr)=>{
        console.log(Element,index,arr);
        return Element % 2 ===0;
    });

    console.log(isEvenList);