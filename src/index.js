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
