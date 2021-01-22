


function setTime(){
  const now=new Date();
//   second hand
  const seconds=now.getSeconds();
  const secondDegree=((seconds/60)*360+90);
  const secondhand=document.querySelector('.sec-hand');
  secondhand.style.transform=`rotate(${secondDegree}deg)`;

// minute hand
  
  const minhand=document.querySelector('.min-hand');
  const mins=now.getMinutes();
  const minDegree=((mins/60)*360+90);
  minhand.style.transform=`rotate(${minDegree}deg)`;

//  hour hand 
  const hourhand=document.querySelector('.hour-hand');
  const hour=now.getHours();
  const hourDegree=((hour/12)*360+90);
  hourhand.style.transform=`rotate(${hourDegree}deg)`;
  

  
  



}
setInterval(setTime,1000);
