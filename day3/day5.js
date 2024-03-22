//java script(x) java(type) 
//java 어떤 기능 을 호출하려면 
//method 
//js function
//public int sum(int a, int b){
//    return a+b;
// }
function sum(a,b){
    return a+b;
}

function diff(a,b){

    return a-b;
}

console.log(sum(1,2),diff(2,1));
console.log(diff(sum(1,2),1));

const sum1 = (a,b=1)=> {
    return a+b;
}

const diff1 = (a,b)=> a-b;


const division = (a,b) =>{
    const sum=() => a+b;
         
    
    return sum()/b;
};

console.log(division(1,3));
console.log(sum1(1));


const sum2 = (a,b=2) => {
    return a+b
};

const diff2 =(a,b=2) =>{
    return a-b
};




console.log(diff2(sum2(diff2(sum2(3)),10,4))) ;


