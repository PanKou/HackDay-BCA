// Upgrade Levels
var upgradeLevels = [0, 0, 0, 0];
//var sil = sil;

// Stats
	// Clouds
		// # of clouds - vol
	// Rates
		// Clouds per second - volr
		// Harvest rate - harr
		// Silver per minute - silpvM


// Menus
var currentMenuId = "m";

// CANVAS!
var c = document.getElementById("cv");
var ct = c.getContext("2d");
c.addEventListener('click', on_canvas_click, false);
loadScript("code.js", init());
// Button code
getButtons();
changeButtons("-", "Upgrade", "-");
getSilver();

// Test loading script from something else
//loadScript("code.js", alert(volM));

// Update everything
//var weird = 1;
//while(weird == 1){
var intv = window.setInterval(updateStuff(), 100);
//}

// I mean update EVERYTHING!
function updateStuff(){
	getSilver();
	getStats();
	//alert("weee");
}
function rainClouds(){
	var cx = getRandomArbitrary(0, 196) + 40;
	var cy = getRandomArbitrary(0, 270) + 142;
	ct.drawImage(document.getElementById("cloud"), cx, cy, 40, 40);
}
// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// 490x256
// 262 initial height
// 10 initial width
var intv_cloudcreate;
function getStats(){
	
	ct.clearRect(330, 90, 500, 100);
	// Stats!!!
	var numClouds = vol;
	var cloudsPerSec = volr;
	var harvestRate = harr;
	var silverPerMin = silpvM;
	
	// Display on screen for "data nerds"
	// number of silver
	ct.font = "12pt Arial";
	ct.fillStyle = "#000000";
	ct.fillText(("Statistics"), 330, 90);
	ct.fillText(("Number of Clouds: " + vol), 330, 110);
	ct.fillText(("Harvest Rate/sec: " + harr), 330, 130);
	ct.fillText(("Silver per Second: " + silpvM), 330, 150);
	ct.fillText(("Clouds per Second: " + harc), 330, 170);
	window.clearInterval(intv_cloudcreate);
	for(var i = 0; i <= volr; i++){
		intv_cloudcreate = window.setInterval(rainClouds(), 1000);
	}
}

function getSilver(){
	ct.clearRect(300, 30, 500, 90);
	//var sil = sil;
	// number of silver
	ct.font = "30pt Arial";
	ct.fillStyle = "red";
	ct.fillText((sil + " silver"), 300, 70);
}


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

function getPrices(s1, s2){
	// clear everything
	ct.clearRect(30, 390, 500, 40);
	
	// price 1
	ct.font = "10pt Arial";
	ct.fillStyle = "blue";
	ct.fillText(s1, 30, 430);
	// price 2
	ct.font = "10pt Arial";
	ct.fillStyle = "blue";
	ct.fillText(s2, 180, 430);
	
	
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
    var x1 = ev.clientX - c.offsetLeft;
    var y1 = ev.clientY - c.offsetTop;
	// This is for the button click testing
	//alert("clicked button");
	clickButton(x1, y1);
	//alert("x " + x1 + "y " + y1);
    // ... x,y are the click coordinates relative to the
    // canvas itself
	
	//alert('yay');
	
	
}

function clickButton(x, y){
	// get silver prices as strings
	//alert(volM);
	//var s1 = loadScript("code.js", alert(volM));
	//var s2 = loadScript("code.js", pricesil2);
	//var s3 = loadScript("code.js", pricesil3);
	//var s4 = loadScript("code.js", pricesil4);
	//alert(s1);
	//alert(pricesil1);
	//alert("click");
	// button testing for x and y
	// center button
	if((x >= 30 && x <= 150) && (y >= 450 && y <= 500)){
		//alert("left button clicked");
		
		// If first button in first upgrade menu
		
		if(currentMenuId == "u1"){
			// Buy upgrade [1, 1]
			//var numSil = sil;
			// Price of upgrade 1 is sufficient enough for the silver
			if(sil >= pricesil1){
				alert("Purchase successful!");
				
				getPrices(String(pricesil1) + " silver", String(pricesil2) + " silver");
				upgradeLevels[0]++;
				//alert(sil);
				//alert(pricesil1);
				//sil = sil - pricesil1;
				loadScript("code.js", upharr());
				updateStuff();
			}
			else{
				alert("You don't have enough silver! :(");	
			}
		}
		// Do purchase [2, 1]
		else if(currentMenuId == "u2"){
			// Buy upgrade [2, 1]
			//var numSil = sil;
			// Price of upgrade 2 is sufficient enough for the silver
			if(sil >= pricesil3){
				alert("Purchase successful!");
				
				getPrices(String(pricesil3) + " silver", String(pricesil4) + " silver");
				upgradeLevels[2]++;
				
				//sil = sil - pricesil3;
				loadScript("code.js", upvolr());
				updateStuff();
				
			}
			else{
				alert("You don't have enough silver! :(");	
			}
		}
		
	}
	else if((x >= 180 && x <= 300) && (y >= 450 && y <= 500)){
		//alert("upgrade button clicked");
		
		// Set upgrade menu
		if(currentMenuId == "m"){
			//alert(String(pricesil1) + "silver");
			getPrices(String(pricesil1) + " silver", String(pricesil2) + " silver");
			setMenu("u1");	
			
		}
		
		// Do purchase [1, 2]
		else if(currentMenuId == "u1"){
			// Buy upgrade [1, 2]
			//var numSil = sil;
			// Price of upgrade 2 is sufficient enough for the silver
			if(sil >= pricesil2){
				alert("Purchase successful!");
				
				getPrices(String(pricesil1) + " silver", String(pricesil2) + " silver");
				upgradeLevels[1]++;
				
				//sil = sil - pricesil2;
				loadScript("code.js", upsilpvM());
				updateStuff();
			}
			else{
				alert("You don't have enough silver! :(");	
			}
		}
		// Do purchase [2, 2]
		else if(currentMenuId == "u2"){
			// Buy upgrade [2, 2]
			//var numSil = sil;
			// Price of upgrade 2 is sufficient enough for the silver
			if(sil >= pricesil4){
				alert("Purchase successful!");
				
				getPrices(String(pricesil3) + " silver", String(pricesil4) + " silver");
				upgradeLevels[3]++;
				//alert(sil);
				//sil = sil - pricesil4;
				loadScript("code.js", upvolM());
				updateStuff();
				
				
				
				
			}
			else{
				alert("You don't have enough silver! :(");	
			}
		}
		
	}
	
	else if((x >= 330 && x <= 450) && (y >= 450 && y <= 500)){
		//alert("right button clicked");
		
		// Set second upgrade menu
		if(currentMenuId == "u1"){
			getPrices(String(pricesil3) + " silver", String(pricesil4) + " silver");
			setMenu("u2");
			
		}
		else if(currentMenuId == "u2"){
			setMenu("m");
			getPrices("", "");
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


// Load thy code script!
// http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}