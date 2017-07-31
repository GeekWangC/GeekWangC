const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 600;
const context = canvas.getContext("2d");

let AXIS_MARGIN = 40,
	AXIS_ORIGIN = {x:AXIS_MARGIN,y:canvas.height - AXIS_MARGIN},

	AXIS_TOP = AXIS_MARGIN,
	AXIS_RIGHT = canvas.width - AXIS_MARGIN,

	HORIZONTAL_TICK_SPACING = 10,
	VERTICAL_TICK_SPACING = 10,

	AXIX_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x,
	AXIX_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP,

	NUM_VERTICAL_TICKS = AXIX_HEIGHT /VERTICAL_TICK_SPACING,
	NUM_HORIZONTAL_TICKS = AXIX_WIDTH /HORIZONTAL_TICK_SPACING,

	TICK_WIDTH = 10,
	TICKS_LINEWIDTH = 0.5,
	TICKS_COLOR = "navy",

	AXIS_LINEWIDTH = 1.0,
	AXIS_COLOR = "blue";

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

const drawAxes = ()=>{//绘制轴线
	context.save();
	context.strokeStyle = AXIS_COLOR;
	context.lineWidth = AXIS_LINEWIDTH;

	drawHorizontalAxis();
	drawVerticalAxis();

	context.lineWidth = 0.5;
	context.lineWidth = TICKS_LINEWIDTH;
	context.strokeStyle = TICKS_COLOR;

	drawVerticalAxisTicks();
	drawHorizontalAxisTicks();

	context.restore();
}

const drawHorizontalAxis = ()=>{//绘制水平轴
	context.beginPath();
	context.moveTo(AXIS_ORIGIN.x,AXIS_ORIGIN.y);
	context.lineTo(AXIS_RIGHT,AXIS_ORIGIN.y);
	context.stroke();
}

const drawVerticalAxis = ()=>{//绘制垂直轴
	context.beginPath();
	context.moveTo(AXIS_ORIGIN.x,AXIS_ORIGIN.y);
	context.lineTo(AXIS_ORIGIN.x,AXIS_TOP);
	context.stroke();
}

const drawVerticalAxisTicks = ()=>{//绘制垂直轴刻度
	let deltaX;
	for (var i = 1; i < NUM_VERTICAL_TICKS; ++i) {
		context.beginPath();
		if(i%5 === 0){
			deltaX = TICK_WIDTH;
		}else{
			deltaX = TICK_WIDTH/2;
		}

		context.moveTo(AXIS_ORIGIN.x - deltaX,AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
		context.lineTo(AXIS_ORIGIN.x + deltaX,AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING);
		context.stroke();
	}
}

const drawHorizontalAxisTicks = ()=>{//绘制水平轴刻度
	let deltaY;
	for (var i = 1; i < NUM_HORIZONTAL_TICKS; ++i) {
		context.beginPath();
		if(i%5 === 0){
			deltaY = TICK_WIDTH;
		}else{
			deltaY = TICK_WIDTH/2;
		}

		context.moveTo(AXIS_ORIGIN.x + i*HORIZONTAL_TICK_SPACING,AXIS_ORIGIN.y - deltaY);
		context.lineTo(AXIS_ORIGIN.x + i*HORIZONTAL_TICK_SPACING,AXIS_ORIGIN.y + deltaY);
		context.stroke();
	}
}

drawGrid(context,"lightgray",10,10);
drawAxes();

