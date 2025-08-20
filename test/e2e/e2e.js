const puppeteer = require("puppeteer");
const { setTimeout } = require("node:timers/promises");

async function main() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/test/e2e/mysite.html");
  await setTimeout(3000);
  await page.type("input[id=email]", "test@email.com");
  await page.type("input[id=password]", "password");
  await page.screenshot({ path: "test.png" });
  //   await page.waitForTimeout(5000);
  await setTimeout(3000);
  await page.click("input[id=submit]");
}
main();
