
var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");
var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");

beforeEach( async function() {
    browser.url('/index.php');
});

//covering VTB_6 where Registered User should be able to Buy Printed Dress and Complete payment process.
describe('This test case describes registered user should be able to buy printed dress', function() {  
    it('should allow user to search printed dress and buy it', async function (done) {
        await AutomationPracticeHome_Page.clickOnSignInLink();
        await browser.pause(3000);
        await AutomationPracticeHome_Page.loginWithRegisteredUser('Ajaylunia2011@gmail.com','456789');
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.searchItemOnHomePage('Printed Dress');
        await AutomationPracticeSearch_Page.completeCheckOutProcess(); 
        await AutomationPracticeSearch_Page.completeAddressToPayment();
    });
});
