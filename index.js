//
// const assert = require('assert-plus');
// const v1 = require('./src/v1');
// const v2 = require('./src/v2');
//
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


export default class {
  constructor(apiKey, options = {}) {
    this.apiKey = apiKey;
    this.url = options.url || '';

    if (!this.apiKey) {
      throw new Error('API Key is required');
    }
  }
}
