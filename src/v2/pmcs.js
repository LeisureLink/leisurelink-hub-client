'use strict';

import Http from '../infrastructure/http';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  const getRoute = (kind, ...params) => route('pmcs', kind, { baseUrl, apiKey, ...params });

  return {

    byId(pmcId) {
      const uri = getRoute(Kind.ID, pmcId);
      return http.get(uri);
    },

    create(payload) {
      const uri = getRoute(Kind.COLLECTION);
      return http.post(uri, payload);
    },

    update(pmcId, payload) {
      const uri = getRoute(Kind.ID, pmcId);
      return http.patch(uri, payload);
    },

    replace(pmcId, payload) {
      const uri = getRoute(Kind.ID, pmcId);
      return http.put(uri, payload);
    },

    status(pmcId, unitId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, unitId, workflowId);
      return http.get(uri);
    }
  };

};
