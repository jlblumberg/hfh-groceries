window.loadMarkers = async () => {
  try {
    // this will reassign to a parameter once we take a location from user
    var startingPos = {lat: 51.509865, lng: -0.118092}
    var response = fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=sainsburys&location=${startingPos.lat},${startingPos.lng}&radius=1000&key=${process.env.MAPS_API_KEY}`)
    // https://maps.googleapis.com/maps/api/place/textsearch/json?query=sainsburys&location=51.509865,-0.118092&radius=1000&key=placeholder
    // response.catch(response => console.log(response))
    console.log('response: ',response);
    console.log('response results: ',response.results);
    console.log('response results name: ',response.results.name);
  } catch (error) {
    console.log('error: ', error)
    throw new Error(error);
  }
} 

export default loadMarkers;
