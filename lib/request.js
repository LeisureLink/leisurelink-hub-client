'use strict'

const request = require('request');

module.exports = function(options) {
  if (typeof options.json === 'undefined'){
    options.json = true;
  }

  return new Promise((resolve, reject) => {
    let req = request(options, function(err, res, body) {
      if (err) {
        return reject(err);
      }
      return resolve(body);
    });
  });
