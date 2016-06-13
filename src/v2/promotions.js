export default (apiKey, baseUrl) => {

  return {
    all(pmcId) {

    },
    byId(pmcId, promotionId) {

    },
    create(pmcId) {

    },
    delete(pmcId, promotionId) {

    },
    update(pmcId, promotionId, promotion) {

    },
    replace(pmcId, promotionId, promotion) {

    },
    status(pmcId, workflowId) {

    },

    appliesTo: {
      delete(pmcId, promotionId) {},
      update(pmcId, promotionId, units) {},
      replace(pmcId, promotionId, units) {}
    }
  };

};
