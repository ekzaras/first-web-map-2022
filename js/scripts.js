$.getJSON('/data/gardendata.json', function(gardenData) {
  console.log(gardenData)

mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

var cairoCenter = [31.233334, 30.033333]
var map = new mapboxgl.Map({
    container: 'mapContainer', // HTML container id
    style: 'mapbox://styles/mapbox/streets-v9', // style URL
    center: cairoCenter, // starting position as [lng, lat]
    zoom: 11,
});
var popup = new mapboxgl.Popup({
    offset: 40,
  })

    .setHTML('<h3>Cairo</h3>');

//two options for markers
//cairo = [29.329033,29.388738]
  var marker = new mapboxgl.Marker()
      .setlnglat(cairoCenter)
      .setPopup(popup)
      .addTo(map);

  var pointsOfInterest = [
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
  ]
