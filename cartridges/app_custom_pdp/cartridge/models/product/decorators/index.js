'use strict'

var base = module.superModule;

base.deliveryInformation = require('./deliveryInformation');
base.recommendations = require('./recommendations');

module.exports = base;