let score = JSON.parse(localStorage.getItem('score')) ||
{ Wins: 0, Loses: 0, Draws: 0 };
updatescore();
showtheresult();
showthemoves();
function updatescore()
{document.querySelector('.paragraph').innerHTML = ` wins : ${score.Wins} , loses : ${score.Loses} , draws : ${score.Draws}`;}
function a() {
 const x = Math.random();
   if (x >= 0 && x < 1/3) { y='Scissor';}
   else if (x >=1/3 && x<2/3) {y='Rock';}
   else if (x >=2/3 && x<1) { y='Paper';}
   return  y ;
}
let isAutoPlaying = false
let intervalId;

function autoPlay(){
  if (!isAutoPlaying){ 
   intervalId = setInterval(function() {
    const c=a();
    b(c);
   },2000);
   isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
   }
}
function b(c) {
 a();
 let r='';
   if (c==='Paper')
   {
   if ( y==='Scissor') {r= 'YOU LOST'}
   else if (y==='Rock') {r='YOU WON' } else {r='DRAW'}
   }
   else if (c==='Scissor') 
   {
   if (y==='Rock'){r='YOU LOST'}
   else if (y==='Paper'){r='YOU WON'} else {r='DRAW'}
   } 
   else if (c==='Rock') 
   {
   if (y==='Paper') {r='YOU LOST'}
   else if (y==='Scissor'){r='YOU WON'} else {r='DRAW'}
   }
   if (r==='YOU WON') { score.Wins += 1; }
   else if (r==='YOU LOST') { score.Loses += 1; }
   else if (r==='DRAW') { score.Draws += 1; }    
   localStorage.setItem('score',JSON.stringify(score));
   updatescore();
   showtheresult();
   showthemoves();
   function showtheresult()
   {document.querySelector(".result").innerHTML= `${r}` ;}
   function showthemoves() 
   {document.querySelector(".moves").innerHTML = `YOUR MOVES : <img src="${c}.jpg" alt=""> <img src="${y}.jpg" alt=""> : COMP MOVES`;}
}
function onkey(event) {
  if (event.key ='P') {
    b('Paper');
  } else if  (event.key = 'O') {
    b('Rock');
  } else if (event.key='I') {
    b('Scissor');
  }
}