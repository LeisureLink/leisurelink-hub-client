'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  
  return {

    all(pmcId, unitId, ratePlanId) {

    },

    byDate(pmcId, unitId, ratePlanId, date) {

    },

    replace(pmcId, unitId, ratePlanId, stayRestriction) {

    },

    update(pmcId, unitId, ratePlanId, stayRestriction) {

    },

    status(pmcId, workflowId) {

    }
  };

};
