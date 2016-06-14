'use strict';

import Http from '../infrastructure/http';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);

  return {
    all(pmcId, unitId) {

    },

    byId(pmcId, unitId, mediaId) {

    },

    create(pmcId, unitId, media) {

    },

    deleteAll(pmcId, unitId) {

    },

    delete(pmcId, unitId, mediaId) {

    },

    update(pmcId, unitId, mediaId, media) {

    },

    replace(pmcId, unitId, mediaId, media) {

    },

    status(pmcId, unitId, workflowId) {

    }
  };

};
