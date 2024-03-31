var canvas = document.querySelector('canvas');

console.log("Hello world")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');    // Sky
c.fillStyle = "#58b5e7";
c.fillRect(0, 0, innerWidth, 700);

c.fillStyle = "#2d79a2"     // Ground
c.fillRect(0, 700, innerWidth, 300)

c.arc(1700, 100, 50, 0, Math.PI * 2, false);    // Moon
c.fillStyle = "white";
c.fill();

c.beginPath();  // Mountain
c.moveTo(275, 700);
c.lineTo(675, 100);
c.lineTo(1075, 700);
c.lineTo(275, 700);
c.fillStyle = "#9cdcff";
c.fill();
c.closePath();

c.beginPath();  // Mountain
c.moveTo(225, 700);
c.lineTo(450, 250);
c.lineTo(675, 700);
c.lineTo(225, 700);
c.fillStyle = "#88cef4";
c.fill();
c.closePath();

c.beginPath();  // Mountain
c.moveTo(500, 700);
c.lineTo(825, 200);
c.lineTo(1150, 700);
c.lineTo(500, 700);
c.fillStyle = "#0b5882";
c.fill();
c.closePath();

c.beginPath();  // Mountain
c.moveTo(0, 700);
c.lineTo(225, 300);
c.lineTo(450, 700);
c.lineTo(0, 700);
c.fillStyle = "#0b5882";
c.fill();
c.closePath();

c.beginPath();
c.arc(1900, 600, 400, 0, Math.PI *2, false);    
c.fillStyle = "#2d79a2";
c.fill();

c.beginPath();
c.arc(1600, 700, 300, 0, Math.PI*2, false);    
c.fillStyle = "#2d79a2";
c.fill();

var x1 = 200


for(var j = 0; j<30; j++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight *0.3;
    c.beginPath();
    drawCloud(x, y);
    requestAnimationFrame(drawCloud)

    function animateCloud(){
        drawCloud(x, y);

      x += 1;
      if (cloudX > canvas.width + 100) {
        cloudX = -100;
    }
    requestAnimationFrame(drawCloud)
}

}

let cloudX = -100;
    function drawCloud(x, y) {
      c.beginPath();
      c.arc(x, y, 20, 0, Math.PI * 2);
      c.arc(x + 30, y - 10, 30, 0, Math.PI * 2);
      c.arc(x + 60, y, 25, 0, Math.PI * 2);
      c.fillStyle = '#eee4e480'; // Cloud color
      c.fill();
      c.closePath();
    }

    


  /*  function animateCloud(){
        drawCloud(cloudX, canvas.height * 0.15);

      cloudX += 1;
      if (cloudX > canvas.width + 100) {
        cloudX = -100;
    }
    requestAnimationFrame(drawCloud)
}

animateCloud();
*/


/* var r = Math.random() * 255;
var g = Math.random() * 255;
var b = Math.random() * 255;

for(var i = 0; i <= 3; i++){
    var x = Math.random() * window.innerWidth;
    var top = x + 200;
    var bottom = top + 200;
    c.moveTo(x, 700);
    c.lineTo(top, 600);
    c.lineTo(bottom, 700)
    c.fillStyle = "#0b5882";
    c.fill();
}*/
