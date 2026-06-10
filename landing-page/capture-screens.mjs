import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3002';
const outDir = process.argv[3] || '/tmp/llmpay-screens';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const consoleMessages = [];
page.on('console', (msg) => {
  if (['error', 'warning'].includes(msg.type())) {
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
  }
});
page.on('pageerror', (err) => {
  consoleMessages.push(`[pageerror] ${err.message}`);
});

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

// Get total page height
const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const viewportHeight = 900;
const steps = Math.ceil(totalHeight / viewportHeight);

console.log(`Total height: ${totalHeight}, steps: ${steps}`);

for (let i = 0; i < steps; i++) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), i * viewportHeight);
  await page.waitForTimeout(900); // allow scroll-reveal + spring animations to play
  await page.screenshot({ path: `${outDir}/section-${String(i).padStart(2, '0')}.png` });
}

console.log('--- CONSOLE MESSAGES ---');
if (consoleMessages.length === 0) {
  console.log('(none)');
} else {
  for (const m of consoleMessages) console.log(m);
}

await browser.close();
