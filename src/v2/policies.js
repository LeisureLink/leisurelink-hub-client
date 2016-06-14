'use strict';

import Http from '../infrastructure/http';
import route, {Kind} from './shared/routes';



export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  const getRoute = (kind, ...params) => route('policies', kind, { baseUrl, apiKey, ...params });
  
  return {
    all(pmcId) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.get(uri);
    },

    byId(pmcId, policyId) {
      const uri = getRoute(Kind.ID, pmcId, policyId);
      return http.get(uri);
    },

    create(pmcId, policyId, payload) {
      const uri = getRoute(Kind.ID, pmcId, policyId);
      return http.post(uri, payload);
    },

    delete(pmcId, policyId) {
      const uri = getRoute(Kind.ID, pmcId, policyId);
      return http.delete(uri);
    },

    update(pmcId, policyId, payload) {
      const uri = getRoute(Kind.ID, pmcId, policyId);
      return http.patch(uri, payload);
    },

    replace(pmcId, policyId, payload) {
      const uri = getRoute(Kind.ID, pmcId, policyId);
      return http.put(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    }
  };

};
