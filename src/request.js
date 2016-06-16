// import request from 'request';
//
// export default (eventSink) => {
//   return (options) => {
//     if (typeof(options.json) === 'undefined') {
//       options.json = true;
//     }
//
//     return new Promise((resolve, reject) => {
//       request(options, (err, res, body) => {
//         eventSink.emit('request', {
//           method: options.method,
//           uri: options.uri || options.url,
//           request: options.json === true ? null : options.json,
//           response: res.body,
//           statusCode: res.statusCode
//         });
//         if (err) {
//           return reject(err);
//         }
//         if (res.statusCode < 200 || res.statusCode > 299) {
//           return reject(new Error(`Error status ${res.statusCode}.\n${body}`));
//         }
//         return resolve(body);
//       });
//     });
//   };
// };
