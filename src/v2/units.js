'use strict';

import Http from '../infrastructure/http';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  const getRoute = (kind, ...params) => route('units', kind, { baseUrl, apiKey, ...params });

  return {

    all(pmcId) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.get(uri);
    },

    byId(pmcId, unitId) {
      const uri = getRoute(Kind.ID, pmcId, unitId);
      return http.get(uri);
    },

    create(pmcId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.post(uri, payload);
    },

    update(pmcId, unitId, payload) {
      const uri = getRoute(Kind.ID, pmcId, unitId);
      return http.patch(uri, payload);
    },

    replace(pmcId, unitId, payload) {
      const uri = getRoute(Kind.ID, pmcId, unitId);
      return http.put(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    }
  };

};
