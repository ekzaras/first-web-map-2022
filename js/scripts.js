$.getJSON('/data/gardendata.json', function(gardenData) {
$.getJSON('data/gardendata.json',function(gardenData){

mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pxbHJuYzAzOWFzMm9xcmthNHhnOGFkIn0.GQ6837HQ8L2Jym-fwcXT5A'

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

      var gardenData = [
        {//come up with data format for this
          lngLat: [31.227425,30.046398],//an array]
          popupHtml: ['Al Andalus Garden'],
          subText: 'Built by Zulfugar Pasha in 1929'
        },
        {//come up with data format for this
          lngLat: [31.226781,30.042847],//an array]
          popupHtml: ['Al Horreya Garden'],
          subText: 'Originally part of larger green space of Gezira before development'
        },
        {//come up with data format for this
          lngLat: [31.218619,30.056298],//an array]
          popupHtml: ['Aquarium Grotto Garden'],
          subText: 'Originally part of larger green space of Gezira before development'
        },
        {//come up with data format for this
          lngLat: [31.218619,30.056298],//an array]
          popupHtml: ['Al Azhar Park'],
          subText: 'Originally part of larger green space of Gezira before development'
        },
        {//come up with data format for this
          lngLat: [31.218619,30.056298],//an array]
          popupHtml: ['Manial Garden'],
          subText: 'Originally part of larger green space of Gezira before development'
        },
        {//come up with data format for this
          lngLat: [31.218619,30.056298],//an array]
          popupHtml: ['Orman Botanical Garden'],
          subText: 'Originally part of larger green space of Gezira before development'
        },
      ]
