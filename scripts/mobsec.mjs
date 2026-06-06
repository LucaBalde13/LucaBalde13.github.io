import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:4322/';
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true, hasTouch: true,
});
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const sections = ['.hero', '.science-intro', '.products', '.product-showcase', '.technology', '.testimonials', '.faq', '.closing-cta', '.footer'];
for (const sel of sections) {
  const el = page.locator(sel).first();
  if (await el.count() === 0) { console.log('MISSING', sel); continue; }
  try {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const name = sel.replace(/[.#]/g,'');
    await el.screenshot({ path: `/tmp/sec-${name}.png` });
    console.log('ok', sel);
  } catch(e) { console.log('FAIL', sel, e.message.slice(0,50)); }
}
await browser.close();
