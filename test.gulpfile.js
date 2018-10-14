/* eslint-disable import/no-extraneous-dependencies */
const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir((mix) => {
    mix.webpack('vue-cookie-spec.js', 'test/bundle.js', 'test/spec');
});
