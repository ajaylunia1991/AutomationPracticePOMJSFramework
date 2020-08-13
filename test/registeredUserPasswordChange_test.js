var PersonalInformation_Page = require("../pages/PersonalInformation_Page");
var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

beforeEach( async function() {
    browser.url('/index.php');
});

//covering VTB_11 where user should be able to change his password from personal information page
describe('This test case describes about user changing its existing password', function() {  
    it('should be able to change user password with confirmation message', async function (done) {
        await AutomationPracticeHome_Page.clickOnSignInLink();
        await browser.pause(3000);
        await AutomationPracticeHome_Page.loginWithRegisteredUser('Ajaylunia2011@gmail.com','123456');
        await browser.pause(3000);
        await PersonalInformation_Page.scrollToMyAccountHeading();
        await PersonalInformation_Page.clickOnMyPersonalInfoButton();
        await PersonalInformation_Page.scrollToYourPersonalInfoHeading();
        await PersonalInformation_Page.changeUserPassword('123456','456789');
    });
});
