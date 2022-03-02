$.getJSON('data/gardenrows.json', function(gardenRows) {
    console.log(gardenRows)
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

    var cairoCenter = [31.233334, 30.033333]
    var map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container id
      style: 'mapbox://styles/mapbox/dark-v9', // style URL
      center: cairoCenter, // starting position as [lng, lat]
      zoom: 11
    });
    map.addSource(
      "type":"Feature",
      "id":"OrmanToday",
      "properties":{
        "name":"OrmanOutline"},
      "geometry":{
        "type":"Polygon",
        "coordinates":[
          [
            [31.210404,30.029536],
            [31.210566,30.028884],
            [31.211418,30.027986],
            [31.211666,30.027932],
            [31.215556,30.028503],
            [31.216100,30.028957],
            [31.216080,30.030074],
            [31.215976,30.030218],
            [31.215155,30.030510],
            [31.214854,30.030758],
            [31.210404,30.029536],
            ]]}})
  map.addLayer({
  'id': 'OrmanToday',
  'type': 'fill',
  'source': 'OrmanToday', // reference the data source
  'layout': {},
  'paint': {
  'fill-color': '#0080ff', // blue color fill
  'fill-opacity': 0.5
  }
  });
  // Add a black outline around the polygon.
  map.addLayer({
  'id': 'outline',
  'type': 'line',
  'source': 'OrmanToday',
  'layout': {},
  'paint': {
  'line-color': '#000',
  'line-width': 2
  }
  });
  });

//popups for Gardens
gardenRows.forEach(function(gardenRow){
  var popup = new mapboxgl.Popup({offset: 40})
  .setHTML(`
  <h3>${gardenRow.gardenname}</h3>
  <p><b>History:</b> ${gardenRow.subtext}
  `);
  new mapboxgl.Marker()
      .setLngLat([gardenRow.longitude, gardenRow.latitude])
      .setPopup(popup)
      .addTo(map);
})


})
