// JavaScript Document

var volM = 20, vol=0, volr=0, sil=0, silr=0, silpvm=1, harr=0, harc=1, autoc = true, autos=true;

function harvest(volume){  // Takes in volume, spits out random number of silver, 
  vol = vol - volume;
  return volume*volpvm*random();
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
}

/*while(true){
  update();
}*/

