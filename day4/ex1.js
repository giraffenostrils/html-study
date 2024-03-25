

const num=[];
for (let index = 0; index < 11; index++) {
 
 
    num.push(index);

}

console.log(num);


num["5"]=10;

console.log(num);

//object { key : value}
const obj = {age : 10, print:()=>console.log(obj["age"])};
obj["name"]= "park";

//Mmp <String,Inteager>map = new HashMap<>();
console.log(obj["name"]);

obj["print"]();


for (let index = 0; index < 11; index++) {
 
 
    obj[index-1]=index;

}

console.log(obj);

const classRoom = {

    students : [{name:"김부자",age:22},
                {name:"조진호",age:22}
        ],
    manager:[{name:"송희",age:30}]

};//json


console.log(classRoom["students"]);

console.log(classRoom["students"][1]["name"]);

console.log(classRoom.students[1].name);

classRoom["num"]=num;

classRoom.num=num;

num[0]= 100;

console.log(classRoom);