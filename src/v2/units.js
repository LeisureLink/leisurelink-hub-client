'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);

  return {

    all(pmcId) {

    },

    byId(pmcId, unitId) {

    },

    create(pmcId, unit) {

    },

    update(pmcId, unitId, unit) {

    },

    replace(pmcId, unitId, unit) {

    },

    status(pmcId, unitId, workflowId) {

    }
  };

};
