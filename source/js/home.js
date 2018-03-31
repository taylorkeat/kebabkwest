'use strict';

$(function() {

    /**
     * This is dummy data for kebab shops to get the prototype up and running.
     * You should be able to add new items to this list and they'll shop up on the map.
     */
    const kebabShopTestData = [
        {
            id: 1,
            name: 'Turkish Halal Pide House Yarralumla',
            latitude: -35.3073036,
            longitude: 149.0980729,
            rating: 5
        },
        {
            id: 2,
            name: 'Charnwood Turkish Pide',
            latitude: -35.2047226,
            longitude: 149.0342812,
            rating: 5
        }
    ];

    /**
     * This initialises the main google maps 'map' with the starting lat/long
     */
    const initGoogleMaps = function(lat, long) {

        console.log('Initialising google maps API with ', lat, long);

        const userLatLong = new google.maps.LatLng(lat, long);

        const mapOptions = {
            zoom: 15,
            center: userLatLong,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log('Map options ', mapOptions);

        // Render the map into the DOM element #map
        const mapEl = $("#map").get(0);
        const map = new google.maps.Map(mapEl, mapOptions);

        // Set up boundaries so the map zooms to the added kebab shops
        // and they're not off screen
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(userLatLong);

        // Add the user marker to the map
        console.log('Adding user marker');
        const userMarker = new google.maps.Marker({
            position: userLatLong,
            map: map
        });

        // Add each kebab shop to the map for now
        console.log('Adding kebab shop markers');
        kebabShopTestData.forEach(function (k) {

            const shopLatLong = new google.maps.LatLng(k.latitude, k.longitude);
            // Extend bounds dynamically for each shop
            bounds.extend(shopLatLong);

            console.log('Adding shop %s (%s) at %s,%s', k.name, k.id, k.latitude, k.longitude);
            const shopMarker = new google.maps.Marker({
                position: shopLatLong,
                title: k.name,
                label: k.name,
                map: map
            });

       });

       map.fitBounds(bounds);
       console.log('Finished map initialisation');

    };

    console.log('Attempting geolocation ');
    const geo = new GeoLocation();
    geo.find()
        .then(function (pos) {
            console.log('Geolocation success! position is ', pos);
            initGoogleMaps(pos.coords.latitude, pos.coords.longitude);
        })
        .fail(function(error) {
            if (error.code === GeoLocation.PERMISSION_DENIED) {
                console.log('User denied');
            }
            else {
                console.log('Geolocation failed ', error);
            }
        });

});