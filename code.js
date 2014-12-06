// JavaScript Document

var volM = 20, vol=0, volr=0, sil=0, silpvM=1, harr=0, harc=1, autoc = true, autos=true, harvc = false;
var lvlu1 = 0, lvlu2 = 0, lvlu3 = 0, lvlu4 = 0, pricesil1 = 1, pricesil2 = 1, pricesil3 = 1, pricesil4 = 1, incharr = 1, incsilpvM = 0.5, incvolr = 2, incvolM = 1;

function harvest(volume){  // Takes in volume, spits out random number of silver
  vol = vol - volume;
  return volume*volpvm*random();
}
//upgrades
function upharr(lvlu1){
  sil = sil - pricesil1;
  harr = harr + incharr;
  pricesil1 = Math.pow(pricesil1, 1.3);
  incharr = Math.pow(incharr, 1.3);
}
function upsilpvM(lvlu2){
  sil = sil - pricesil2;
  silpvM = silpvM + incsilpvM;
  pricesil2 = Math.pow(pricesil1, 1.4);
  incsilpvM = Math.pow(incsilpvM, 1.4);
}
function upvolr(lvlu3){
  sil = sil - pricesil3;
  volr = volr + incvolr;
  pricesil3 = Math.pow(pricesil1, 1.3);
  incvolr = Math.pow(involr, 1.3);
}
function upvolM(lvlu4){
  sil = sil - pricesil4;
  volM = volM + incvolM;
  pricesil4 = Math.pow(pricesil1, 1.2);
  incvolM = Math.pow(incvolM, 1.2);
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

