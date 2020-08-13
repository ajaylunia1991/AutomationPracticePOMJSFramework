var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");
var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

beforeEach( async function() {
    browser.url('/index.php');
});

// Registered user should be able to oder casual dress till payment
describe('This test case describes about Registered User Ordering Casual Dress', function() {  
    it('RegisteredUser should be able to Order Casual Dress', async function (done) {
        // await AutomationPracticeHome_Page.clickOnSignInLink();
        // await browser.pause(3000);
        // await AutomationPracticeHome_Page.loginWithRegisteredUser('Ajaylunia2011@gmail.com','456789');
        await browser.pause(3000);
        await AutomationPracticeHome_Page.hoverToDressesAndClickOnCasualDress();
        // await AutomationPracticeHome_Page.clickOnDresses();
        // await AutomationPracticeHome_Page.clickOnCasualDress();
        // await AutomationPracticeSearch_Page.completeCheckOutProcess();
        // await AutomationPracticeSearch_Page.completeAddressToPayment();
        // await AutomationPracticeHome_Page.clickOnSignOut();
        //hoverToDressesAndClickOnCasualDress();
        
    });
});
