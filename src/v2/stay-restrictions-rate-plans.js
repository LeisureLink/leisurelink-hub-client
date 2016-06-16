'use strict';

import Http from 'wrecked';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http.create();
  const getRoute = (kind, ...params) => route('stayRestrictions', kind, { baseUrl, apiKey, ...params });

  return {

    all(pmcId, unitId, ratePlanId) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId, ratePlanId);
      return http.get(uri);
    },

    byDate(pmcId, unitId, ratePlanId, date) {
      const uri = getRoute(Kind.DATE, pmcId, unitId, ratePlanId, date);
      return http.get(uri);
    },

    replace(pmcId, unitId, ratePlanId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId, ratePlanId);
      return http.patch(uri, payload);
    },

    update(pmcId, unitId, ratePlanId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId, ratePlanId);
      return http.put(uri, payload);
    }
  };

};
