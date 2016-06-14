'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  
  return {

    all(pmcId) {

    },

    create(pmcId, ratePlan) {

    },

    status(pmcId, workflowId) {

    }
  };

};
