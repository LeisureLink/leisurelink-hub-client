'use strict';

import Client from '../src';

describe('LeisureLink Client', () => {

  describe('constructor()', () => {
    it('requires an api key', () => {
      expect(() => {
        Client();
      }).to.throw(/API Key/);
    });
  });

  describe('properties', () => {
    let client;
    before(() => {
      client = Client('123456');
      expect(client).to.be.ok;
    });

    describe('v1', () => {
      it('has a v1 property on the client object', () => {
        expect(client.v1).to.be.ok;
        console.log(client.v1);
      });
    });

    describe('v2', () => {
      it('has a v2 property on the client object', () => {
        expect(client.v2).to.be.ok;
        console.log(client.v2);
      });
    });
  });
});
