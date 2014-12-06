// JavaScript Document

// CANVAS!
var c = document.getElementById("cv");
var ct = c.getContext("2d");
c.addEventListener('click', on_canvas_click, false);

// Button code
getButtons();

function getButtons(){
	// button 1
	ct.fillStyle = "#000000";
	ct.fillRect(180, 450, 120, 50);
	ct.stroke();
	// button 2
	ct.fillStyle = "#000000";
	ct.fillRect(30, 450, 120, 50);
	ct.stroke();
	// button 3
	ct.fillStyle = "#000000";
	ct.fillRect(330, 450, 120, 50);
	ct.stroke();
}

function changeButtons(s1, s2, s3){

	ct.font = "20pt Arial";
	ct.fillStyle = "#ffffff";
	ct.fillText("Upgrade", 210, 470);

}


function on_canvas_click(ev) {
    var x = ev.clientX - c.offsetLeft;
    var y = ev.clientY - c.offsetTop;

    // ... x,y are the click coordinates relative to the
    // canvas itself
	
	// This is for the button
}