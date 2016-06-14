'use strict';

import Http from 'wrecked';
import route, { Kind } from './shared/routes';


export default (apiKey, baseUrl) => {

  const http = Http.create();

  const getRoute = (kind, ...params) => route('availability', kind, { baseUrl, apiKey, ...params });

  return {

    all(pmcId, unitId) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId);
      return http.get(uri);
    },

    checkByDate(pmcId, unitId) {
      const uri = getRoute(Kind.CHECK, pmcId, unitId);
      return http.get(uri);
    },

    replace(pmcId, unitId, payload) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId);
      return http.put(uri, payload);
    },

    delete(pmcId, unitId) {
      const uri = getRoute(Kind.COLLECTION, pmcId, unitId);
      return http.delete(uri);
    }
  };

};
