'use strict';

const uriTemplate = require('uri-templates');
const Request = require('./request');
const EventEmitter = require('events').EventEmitter;

function LeisureLinkHubV1(options) {
  let client = new EventEmitter(),
    request = Request(client);

  let routes = client.routes = {
    'availability': uriTemplate('/v1/rentalUnits/{rentalUnitId}/availability{?apiKey}'),
    'base-rates': uriTemplate('/v1/rentalUnits/{rentalUnitId}/baseRates{?apiKey}'),
    'stay-restrictions': uriTemplate('/v1/rentalUnits/{rentalUnitId}/stayRestrictions{?apiKey}')
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

  client.getBaseRates = (rentalUnitId) => {
    return request({
      uri: route('base-rates', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'GET',
      json: true
    });
  };

  client.patchBaseRates = (rentalUnitId, data) => {
    return request({
      uri: route('base-rates', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'PATCH',
      json: data
    });
  };

  client.setBaseRates = (rentalUnitId, data) => {
    return request({
      uri: route('base-rates', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'POST',
      json: data
    });
  };

  client.getStayRestrictions = (rentalUnitId) => {
    return request({
      uri: route('stay-restrictions', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'GET',
      json: true
    });
  };

  client.patchStayRestrictions = (rentalUnitId, data) => {
    return request({
      uri: route('stay-restrictions', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'PATCH',
      json: data
    });
  };

  client.setStayRestrictions = (rentalUnitId, data) => {
    return request({
      uri: route('stay-restrictions', { rentalUnitId: rentalUnitId, apiKey: options.apiKey }),
      method: 'POST',
      json: data
    });
  };

  return client;
}

module.exports = LeisureLinkHubV1;
