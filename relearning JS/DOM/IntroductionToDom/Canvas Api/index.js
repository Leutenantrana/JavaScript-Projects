const canvas = document.querySelector(".myCanvas");


const ctx = canvas.getContext("2d");

// // ctx.fillStyle = "rgb(255, 0, 0)";
// // ctx.fillRect(60, 60, 100, 100);

// // ctx.strokeStyle = "rgb(0, 0, 0)";
// // ctx.lineWidth = 3;
// // ctx.strokeRect(60, 60, 100, 100);

// // ctx.fillStyle = "rgb(0, 255, 0)";
// // ctx.fillRect(75, 75, 100, 100);

// // ctx.strokeStyle = "rgb(0, 0, 0)";
// // ctx.lineWidth = 3;
// // ctx.strokeRect(75, 75, 100, 100);

// // ctx.fillStyle = "rgb(0, 0, 0)";
// // ctx.fillRect(90, 90, 100, 100);

// // ctx.strokeStyle = "rgb(255, 255, 255)";
// // ctx.lineWidth = 3;
// // ctx.strokeRect(90, 90, 100, 100);

// // ctx.fillStyle = "rgb(0, 0, 255)";
// // ctx.fillRect(105, 105, 100, 100);

// // ctx.strokeStyle = "rgb(255, 255, 255)";
// // ctx.lineWidth = 3;
// // ctx.strokeRect(105, 105, 100, 100);

// // ctx.fillStyle = "rgb(0, 0, 255)";
// // ctx.fillRect(245, 105, 100, 100);

// // ctx.fillStyle = "rgb(0, 0, 0)";
// // ctx.fillRect(260, 90, 100, 100);

// // ctx.fillStyle = "rgb(0, 255, 0)";
// // ctx.fillRect(275, 75, 100, 100);

// // ctx.fillStyle = "rgb(255, 0, 0)";
// // ctx.fillRect(290, 60, 100, 100);


// // ctx.strokeStyle = "rgb(0, 0, 0)";
// // ctx.lineWidth = 3;
// // ctx.strokeRect(250, 250, 175, 200);


// // ctx.fillStyle = "rgb(0 0 255 / 10%)";
// // ctx.fillRect(250, 250, 100, 100);

// function degToRad(degrees) {
//     return (degrees * Math.PI) / 180;
// }

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);

// ctx.lineTo(150, 50);


// const triHeight = 50 * Math.tan(degToRad(60));
// ctx.lineTo(100, 50 + triHeight);

// ctx.lineTo(50, 50);
// ctx.fill();

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// ctx.fill();

// ctx.fillStyle = "rgb(155 200 255 / 50%)";
// ctx.beginPath();

// ctx.arc(300, 300, 50, degToRad(0), degToRad(360));
// ctx.fill();

// ctx.fillStyle = "rgb(155 200 255 / 40%)";
// ctx.beginPath();
// ctx.arc(300, 300, 40, degToRad(0), degToRad(360));
// ctx.fill();

// ctx.fillStyle = "rgb(155 200 255 / 60%)";
// ctx.beginPath();
// ctx.arc(300, 300, 30, degToRad(0), degToRad(360));
// ctx.fill();

// ctx.fillStyle = "rgb(155 200 255 / 70%)";
// ctx.beginPath();
// ctx.arc(300, 300, 20, degToRad(0), degToRad(360));
// ctx.fill();

// ctx.fillStyle = "rgb(155 250 255 / 80%)";
// ctx.beginPath();
// ctx.arc(300, 300, 10, degToRad(0), degToRad(360));
// ctx.fill();

// ctx.fillStyle = "rgb(155 250 255 / 80%)";
// ctx.beginPath();
// ctx.arc(250, 40, 50, degToRad(-45), degToRad(45));
// ctx.lineTo(250, 40);
// ctx.fill();


// ctx.fillStyle = "rgb(0 0 0 / 50%)";
// ctx.beginPath();
// ctx.arc(500, 100, 50, degToRad(0), degToRad(360));
// ctx.lineTo(550, 200);
// ctx.lineTo(450, 200);
// ctx.lineTo(450, 100);
// ctx.fill();


// ctx.fillStyle = "rgb(0 0 0 / 50%)";
// ctx.beginPath();
// ctx.beginPath();
// ctx.arc(500, 500, 50, degToRad(90), degToRad(270));
// ctx.lineTo(700, 450);
// ctx.lineTo(700, 500);
// ctx.arc(700, 500, 50, degToRad(-90), degToRad(90));
// ctx.lineTo(500, 550);
// ctx.fill();



// ctx.fillStyle = "rgb(0 0 0 / 50%)";
// ctx.beginPath();
// ctx.beginPath();
// ctx.arc(600, 400, 50, degToRad(180), degToRad(360));
// // ctx.lineTo(650, 400);
// ctx.lineTo(650, 600);
// ctx.lineTo(600, 600)
// ctx.arc(600, 600, 50, degToRad(0), degToRad(180));
// ctx.lineTo(550, 400);
// ctx.fill();

// ctx.strokeStyle = "black";
// ctx.lineWidth = 2;
// ctx.font = "90px arial";
// ctx.strokeText("Canvas text", 90, 90);

// ctx.strokeStyle = "brown";
// ctx.lineWidth = 2;
// ctx.font = "90px arial";
// ctx.strokeText("I love Coding", 90, 190);

// ctx.strokeStyle = "brown";
// ctx.lineWidth = 2;
// ctx.font = "90px arial";
// ctx.strokeText("I love JavaScript ", 90, 270);


// ctx.fillStyle = "black";
// ctx.font = "90px arial";
// ctx.fillText("I am loving Canvas Api", 90, 360);

// ctx.fillStyle = "black";
// ctx.font = "50px arial";
// ctx.fillText("Dude It's getting interesting", 70, 450);

// canvas.setAttribute("aria-label", "I love Coding");

// const image = new Image();
// image.src = "firefox.png";
// image.addEventListener("load", () => ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175));

// canvas.setAttribute("aria-label", "Firefox Logo");



ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);