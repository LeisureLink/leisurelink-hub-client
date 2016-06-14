'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  
  return {
    all(pmcId) {

    },

    byId(pmcId, policyId) {

    },

    create(pmcId, policyId, policy) {

    },

    delete(pmcId, policyId) {

    },

    update(pmcId, policyId, policy) {

    },

    replace(pmcId, policyId, policy) {

    },

    status(pmcId, workflowId) {

    }
  };

};
