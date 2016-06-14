'use strict';

import Http from '../infrastructure/http';
import route, {Kind} from './shared/routes';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);

  const getRoute = (kind, ...params) => route('fees', kind, { baseUrl, apiKey, ...params });

  return {

    /**
     * Get all fees for a given pmc
     * @param {String} pmcId
     * @returns {Promise<*>}
     */
    all(pmcId) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.get(uri);
    },


    byId(pmcId, feeId) {
      const uri = getRoute(Kind.ID, pmcId, feeId);
      return http.get(uri);
    },


    create(pmcId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.post(uri, payload);
    },

    delete(pmcId, feeId) {
      const uri = getRoute(Kind.ID, pmcId, feeId);
      return http.delete(uri);
    },

    update(pmcId, feeId, payload) {
      const uri = getRoute(Kind.ID, pmcId, feeId);
      return http.patch(uri, payload);
    },

    replace(pmcId, feeId, payload) {
      const uri = getRoute(Kind.ID, pmcId, feeId);
      return http.put(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    },

    appliesTo: {

      delete(pmcId, feeId) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, feeId);
        return http.delete(uri);
      },

      update(pmcId, feeId, payload) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, feeId);
        return http.patch(uri, payload);
      },

      replace(pmcId, feeId, payload) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, feeId);
        return http.put(uri, payload);
      }
    }
  };
};
