mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

var map = new mapboxgl.Map({
  container: 'mapContainer', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [31.233334, 30.033333], // starting position as [lng, lat]
  zoom: 10
});
