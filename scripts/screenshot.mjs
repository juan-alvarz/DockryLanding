// Screenshots of the page, for pull requests: screenshots/hero.jpg (1440 × 900),
// full.jpg (the whole page) and mobile.jpg (390 wide). Run `pnpm build` first.
// Needs Playwright with Chromium; if it's installed globally, run with NODE_PATH=$(npm root -g).
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';

// require() honors NODE_PATH, so a globally installed Playwright works; import doesn't.
const { chromium } = createRequire(import.meta.url)('playwright');

const port = 4329;
const server = spawn('npx', ['astro', 'preview', '--port', String(port)], { stdio: 'ignore' });
await new Promise((resolve) => setTimeout(resolve, 2500));
await mkdir('screenshots', { recursive: true });

const browser = await chromium.launch();
try {
  for (const [name, viewport, fullPage] of [
    ['hero', { width: 1440, height: 900 }, false],
    ['full', { width: 1440, height: 900 }, true],
    ['mobile', { width: 390, height: 844 }, true],
  ]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' });
    // Lazy images only load when scrolled to: scroll through the page, then back up.
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      for (let y = 0; y < document.body.scrollHeight; y += innerHeight / 2) {
        scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 60));
      }
      scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => Promise.race([
      Promise.all([...document.images].map((img) => img.decode().catch(() => {}))),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]));
    await page.screenshot({ path: `screenshots/${name}.jpg`, fullPage, quality: 80, type: 'jpeg' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (overflow > 0) console.warn(`${name}: the page scrolls sideways by ${overflow}px`);
    await page.close();
  }
} finally {
  await browser.close();
  server.kill();
}
