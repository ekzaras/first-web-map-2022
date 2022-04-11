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
  <p><b>${gardenRow.gardenname}</b></p>
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
//polygons of present-day garden area
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
    // function flyTo //fly to each garden when click button and display info in side par //looked to renata's work as an example! Also the 'biodiversity in indonesia' map from 2021
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
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-horreya').show();
    });
    $('#Grotto').on('click',function(){
      map.flyTo({
        center: [31.218619,30.056298],
        zoom: 15,
      });
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-grotto').show();
    });
    $('#Azhar').on('click',function(){
      map.flyTo({
        center: [31.264803,30.040440],
        zoom: 15,
      });
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-azhar').show();
    });
    $('#Manial').on('click',function(){
      map.flyTo({
        center: [31.229068,30.027436],
        zoom: 15,
      });
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-manial').show();
    });
    $('#Orman').on('click',function(){
      map.flyTo({
        center: [31.213473,30.029225],
        zoom: 15,
      });
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-orman').show();
    });
    $('#Azbakeya').on('click',function(){
      map.flyTo({
        center: [31.248006,30.051821],
        zoom: 15,
      });
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-azbakeya').show();
    });
    $('#Zohriya').on('click',function(){
      map.flyTo({
        center: [31.225715,30.046373],
        zoom: 15,
      });
      $('#main-sidebar-content').hide();
      $('#variable-sidebar-content-zohriya').show();
    });
    // return to list buttons
    $('#main-button').on('click',function(){
      $('#main-sidebar-content').show();
      $('.variable-sidebar').hide();
      map.flyTo({
        center: [31.233334, 30.033333],
        zoom: 12,
      });
    });
    // $('#main-button-two').on('click',function(){
    //   $('#main-sidebar-content').show();
    //   $('#variable-sidebar-content-horreya').hide();
    // });
    // $('#main-button-azbakeya').on('click',function(){
    //   $('#main-sidebar-content').show();
    //   $('#variable-sidebar-content-azbakeya').hide();
    // });
})
//fly to garden
