/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/

if(Modernizr.canvas){
	// Canvas is supported


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
	var theCanvas1 = document.getElementById("Canvas1");
	if(theCanvas1){
		var ctx1 = theCanvas1.getContext("2d");

		if(ctx1){
			ctx1.strokeStyle = "black";
			ctx1.fillStyle = "blue";
			ctx1.lineWidth = 10;

			ctx1.strokeRect(0,0,50,100);
			ctx1.fillRect(0,0,50,100);
		}
	}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var theCanvas2 = document.getElementById("Canvas2");
	if(theCanvas2){
		var ctx2 = theCanvas2.getContext("2d");

		if(ctx2){
			ctx2.beginPath();
      		ctx2.arc(50, 50, 20, 0, 2 * Math.PI);
		    ctx2.fillStyle = 'rgba(255,0,0,.5)';
      		ctx2.fill();
      		ctx2.lineWidth = 5;
      		ctx2.strokeStyle = 'black';
      		ctx2.stroke();
		}
	}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas3 = document.getElementById("Canvas3");
	if(theCanvas3){
		var ctx3 = theCanvas3.getContext("2d");

		if(ctx3){
      		ctx3.fillStyle = '#335500';

      		ctx3.beginPath();
      		ctx3.moveTo(100,100);
      		ctx3.lineTo(300,100);
      		ctx3.lineTo(125,225);
      		ctx3.lineTo(200,50);
      		ctx3.lineTo(275,225);
      		ctx3.closePath();
      		ctx3.fill();
		}
	}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas4 = document.getElementById("Canvas4");
	if(theCanvas4){
		var ctx4 = theCanvas4.getContext("2d");

		if(ctx4){
			ctx4.fillStyle = 'rgba(255,0,0,.5)';
			ctx4.lineWidth = 5;
      		ctx4.strokeStyle = 'black';
			ctx4.beginPath();
      		ctx4.arc(200, 200, 100, 0, 1 * Math.PI,true);
      		ctx4.bezierCurveTo(100,150,150,150,150,200);
      		ctx4.bezierCurveTo(150,150,200,150,200,200);
      		ctx4.bezierCurveTo(200,150,250,150,250,200);
      		ctx4.bezierCurveTo(250,150,300,150,300,200);
      		ctx4.closePath();

      		ctx4.fill();
      		ctx4.stroke();
		}
	}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas5 = document.getElementById("Canvas5");
	if(theCanvas5){
		var ctx5 = theCanvas5.getContext("2d");

		if(ctx5){
			var theString = "I'm drawing text, man!";

			ctx5.fillStyle = "#e5e5e5";
			ctx5.strokeStyle = "rgba(150,0,0,0.5)";
			ctx5.textBaseline = "middle";
			ctx5.font = "36pt Arial";
			ctx5.fillText(theString, 60, 200);
			ctx5.strokeText(theString, 63, 203);
			

      		ctx5.fill();
      		ctx5.stroke();
		}
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	var theCanvas6 = document.getElementById("Canvas6");
	if(theCanvas6){
		var ctx6 = theCanvas6.getContext("2d");

		if(ctx6){
			var img = document.getElementById("img1");
			img.onload = function(){
				// Image 1
				ctx6.drawImage(img,0,0);

				// Image 2
				ctx6.drawImage(img,0,1100,1650,544);

				// Image 3
				ctx6.drawImage(img,500,500,250,250,250,1700,250,250);


			}
		}
	}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas7 = document.getElementById("Canvas7");
	if(theCanvas7){
		var ctx7 = theCanvas7.getContext("2d");

		if(ctx7){
			ctx7.beginPath();
      		ctx7.arc(350, 350, 250, 0, 2 * Math.PI);
		    ctx7.fillStyle = 'rgba(255,255,0,.5)';
      		ctx7.fill();
      		ctx7.lineWidth = 5;
      		ctx7.strokeStyle = 'black';
      		ctx7.stroke();

      		ctx7.beginPath();
      		ctx7.fillStyle = "black";
      		ctx7.arc(250,300,40,0,2 * Math.PI);
      		ctx7.arc(450,300,40,0,2 * Math.PI);
      		ctx7.fill();

      		ctx7.beginPath();
      		ctx7.moveTo(250,450);
      		ctx7.lineTo(450,450);
      		ctx7.stroke();

      		var img2 = document.getElementById("bandaid");

      		img2.onload = function(){
      			ctx7.drawImage(img2,300,130,160,120)
      		}

		}
	}

// If no Modernizr, do this

} else {
	// Canvas is not supported
	document.getElementById("Canvas1").html("This browser does not support canvas.");
}

