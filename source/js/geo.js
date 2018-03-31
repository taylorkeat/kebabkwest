'use strict';

/** 
 * Convenience object to wrap up browser geolocation API.
 */
const GeoLocation = function() {

    this.PERMISSION_DENIED = 1;

    this.find = function() {

        console.log('Getting location from device');
        const self = this;
        const def = $.Deferred();

        // Initially try a high accuracy request
        const highAccuracyGeoLocationOptions = {
            enableHighAccuracy: true,
            timeout: 50000,
            maximumAge: 60000
        };

        // Test for API
        if (navigator.geolocation) {
            console.log('Device has geolocation capabilities');

            const onSuccess = function(pos) {
                console.log('Geolocation success, position is ', pos);
                def.resolve(pos);
            };

            const onFailure = function(error, message) {
                console.warn('Geolocation failure.');
                def.reject(error, message);
            };

            const onHighAccuracyFailure = function(error, message) {

                // If the user denies high accuracy, don't attempt low accuracy
                if (error.code === self.PERMISSION_DENIED) {
                    console.log('User denied geo location');
                    def.reject(error);
                    return;
                }

                // If high accuracy fails, and it wasn't denied by the user
                // then try again with low accuracy.
                console.warn('High accuracy geolocation failed, trying low accuracy ', message);
                const lowAccuracyGeoLocationOptions = $.extend(
                    {}, highAccuracyGeoLocationOptions, {enableHighAccuracy: false}
                );
                navigator.geolocation.getCurrentPosition(
                    onSuccess,
                    onFailure,
                    lowAccuracyGeoLocationOptions
                );
            };

            navigator.geolocation.getCurrentPosition(
                onSuccess, 
                onHighAccuracyFailure, 
                highAccuracyGeoLocationOptions
            );
        }
        else {
            def.reject('Geolocation not available on device');
        }
        return def;
    }
};