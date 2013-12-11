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
  layer.addTo(map); // add stamen layer
  snapRetail.addTo(map); // add geojson
});

$.getJSON('http://api.yelp.com/business_review_search?term=yelp&lat=37.788022&long=-122.399797&radius=10&limit=5&ywsid=4nOOVxw6sgu9ex0RMHbi9A', function(data) {
  console.log("businesses");
  console.log(data);

});