import {
    isCookieEnabled, getCookie, getRawCookie, getAllCookies, setCookie, setRawCookie, removeCookie,
} from 'tiny-cookie';

(function() {
    const VueCookie = {
	install(Vue, options) {
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
    if (typeof exports == "object") {
	module.exports = VueCookie;
    } else if (typeof define == "function" && define.amd) {
	define([], function(){ return VueCookie; })
    } else if (window.Vue) {
	window.VueCookie = VueCookie;
	Vue.use(VueCookie);
    }
})()

