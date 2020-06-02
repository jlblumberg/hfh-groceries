// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import '../stylesheets/application'
import 'bootstrap'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


var infoWindow
var map

window.loadMap = function(lat,lng) {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center:  {lat: lat, lng: lng},
    mapTypeId: 'roadmap'
  });

  infoWindow = new google.maps.InfoWindow();

  var request = {
    query: 'Sainsburys',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.textSearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results)
      for (var i = 0; i < results.length; i++) {
        getPlaceDetails(results[i],createMarker);
      }
      map.setCenter(results[0].geometry.location);
    }
  });

}

  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      const openingHours = place.opening_hours.weekday_text.join("\n")
      infoWindow.setContent(`<h3>${place.name}</h3><p>${place.formatted_address}</p><p>${openingHours}</p>`);
      infoWindow.open(map, this);
    });
  }

  function getPlaceDetails(place,callback) {

    var request = {
      placeId: place.place_id
    };

    var service = new google.maps.places.PlacesService(map);

    service.getDetails(request, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(place)
        callback(place)
      }
  })
}
