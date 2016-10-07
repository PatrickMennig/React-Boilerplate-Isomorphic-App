/*require('babel-core/register')({
	presets: ['es2015', 'react']
});*/
/*
require("babel-core").transform("code", {
	plugins: ["transform-runtime", "transform-react-jsx"]
});
*/

require('babel-register');
require('babel-polyfill');


require('./entry.es6.jsx');

require('./main');