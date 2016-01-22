'use strict';

const assert = require('assert-plus');
const uriTemplate = require('uri-templates');
const request = require('request-then');

function LeisureLinkHubV1(options) {
  let routes = {
    'availability': uriTemplate('/v1/rentalUnits/{rentalUnitId}/availability')
  };

  const route = function(routeName, params) {
    return options.url + routes[options.version][routeName].fill(params);
  }

  const getAvailability = function(rentalUnitId) {
    return request({
      uri: route('availability', { rentalUnitId: rentalUnitId }),
      method: 'GET',
      json: true
    });
  }

  const setAvailability = function(rentalUnitId, data) {
    return request({
      uri: route('availability', { rentalUnitId: rentalUnitId }),
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
