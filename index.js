var n;
n=Math.floor(Math.random()*6)+1;

var image;
image="images/"+"dice"+n+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",image);


var m;
m=Math.floor(Math.random(m)*6)+1;

var image;
image="images/"+"dice"+m+".png";


var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",image);

var res;
res=document.querySelector("h1");
if(n>m)
{
  res.innerHTML="player 1 has won";
}
else if(n==m)
{
  res.innerHTML="Try again";
}
else{
  res.innerHTML="player 2 has won";
}
