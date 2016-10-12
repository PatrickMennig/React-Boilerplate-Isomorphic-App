import webpack_configuration 		from '../../webpack/webpack.config'
import Webpack_isomorphic_tools 	from 'webpack-isomorphic-tools'
import witConfig 					from '../../webpack/webpack-isomorphic-tools.js'
import configuration				from '../../configuration';
import path							from 'path';


const root_dir = path.resolve(__dirname, '..', '..');


global.wit = new Webpack_isomorphic_tools( witConfig )
.development( configuration.env.env === 'development' )
.server(root_dir, function() {
	require('./main');
});