// alert("1234");
// const is = confirm("밥 먹었니");
// console.log(is);

// setTimeout(()=>{alert("hello")},2000);


// const interval = setInterval(()=>{alert("hello")},2000);


// setTimeout(()=>{clearInterval(interval)},5000);

//1초마다 alert("hello")이거 실행 할거고
// 3초마다 confirm("end?") yes 모든것을 종료 시킨다. 



// const hello =setInterval(()=>{alert("hello")},1000);
// const end = setInterval(()=>{
//     if(confirm("hello")){
//         clearInterval(hello);
//         clearInterval(end);
//     }
// },3000);

// const txt =document.getElementById("txt");
// console.log(txt);

// setTimeout(()=>{

//     txt.innerHTML="hello";

// },1000);



// const count = document.getElementById("count");
// let i = 0;

// setInterval(()=>{
//     count.innerHTML = `count: ${i++}${i}`;
// },1000);


const view ={name,win,lose,oddsOfWinning,kda,kill,death,assist};

const oddsOfWinning= (view)=>{return (view.win+view.lose)/view.win;};
const kda = (view)=>{return (view.assist+view.kill)/view.death ;};

 const show = [
{   ...view,
    name:"담원기아",
    win:12,
    lose:6,
    kill:607,
    death:503,
    assist:1386},
 
 
 {  ...view,
    name: "농심",
    win: 12,
    lose: 6,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {...view,
    name: "젠지",
    win: 12,
    lose: 6,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {...view,
    name: "T1",
    win: 11,
    lose: 7,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {...view,
    name: "피어엑스",
    win: 11,
    lose: 7,
    kill: 514,
    death: 568,
    assist: 1223,
  },
  {...view,
    name: "아프리카",
    win: 11,
    lose: 7,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {...view,
    name: "KT",
    win: 7,
    lose: 11,
    kill: 495,
    death: 559,
    assist: 1281,
  },
  {...view,
    name: "한화 생명",
    win: 7,
    lose: 11,
    kda: 2.89,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {...view,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    kill: 483,
    death: 514,
    assist: 1184,
  },
  {...view,
    name: "DRX",
    win: 2,
    lose: 16,
    kill: 377,
    death: 630,
    assist: 858,
  },];
  const show2 = show.map((el)=>({...el,oddsOfWinning:oddsOfWinning(el),kda:kda(el)}));

 const teams = [
    {
      name: "담원 기아",
      win: 12,
      lose: 6,
      kill: 607,
      death: 508,
      assist: 1386,
    },
    {
      name: "농심",
      win: 12,
      lose: 6,
      kill: 589,
      death: 513,
      assist: 1285,
    },
    {
      name: "젠지",
      win: 12,
      lose: 6,
      kill: 605,
      death: 489,
      assist: 1367,
    },
    {
      name: "T1",
      win: 11,
      lose: 7,
      kill: 504,
      death: 447,
      assist: 1190,
    },
    {
      name: "피어엑스",
      win: 11,
      lose: 7,
      kill: 514,
      death: 568,
      assist: 1223,
    },
    {
      name: "아프리카",
      win: 11,
      lose: 7,
      kill: 530,
      death: 489,
      assist: 1324,
    },
    {
      name: "KT",
      win: 7,
      lose: 11,
      kill: 495,
      death: 559,
      assist: 1281,
    },
    {
      name: "한화 생명",
      win: 7,
      lose: 11,
      kda: 2.89,
      kill: 495,
      death: 559,
      assist: 1122,
    },
    {
      name: "OK저축은행",
      win: 5,
      lose: 13,
      kill: 483,
      death: 514,
      assist: 1184,
    },
    {
      name: "DRX",
      win: 2,
      lose: 16,
      kill: 377,
      death: 630,
      assist: 858,
    },
  ];
console.log(show);





const box =document.getElementById("box");
const p = document.createElement("p");
p.innerHTML="hello";
box.append(p)

const tbody = document.getElementById("tbody");
const tr = document.createElement("tr");
