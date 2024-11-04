function initMap() {
    // Ensure that AdvancedMarkerElement is available
    if (typeof google.maps.marker === 'undefined' || typeof google.maps.marker.AdvancedMarkerElement === 'undefined') {
        console.error("AdvancedMarkerElement is not defined. Ensure @googlemaps/marker library is loaded.");
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
}

// Wait until the window has loaded all scripts
window.addEventListener('load', initMap);