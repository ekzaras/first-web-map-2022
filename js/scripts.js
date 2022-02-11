mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

var map = new mapboxgl.Map({
  container: 'mapContainer', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [31.233334, 30.033333], // starting position as [lng, lat]
  zoom: 10
});

var popup = new mapboxgl.Popup({ offset: 40 })

  .setHTML()

//two options for markers
var cairoZoom = [29.329033,29.388738]
var marker = new mapboxgl.Marker({
  color: # //come back to this
})
  .setlnglat([29.329033,29.388738])
  .setPopup(popup)
  .addTo(map);

var pointsOfInterest = [
  {//come up with data format for this
    lngLat: [//an array]
    popupHtml: []
    subText: 'This is new'
  }
]

pointsOfInterest.forEach(function(pointOfInterest){
  var popup = new mapboxgl.Popup({ offset: 40 })
  .setHTML(`
    <h3>$(pointOfInterest.popup.Html`)</h3>);
    <p>$(pointOfInterest)

  new mapboxgl.Marker()
  .setLngLat (pointOfInterest.lnglat)
  .addTo(map);
})
