const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const targetPath = path.join(buildDir, 'health.json');

const healthData = {
  timestamp: new Date().toISOString(),
  uptime: process.uptime(),
  environment: 'production',
  server: {
    status: 'OK',
  },
};

fs.mkdirSync(buildDir, { recursive: true });
fs.writeFileSync(targetPath, `${JSON.stringify(healthData, null, 2)}\n`);

console.log(`Wrote ${path.relative(rootDir, targetPath)}`);