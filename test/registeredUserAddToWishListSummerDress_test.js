var PersonalInformation_Page = require("../pages/PersonalInformation_Page");
var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");
var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");

beforeEach( async function() {
    browser.url('/index.php');
});


//covering VTB_6 where Registered User add summer dress in his wishlist and able to validate it 
describe('This test case describes registered user should be able to add summer dress in his wishlist', function() {  
    it('should allow user to search summer dress and add it to wishlist', async function (done) {
        await AutomationPracticeHome_Page.clickOnSignInLink();
        await browser.pause(3000);
        await AutomationPracticeHome_Page.loginWithRegisteredUser('Ajaylunia2011@gmail.com','456789');
        await browser.pause(3000);
        await AutomationPracticeSearch_Page.searchItemOnHomePage('Summer Dress');
        await AutomationPracticeSearch_Page.addItemToWishlist();
        await PersonalInformation_Page.validateWishList();
    });
});
