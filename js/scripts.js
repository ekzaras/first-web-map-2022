$.getJSON('/data/gardendata.json', function(gardenData) {
  console.log(gardenData)

    mapboxgl.accessToken = 'pk.eyJ1IjoiZWt6YXJhcyIsImEiOiJja3pxbHJuYzAzOWFzMm9xcmthNHhnOGFkIn0.GQ6837HQ8L2Jym-fwcXT5A'

    var cairoCenter = [31.233334, 30.033333]
    var map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container id
      style: 'mapbox://styles/mapbox/dark-v9', // style URL
      center: cairoCenter, // starting position as [lng, lat]
      zoom: 11
    });
//popups for Gardens
gardenData.forEach(function(gardenData){
var popupHTML = `
  <h3>${gardenData.gardenname}</h3>
  <p><b>History:</b> ${gardenData.subtext}
`
});

var popup = new mapboxgl.Popup({offset: 40})
.setHTML(popupHTML);

// Set all markers to medium green
var color = '#7EB851'

new mapboxgl.Marker()
      .setlnglat([gardenData.longitude, gardenData.latitude])
      .setPopup(popup)
      .addTo(map);
   })
})
