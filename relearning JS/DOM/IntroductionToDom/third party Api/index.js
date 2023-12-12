L.mapquest.key = 'eBttINJOOgcOCCkjUFmnCNJfqNi3KJ6r';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
    center: [30.4095, 79.333],
    layers: L.mapquest.tileLayer('light'),
    zoom: 12

});
map.addControl(L.mapquest.control({
    position: "bottomright"
}));


L.marker([40, 30], {
        icon: L.mapquest.icons.marker({
            primaryColor: "#22407F",
            secondaryColor: "#3B5998",
            shadow: true,
            size: "md",
            symbol: "A",
        }),
    })
    .bindPopup("This is Manchester!")
    .addTo(map);