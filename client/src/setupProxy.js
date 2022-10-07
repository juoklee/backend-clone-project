// CORS 오류 방지을 위한 proxy 수동 설정
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        // /api 로 시작되는 API는 target으로 설정된 서버 URL로 호출하도록 설정된다.
        createProxyMiddleware('/api', {
            target: 'http://localhost:8000', // 통신할 서버 주소
            changeOrgin: true,
        })
    );
};