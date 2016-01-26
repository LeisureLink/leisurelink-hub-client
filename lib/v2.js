'use strict';

const uriTemplate = require('uri-templates');
const Request = require('./request');
const EventEmitter = require('events').EventEmitter;

function LeisureLinkHubV2(options) {
  let client = new EventEmitter(),
    request = Request(client);

  let routes = client.routes = {
    'availability': uriTemplate('/v2/units/{unitId}/availability')
  };

  const route = function(routeName, params) {
    return options.url + routes[routeName].fill(params);
  };

  client.getAvailability = function(unitId) {
    return request({
      uri: route('availability', { unitId: unitId }),
      method: 'GET',
      json: true
    });
  };

  client.setAvailability = function(unitId, data) {
    return request({
      uri: route('availability', { unitId: unitId }),
      method: 'POST',
      json: data
    });
  };

  return client;
}

module.exports = LeisureLinkHubV2;
