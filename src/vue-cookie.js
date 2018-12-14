import {
    isCookieEnabled, getCookie, getRawCookie, getAllCookies, setCookie, setRawCookie, removeCookie,
} from 'tiny-cookie';

const VueCookie = {
    install: function _install(Vue) {
        /* eslint-disable no-param-reassign */
        Vue.prototype.$cookie = this;
        Vue.cookie = this;
        /* eslint-enable no-param-reassign */
    },
    isEnabled() {
        return isCookieEnabled();
    },
    set(key, value, options = null) {
        setCookie(key, value, options);
    },
    setRaw(key, value, options = null) {
        setRawCookie(key, value, options);
    },
    get(key) {
        return getCookie(key);
    },
    getAll() {
        return getAllCookies();
    },
    getRaw(key) {
        return getRawCookie(key);
    },
    remove(key, options = null) {
        removeCookie(key, options);
    },
    flush() {
        const cookieKeys = Object.keys(this.getAll());
        const that = this;
        cookieKeys.forEach((element) => {
            that.remove(element);
        });
    },
};

export default VueCookie;
