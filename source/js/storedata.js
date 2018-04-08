'use strict';
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
        currentAverageRating: 5,
        numberofRatings: 42,
        openingHours: {
            'Monday': {open: '10:00', close: '23:00'},
            'Tuesday': {open: '10:00', close: '23:00'},
            'Wednesday': {open: '10:00', close: '23:00'},
            'Thursday': {open: '10:00', close: '23:00'},
            'Friday': {open: '10:00', close: '23:00'},
            'Saturday': {open: '10:00', close: '23:00'},
            'Sunday': {open: '10:00', close: '23:00'}
        },
        comments: [
            {author: 'Rob', time: '...', comment: 'Kebab was brilliant.'}
        ]
    },
    {
        id: 2,
        name: 'Charnwood Turkish Pide',
        latitude: -35.2047226,
        longitude: 149.0342812,
        currentAverageRating: 45,
        numberofRatings: 12,
        openingHours: {
            'Monday': {open: '10:00', close: '23:00'},
            'Tuesday': {open: '10:00', close: '23:00'},
            'Wednesday': {open: '10:00', close: '23:00'},
            'Thursday': {open: '10:00', close: '23:00'},
            'Friday': {open: '10:00', close: '23:00'},
            'Saturday': {open: '10:00', close: '23:00'},
            'Sunday': {open: '10:00', close: '23:00'}
        },
        comments: []
    }
];