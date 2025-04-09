const { Builder, By, Key, until, Capabilities, WebElement } = require("selenium-webdriver");
const assert = require('assert');
const { post } = require("selenium-webdriver/http");
const { percy } = require('browserstack-node-sdk');


describe("Bentley.com - ", () => {








  // test("Check Synchro Video  ", async () => {
  //   // Create BrowserStack capabilities
  //   const capabilities = Capabilities.chrome()
  //     .set('Testcase5', 'Bentley.com Check Video');
  //   const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
  //   await driverTestcase.get("https://www.bentley.com/software/synchro/");
  //   await driverTestcase.manage().window().maximize();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   const bodyElement = await driverTestcase.findElement(By.id('post-5819'));
  //   // Scroll down the page using JavaScript
    

  //  // bodyElement.click();

  //   await new Promise((resolve) => setTimeout(resolve, 10000));

  //   // driverTestcase.switchTo().activeElement();
  //   // const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
  //   // if (closebutton) {
  //   //   closebutton.click();
  //   // }
  //   // await new Promise((resolve) => setTimeout(resolve, 10000));
  //   await driverTestcase.executeScript('window.scrollTo(0,2000);');
    
  //   const videoiframe = await driverTestcase.findElement(By.css('#section-tzoid-0-396149b4 > div > div.computer'));
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   videoiframe.click();
  //   await new Promise((resolve) => setTimeout(resolve, 5000));


  //   let isVisible = false;
  //   if (timeplayed) {
  //     isVisible = true;
  //   }
  //   assert.equal(isVisible, true);
  //   await driverTestcase.quit();
  // });



  // test("Check Form functionality", async () => {
  //   // Create BrowserStack capabilities
  //   const capabilities = Capabilities.chrome()
  //     .set('Testcase6', 'Bentley.com');
  //   const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
  //   await driverTestcase.get("https://www.bentley.com/contact-us-for-license-plan/");
  //   await driverTestcase.manage().window().maximize();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   const readyState = await driverTestcase.executeScript('return document.readyState');
  //   //Click on the page 
  //   const bodyElement = await driverTestcase.findElement(By.id('post-23217'));
  //   bodyElement.click();
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   driverTestcase.switchTo().activeElement();
  //   const closebutton = driverTestcase.findElement(By.css('#elementor-popup-modal-54572 > div > a > i'));
  //   if (closebutton) {
  //     closebutton.click();
  //   }
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   let iframeform = driverTestcase.findElement(By.css('#hs-form-iframe-0'));
  //   driverTestcase.switchTo().frame(iframeform);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  //   await driverTestcase.executeScript('window.scrollTo(0, 2000);');

  //   // Find all email input fields within the iframe using a CSS selector
  //   let inputFieldsemail = await driverTestcase.findElements(By.css('input[type="email"]'));
  //   for (let inputFieldemail of inputFieldsemail) {
  //     await inputFieldemail.sendKeys('test@bentley.com');
  //   }

  //   // Find all text input fields within the iframe using a CSS selector
  //   let inputFields = await driverTestcase.findElements(By.css('input[type="text"]'));
  //   for (let inputField of inputFields) {
  //     await inputField.sendKeys('Test Test');
  //   }

  //   // Find all phone input fields within the iframe using a CSS selector
  //   let inputFieldsphone = await driverTestcase.findElements(By.css('input[type="tel"]'));
  //   for (let inputFieldphone of inputFieldsphone) {
  //     await inputFieldphone.sendKeys('1234567890');
  //   }
  //   // Find all select elements (dropdowns) within the iframe using a CSS selector
  //   let dropdowns = await driverTestcase.findElements(By.css('select'));
  //   for (let dropdown of dropdowns) {
  //     await dropdown.findElement(By.css('option:nth-child(2)')).click();
  //   }

  //   // Find all select elements (radiobuttons) within the iframe using a CSS selector
  //   let radiobuttons = await driverTestcase.findElements(By.css('input[type="radio"]'));
  //   for (let radiobutton of radiobuttons) {
  //     if (radiobutton.getText == "No")
  //       await radiobutton.click();
  //   }

  //   // Find all select elements (checkboxes) within the iframe using a CSS selector
  //   let checkboxes = await driverTestcase.findElements(By.css('input[type="checkbox"]'));
  //   for (let checkbox of checkboxes) {
  //     if (checkbox.getText == "AGENT")
  //       await checkbox.click();
  //       await driverTestcase.executeScript('arguments[0].scrollIntoView();', checkbox);
  //   }


  //   //Click the submit button 
  //   let submitbutton = await driverTestcase.findElement(By.css('imput[type="submit"'));
  //   submitbutton.click();

  //   await driverTestcase.executeScript('window.scrollTo(0, 15000);');
  //   await new Promise((resolve) => setTimeout(resolve, 10000));




  //   // let flag = false;
  //   // if (pencilbanner) {
  //   //   flag = true;
  //   // }
  //   // assert.equal(flag, true);
  //   await driverTestcase.quit();
  // });



 

});
