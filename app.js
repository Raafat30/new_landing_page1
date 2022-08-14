

let circle = document.getElementById('circle');
let UpBtn = document.getElementById('UpBtn');
let DownBtn = document.getElementById('DownBtn');




let rotateValue = circle.style.transform;
let rotateSum;

UpBtn.onclick = function(){


  rotateSum = rotateValue + "rotate(-90deg)";

  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  
}

DownBtn.onclick = function(){


  rotateSum = rotateValue + "rotate(90deg)";

  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  
}


