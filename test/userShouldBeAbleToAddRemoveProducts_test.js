var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");
var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");

beforeEach( async function() {
    browser.url('/index.php');
    await browser.pause(3000);
});

//covering VTB_10 where Registered User should be able to add product in Shopping cart 
describe('This test case describes Registered User should be able add product in his shopping cart', function() {  
    it('should allow registered user to add item in his shopping cart', async function (done) {
        await AutomationPracticeHome_Page.clickOnSignInLink();
        await browser.pause(3000);
        await AutomationPracticeHome_Page.loginWithRegisteredUser('Sean@you-spam.com','123456');
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.searchItemOnHomePage('Evening Dress');
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.addItemToShoppingCart();
        await AutomationPracticeSearch_Page.validateCartItem();
    });
});

//covering VTB_10 where Registered User should be able to remove product from his shopping cart 
describe('This test case describes Registered User should be able to remove product from his shopping cart', function() {  
    it.only('should allow registered user to remove any item from his shopping cart', async function (done) {
        await AutomationPracticeHome_Page.clickOnSignInLink();
        await browser.pause(3000);
        await AutomationPracticeHome_Page.loginWithRegisteredUser('Sean@you-spam.com','123456');
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.searchItemOnHomePage('Evening Dress');
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.addItemToShoppingCart();
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.removeItemFromShoppingCart();
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.validateShoppingCartEmptyMessage();
    });
});