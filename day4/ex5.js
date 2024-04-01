const onClickhandler = () => alert("버튼@@");

const inerval=setInterval(() => {
    console.log("interval");
}, 1000);

const closeInterval= () => {
    clearInterval(inerval);
};

const onClickRemove = () => {
    const re = document.getElementById("hide");
    //null,undefined,NaN,0, 
    if(re) return re.remove();
    
    const body = document.getElementsByTagName("body");
    const p = document.createElement("p");
    p.setAttribute("id","hide");
    p.innerHTML="showwwwwwww!";
    body[0].append(p);
  
};