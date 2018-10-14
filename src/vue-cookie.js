import * as Cookies from 'tiny-cookie';

const VueCookie = {
    install: function _install(Vue) {
        /* eslint-disable no-param-reassign */
        Vue.prototype.$cookie = this;
        Vue.cookie = this;
        /* eslint-enable no-param-reassign */
    },
    isEnabled() {
        return Cookies.isEnabled();
    },
    set(key, value, options = null) {
        Cookies.set(key, value, options);
    },
    setRaw(key, value, options = null) {
        Cookies.setRaw(key, value, options);
    },
    get(key) {
        return Cookies.get(key);
    },
    getAll() {
        return Cookies.getAll();
    },
    getRaw(key) {
        return Cookies.getRaw(key);
    },
    remove(key, options = null) {
        Cookies.remove(key, options);
    },
    flush() {
        const cookieKeys = Object.keys(this.getAll());
        const that = this;
        cookieKeys.forEach((element) => {
            that.remove(element);
        });
    },
};

module.exports = VueCookie;

// Allow use of default import syntax in TypeScript
module.exports.default = VueCookie;
