function loadMarkers() {
  // this will reassign to a parameter once we take a location from user
  var startingPos = {lat: 51.509865, lng: -0.118092}

  fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=sainsburys&location=${startingPos[lat]},${startingPos[lng]}&radius=10000&key=placeholder`)
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=sainsburys&location=51.509865,-0.118092&radius=1000&key=placeholder
}