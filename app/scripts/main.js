console.log('\'Allo \'Allo!');

// Center map in Los Angeles, zoomed into level 12
var map = new L.Map("map", {
    center: new L.LatLng(34.04, -118.20),
    zoom: 14
});

// Load Stamen map, toner layer
var layer = new L.StamenTileLayer("toner");

//Add GeoJSON layer
$.getJSON('map.geojson', function(data) {
  var snapRetail = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.boyle);
    }
  });
  layer.addTo(map); // add Stamen layer
  snapRetail.addTo(map); // add GeoJSON
});

// Lookup all buses on line 'X'.
var transitLine = 'X';
var transitRef = new Firebase('https://publicdata-transit.firebaseio.com/lametro');
var lineIndex = transitRef.child('index').child(transitLine);
lineIndex.on('child_added', function(snapshot) {
    var id = snapshot.name();
    transitRef.child('data').child(id).on('value', busUpdated);
});
lineIndex.on('child_removed', function(snapshot) {
    var id = snapshot.name();
    transitRef.child('data').child(id).off('value', busUpdated);
});

function busUpdated(snapshot) {
    // Bus line 'X' changed location.
    var info = snapshot.val();
    // Retrieve latitude/longitude with info.lat/info.lon.
}
