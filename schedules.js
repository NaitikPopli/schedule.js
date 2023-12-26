/*!
 * IAdea Workplace Demo Code
 * Copyright (C) 2022 by IAdea Corporation, All Rights Reserved.
 * Version 1.0.0-pre+dist-client.20221018094440
 */

(function(){

'use strict';

const demo = {
    "gateway": {
        "remote": "http://localhost:8088",
        "clientId": "client-id",
        "clientSecret": "client-secret",
        "scope": "urn:workplace:gateway"
    },
    "reconnectIntervalSeconds": 1,
    "canCheckInBeforeMinutes": 5, // should match CAN_CHECKIN event setting
    "canCheckOutBeforeMinutes": 15,
    "canExtendBeforeMinutes": 15, // should match NEAR_END event setting
    "extendPeriodMinutes": 15,
    "adhocAuthenticationRequired": false,
    "adhocBookingDurationMinutes": 60,
    "repeatDailyEnabled": true,
    "repeatDurationDays": 3,
    "syncScheduleIntervalMinutes": 1,
    "pairPanelScheduleIntervalSeconds": 3,
    "schedules": [{
        "scheduleId": "iadea-demo-schedule-01",
        "expiration": "2023-12-29T00:00:00Z",
        "data": [
            { "name": "deskName", "value": "Desk 1A01" },
            { "name": "shortDeskName", "value": "1A01" },
            { "name": "qrcode", "value": "https://www.digivalet.com/" }
        ],
        "events": [
            { "name": "CAN_CHECKIN", "when": "currentBooking.begin-5min" },
            //NOTE: uncomment followings to enable auto-release
            //{ "name": "LAST_CALL", "when": "currentBooking.begin+10min" },
            //{ "name": "AUTO_RELEASE", "when": "currentBooking.begin+15min" },
            { "name": "NEAR_END", "when": "currentBooking.end-15min" }
        ],
        "bookings": [{
            "bookingId": "01",
            "begin": "2023-12-25T14:22:00Z",
            "end": "2023-12-25T15:22:00Z",
            "data": [
                { "name": "firstName", "value": "Nitin" },
                { "name": "lastName", "value": "Agrawal" },
                { "name": "title", "value": "Senior Manager/COO" },
                { "name": "Const", "value": "25-12-2023" }
            ]
        }]
    }, {
        "scheduleId": "iadea-demo-schedule-02",
        "expiration": "2023-12-29T00:00:00Z",
        "data": [
            { "name": "deskName", "value": "Desk 1A02" },
            { "name": "shortDeskName", "value": "1A02" },
            { "name": "qrcode", "value": "https://www.digivalet.com/" }
        ],
        "events": [
            { "name": "CAN_CHECKIN", "when": "currentBooking.begin-5min" },
            //NOTE: uncomment followings to enable auto-release
            //{ "name": "LAST_CALL", "when": "currentBooking.begin+10min" },
            //{ "name": "AUTO_RELEASE", "when": "currentBooking.begin+15min" },
            { "name": "NEAR_END", "when": "currentBooking.end-15min" }
        ],
        "bookings": [{
            "bookingId": "01",
            "begin": "2023-12-25T14:45:00Z",
            "end": "2023-12-25T15:45:00Z",
            "data": [
                { "name": "firstName", "value": "Nitin" },
                { "name": "lastName", "value": "Agrawal" },
                { "name": "title", "value": "COO" },
                { "name": "company", "value": "2023-12-25" }
            ]
        }
        ],
        "bookings": [{
            "bookingId": "02",
            "begin": "2023-12-25T15:45:00Z",
            "end": "2023-12-25T16:45:00Z",
            "data": [
                { "name": "firstName", "value": "Naitik" },
                { "name": "lastName", "value": "Popli" },
                { "name": "title", "value": "Project engineer" },
                { "name": "company", "var": "currentDate" }
            ]
        }
        ]


    }, {
        "scheduleId": "iadea-demo-schedule-03",
        "expiration": "2023-12-29T00:00:00Z",
        "data": [
            { "name": "deskName", "value": "Desk 1A03" },
            { "name": "shortDeskName", "value": "1A03" },
            { "name": "qrcode", "value": "https://www.digivalet.com/" }
        ],
        "events": [
            { "name": "CAN_CHECKIN", "when": "currentBooking.begin-5min" },
            //NOTE: uncomment followings to enable auto-release
            //{ "name": "LAST_CALL", "when": "currentBooking.begin+10min" },
            //{ "name": "AUTO_RELEASE", "when": "currentBooking.begin+15min" },
            { "name": "NEAR_END", "when": "currentBooking.end-15min" }
        ],
        "bookings": [{
            "bookingId": "01",
            "begin": "2023-12-25T13:49:00Z",
            "end": "2023-12-25T14:49:00Z",
            "data": [
                { "name": "firstName", "value": "Akshay" },
                { "name": "lastName", "value": "Tiwari" },
                { "name": "title", "value": "Project Engineer" },
                { "name": "Date", "Var": "currentDate" }
            ]
        }, {
            "bookingId": "02",
            "begin": "2023-12-25T14:49:00Z",
            "end": "2023-12-25T15:49:00Z",
            "data": [
                { "name": "firstName", "value": "George" },
                { "name": "lastName", "value": "Smith" },
                { "name": "title", "value": "APAC sales manager" },
                { "name": "company", "Const": "2023-12-25" }
            ]
        }]
    }]
};

if (typeof exports == 'object' && typeof module == 'object') {
    module.exports = demo;
} else {
    globalThis.WorkplaceDemo = demo;
}

})();
