'use strict';

import UriTemplate from 'uri-templates';

const apiKey = '{?apiKey}';

const template = (path) => UriTemplate(path + apiKey);

export const Kind = {
  COLLECTION: 'COLLECTION',
  ID: 'ID',
  APPLIES_TO: 'APPLIES_TO',
  WORKFLOW: 'WORKFLOW',
  DATE: 'date',
  CHECK: 'check'
};

const Routes = {
  fees: {
    collection: template('/hub/v2/pmcs/{pmcId}/fees'),
    id: template('/hub/v2/pmcs/{pmcId}/fees/{feeId}'),
    appliesTo: template('/hub/v2/pmcs/{pmcId}/fees/{feeId}/applies-to'),
    workflow: template('/hub/v2/pmcs/{pmcId}/fees/workflows/{workflowId}')
  },

  media: {
    collection: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/media'),
    id: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/media/{mediaId}'),
    workflow: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/media/workflows/{workflowId}')
  },

  pmcs: {
    collection: template('/hub/v2/pmcs'),
    id: template('/hub/v2/pmcs/{pmcId}'),
    workflow: template('/hub/v2/pmcs/workflows/{workflowId}')
  },

  policies: {
    collection: template('/hub/v2/pmcs/{pmcId}/policies'),
    id: template('/hub/v2/pmcs/{pmcId}/policies/{policyId}'),
    appliesTo: template('/hub/v2/pmcs/{pmcId}/policies/{policyId}/applies-to'),
    workflow: template('/hub/v2/pmcs/{pmcId}/policies/workflows/{workflowId}')
  },

  promotions: {
    collection: template('/hub/v2/pmcs/{pmcId}/promotions'),
    id: template('/hub/v2/pmcs/{pmcId}/promotions/{promotionId}'),
    appliesTo: template('/hub/v2/pmcs/{pmcId}/promotions/{promotionId}/applies-to'),
    workflow: template('/hub/v2/pmcs/{pmcId}/promotions/workflows/{workflowId}')
  },

  ratePlans: {
    collection: template('/hub/v2/pmcs/{pmcId}/rate-plans'),
    workflow: template('/hub/v2/pmcs/{pmcId}/rate-plans/workflows/{workflowId}')
  },

  stayRestrictions: {
    collection: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/rate-plans/{ratePlanId}/stay-restrictions'),
    date: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/rate-plans/{ratePlanId}/stay-restrictions/{date}')
  },

  taxes: {
    collection: template('/hub/v2/pmcs/{pmcId}/taxes'),
    id: template('/hub/v2/pmcs/{pmcId}/taxes/{taxId}'),
    appliesTo: template('/hub/v2/pmcs/{pmcId}/taxes/{taxId}/applies-to'),
    workflow: template('/hub/v2/pmcs/{pmcId}/taxes/workflows/{workflowId}')
  },

  availability: {
    collection: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/availability'),
    check: template('/hub/v2/pmcs/{pmcId}/units/{unitId}/availability/check')
  },

  units: {
    collection: template('/hub/v2/pmcs/{pmcId}/units'),
    id: template('/hub/v2/pmcs/{pmcId}/units/{unitId}'),
    workflow: template('/hub/v2/pmcs/{pmcId}/units/workflows/{workflowId}')
  }
};

export default (collection, kind, ...params) => {
  params = params.reduce((prev, curr) => ({ ...curr, ...prev }));
  return params.baseUrl + Routes[collection][kind].fill(params);
};
