'use strict';

import Client from '../src';

describe('LeisureLink Client', () => {

  describe('#constructor(apiKey)', () => {
    it('requires an api key', () => expect(() => { Client(); }).to.throw(/API Key/));
  });

  describe('properties', () => {
    let client;
    before(() => {
      client = Client('123456');
      expect(client).to.be.ok;
    });

    describe('#current', () => {
      it('has a current set to v2', () => {
        expect(client.current).to.be.ok;
        expect(client.current.fees).to.be.ok;
        expect(client.current.fees.all).to.be.a.function();
      });
    });

    describe('#versions/v1', () => {
      it('has a v1 property on the client object', () => expect(client.versions.v1).to.be.ok);
    });

    describe('#versions/v2', () => {
      it('has a v2 property on the client object', () => expect(client.versions.v2).to.be.ok);
    });

    describe('#hooks', () => {
      it('has hooking functions', () => expect(client.hooks.on).to.be.a.function());
    });

  });
});
