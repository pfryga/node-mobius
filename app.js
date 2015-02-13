'use strict';

var express = require('express');
var mobiusModule = require('./lib/mobiusClient');
var appConfig = require('./config/config.json');
var mobiusIns = mobiusModule(appConfig.mobius);

var app = express();

app.get('/ping', function(req, res) {
    res.send('pong');
});

app.get('/getOffer/:id', function(req, res) {
    var offerId = req.params.id;

    mobiusIns.getOffer(offerId, function (error, offer) {
        if (error) {
            res.status(404).send();
        } else {
            res.send(offer);
        }
    });
});

app.listen(3000, function () {
    console.log('server started!');
});
