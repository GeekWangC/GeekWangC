const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 600;
const context = canvas.getContext("2d");

	context.lineWidth = 1;
	context.beginPath();
	context.moveTo(50,10);
	context.lineTo(450,10);
	context.stroke();

	context.moveTo(50.5,20.5);
	context.lineTo(450.5,20.5);
	context.stroke();

const drawGrid =(context,color,stepx,stepy)=>{//绘制网格
	context.strokeStyle = color;
	context.lineWidth = 0.5;

	for (var i = stepx+0.5; i <context.canvas.width; i +=stepx) {
		context.beginPath();
		context.moveTo(i,0);
		context.lineTo(i,context.canvas.height);
		context.stroke();
	}

	for (var i = stepy+0.5; i <context.canvas.height; i +=stepy) {
		context.beginPath();
		context.moveTo(0,i);
		context.lineTo(context.canvas.width,i);
		context.stroke();
	}
}

drawGrid(context,"red",10,10);