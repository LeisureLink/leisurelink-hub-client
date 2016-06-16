'use strict';

import v1 from './v1';
import v2 from './v2';

/**
 * Setup a LeisureLink Integration Hub Client
 *
 * @param {String} apiKey
 * @param [options]
 *
 * @returns {{versions: {v1: {}, v2: {availability, fees, media, pmcs, policies, promotions, ratePlans, stayRestrictions, taxes, units}}, current: ({availability, fees, media, pmcs, policies, promotions, ratePlans, stayRestrictions, taxes, units}|*), hooks: {on: (*|process.on|noop|socketOnWrap), once: (*|_.once|noop), removeAll: (*|removeAll), removeListener: (*|noop)}}}
 */
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
