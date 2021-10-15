// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    cssModules: true,
    // // optional
    modifyVars: { '@primary-color': '#0000bd' },
    // // optional
    // lessVarsFilePath: './styles/antd-variables.less',
    // // optional https://github.com/webpack-contrib/css-loader#object
    // cssLoaderOptions: {},

    trailingSlash: true,

    watchOptions: {
        ignored: ['node_modules', 'public/static'],
    },

    // resolve: {
    //     symlinks: true,
    // },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        // ignoreBuildErrors: true,
    },

    webpack(config, { isServer }, options) {
        // // Fixes npm packages that depend on `fs` module
        // if (!isServer) {
        //     config.node = {
        //         fs: 'empty',
        //         electron: 'empty',
        //     };
        // }

        config.module.rules.push(
            {
                test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                options: {
                    allowTsInNodeModules: true,
                    compilerOptions: {
                        noEmit: false,
                    },
                },
                // include: [
                //     path.resolve(__dirname, '../perpetual-pools-contracts'),
                // ],
                loader: 'ts-loader',
            },
        );
        return config;
    },
};
