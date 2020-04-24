let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let chatHistory = require('../models/ChatHistory');
let eventHistory = require('../models/EventHistory');

router.route('/').get((req, res) => {
    chatHistory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/').get((req, res) => {
    eventHistory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
