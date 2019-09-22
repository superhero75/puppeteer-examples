/**
 * @name ping search
 *
 * @desc  check ping.pe for ip access
 */
const puppeteer = require('puppeteer')
const screenshot = 'youtube_fm_dreams_video.png'
const fs = require("fs");
try {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
  /*  await page.setViewport({ width: 1980, height: 1080 }) */
    await page.goto('http://port.ping.pe')
    await page.type('#input_ip', '54.180.15.29:22')
    await page.click('input[type="submit" i]')
    await page.waitFor(20000)
    
  const html = await page.content();
	fs.writeFileSync("index.html", html);
    await browser.close()
  })()
} catch (err) {
  console.error(err)
}
