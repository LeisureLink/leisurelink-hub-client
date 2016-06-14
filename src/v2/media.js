'use strict';

import Http from '../infrastructure/http';
import route, {Kind} from './shared/routes';

export default (apiKey, baseUrl) => {

  const http = Http(baseUrl);
  const getRoute = (kind, ...params) => route('media', kind, { baseUrl, apiKey, ...params });

  return {
    all(pmcId, unitId) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId);
      return http.get(uri);
    },

    byId(pmcId, unitId, mediaId) {
      const uri = getRoute(Kind.ID, pmcId, unitId, mediaId);
      return http.get(uri);
    },

    create(pmcId, unitId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId);
      return http.post(uri, payload);
    },

    deleteAll(pmcId, unitId) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId);
      return http.delete(uri);
    },

    delete(pmcId, unitId, mediaId) {
      const uri = getRoute(Kind.ID, pmcId, unitId, mediaId);
      return http.delete(uri);
    },

    update(pmcId, unitId, mediaId, payload) {
      const uri = getRoute(Kind.ID, pmcId, unitId, mediaId);
      return http.patch(uri, payload);
    },

    replace(pmcId, unitId, mediaId, payload) {
      const uri = getRoute(Kind.ID, pmcId, unitId, mediaId);
      return http.put(uri, payload);
    },

    status(pmcId, unitId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, unitId, workflowId);
      return http.get(uri);
    }
  };

};
