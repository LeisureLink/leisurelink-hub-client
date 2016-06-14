'use strict';

import Http from '../infrastructure/http';
import QS from 'qs';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  const queryParams = QS.stringify({ apiKey });

  return {

    /**
     * Get all fees for a given pmc
     * @param {String} pmcId
     * @returns {Promise<*>}
     */
    all(pmcId) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees?${queryParams}`;
      return http.get(uri);
    },


    byId(pmcId, feeId) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}?${queryParams}`;
      return http.get(uri);
    },


    create(pmcId, payload) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees?${queryParams}`;
      return http.post(uri, payload);
    },

    delete(pmcId, feeId) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}?${queryParams}`;
      return http.delete(uri);
    },

    update(pmcId, feeId, payload) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}?${queryParams}`;
      return http.patch(uri, payload);
    },

    replace(pmcId, feeId, payload) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}?${queryParams}`;
      return http.put(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/workflows/${workflowId}?${queryParams}`;
      return http.get(uri);
    },

    appliesTo: {

      delete(pmcId, feeId) {
        const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}/applies-to?${queryParams}`;
        return http.delete(uri);
      },

      update(pmcId, feeId, payload) {
        const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}/applies-to?${queryParams}`;
        return http.patch(uri, payload);
      },

      replace(pmcId, feeId, payload) {
        const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/fees/${feeId}/applies-to?${queryParams}`;
        return http.put(uri, payload);
      }
    }
  };
};
