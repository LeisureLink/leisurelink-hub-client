'use strict';

import UriTemplate from 'uri-templates';

const apiKey = '{?apiKey}';

const template = (path) => UriTemplate(path + apiKey);

const Routes = {
  availability: template('/v1/rentalUnits/{rentalUnitId}/availability'),
  baseRates: template('/v1/rentalUnits/{rentalUnitId}/baseRates'),
  stayRestrictions: template('/v1/rentalUnits/{rentalUnitId}/stayRestrictions'),
  booking: template('/v1/hub/bookings/{bookingId}'),
  confirmBooking: template('/v1/hub/bookings/{bookingId}/confirm'),
  bookingFailure: template('/v1/hub/bookings/{bookingId}/fail')
};

export default (name, ...params) => {
  params = params.reduce((prev, curr) => ({ ...curr, ...prev }));
  return params.baseUrl + Routes[name].fill(params);
};
