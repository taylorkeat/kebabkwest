'use strict';

$(function() {

    // Handle display of store data and bindings for buttons e.g. rating, notes
    const qs = new URLSearchParams(window.location.search);
    const id = parseInt(qs.get('id'));
    const store = KebabShopTestData.find((s) => s.id === id);

    if (typeof(store) === 'undefined') {
        console.warn('Cannot find store with id ' + id);
        // Redirect back to home if fails?
    }
   
    const StoreViewModel = function() {

        const self = this;

        self.id = store.id;
        self.name = store.name;
        self.mainImageUrl = store.mainImageUrl;
        self.currentAverageRating = ko.observable(store.currentAverageRating);
        self.numberofRatings = ko.observable(store.numberofRatings);
        self.latitude = store.latitude;
        self.longitude = store.longitude;
        self.openingHours = store.openingHours;
        self.comments = ko.observable(store.comments);

        self.ratingStars = ko.pureComputed(function () {
            return new Array(self.currentAverageRating());
        });

        self.latestComments = ko.pureComputed(function () {
            return self.comments().slice(0, 3);
        });

        // Handle when the back button is clicked
        this.handleBack = function(event) {

            console.log('Back button clicked ', event);

            history.back();

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