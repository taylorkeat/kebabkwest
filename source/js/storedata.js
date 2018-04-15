'use strict';
/**
 * This is dummy data for kebab shops to get the prototype up and running.
 * You should be able to add new items to this list and they'll shop up on the map.
 */

const KebabShopTestData = [
    {
        id: 1,
        name: 'Turkish Halal Pide House Yarralumla',
        mainImageUrl: 'img/yarra.png',
        latitude: -35.3073036,
        longitude: 149.0980729,
        currentAverageRating: 5,
        numberofRatings: 42,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: [
            {author: 'Rob', time: '...', comment: 'Kebab was brilliant.'},
            {author: 'Rob', time: '...', comment: "I can't stop eating them."},
            {author: 'Rob', time: '...', comment: "I have to buy new pants this weekend."}
        ]
    },
    {
        id: 2,
        name: 'Charnwood Turkish Pide',
        mainImageUrl: 'img/charnwood.png',
        latitude: -35.2047226,
        longitude: 149.0342812,
        currentAverageRating: 4,
        numberofRatings: 12,
        openingHours: [
            {day: 'Monday', open: '10:00', close: '23:00'},
            {day: 'Tuesday', open: '10:00', close: '23:00'},
            {day: 'Wednesday', open: '10:00', close: '23:00'},
            {day: 'Thursday', open: '10:00', close: '23:00'},
            {day: 'Friday', open: '10:00', close: '23:00'},
            {day: 'Saturday', open: '10:00', close: '23:00'},
            {day: 'Sunday', open: '10:00', close: '23:00'}
        ],
        comments: []
    }
];