'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  
  return {
    all(pmcId) {

    },

    byId(pmcId, taxId) {

    },

    create(pmcId) {

    },

    delete(pmcId, taxId) {

    },

    update(pmcId, taxId, tax) {

    },

    replace(pmcId, taxId, tax) {

    },

    status(pmcId, workflowId) {

    },

    appliesTo: {
      delete(pmcId, taxId) {

      },
      update(pmcId, taxId, units) {

      },
      replace(pmcId, taxId, units) {

      }
    }
  };

};
