// server.js - iisnode compatible wrapper for Next.js standalone build
const http = require('http');
const path = require('path');

// Set environment
process.env.NODE_ENV = 'production';
process.chdir(__dirname);

// For iisnode, PORT is a named pipe like \\.\pipe\XXXXXX
// For local dev, fall back to 3000
const port = process.env.PORT || 3000;

// Load the Next.js app handler from the standalone build
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({
  dev: false,
  dir: __dirname,
  conf: {
    distDir: '.next',
    output: 'standalone'
  }
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});