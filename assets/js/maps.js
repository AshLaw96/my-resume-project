// Define initMap as a global function by attaching it to the window object
window.initMap = function() {
    // Check if AdvancedMarkerElement is defined
    if (typeof google === 'undefined' || typeof google.maps === 'undefined' || typeof google.maps.marker === 'undefined' || typeof google.maps.marker.AdvancedMarkerElement === 'undefined') {
        console.error("AdvancedMarkerElement is not available. Please ensure the @googlemaps/marker library is loaded.");
        return;
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 46.619261, lng: -33.134766 }
    });

    const locations = [
        { lat: 51.537286, lng: -0.109414 },
        { lat: 53.483959, lng: -2.244644 },
        { lat: 53.376604, lng: -1.466491 },
        { lat: 53.801277, lng: -1.548567 }
    ];

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: location,
            label: labels[i % labels.length],
        });
    });

    new markerClusterer.MarkerClusterer({ map, markers });
};
