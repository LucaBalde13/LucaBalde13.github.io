import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:4322/';
const out = process.argv[3] || '/tmp/mob-home.png';

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);

// detect horizontal overflow
const overflow = await page.evaluate(() => {
  const docW = document.documentElement.clientWidth;
  const offenders = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.right > docW + 1 || r.left < -1) {
      offenders.push({ tag: el.tagName, cls: el.className?.toString().slice(0,40), right: Math.round(r.right), left: Math.round(r.left) });
    }
  });
  return { docW, scrollW: document.documentElement.scrollWidth, offenders: offenders.slice(0, 25) };
});
console.log('VIEWPORT', overflow.docW, 'SCROLLW', overflow.scrollW, 'OVERFLOW?', overflow.scrollW > overflow.docW + 1);
console.log(JSON.stringify(overflow.offenders, null, 1));

await page.screenshot({ path: out, fullPage: true });
console.log('saved', out);
await browser.close();
