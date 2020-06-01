function loadMap() {

  var startingPos = {lat: 51.509865, lng: -0.118092}
  var mapOptions = {zoom: 14, center: startingPos, mapTypeId: 'roadmap'}

  var map = new google.maps.Map(
    document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker(
    {position: startingPos, map: map}
  );

}
