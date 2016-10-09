// Stats
	// Clouds
		// # of clouds - vol
	// Rates
		// Clouds per second - volr
		// Harvest rate - harr
		// Silver per minute - silpvM

var volM, vol, volr, intialSil, sil, silpvM, harr, harc, autoc, autos, harvc;
var pricesil1, pricesil2, pricesil3, pricesil4, incharr, incsilpvM, incvolr, incvolM;
var totalVol;

function init(){
	volM = 20, vol=0, volr=0, sil=0, silpvM=1, harr=0, harc=1, autoc = true, autos=true, harvc = false;
	pricesil1 = 1, pricesil2 = 1, pricesil3 = 1, pricesil4 = 1, incharr = 1.2, incsilpvM = 0.5, incvolr = 2, incvolM = 1;
}


//sil = initialSil;

function harvest(volume){  // Takes in volume, spits out random number of silver
  vol = vol - volume;
  totalVol = volume*silpvM*((Math.random() * 100) / 100);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
//upgrades
function upharr(){
  sil -= pricesil1;
  harr = harr + incharr;
  if(pricesil1 == 1) pricesil1 = 2;
  else{
	  pricesil1 = Math.round(Math.pow(pricesil1, 1.3) * 100) / 100;
	  incharr = Math.round(Math.pow(incharr, 1.3) * 100) / 100;
  }
  //alert(Math.pow(pricesil1, 1.3));
}
function upsilpvM(){
  sil -= pricesil2;
  silpvM = silpvM + incsilpvM;
  if(pricesil2 == 1) pricesil2 = 2;
  else{
	  pricesil2 = Math.round(Math.pow(pricesil2, 1.4) * 100) / 100;
	  incsilpvM = Math.round(Math.pow(incsilpvM, 1.4) * 100) / 100;
  }
}
function upvolr(){
  sil -= pricesil3;
  volr = volr + incvolr;
  if(pricesil3 == 1) pricesil3 = 2;
  else{
	  pricesil3 = Math.round(Math.pow(pricesil3, 1.3) * 100) / 100;
	  incvolr = Math.round(Math.pow(incvolr, 1.3) * 100) / 100;
  }
}
function upvolM(){
  sil -= pricesil4;
  volM = volM + incvolM;
  if(pricesil4 == 1) pricesil4 = 2;
  else{
	  pricesil1 = Math.round(Math.pow(pricesil4, 1.2) * 100) / 100;
	  incharr = Math.round(Math.pow(incvolM, 1.2) * 100) / 100;
  }
}

var update = function() {
  if (autoc && vol < volM) {		
    vol += volr;
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
