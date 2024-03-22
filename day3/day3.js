//lis ,object
//int[] arr = new int [123];
//List<Integer>list = new ArrayList<>();

const list = [];
const list1=[];
// arr[0]= 1;
// list.add(1);

console.log(list);

for(let i=0 ; i<=10;i++){
    list.push(i);

}

// 369 1,2,"짝",4,5,... 10
// console.log(list);

// console.log(list[0]);

for(let i=0 ; i<=10;i++){
    
    if(i !=0 && i%3 === 0){
        console.log("짝");
        list1.push("짝");
        
    }
    else{
        console.log(list[i]);
        list1.push(i);
    }
}

console.log(list1.length);



const list3 =[];
const list369=[];
console.log("369시작")

for (let index = 0; index <= 50; index++) {
    
    list3.push(index)

   
    list3[index].toString().includes("3") || 
    list3[index].toString().includes("6") ||  
    list3[index].toString().includes("9") ?  list369.push(index) :list369.push("짝");
  
        
}

    console.log(list3);
    console.log(list369);