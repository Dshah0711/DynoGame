let diano =document.querySelector(".diano");
let score =0;
let flag=true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

let obstacle =document.querySelector(".obstacle");
let msg = document.querySelector(".msg");
let scre =document.querySelector(".score");
document.onkeydown=function(e){
    
    if(e.keyCode===38){
        diano.classList.add("jump");
        setTimeout(()=>{
            diano.classList.remove("jump");
        },600);
    }
    if (e.keyCode == 39) {
        
       let dinoX = parseInt(window.getComputedStyle(diano, null).getPropertyValue('left'));
        diano.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
    
       let dinoX = parseInt(window.getComputedStyle(diano, null).getPropertyValue('left'));
        diano.style.left = (dinoX - 112) + "px";
    }
}
let gameover=()=>{
      msg.innerHTML="you lost! restart to play";
      obstacle.classList.remove("obs");
      audiogo.play();
      setTimeout(() => {
        audiogo.pause();
        audio.pause();
    }, 1000);
     
}
let updateScore=()=>{
   scre.innerHTML=`your score:${score}`;
}
setInterval(()=>{
    
   let dx= parseInt(window.getComputedStyle(diano,"null").getPropertyValue("left"));
   let dy=parseInt(window.getComputedStyle(diano,"null").getPropertyValue("top"));
   let ox= parseInt(window.getComputedStyle(obstacle,"null").getPropertyValue("left"));
   let oy=parseInt(window.getComputedStyle(obstacle,"null").getPropertyValue("top"));
   let offsetX =Math.abs(dx-ox);
   let offsetY=Math.abs(oy-dy);
   aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
   
   
   if(offsetX<73 && offsetY<52){
    gameover();
   }
   else if(offsetX<45 && dy>404 && flag){
    score++;
    flag=false;
    setTimeout(()=>{
        flag=true;
    },1000)
    console.log(`score is ${score}`);
    updateScore(score);
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
    }, 500);
    
   }
   
},10)
