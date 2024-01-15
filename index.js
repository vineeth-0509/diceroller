const myButton=document.getElementById("myButton");
const label1=document.getElementById("myLabel1");
const label2=document.getElementById("myLabel2");
const label3=document.getElementById("myLabel3");
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min;
    randomNum2=Math.floor(Math.random()*max)+min;
    randomNum3=Math.floor(Math.random()*max)+min;
    label1.textContent=randomNum1;
    label2.textContent=randomNum2;
    label3.textContent=randomNum3;
}
/*
echo "# diceroller" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vineeth-0509/diceroller.git
git push -u origin main
*/