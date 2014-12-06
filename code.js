// JavaScript Document

var volM = 20, vol=0, volr=0, sil=0, silpvM=1, harr=0, harc=1, autoc = true, autos=true, harvc = false;
var lvlu1 = 0, lvlu2 = 0, lvlu3 = 0, lvlu4 = 0;

function harvest(volume){  // Takes in volume, spits out random number of silver
  vol = vol - volume;
  return volume*volpvm*random();
}
//upgrades
function upharr(lvlu1){
  sil = sil - 
  harr = harr + 
  
}
function upsilpvM(lvlu2){
  sil = sil - 
  silpvM = silpvM +   
}
function upvolr(lvlu3){
  sil = sil - 
  volr = volr +   
}
function upvolM(lvlu4){
  sil = sil - 
  volM = volM +   
}

var update = function() {
  if (autoc && vol < volM) {
    vol = vol+volr;
    if (vol>volM) {
      vol = volM;
    }
  }
  if (autos && vol > 0)
  if (autos && vol > harr){
    harvest(harr);
  }
  if (harvc){
    harvest(harc);
  }
}

/*while(true){
  update();
}*/

