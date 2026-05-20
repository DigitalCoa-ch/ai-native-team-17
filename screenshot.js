const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set a reasonable viewport
  await page.setViewportSize({ width: 1280, height: 900 });
  
  // Navigate to the site
  console.log('Navigating to https://stagnfc.com/#/ ...');
  await page.goto('https://stagnfc.com/#/', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Wait a moment for any JS to render
  await page.waitForTimeout(2000);
  
  // Take screenshot
  const screenshotPath = '/workspace/ai-native-team-17/stagnfc-screenshot.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('Screenshot saved to:', screenshotPath);
  
  // Also get the page title
  const title = await page.title();
  console.log('Page title:', title);
  
  await browser.close();
  console.log('Done!');
})();