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
  .setHTML(`popupHTML`);
  var popupHTML = `
  <h3>${gardenRow.gardenname}</h3>
  <p><b>History:</b> ${gardenRow.subtext}
  `
  new mapboxgl.Marker()
      .setLngLat([gardenRow.longitude, gardenRow.latitude])
      .setPopup(popup)
      .addTo(map);
})


})
