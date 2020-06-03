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
require("maps/user_location.js")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

var infoWindow
var map

window.loadMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 51.509865, lng: -0.118092 },
    mapTypeId: 'roadmap'
  });

  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  infoWindow = new google.maps.InfoWindow();

  var request = {
    query: 'Sainsburys',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.textSearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
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
      const openingHours = place.opening_hours.weekday_text.join(" | ")
      infoWindow.setContent(`
        <h3>${place.name}</h3>
        <p>${place.formatted_address}</p>
        <strong><p>Key hours:</p>
        <div>Elderly and disabled: Mon/Wed/Fri: 8 - 9am</div><br />
        <div>NHS & Social Care Workers: Mon - Sat: 7.30 - 8am</div></strong><br />
        <p>All hours:</p>
        <p>${openingHours}</p>
        <a href="${place.website}">Store website</a>`);
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
        callback(place)
      }
  })
}




function geocodeAddress(geocoder, resultsMap) {
var address = document.getElementById('address').value;
geocoder.geocode({'address': address}, function(results, status) {
  if (status === 'OK') {
    resultsMap.setCenter(results[0].geometry.location);
    var marker = new google.maps.Marker({
      map: resultsMap,
      position: results[0].geometry.location
    });
  } else {
    alert('Geocode was not successful for the following reason: ' + status);
  }
});
}