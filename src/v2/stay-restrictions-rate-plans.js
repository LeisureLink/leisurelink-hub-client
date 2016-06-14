'use strict';

import Http from '../infrastructure/http';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
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
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    }
  };

};
