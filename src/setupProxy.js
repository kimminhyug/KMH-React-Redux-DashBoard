const { createProxyMiddleware } = require('http-proxy-middleware');
  
module.exports = function (app) {
    app.use(
        '/riot/api/asia',
        createProxyMiddleware({
            target: "https://asia.api.riotgames.com/lol",
            changeOrigin: true,
            pathRewrite:{ '^/riot/api/asia':''}
        })
    );
    app.use(
        '/riot/api',
        createProxyMiddleware({
            target: "https://kr.api.riotgames.com/lol",
            changeOrigin: true,
            pathRewrite:{ '^/riot/api':''}
        })
    );


};
