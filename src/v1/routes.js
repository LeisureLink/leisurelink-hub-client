'use strict';

import UriTemplate from 'uri-templates';

const ROUTES = {
  'availability': UriTemplate('{baseUrl}/v1/rentalUnits/{rentalUnitId}/availability{?apiKey}'),
  'base-rates': UriTemplate('{baseUrl}/v1/rentalUnits/{rentalUnitId}/baseRates{?apiKey}'),
  'stay-restrictions': UriTemplate('{baseUrl}/v1/rentalUnits/{rentalUnitId}/stayRestrictions{?apiKey}'),
  'booking': UriTemplate('{baseUrl}/v1/hub/bookings/{bookingId}{?apiKey}'),
  'confirm-booking': UriTemplate('{baseUrl}/v1/hub/bookings/{bookingId}/confirm{?apiKey}'),
  'notify-booking-failure': UriTemplate('{baseUrl}/v1/hub/bookings/{bookingId}/fail{?apiKey}')
};

export default (route, params) => {
  return ROUTES[route].fill(params);
};
