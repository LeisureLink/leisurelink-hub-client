'use strict';

import Http from 'wrecked';
import route from './shared/routes';

export default (baseUrl, apiKey) => {

  const http = Http.create();
  const getRoute = (name, ...params) => route(name, { baseUrl, apiKey, ...params });

  return {

    getAvailability(rentalUnitId) {
      const uri = getRoute('availability', rentalUnitId);
      return http.get(uri);
    },

    setAvailability(rentalUnitId, payload) {
      const uri = getRoute('availability', rentalUnitId);
      return http.post(uri, payload);
    },

    getBaseRates(rentalUnitId) {
      const uri = getRoute('baseRates', rentalUnitId);
      return http.get(uri);
    },

    patchBaseRates(rentalUnitId, payload) {
      const uri = getRoute('baseRates', rentalUnitId);
      return http.patch(uri, payload);
    },

    setBaseRates(rentalUnitId, payload) {
      const uri = getRoute('baseRates', rentalUnitId);
      return http.post(uri, payload);
    },

    getStayRestrictions(rentalUnitId) {
      const uri = getRoute('stayRestrictions', rentalUnitId);
      return http.get(uri);
    },

    patchStayRestrictions(rentalUnitId, payload) {
      const uri = getRoute('stayRestrictions', rentalUnitId);
      return http.patch(uri, payload);
    },

    setStayRestrictions(rentalUnitId, payload) {
      const uri = getRoute('stayRestrictions', rentalUnitId);
      return http.post(uri, payload);
    },

    getBooking(bookingId) {
      const uri = getRoute('booking', bookingId);
      return http.get(uri);
    },

    notifyBookingConfirmationFailed(bookingId, reason){
      const uri = getRoute('bookingFailure', bookingId);
      return http.post(uri, { reason });
    },

    confirmBooking(bookingId, confirmationNumber) {
      const uri = getRoute('confirmBooking', bookingId);
      return http.post(uri, { confirmationNumber });
    }

  };
};
