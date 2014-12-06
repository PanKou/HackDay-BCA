// JavaScript Document

// CANVAS!
var c = document.getElementById("cv");
var ct = c.getContext("2d");
c.addEventListener('click', on_canvas_click, false);

// Button code
ct.fillStyle = "#000000";
ct.fillRect(0, 0, 50, 50);


function on_canvas_click(ev) {
    var x = ev.clientX - Game.canvas.offsetLeft;
    var y = ev.clientY - Game.canvas.offsetTop;

    // ... x,y are the click coordinates relative to the
    // canvas itself
	
	// This is for the button
}