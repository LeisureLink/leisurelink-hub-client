import Wreck from 'wreck';
import Util from 'util';

const stringify = (value) => Util.inspect(value, { depth: null });


export default (baseUrl) => {
  const instance = Wreck.defaults({
    baseUrl
  });

  return {

    get(uri, options = {}) {
      return new Promise((resolve, reject) => {
        instance.get(uri, options, (err, response, payload) => {
          if (err) return reject(err);
          return resolve({ response, payload });
        });
      });
    },

    post(uri, payload, options = {}) {
      return new Promise((resolve, reject) => {
        options.payload = stringify(payload);
        instance.post(uri, options, (err, response, payload) => {
          if (err) return reject(err);
          return resolve({ response, payload });
        });
      });
    },

    put(uri, payload, options = {}) {
      return new Promise((resolve, reject) => {
        options.payload = stringify(payload);
        instance.put(uri, options, (err, response, payload) => {
          if (err) return reject(err);
          return resolve({ response, payload });
        });
      });
    },

    patch(uri, payload, options = {}) {
      return new Promise((resolve, reject) => {
        options.payload = stringify(payload);
        instance.patch(uri, options, (err, response, payload) => {
          if (err) return reject(err);
          return resolve({ response, payload });
        });
      });
    },

    delete(uri) {
      return new Promise((resolve, reject) => {
        instance.delete(uri, options, (err, response, payload) => {
          if (err) return reject(err);
          return resolve({ response, payload });
        });
      });
    }
  };
};
