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
            const pos = self.latLong();
            maps.render(
                self.mapElement, 
                pos.coords.latitude, 
                pos.coords.longitude,
                KebabShopTestData,
                self.handleStoreClick
            );
        };

        self.handleStoreClick = function(event, id) {
            console.log('Store %s clicked', id);
            window.location = 'store.html?id=' + id;
        };

        self.requestGeoLocation = function() {

            geo.find()
                .then(function (pos) {
                    console.log('Geolocation success! position is ', pos);
                    self.latLong(pos);
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