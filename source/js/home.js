'use strict';

$(function() {

    const geo = new GeoLocation();
    const maps = new GoogleMaps();

    const MapViewModel = function(mapElement) {

        const self = this;

        self.mapElement = mapElement;

        self.latLong = ko.observable();

        self.latLong.subscribe(function (newPos) {
            console.log('New lat long received ', newPos);
            self.renderMap();
        });

        self.renderMap = function() {
            const latLong = self.latLong();
            maps.render(
                self.mapElement, 
                latLong.lat, 
                latLong.long,
                KebabShopTestData,
                self.handleStoreClick
            );
        };

        self.handleStoreClick = function(event, id) {
            console.log('Store %s clicked', id);
            window.location = 'store.html?id=' + id;
        };

        self.checkSessionForUserLatLong = function() {
            if (typeof(Storage) !== 'undefined' &&
                sessionStorage.getItem('userLatLong') !== null) {
                const userLatLong = JSON.parse(sessionStorage.getItem('userLatLong'));
                console.log('Found user lat long in session ', userLatLong);
                return userLatLong;
            }
            return false;
        },

        self.logUserLatLongInSession = function(userLatLong) {
            if (typeof(Storage) !== 'undefined') {
                console.log('Session storage available');
                sessionStorage.setItem('userLatLong', JSON.stringify(userLatLong));
            }
            else {
                console.warn('Session storage not available');
            }
        },
       
        self.requestGeoLocation = function() {

            const sessionUserLatLong = self.checkSessionForUserLatLong();
            if (sessionUserLatLong) {
                console.log('Found position in session ', sessionUserLatLong);
                self.latLong(sessionUserLatLong);
                return;
            }

            geo.find()
                .then(function (pos) {

                    console.log('Geolocation success! position is ', pos);

                    const userLatLong = {
                        lat: pos.coords.latitude, 
                        long: pos.coords.longitude
                    };

                    self.logUserLatLongInSession(userLatLong);
                    self.latLong(userLatLong);

                }).fail(function(error) {

                    // TODO: This is where we'll handle asking for a specific address

                    if (error.code === GeoLocation.PERMISSION_DENIED) {
                        console.log('User denied');
                    }
                    else {
                        console.warn('Geolocation failed ', error);
                    }

                });
        };

    };
    
    const MapComponent = {
        viewModel: {
            createViewModel: function(params, componentInfo) {
                const mapEl = componentInfo.element.getElementsByClassName('map')[0];
                const vm = new MapViewModel(mapEl);
                vm.requestGeoLocation();
                return vm;
            }
        },
        template: {
            element: 'mapTemplate'
        }
    };

    ko.components.register('mapComponent', MapComponent);
    ko.applyBindings();

});