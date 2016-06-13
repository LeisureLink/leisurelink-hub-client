export default (apiKey, baseUrl) => {

  return {
    all(pmcId) {},
    byId(pmcId, feeId) {},
    create(pmcId) {},
    delete(pmcId, feeId) {},
    update(pmcId, feeId, fee) {},
    replace(pmcId, feeId, fee) {},
    status(pmcId, workflowId) {},

    appliesTo: {
      delete(pmcId, feeId) {},
      update(pmcId, feeId, units) {},
      replace(pmcId, feeId, units) {}
    }
  };

};
