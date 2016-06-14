'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  
  return {

    byId(pmcId) {

    },

    create(pmc) {

    },

    update(pmcId, pmc) {

    },

    replace(pmcId, pmc) {

    },

    status(pmcId, unitId, workflowId) {

    }
  };

};
