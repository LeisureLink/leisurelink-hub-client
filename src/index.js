// const assert = require('assert-plus');
// const v1 = require('./v1');
// const v2 = require('./v2');

// function LeisureLinkHubClient(options) {
//   assert.object(options, 'options');
//   assert.string(options.version, 'options.version');
//   assert.string(options.apiKey, 'options.apiKey');
//   assert.optionalString(options.url, 'options.url');
//
//   options.url = options.url || 'https://api.leisurelink.com';
//
//   let client;
//   if (options.version === 'v2') {
//     client = v2(options);
//   }
//   else if (options.version === 'v1') {
//     client = v1(options);
//   }
//   else {
//     throw new Error(`Unsupported LeisureLink Hub API Version '${options.version}'. Supported versions are 'v1' or 'v2'.`);
//   }
//   return client;
// }
// module.exports = LeisureLinkHubClient;

'use strict';

import v2 from './v2';

export default (apiKey, options = {}) => {
  const url = options.url || 'https://api.leisurelink.com';

  if (!apiKey) {
    throw new Error('API Key is required');
  }

  return {
    v1: {},
    v2: v2(apiKey, url)
  };
};
