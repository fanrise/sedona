/* global $ */

var links = $('.mainNav__links');
var toggle = $('.mainNav__toggle');

links.hide();
toggle.on('click', function () {
  $(this).toggleClass('mainNav__toggle--active');
  links.slideToggle();
});

function initMap() {
  var mapCenter = new google.maps.LatLng(34.802138, -111.703206);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 7,
    scrollwheel: false,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: mapCenter,
    icon: {url: '../img/map_marker.png'},
    map: map
  });
}
