// Initialize and add the map
L.mapquest.key = 'wRxlTgJSKje6C9Q5esMeYfz1HRLUaQ0X';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
    center: [12.979599, 77.591566],
    layers: L.mapquest.tileLayer('map'),
    zoom: 13,
    scrollWheelZoom: false,
    draggable: true
});

L.marker([12.979599, 77.591566], {
    draggable: false,
    alt: 'Marker',
    zIndexOffset: 0,
    opacity: 0.8,
    title: "That's Us",
    riseOnHover: true
}).addTo(map);

/* function initMap() {
    // Your location
    const loc = { lat: 12.971599, lng: 77.594566 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
} */

// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('#navbar').style.opacity = 0.95;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 90
            },
            800
        );
    }
});
