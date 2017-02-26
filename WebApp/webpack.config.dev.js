import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
        './index.web.js',
    ],
    target: 'web',
    output: {
        path: `${__dirname}/dist`, // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './src',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: [path.join(__dirname, 'index.web.js'), path.join(__dirname, 'src')],
                loaders: ['babel-loader'],
            },
            { test: /(\.css)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        ],
    },
};
