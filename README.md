# vue-cookie2
A Vue.js plugin for manipulating cookies tested up to ```Vue v2.5.17```  

## Installation
Install through npm or yarn:  
``` bash
# Use NPM
npm install vue-cookie2 --save
# Or  use yarn
yarn add vue-cookie2
```

Include in `<body>` after loading Vue and it will automatically hook into Vue:
``` html
<script src="/node_modules/vue-cookie/build/vue-cookie.js'"></script>
 ```

Or do it the cool way and load it in your `main.js/app.js`:
``` javascript
// Require dependencies
var Vue = require('vue');
var VueCookie = require('vue-cookie2');
// Tell Vue to use the plugin
Vue.use(VueCookie);
```

## Usage
The plugin is available through `this.$cookie` in components or `Vue.cookie`.  
Rather than implementing my own Cookie handling logic the plugin now wraps the awesome
[tiny-cookie](https://github.com/Alex1990/tiny-cookie "Tiny cookie documentation") package.  

### Example
``` javascript
// From some method in one of your Vue components
this.$cookie.set('test', 'Hello world!', 1);
// This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day

// To get the value of a cookie use
this.$cookie.get('test');

// To get all cookies
this.$cookie.getAll();

// To delete a cookie use
this.$cookie.remove('test');

// Flush all cookies
this.$cookie.flush();

```

### Advanced examples
There are some options can be set in the third argument.  
#### Domain
```javascript
// Setting the cookie Domain
this.$cookie.set('test', 'Random value', {expires: 1, domain: 'localhost'});

// As this cookie is set with a domain then if you wish to delete it you have to provide the domain when calling delete
this.$cookie.remove('test', {domain: 'localhost'});
```

#### Expires
You can set the cookie expire time as you want.  
```javascript
var date = new Date;
date.setDate(date.getDate() + 21);

this.$cookie.set('dateObject', 'A date object', { expires: date });
this.$cookie.set('dateString', 'A parsable date string', { expires: date.toGMTString() });
this.$cookie.set('integer', 'Seven days later', { expires: 7 });
this.$cookie.set('stringSuffixY', 'One year later', { expires: '1Y' });
this.$cookie.set('stringSuffixM', 'One month later', { expires: '1M' });
this.$cookie.set('stringSuffixD', 'One day later', { expires: '1D' });
this.$cookie.set('stringSuffixh', 'One hour later', { expires: '1h' });
this.$cookie.set('stringSuffixm', 'Ten minutes later', { expires: '10m' });
this.$cookie.set('stringSuffixs', 'Thirty seconds later', { expires: '30s' });
```


#### Raw Data
We'll using encodeURIComponent/decodeURIComponent on set/get.  
If you want to set/get raw data, you can use setRaw/getRaw method.   
```javascript
this.$cookie.setRaw('dateObject', 'A date object', { expires: date });
this.$cookie.getRaw('dataObject');
```




Thanks for using the plugin, I am happy to accept feedback/pull requests, do not forget to star if you like it!

Happy Coding! :D

## Tests
This packacge uses the ´´´testem``` framework and ```jasmine``` assertion library

``` bash
# Run npm install to fetch dependencies
yarn install

# Then you may run the tests from
yarn run test:dev
```

##  Acknowledgement
This plugin is based on [alfhen/vue-cookie](https://github.com/alfhen/vue-cookie).
Thank you for making the perfect plugin.
