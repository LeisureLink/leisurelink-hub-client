'use strict';

import Http from 'wrecked';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http.create();
  const getRoute = (kind, ...params) => route('taxes', kind, { baseUrl, apiKey, ...params });

  return {
    all(pmcId) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.get(uri);
    },

    byId(pmcId, taxId) {
      const uri = getRoute(Kind.ID, pmcId, taxId);
      return http.get(uri);
    },

    create(pmcId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId);
      return http.post(uri, payload);
    },

    delete(pmcId, taxId) {
      const uri = getRoute(Kind.ID, pmcId, taxId);
      return http.delete(uri);
    },

    update(pmcId, taxId, payload) {
      const uri = getRoute(Kind.ID, pmcId, taxId);
      return http.patch(uri, payload);
    },

    replace(pmcId, taxId, payload) {
      const uri = getRoute(Kind.ID, pmcId, taxId);
      return http.put(uri, payload);
    },

    status(pmcId, workflowId) {
      const uri = getRoute(Kind.WORKFLOW, pmcId, workflowId);
      return http.get(uri);
    },

    appliesTo: {
      delete(pmcId, taxId) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, taxId);
        return http.delete(uri);
      },

      update(pmcId, taxId, payload) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, taxId);
        return http.patch(uri, payload);
      },

      replace(pmcId, taxId, payload) {
        const uri = getRoute(Kind.APPLIES_TO, pmcId, taxId);
        return http.put(uri, payload);
      }
    }
  };
};
