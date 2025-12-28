maptilersdk.config.apiKey = maptilerApiKey;

const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.BRIGHT,
    center: Campground.geometry.coordinates, 
    zoom: 10
});

new maptilersdk.Marker()
    .setLngLat(Campground.geometry.coordinates)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 })
            .setHTML(
                `<h3>${Campground.title}</h3><p>${Campground.location}</p>`
            )
    )
    .addTo(map)