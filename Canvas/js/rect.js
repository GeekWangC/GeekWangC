const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 800;
const context = canvas.getContext("2d");
const gradient = context.createLinearGradient(0,0,canvas.width,0);
	gradient.addColorStop(0,"blue");
	gradient.addColorStop(0.25,"white");
	gradient.addColorStop(0.5,"purple");
	gradient.addColorStop(0.75,"red");
	gradient.addColorStop(1,"yellow");

const gradient1 = context.createLinearGradient(0,0,0,canvas.height);
	gradient1.addColorStop(0,"blue");
	gradient1.addColorStop(0.25,"white");
	gradient1.addColorStop(0.5,"purple");
	gradient1.addColorStop(0.75,"red");
	gradient1.addColorStop(1,"yellow");

const gradient2 = context.createLinearGradient(0,0,canvas.width,canvas.height);
	gradient2.addColorStop(0,"blue");
	gradient2.addColorStop(0.25,"white");
	gradient2.addColorStop(0.5,"purple");
	gradient2.addColorStop(0.75,"red");
	gradient2.addColorStop(1,"yellow");

const rGradient = context.createRadialGradient(canvas.width/2,canvas.height,10,canvas.width/2,0,100);
	rGradient.addColorStop(0,"blue");
	rGradient.addColorStop(0.25,"white");
	rGradient.addColorStop(0.5,"purple");
	rGradient.addColorStop(0.75,"red");
	rGradient.addColorStop(1,"yellow");


context.lineJoin = "round";
context.lineWidth = 30;

context.font = "24px Helvetica";
context.fillText("click anywhere to erase",175,200);

context.strokeStyle = "goldenrod";
context.fillStyle = gradient;//"rgba(0,0,255,.5)";
context.strokeRect(75,100,200,200);
context.fillRect(325,100,200,200);
context.fillStyle = gradient1;//"rgba(0,0,255,.5)";
context.fillRect(75,350,200,200);
context.fillStyle = gradient2;//"rgba(0,0,255,.5)";
context.fillRect(325,350,200,200);
context.fillStyle = rGradient;
context.fillRect(0,0,canvas.width,canvas.height);
canvas.addEventListener("mousedown",function(){
	context.clearRect(0,0,canvas.width,canvas.height);
})