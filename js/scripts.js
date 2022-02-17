$.getJSON('/data/gardendata.json', function(gardenData) {
$.getJSON('data/gardendata.json',function(gardenData){

mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

var cairoCenter = [31.233334, 30.033333]
var map = new mapboxgl.Map({
    container: 'mapContainer', // HTML container id
    style: 'mapbox://styles/mapbox/dark-v9', // style URL
    center: cairoCenter, // starting position as [lng, lat]
    zoom: 11,
});
gardenData.forEach(function(gardenData) {
var popup = new mapboxgl.Popup({
    offset: 40,
  })
    .setHTML(<p>${gardenData.gardenname}${gardenData.subtext}</p>);

new mapboxgl.Marker()
      .setlnglat([gardenData.longitude, gardenData.latitude])
      .setPopup(popup)
      .addTo(map);
