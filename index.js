'use strict';

const assert = require('assert-plus');
const v1 = require('./lib/v1');
const v2 = require('./lib/v2');

function LeisureLinkHubClient(options) {
  assert.object(options, 'options');
  assert.string(options.version, 'options.version');
  assert.string(options.apiKey, 'options.apiKey');
  assert.optionalString(options.url, 'options.url');
  options.url = options.url || 'https://api.leisurelink.com'

  if (options.version === 'v2') {
    return v2(options);
  }
  else if (options.version === 'v1') {
    return v1(options);
  }
  else (options.version !== 'v1' && options.version !== 'v2') {
    throw new Error(`Unsupported LeisureLink Hub API Version '${options.version}'. Supported versions are 'v1' or 'v2'.`)
  }
}



module.exports = LeisureLinkHubClient;
