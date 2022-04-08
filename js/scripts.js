$.getJSON('data/gardenrows.json', function(gardenRows) {
    console.log(gardenRows)
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pobm50eDkwaWtvMnZtcHlnOWk5eHB5In0.jfdIdr4Pie4_IpMdk97t8Q'

    var cairoCenter = [31.233334, 30.033333]
    var map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container id
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: cairoCenter, // starting position as [lng, lat]
      zoom: 12.5
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
    });
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
    // function flyToDisplayHistory //fly to each garden when click button and display info in side par
    //   var map = mapboxgl.
     $('#Andalus').on('click', function() {
       map.flyTo({
        center: [31.227425,30.046398],
        zoom: 15,
        });
        $('#main-sidebar-content').hide();
        $('#variable-sidebar-content-andalus').show();
    });
    $('#Horreya').on('click',function(){
      map.flyTo({
        center: [31.226781,30.042847],
        zoom: 15,
      });
    });
    $('#Grotto').on('click',function(){
      map.flyTo({
        center: [31.218619,30.056298],
        zoom: 15,
      });
    });
    $('#Azhar').on('click',function(){
      map.flyTo({
        center: [31.264803,30.040440],
        zoom: 15,
      });
    });
    $('#Manial').on('click',function(){
      map.flyTo({
        center: [31.229068,30.027436],
        zoom: 15,
      });
    });
    $('#Orman').on('click',function(){
      map.flyTo({
        center: [31.213473,30.029225],
        zoom: 15,
      });
    });
    $('#Azbakeya').on('click',function(){
      map.flyTo({
        center: [31.248006,30.051821],
        zoom: 15,
      });
    });
    $('#Zohriya').on('click',function(){
      map.flyTo({
        center: [31.225715,30.046373],
        zoom: 15,
      });
    });
    $('#main-button').on('click',function(){
      $('#main-sidebar-content').show();
      $('#variable-sidebar-content').hide();
    });
})
//fly to garden
