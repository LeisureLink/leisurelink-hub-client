'use strict';

import fees from './fees';
import availability from './availability';
import media from './media';
import pmcs from './pmcs';
import policies from './policies';
import promotions from './promotions';
import ratePlans from './rate-plans';
import stayRestrictions from './stay-restrictions-rate-plans';
import taxes from './taxes';
import units from './units';

export default (baseUrl, apiKey) => {

  return {
    availability: availability(apiKey, baseUrl),
    fees: fees(apiKey, baseUrl),
    media: media(apiKey, baseUrl),
    pmcs: pmcs(apiKey, baseUrl),
    policies: policies(apiKey, baseUrl),
    promotions: promotions(apiKey, baseUrl),
    ratePlans: ratePlans(apiKey, baseUrl),
    stayRestrictions: stayRestrictions(apiKey, baseUrl),
    taxes: taxes(apiKey, baseUrl),
    units: units(apiKey, baseUrl)
  };
};
