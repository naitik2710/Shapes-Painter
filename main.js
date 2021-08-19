x=document.getElementById("MyCanvas");
a=x.getContext("2d");
x.addEventListener("mousemove",move);
function move(e){
    c=document.getElementById("i2").value;
    s=document.getElementById("i1").value;
    w=document.getElementById("i3").value;

position_x=e.clientX-x.offsetLeft;
position_y=e.clientY-x.offsetTop;

    if(s == "circle"){
        a.beginPath();
a.strokeStyle=c;
a.lineWidth=w;
a.arc(position_x,position_y,50,0,360);
a.stroke();
    }
    if(s == "rectangle"){
        a.beginPath();
a.strokeStyle=c;
a.lineWidth=w;
a.rect(position_x,position_y,500,360);
a.stroke();
    }
    if(s == "square"){
        a.beginPath();
a.strokeStyle=c;
a.lineWidth=w;
a.rect(position_x,position_y,500,500);
a.stroke();
    }

}
function f1(){
    a.clearRect(0,0,300,300);
}