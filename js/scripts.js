$.getJSON('data/gardenrows.json', function(gardenRows) {
    console.log(gardenRows)
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

    var cairoCenter = [31.233334, 30.033333]
    var map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: cairoCenter, // starting position as [lng, lat]
      zoom: 12
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
    });
map.on('load', () => {
  map.addSource('parkareas',{
    type:'geojson',
    data: './data/parkareas.geojson'
  });

  map.addLayer({
      'id': 'garden-fill-area', //
      'type': 'fill',
      'source': 'parkareas',
      'paint': {
        'fill-color': 'green', //
        'fill-opacity': 0.3,
      }
    })
    map.addLayer({
      'id': 'parkareasline',
      'type': 'line',
      'source': 'parkareas', // reference the data source
      'paint': {
        'line-color': 'black', //
        'line-width': 0.5
        }
      })
    });
})
//fly to garden


 $('#Andalus').on('click', function() {
   map.flyTo({
    center: [31.227425,30.046398],
    zoom: 15,
    });
});
