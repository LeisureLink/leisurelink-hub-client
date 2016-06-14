import Wreck from 'wreck';

const request = (instance, method, uri, options = {}) => {
  return new Promise((resolve, reject) => {
    instance.request(method, uri, options, (err, response) => {
      if (err) return reject(err);
      Wreck.read(response, { json: true }, (err, payload) => {
        if (err) return reject(err);
        return resolve({ response, payload });
      });
    });
  });
};


export default (baseUrl) => {
  const instance = Wreck.defaults({
    baseUrl
  });

  return {

    get(uri) {
      return request(instance, 'GET', uri);
    },

    post(uri, payload, options = {}) {
      return request(instance, 'POST', uri, { ...options, ...payload });
    },

    put(uri, payload, options = {}) {
      return request(instance, 'PUT', uri, { ...options, ...payload });
    },

    patch(uri, payload, options = {}) {
      return request(instance, 'PATCH', uri, { ...options, ...payload });
    },

    delete(uri) {
      return request(instance, 'DELETE', uri);
    }
  };
};
