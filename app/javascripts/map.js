var latitude = 39.547637;
var longitude = -112.8267037;

var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 8
});
}