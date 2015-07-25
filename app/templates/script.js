Array.prototype.insert=function(index,item){
		this.splice(index,0,item);
};
	var tool;
	var cord={};
	var movestate=false;
	var color="red";
	var savepoints=[];
	var savecount=-1;
	var pointersize=1;
	var ol=[];
	function ollist(){
		var x=JSON.stringify(ol);
		alert(x);
	};
	
	function settool(x){
		console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',tool)
		tool=x;
	};
	function savestate(){
		var l=document.getElementById("a").toDataURL();
		savepoints.insert(savecount+1,l);
		savecount++;
	};
	
	
	
	
	function setstart(event){
		console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
		if(tool=="eraser" || tool=="pen")
			movestate=true;
		c=document.getElementById("a");
		cord.sx=event.clientX-c.getBoundingClientRect().left;
		cord.sy=event.clientY-c.getBoundingClientRect().top;
	};
	function setend(event){
                movestate=false;
                c=document.getElementById("a");
                cord.ex=event.clientX-c.getBoundingClientRect().left-cord.sx;
                cord.ey=event.clientY-c.getBoundingClientRect().top-cord.sy;
		drawshape(event);
		if(tool=="pen" || tool=="eraser")
			savestate();
        };
	function drawshape(event){
		var b_canvas = document.getElementById("a");
                var b_context = b_canvas.getContext("2d");
		b_context.fillStyle=color;
		b_context.strokeStyle=color;
		b_context.lineWidth=pointersize;
		b_context.beginPath();
		if(tool=="rect"){
			b_context.strokeRect(cord.sx,cord.sy,cord.ex,cord.ey);
			b_context.stroke();
			ol.push({type:'rectangle',start:[cord.sx,cord.sy],spec:[cord.ex,cord.ey],color:color});
		};
		if(tool=="fillrecr"){
                        b_context.fillRect(cord.sx,cord.sy,cord.ex,cord.ey);
			ol.push({type:'fillrectangle',start:[cord.sx,cord.sy],spec:[cord.ex,cord.ey],color:color});
                };
		if(tool=="circle" || tool=="filledcircle"){
		       var radius=Math.sqrt(Math.pow(cord.ex,2)+Math.pow(cord.ey,2));
		       b_context.beginPath();
                       b_context.arc(cord.sx,cord.sy,radius,0,Math.PI*2,false);
		       if(tool=="circle")
		       		b_context.stroke();
		       else
				b_context.fill();
			ol.push({type:tool,centre:[cord.sx,cord.sy],radius:radius,color:color});
                };
		if(tool=="text"){
			var text=document.getElementById("textbox").value;
			var size=Math.sqrt(Math.pow(cord.ex,2)+Math.pow(cord.ey,2));
			b_context.font =size+"px Arial";
			console.log(cord);
			if(cord.ey>=0)
				b_context.textBaseline = "top";
			else
				b_context.textBaseline = "bottom";
			b_context.fillText(text,cord.sx,cord.sy);
			ol.push({type:tool,start:[cord.sx,cord.sy],size:size,color:color,content:text});
		};
		if(tool=="line"){
                	x=event.clientX-c.getBoundingClientRect().left;
                	y=event.clientY-c.getBoundingClientRect().top;
			b_context.moveTo(cord.sx,cord.sy);
			b_context.lineTo(x,y);
			b_context.stroke();
			ol.push({type:tool,start:[cord.sx,cord.sy],end:[x,y],color:color});
			b_context.closePath();
		};
		if(tool!="pen" && tool!="eraser")
			savestate();
	};
	//function clearscreen(){
                var b_canvas = document.getElementById("a");
                b_canvas.width = b_canvas.width;
        };
	
