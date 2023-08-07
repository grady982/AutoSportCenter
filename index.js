const { Builder, By } = require("selenium-webdriver");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

async function main() {
  let driver = await new Builder().forBrowser("chrome").build();
  
  try {
    await driver.get('https://scr.cyc.org.tw/TP07.aspx');

    // set a cookie on the current domain
    await driver.manage().addCookie({ name: 'ASP.NET_SessionId', value: 'nch5vm51w2mv2523m3uvqcqq' });

    
    await sleep(1000);
    await driver.findElement(By.xpath(`//img[@title='羽球']`)).click();
    await sleep(1000);
    await driver.findElement(By.xpath(`//img[@src='img/conf01.png']`)).click();
    await sleep(1000);
    driver.switchTo().alert().accept();
    await sleep(2000);


  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
}

main();
