/**
 * Dev Server Configuration
 */

module.exports = {
    appName: 'translation-frontend',

    host: '0.0.0.0',
    port: 3000,

    // configure the proxy to the dev api server
    proxyIsEnabled: true,
    proxyHost: 'localhost',
    proxyPort: 30001,

    // forward following urls to the api server
    proxyUrls: [
        '/api*',
    ],

    // forward following rules
    proxyRules: {
        '/api': 'http://my-custom-server.com',
    },
};
