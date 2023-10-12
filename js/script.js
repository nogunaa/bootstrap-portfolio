// leaflet map
var map = L.map('map').setView([39.74, -104.99], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"></a>'
}).addTo(map);

var marker = L.marker([39.74, -104.99]).addTo(map);
marker.bindPopup("<b>Hello! <br> I live here").openPopup();

// Using LeafLet open source Js map I've added an interactive map to my portfolio. 