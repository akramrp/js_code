var hits = 0;
var missed = 0; 
function Shoot()
{
   var bullet = document.getElementById("bullet");
   bullet.offsetTop=330;
   var target = document.getElementById("target");
   bullet.style.display="inherit";
   var bPos = 331;
   var t = setInterval(moveBullet,5);
   
   function moveBullet()
   {
     if(bPos < 30)
     {
      clearInterval(t);
      bullet.style.display="none";
      missed++;
     }
       else
     {
      var sameX = (bullet.offsetTop>=36) && (bullet.offsetTop <= 70);
      var sameY = (target.offsetLeft >=90)&&(target.offsetLeft <=150);
       if(!(sameX && sameY))
       {
        bPos -= 3;
        bullet.style.top = bPos +"px";
        var yb = bPos + "px";         
       }
       else
       {
         clearInterval(t);
         bullet.style.display="none";
         hits++;
        /*Made by Elizabeth Espíndola, please don't copy */ document.getElementById("explode").style.visibility="inherit";
         setTimeout(function(){ document.getElementById("explode").style.visibility="hidden"; },800)
       }   
      } document.getElementById("hits").innerHTML= "Hits: "+hits;
      document.getElementById("missed").innerHTML="Missed: "+missed;
   }
};

function ThankYou(){
  alert("I can't believe this is the code of the day!! :O \nThank you so much all of you for your support!! (^-^)/");
  alert("Please check out the newest version :D");
}