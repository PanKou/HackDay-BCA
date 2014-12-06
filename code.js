// JavaScript Document

var volM = 20, vol=0, vols=0, sil=0, sils=0, silpvm=1, harr=0; harc=1; auto=true;

function harvest(volume){  // Takes in volume, spits out random number of silver, 
  vol = vol - volume;
  return volume*volpvm*random();
}
var update = function() {
  if (auto){
    harvest(harr);
  }
}

// CANVAS!
var c = document.getElementById("cv");
var ct = c.getContext("2d");
c.addEventListener('click', on_canvas_click, false);

// Button code
ct.beginPath();
ct.fillRect(0, 0, 50, 50);


function on_canvas_click(ev) {
    var x = ev.clientX - Game.canvas.offsetLeft;
    var y = ev.clientY - Game.canvas.offsetTop;

    // ... x,y are the click coordinates relative to the
    // canvas itself
	
	// This is for the button
}
