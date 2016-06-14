'use strict';

import Http from '../infrastructure/http';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  const getRoute = (kind, ...params) => route('promotions', kind, { baseUrl, apiKey, ...params });

  return {
    all(pmcId) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.get(uri);
    },

    byId(pmcId, promotionId) {
      const uri = getRoute(Kind.ID, pmcId, promotionId);
      return http.get(uri);
    },

    create(pmcId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.post(uri, payload);
    },

    delete(pmcId, promotionId) {
      const uri = getRoute(Kind.ID, pmcId, promotionId);
      return http.delete(uri);
    },

    update(pmcId, promotionId, payload) {
      const uri = getRoute(Kind.ID, pmcId, promotionId);
      return http.patch(uri, payload);
    },

    replace(pmcId, promotionId, payload) {
      const uri = getRoute(Kind.ID, pmcId, promotionId);
      return http.put(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    },

    appliesTo: {
      delete(pmcId, promotionId) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, promotionId);
        return http.delete(uri);
      },

      update(pmcId, promotionId, payload) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, promotionId);
        return http.patch(uri, payload);
      },

      replace(pmcId, promotionId, payload) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, promotionId);
        return http.put(uri, payload);
      }
    }
  };

};
