'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);

  return {

    all(pmcId, unitId) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/units/${unitId}/availability`;
    },

    checkByDate(pmcId, unitId) {
      const uri = `${baseUrl}/hub/v2/pmcs/${pmcId}/units/${unitId}/availability/check`;
    },

    replace(pmcId, unitId, availability) {

    },

    replace(pmcId, unitId) {

    },

    status(pmcId, unitId, workflowId) {

    }
  };

};
