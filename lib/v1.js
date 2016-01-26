'use strict';

const assert = require('assert-plus');
const uriTemplate = require('uri-templates');
const Request = require('./request');

function LeisureLinkHubV1(options) {
  let routes = {
    'availability': uriTemplate('/v1/rentalUnits/{rentalUnitId}/availability{?apiKey}')
  }, request = Request(this);

  const route = function(routeName, params) {
    return options.url + routes[routeName].fill(params);
  };

  const getAvailability = function(rentalUnitId) {
    return request({
      uri: route('availability', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'GET',
      json: true
    });
  }

  const setAvailability = function(rentalUnitId, data) {
    return request({
      uri: route('availability', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'POST',
      json: data
    });
  }

  return {
    routes: routes,
    getAvailability: getAvailability,
    setAvailability: setAvailability
  };
}

module.exports = LeisureLinkHubV1;
