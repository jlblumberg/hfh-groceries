function loadMap(lat, long) {
  var mapOptions = {zoom: 14, center: {lat: lat, lng: long}, mapTypeId: 'roadmap'}

  var map = new google.maps.Map(
    document.getElementById('map'), mapOptions);
  do
}

document.addEventListener('DOMContentLoaded', loadMap())

<script async defer
src="">
</script>

$( document ).ready(function() {
  event.preventDefault();
  var city = $('#current-city').val();
  
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})   