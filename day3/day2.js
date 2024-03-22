//let 변하는 상수 const 상수 
// let i = 0;
// const i = 0;

// 0 == "0";
// for (let i = 0; i<3;i++){
//     if(i === "0"){
//        console.log(i);
//     }else if(i===0)console.log(true);
// }
// if("1"==ture)console.log("1 == ture 같다");
// if("true"==true)console.log("true == true 같다")
// 2...100 소수 

for(let i =2; i<100; i++){
    
    let isPrime = true;

            for(let j=2;j<i;j++){

                if(i%j === 0 ){
                                
                    isPrime=false;
                    break;
                }

            }
       
            if(isPrime){
            console.log(i);
        }
       

    }

