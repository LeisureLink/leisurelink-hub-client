'use strict';

const uriTemplate = require('uri-templates');
const Request = require('./request');
const EventEmitter = require('events').EventEmitter;

function LeisureLinkHubV1(options) {
  let client = new EventEmitter(),
    request = Request(client);

  let routes = client.routes = {
    'availability': uriTemplate('/v1/rentalUnits/{rentalUnitId}/availability{?apiKey}')
  };

  const route = (routeName, params) => {
    return options.url + routes[routeName].fill(params);
  };

  client.getAvailability = (rentalUnitId) => {
    return request({
      uri: route('availability', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'GET',
      json: true
    });
  };

  client.setAvailability = (rentalUnitId, data) => {
    return request({
      uri: route('availability', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'POST',
      json: data
    });
  };

  return client;
}

module.exports = LeisureLinkHubV1;
