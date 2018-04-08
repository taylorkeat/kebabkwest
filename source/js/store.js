'use strict';

$(function() {

    // Handle display of store data and bindings for buttons e.g. rating, notes
    const qs = new URLSearchParams(window.location.search);
    const id = parseInt(qs.get('id'));
    const store = kebabShopTestData.find((s) => s.id === id);

    if (typeof(store) === 'undefined') {
        console.warn('Cannot find store with id ' + id);
        // Redirect back to home if fails?
    }
   
    const StoreViewModel = function() {

        this.id = store.id;
        this.name = store.name;
        this.currentAverageRating = ko.observable(store.currentAverageRating);
        this.numberofRatings = ko.observable(store.numberofRatings);
        this.latitude = store.latitude;
        this.longitude = store.longitude;
        this.openingHours = store.openingHours;
        this.comments = ko.observable(store.comments);

        // Handle when the back button is clicked
        this.handleBack = function(event) {

            console.log('Back button clicked ', event);

            

        };

        // Handle when the directions button is clicked
        this.handleDirections = function(event) {

            console.log('Directions button clicked ', event);

        };

        // Handle when the ratings button is clicked
        this.handleRatings = function(event) {

            console.log('Ratings button clicked ', event);

        }

        // Handle when the add note button is clicked
        this.handleAddNote = function(event) {

            console.log('Add Note button clicked ', event);

        }

    };

    ko.applyBindings(new StoreViewModel());

});