'use strict';

import Http from 'wrecked';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http.create();
  const getRoute = (kind, ...params) => route('ratePlans', kind, { baseUrl, apiKey, ...params });

  return {

    all(pmcId) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.get(uri);
    },

    create(pmcId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.post(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    }
  };

};
