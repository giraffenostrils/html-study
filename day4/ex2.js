const  students =[{name:"김부자",age:22},
{name:"조진호",age:32},{name:"김세현",age:15},{name:"정희석",age:33}
];

for (let index = 0; index < students.length; index++) {
    


    students[index].age= students[index].age+1;
     //  students[index].age++;
};


console.log(students);


const ageup = [];

// for (let index = 0; index < students.length; index++) {
  
//     const obj = {name:students[index].name,age:students[index].age +1}
//     ageup.push(obj);
// }

console.log(" 2.spread 구문(전개구문) ...");
// 2.spread 구문(전개구문) ...
for (let index = 0; index < students.length; index++) {
  
    const obj = { ...students[index],age:students[index].age +1}
    ageup.push(obj);
}



console.log(ageup);

console.log(" {...students[0]}");
console.log({...students[0]});

console.log(" {...students[0],age:students[0].age+1}");
console.log({...students[0],age:students[0].age+1});

//배열로 해당 값을 변수 선인 및 값을 저장하는 함 
const [b,jh]=students;

console.log(b,jh);
// 배열 생성 과 동시에 정보를 받을 필드를 만들고  값이 있는 객체정보를 기재하면 해당 정보를 받아 생성 가능  
const{name,age}=jh;
console.log(name,age);


for (let index = 0; index < students.length; index++) {
    const student = students[i];   
    const{age} = student;
    const obj = { ...students[index],age:students[index].age +1}
    ageup.push(obj);
}

const isAdultList =[];



for (let index = 0; index < students.length; index++) {
    
    const student = students[i];   
    
    isAdultList.push({...students[index]}, isAdult: student[index].age >19) ;

   
};

console.log(isAdultList);