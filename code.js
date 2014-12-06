// JavaScript Document

var volM = 20, vol=0, volr=0, sil=0, silpvM=1, harr=0, harc=1, autoc = true, autos=true, harvc = false;
var lvlu1 = 0, lvlu2 = 0, lvlu3 = 0, lvlu4 = 0, growr = 1.3;

function harvest(volume){  // Takes in volume, spits out random number of silver
  vol = vol - volume;
  return volume*volpvm*random();
}
//upgrades
function upharr(lvlu1){
  sil = sil - Math.pow(lvlu1, growr);
  harr = harr + Math.pow(lvlu1, growr);
  
}
function upsilpvM(lvlu2){
  sil = sil - Math.pow(lvlu2, growr);
  silpvM = silpvM + Math.pow(lvlu2, growr);
}
function upvolr(lvlu3){
  sil = sil - Math.pow(lvlu3, growr);
  volr = volr + Math.pow(lvlu3, growr);
}
function upvolM(lvlu4){
  sil = sil - Math.pow(lvlu4, growr);
  volM = volM + Math.pow(lvlu4, growr);
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

