// JavaScript Document

var currentMenuId = "m";

// CANVAS!
var c = document.getElementById("cv");
var ct = c.getContext("2d");
c.addEventListener('click', on_canvas_click, false);

// Button code
getButtons();
changeButtons("-", "Upgrade", "-");

function getButtons(){
	// clear everything
	
	ct.clearRect(30, 450, 500, 100);
	
	/*ct.clearRect(30, 450, 120, 50);
	
	ct.clearRect(180, 450, 120, 50);
	
	ct.clearRect(330, 450, 120, 50);*/
	
	// button 1 - middle
	ct.fillStyle = "#000000";
	ct.fillRect(30, 450, 120, 50);
	ct.stroke();
	// button 2 - left
	ct.fillStyle = "#000000";
	ct.fillRect(180, 450, 120, 50);
	ct.stroke();
	// button 3 - right
	ct.fillStyle = "#000000";
	ct.fillRect(330, 450, 120, 50);
	ct.stroke();
}

function changeButtons(s1, s2, s3){
	
	// button 1
	ct.font = "20pt Arial";
	ct.fillStyle = "#ffffff";
	ct.fillText(s1, 30, 480);
	// button 2
	ct.font = "20pt Arial";
	ct.fillStyle = "#ffffff";
	ct.fillText(s2, 180, 480);
	// button 3
	ct.font = "20pt Arial";
	ct.fillStyle = "#ffffff";
	ct.fillText(s3, 330, 480);
	ct.stroke();
}

// http://eli.thegreenplace.net/2010/02/13/finding-out-the-mouse-click-position-on-a-canvas-with-javascript
function on_canvas_click(ev) {
    var x = ev.clientX - c.offsetLeft;
    var y = ev.clientY - c.offsetTop;
	//alert("x " + x + "y " + y);
    // ... x,y are the click coordinates relative to the
    // canvas itself
	
	
	
	// This is for the button click testing
	clickButton(x, y);
}
function clickButton(x, y){
	
	// button testing for x and y
	// center button
	if((x >= 30 && x <= 150) && (y >= 110 && y <= 160)){
		//alert("left button clicked");
	}
	else if((x >= 180 && x <= 300) && (y >= 110 && y <= 160)){
		//alert("upgrade button clicked");
		
		// Set upgrade menu
		if(currentMenuId == "m"){
			setMenu("u1");	
		}
	}
	
	else if((x >= 330 && x <= 450) && (y >= 110 && y <= 160)){
		//alert("right button clicked");
		
		// Set second upgrade menu
		if(currentMenuId == "u1"){
			setMenu("u2");
		}
		else if(currentMenuId == "u2"){
			setMenu("m");
		}
	}
	
	
}

function setMenu(menuName){
	var upgradeBtns1 = ["HpS", "Volume", "Next"];
	var upgradeBtns2 = ["VpS", "Max SpV", "Back"];
	var menuBtns = ["-", "Upgrade", "-"];
	var mainMenuId = "m";
	var upgradeId = "u1";
	var upgradeId2 = "u2";
	
	getButtons();
	
	if(menuName == mainMenuId) changeButtons(menuBtns[0], menuBtns[1], menuBtns[2]);
	else if(menuName == upgradeId) changeButtons(upgradeBtns1[0], upgradeBtns1[1], upgradeBtns1[2]);
	else if(menuName == upgradeId2) changeButtons(upgradeBtns2[0], upgradeBtns2[1], upgradeBtns2[2]);
	
	currentMenuId = menuName;
	
}
