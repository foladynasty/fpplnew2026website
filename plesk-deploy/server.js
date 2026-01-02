// Custom server.js for iisnode/Plesk deployment
const path = require('path');
const http = require('http');

const dir = path.join(__dirname);

process.env.NODE_ENV = 'production';
process.chdir(__dirname);

// For iisnode, use process.env.PORT which is a named pipe
// For local development, fall back to port 3000
const port = process.env.PORT || 3000;

const nextConfig = { "env": {}, "webpack": null, "eslint": { "ignoreDuringBuilds": true }, "typescript": { "ignoreBuildErrors": false, "tsconfigPath": "tsconfig.json" }, "typedRoutes": false, "distDir": "./.next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.ts", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["tsx", "ts", "jsx", "js"], "poweredByHeader": true, "compress": true, "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384], "path": "/_next/image/", "loader": "default", "loaderFile": "", "domains": [], "disableStaticImages": false, "minimumCacheTTL": 60, "formats": ["image/webp"], "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "attachment", "remotePatterns": [], "unoptimized": true }, "devIndicators": { "position": "bottom-left" }, "onDemandEntries": { "maxInactiveAge": 60000, "pagesBufferLength": 5 }, "amp": { "canonicalBase": "" }, "basePath": "", "sassOptions": {}, "trailingSlash": true, "i18n": null, "productionBrowserSourceMaps": false, "excludeDefaultMomentLocales": true, "serverRuntimeConfig": {}, "publicRuntimeConfig": {}, "reactProductionProfiling": false, "reactStrictMode": null, "reactMaxHeadersLength": 6000, "httpAgentOptions": { "keepAlive": true }, "logging": {}, "compiler": {}, "expireTime": 31536000, "staticPageGenerationTimeout": 60, "output": "standalone" };

process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(nextConfig);

// Import the Next.js server handler
const NextServer = require('next/dist/server/next-server').default;

const nextServer = new NextServer({
  dir,
  dev: false,
  conf: nextConfig,
  hostname: 'localhost',
  port: typeof port === 'string' ? 0 : port,
});

const handler = nextServer.getRequestHandler();

// Create HTTP server
const server = http.createServer((req, res) => {
  handler(req, res).catch((err) => {
    console.error('Error handling request:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
});

// Listen on the port (works with both iisnode pipe and regular port)
server.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`> Ready on port ${port}`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});