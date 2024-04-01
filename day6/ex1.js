//변수 선언 const
let text = "hi";
text = 1;

// function sum (a,b){
//     return a+b;
// }

const sum = (a,b)=>{
    return a+b;
};

const diff = (a,b)=>{
    return a-b;
};


console.log(sum("hi",2));
//console.log(diff("hi",2));

const print=(i)=>{
    console.log("print");
    return i ===2;
}
if(print(2)||print(3)){

}
//f && b , f || b   앞에 조건이 먼저 확인하여 이후 뒤에 조건이 진행이 되는 점을 알아야 한다. 


const arr =[1,2,3,4,5];

arr.sort // sort
arr.map //원본을 가공 할때 
arr.filter // filter

const obj = {
    name:"박미람",
    age: 24,
    gender:2,
    toString:()=>`${obj.name} ${obj.age} ${obj.gender === 1 ? "남":"여"}`, // 함수 경우 호출될때 안에 함수를 시작하는 부분으로 오류가 발생되지 않는다.
}
const g = obj.gender === 1 ? "남":"여";

console.log(obj.toString());

console.log(obj.address);// undefined
//console.log(obj.address.city);//Cannot read properties of undefined (reading 'city')
console.log(obj.address && obj.address.city && obj.address);
console.log(obj.address? obj.address.city : obj.address);
console.log(obj.address?.city);

const arr2 = ["김부자","김세현","김재민"];
const [p1,p2,p3] = arr2;

const obj2 = {
    name:"박미람",
    age: 24,
    gender:2,
    toString:()=>`${obj.name} ${obj.age} ${obj.gender === 1 ? "남":"여"}`, // 함수 경우 호출될때 안에 함수를 시작하는 부분으로 오류가 발생되지 않는다.
};

const {name,age,gender}= obj2;

const makePerson = (name,age) => {
    return { name ,age};
};

console.log(makePerson("이수진",20));

const isAdult = ({name,age})=>{
    return {name,age, isAdult: age >20};
};

const 이수진 = makePerson("이수진",20);
isAdult(이수민.name, 이수진.age);

