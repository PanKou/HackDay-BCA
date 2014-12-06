var dt = 1 / 100;
var fps = 1000;
 
var player_image = new Image();
player_image.src = "Test Sprite.png";
player_points = 0;
player_xvel = 0;
player_yvel = 0;
player_x = 0;
player_y = 540;
player_w = 37;
player_h = 92;
var moveright = false;
var moveleft = false;
var jump = false;
var ground = true;
var screen = 0;
var coincon = false;
 
function scaninput(e) {
    if (window.event) {
        keypress = e.keyCode;
    } else if (e.which) {
        keypress = e.which;
    }
    switch (keypress) {
    case 38: //Up key
//        console.log("you pressed up");
        jump = true;
        break;
    case 39: //Right key
//        console.log("you pressed right");
        moveright = true;
        break;
    case 37: //Left Key
//        console.log("you pressed left");
        moveleft = true;
        break;
    }
}
 
function stopmove(e) {
    if (window.event) {
        keyup = e.keyCode;
    } else if (e.which) {
        keyup = e.which;
    }
    switch (keyup) {
    case 38: // Up
        jump = false;
        break;
    case 39: // Right
        moveright = false;
        break;
    case 37: // Left
        moveleft = false;
        break;
    }
}
 
var update = function () {
 
    if (moveright) {
        player_xvel = 200
    }
    if (moveleft) {
        player_xvel = -200
    }
    if (!moveleft && !moveright) {
        player_xvel = 0
    }
    if (jump && ground) {
        player_yvel = -170
    }
    if (!ground) {
        player_yvel = player_yvel + (196 * dt);
    }
    player_x = player_xvel * dt + player_x;
    player_y = player_yvel * dt + player_y;
    if (player_y > 540) {
        player_y = 540;
        player_yvel = 0;
        ground = true;
    }
    if (jump) {
        ground = false;
    }
    if (player_y === 540) {
        ground = true;
    }
    if (player_x > 800){
        player_x = 0;
        screen++;
    }
    if (player_x < 0){
        player_x = 800;
        screen--;
    }
    if (player_y != 540){
      ground = false;
    }
};

function collobs(x, y, w, h){
    
    if(player_x > x - player_w && player_x < (x+w)){
        if (player_y > y) {
        player_y = y;
        player_yvel = 0;
        ground = true;
    }
      }
      if(player_y < y - h){
        ground = false;
      }
      if(player_y === y - h){
        ground = true;
      }
     else{
      if(player_y < 540){
        if(player_y + h === y){
        ground = false;
        }
    }
  }
}

function coin(x, y, w, h){
  if(player_x > x - player_w && player_x < (x+w)){
    coincon = true;
    alert("Thanks for testing out my broken physics engine!");
  }
}
function draw() {
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");
    context.clearRect(0, 0, 800, 600);
    context.fillStyle = "#4444ff";
    context.fillRect(0, 0, 800, 600);
 
 
    //draw floor
    context.fillStyle = "#000000";
    context.fillRect(0, 540, 800, 40);
 
    //Draw player
    context.save();
    context.translate(player_x, player_y);
    context.drawImage(player_image, 0, -(player_h));
    context.restore();
    
    if (screen < 0){
    context.font = "24px Arial";
    context.fillStyle = "rgba(255, 255, 255, 0.8)";
    context.fillText("Wrong Way! Go right!", 300, 300);
    screen = -1;
    }    if (screen === 0){

    context.font = "24px Arial";
    context.fillStyle = "rgba(255, 255, 255, 0.8)";
    context.fillText("Use the arrow keys to go right!", 300, 300);
    }
    switch (screen) {
      case 1:
        context.fillStyle = "#000000";
        context.fillRect(200, 500, 400, 40);
        collobs(200, 500, 400, 40);
        context.fillRect(250, 450, 100, 50);
        collobs(250, 450, 100, 50);
        break;
      case 2:
        context.fillStyle = "#000000";
        context.fillRect(200, 500, 400, 40);
        collobs(200, 500, 400, 40);
        context.fillRect(250, 450, 350, 50);
        collobs(250, 450, 350, 50);
        context.fillRect(300, 400, 300, 50);
        collobs(300, 400, 300, 50);
        context.fillRect(350, 350, 250, 50);
        collobs(350, 350, 250, 50);
        break;
       case 3:
        context.fillStyle = "#000000";
        context.fillRect(500, 300, 100, 700);
        collobs(500, 300, 100, 700);
        if(!coincon){
          context.font = "24px Arial";
          context.fillStyle = "rgba(255, 255, 255, 0.8)";
          context.fillText("Climb the tower to grab the coin!", 300, 300);
    
          context.fillStyle = "#ffff00";
          context.fillRect(525, 200, 50, 50);
          coin(525, 200, 50, 50);
        break;
        }
        
        break;
    }

}
 
function run() {
    update();
    draw();
//    console.log("x,y" + player_x + ", " + player_y + " xvel:" + player_xvel + " yvel:" + player_yvel + "ground? " + ground);
}
 
_intervalId = setInterval(run, 1000 / fps);