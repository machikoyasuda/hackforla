console.log('\'Allo \'Allo!');

// Load Stamen map, toner layer
var layer = new L.StamenTileLayer("toner");

// Center map in Los Angeles, zoomed into level 12
var map = new L.Map("map", {
    center: new L.LatLng(34.071781, -118.291664),
    zoom: 12
});
map.addLayer(layer);