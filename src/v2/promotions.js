'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  
  return {
    all(pmcId) {

    },
    byId(pmcId, promotionId) {

    },
    create(pmcId) {

    },
    delete(pmcId, promotionId) {

    },
    update(pmcId, promotionId, promotion) {

    },
    replace(pmcId, promotionId, promotion) {

    },
    status(pmcId, workflowId) {

    },

    appliesTo: {
      delete(pmcId, promotionId) {},
      update(pmcId, promotionId, units) {},
      replace(pmcId, promotionId, units) {}
    }
  };

};
