const follower=document.getElementById("follower");
const body= document.getElementById("body");
const box1=document.getElementsByClassName("box-1")[0];
const box2=document.getElementsByClassName("box-2")[0];
const box3=document.getElementsByClassName("box-3")[0];
const box4=document.getElementsByClassName("box-4")[0];





function mouse(details) {
     follower.style.left=details.clientX +"px";
     follower.style.top=details.clientY+"px";
     if (details.clientX<=800) {
          body.style.backgroundColor="red";
          follower.style.backgroundColor="lightblue";
          const degZ=details.clientX*0.025;
          box1.style.transform=`rotateZ(${degZ}deg)`;
          box2.style.transform=`rotateZ(${degZ}deg)`;
          box3.style.transform=`rotateZ(${degZ}deg)`;

          box4.style.transform=`rotateZ(${degZ}deg)`;



     }
     else if (details.clientX>800) {
          body.style.backgroundColor="lightblue";
          follower.style.backgroundColor="red";

     }

    

}
body.addEventListener("mousemove",mouse)