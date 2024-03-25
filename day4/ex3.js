const  students =[{name:"김부자",age:22},
{name:"조진호",age:32},{name:"김세현",age:15},{name:"아희석",age:33}];

//map 

const isAdultList = students.map((el,i,arr)=>{
    
    return{...el,isadult: el.age >19};

});

console.log(isAdultList);


// const ageup = students.map((el,i,arr)=>{
//     return{...el,age: el.age++};

// });

const ageUpFunc= el=> ({...el,age: el.age++})
const ageup = students.map(ageUpFunc);

console.log(ageup);

//filter
const AdultList = students.filter((el,index,arr)=>{
    return el.age > 19;
});
console.log(AdultList)

const kimList = students.filter((el)=>{
    return el.name.startsWith("김");
});
console.log(kimList);

//sort
const ageAsc = students.sort((a,b)=>a.age - b.age);
const nameAsc = students.sort((a,b)=>a.name - b.name);
console.log(ageAsc);
console.log(nameAsc);
