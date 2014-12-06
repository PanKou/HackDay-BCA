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