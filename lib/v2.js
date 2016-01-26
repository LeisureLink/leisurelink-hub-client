'use strict';

const assert = require('assert-plus');
const uriTemplate = require('uri-templates');
const request = require('./request');

function LeisureLinkHubV2(options) {
  let routes = {
    'availability': uriTemplate('/v2/units/{unitId}/availability')
  };

  const route = function(routeName, params) {
    return options.url + routes[routeName].fill(params);
  };

  const getAvailability = function(unitId) {
    return request({
      uri: route('availability', { unitId: unitId }),
      method: 'GET',
      json: true
    });
  }

  const setAvailability = function(unitId, data) {
    return request({
      uri: route('availability', { unitId: unitId }),
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
