/* eslint-disable import/no-extraneous-dependencies,no-undef,import/no-unresolved */
import Vue from 'vue';

const VueCookie = require('../../src/vue-cookie');

Vue.use(VueCookie);

describe('VueCookie', () => {
    beforeEach(function () {
        this.cookieValue = 'test-value';
        this.cookieKey = 'test-cookie';
        this.cookieDomain = 'localhost';
    });

    it('Should set and retrieve a Cookie with given value', function () {
        Vue.cookie.set(this.cookieKey, this.cookieValue, {expires: 1});

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(this.cookieValue);
    });

    it('Should delete existing cookie and get null when fetching deleted cookie', function () {
        Vue.cookie.remove(this.cookieKey);

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(null);
    });

    it('Should set and retrieve a Cookie with given value from a domain', function () {
        Vue.cookie.set(this.cookieKey, this.cookieValue, {expires: 1, domain: this.cookieDomain});

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(this.cookieValue);
    });

    it('Should delete existing cookie with a domain and get null when fetching deleted cookie', function () {
        Vue.cookie.remove(this.cookieKey, {domain: this.cookieDomain});

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(null);
    });

    it('Should set two cookies and get two back', function () {
        Vue.cookie.set(this.cookieKey, this.cookieValue, {expires: 1});
        Vue.cookie.set('test-key-2', 'test-cookie-2', {expires: 1});

        const cookies = {
            'test-cookie': this.cookieValue,
            'test-key-2': 'test-cookie-2',
        };
        expect(Vue.cookie.getAll()).toEqual(cookies);
    });

    it('Should flush all cookies', () => {
        Vue.cookie.flush();
        expect(Vue.cookie.getAll()).toEqual({});
    });
});
