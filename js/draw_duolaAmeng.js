 window.onload = function(){
    console.log("draw start");
    //初始化canvas
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    
    context.lineWidth = 2;
    context.strokeStyle = "#02172D";
    //head
    context.beginPath();
    context.arc(180,150,110,0,2*Math.PI);
    context.fillStyle = "#2FA2E5";
    context.fill();
    context.stroke();
    //face
    context.beginPath();
    context.arc(180,170,90,0,2*Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    //eye
    context.beginPath();
    context.arc(155,85,25,0,2*Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(205,85,25,0,2*Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(145,90);
    context.quadraticCurveTo(165,60,170,90);
    context.stroke();
    context.beginPath();
    context.moveTo(195,90);
    context.quadraticCurveTo(200,60,220,90);
    context.stroke();
    //nose
    context.beginPath();
    context.arc(180,115,15,0,2*Math.PI);
    context.fillStyle = "#D80020";
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(176,111,6,0,2*Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    context.beginPath();
    context.moveTo(180,130);
    context.lineTo(180,210);
    context.stroke();
    //whiskers
    context.beginPath();
    context.moveTo(160,140);
    context.lineTo(110,110);
    context.stroke();
    context.beginPath();
    context.moveTo(200,140);
    context.lineTo(250,110);
    context.stroke();
    context.beginPath();
    context.moveTo(160,160);
    context.lineTo(80,160);
    context.stroke();
    context.beginPath();
    context.moveTo(200,160);
    context.lineTo(280,160);
    context.stroke();
    context.beginPath();
    context.moveTo(160,180);
    context.lineTo(80,200);
    context.stroke();
    context.beginPath();
    context.moveTo(200,180);
    context.lineTo(280,200);
    context.stroke();
    //mouth
    context.beginPath();
    context.moveTo(125,195);
    context.quadraticCurveTo(175,230,240,195);
    context.stroke();
    //neck
    context.beginPath();
    context.strokeStyle = "#D80020";
    context.lineWidth = 10;
    context.lineCap = "round";
    context.moveTo(110,240);
    context.lineTo(250,240);
    context.stroke();
    //arm
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "#02172D";
    context.moveTo(112,245);
    context.lineTo(75,290);
    context.fillStyle = "#2FA2E5";
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(255,245);
    context.lineTo(285,290);
    context.fillStyle = "#2FA2E5";
    context.fill();
    context.stroke();
    //hand
    context.beginPath();
    context.arc(95,295,23,0,2*Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(268,295,23,0,2*Math.PI);
    context.fill();
    context.stroke();
    //body
    context.beginPath();
    context.moveTo(113,280);
    context.lineTo(113,355);
    context.arcTo(113,365,118,365,10);
    context.lineTo(245,365);
    context.arcTo(255,365,255,355,10);
    context.lineTo(255,278);
    context.arcTo(255,270,280,270,10);
    context.lineTo(273,270);
    context.lineTo(255,245);
    context.lineTo(112,245);
    context.lineTo(85,275);
    context.arcTo(93,270,113,280,10);
    context.closePath();
    context.fillStyle = "#2FA2E5";
    context.fill();
    context.stroke();
    //stomach
    context.beginPath();
    context.arc(185,298,55,0,2*Math.PI);
    context.fillStyle = "#fff";
    context.fill();
    context.stroke();
    //bell
    context.beginPath();
    context.arc(185,260,20,0,2*Math.PI);
    context.fillStyle = "#F9E542";
    context.fill();
    context.stroke();
    context.beginPath();
    context.strokeStyle = "#02172D";
    context.lineWidth = 5;
    context.lineCap = "round";
    context.moveTo(168,253);
    context.lineTo(202,253);
    context.stroke();
    context.beginPath();
    context.arc(185,265,5,0,2*Math.PI);
    context.fillStyle = "#776753";
    context.fill();
    context.lineWidth = 2;
    context.stroke();
    context.beginPath();
    context.moveTo(185,271);
    context.lineTo(185,280);
    context.stroke();
    context.beginPath();
    context.moveTo(145,300);
    context.lineTo(225,300);
    context.arc(185,300,40,0,Math.PI);
    context.stroke();
    //foot
    context.beginPath();
    context.moveTo(185,365);
    context.lineTo(185,395);
    context.lineTo(100,395);
    context.arc(100,380,15,0.5*Math.PI,1.5*Math.PI);
    context.lineTo(275,365);
    context.arc(275,380,15,1.5*Math.PI,0.5*Math.PI);
    context.lineTo(185,395);
    context.lineTo(185,358);
    context.stroke();
    context.beginPath();
    context.moveTo(180,358);
    context.lineTo(190,358);
    context.stroke();


    console.log("draw end");
  }