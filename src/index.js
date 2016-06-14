'use strict';

import v1 from './v1';
import v2 from './v2';

export default (apiKey, options = {}) => {
  const url = options.url || 'https://api.leisurelink.com';

  if (!apiKey) {
    throw new Error('API Key is required');
  }

  const wreck = process[Symbol.for('wreck')];

  const versions = {
    v1: v1(url, apiKey),
    v2: v2(url, apiKey)
  };

  return {
    versions,

    current: versions.v2,

    hooks: {
      on: wreck.on,
      once: wreck.once,
      removeAll: wreck.removeAll,
      removeListener: wreck.removeListener
    }
  };
};
