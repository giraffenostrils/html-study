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
    return a+b;
};

const diff2 =(a,b=2) =>{
    return a-b;
};

console.log(diff2(sum2(diff2(sum2(3)),10,4)));
// console.log(list[0](21));

const multi2 = (a,b=2)=> a*b;
const division2 = (a,b=2) => a/b;

const list = [sum2,diff2,multi2,division2];
let total = 0;
for (let index = 0; index < list.length; index++) {
        total +=list[index](index,10);        
}

console.log(total);

const listSample = [sum2,diff2,multi2,division2,(a) => a*a];

const [sum3,diff3,multi3,division3,pow3] = listSample;


