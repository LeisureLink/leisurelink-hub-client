'use strict';

module.exports = wallaby => ({
  files: [
    'src/**/*',
    'test/**/*',
    '!test/**/*.tests.js'
  ],
  tests: [
    'test/**/*.tests.js'
  ],
  env: {
    type: 'node',
    runner: 'node'
  },
  setup: () => require('./test/helper'),
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  }
});
