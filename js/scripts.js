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
      'id': 'garden-fill-area', //administrative regional data from https://geodata.lib.utexas.edu/catalog/stanford-zh558jw1809
      'type': 'fill',
      'source': 'parkareas',
      'paint': {
        'fill-color': 'green', // blue color fill
        'fill-opacity': 0.5,
      }
    })
    map.addLayer({
      'id': 'parkareasline',
      'type': 'line',
      'source': 'parkareas', // reference the data source
      'paint': {
        'line-color': '#0080ff', // blue color fill
        'line-width': 0.5
        }
      })
    });
})
