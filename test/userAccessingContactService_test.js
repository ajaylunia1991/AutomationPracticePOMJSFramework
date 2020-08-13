var AutomationPracticeContactUs_Page = require("../pages/AutomationPracticeContactUs_Page");
var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

beforeEach( async function() {
    browser.url('/index.php');
});

//covering VTB_8 where user should be able to raise service request from contactUs page 
//@Scenario 1 :- Where guest user should be able to raise service request from contactUs page 
describe('This test case describes about guest user raising a service request', function() {  
    it('guest user should be able to raise a service request from contact us page', async function (done) {
       await AutomationPracticeContactUs_Page.clickOnContactUsLink();
       await browser.pause(3000);
       await AutomationPracticeContactUs_Page.scrollToViewHeading();
       await AutomationPracticeContactUs_Page.selectSubjectHeading('Webmaster');
       await AutomationPracticeContactUs_Page.enterEmailAddress('marcopolo@youspam.com');
       await AutomationPracticeContactUs_Page.enterOrderReference('#123323');
       await AutomationPracticeContactUs_Page.enterYourMessage('Piece is defective kindly replace it');
       await AutomationPracticeContactUs_Page.clickOnSendButton();
       await AutomationPracticeContactUs_Page.confirmSuccessfulServiceRequestSubmission();
    });
});

//@Scenario 2 :- Where registered user should be able to raise service request from contactUs page 
describe('This test case describes about registered user raising a service request', function() {  
    it('Registered user should be able to raise a service request from contact us page', async function (done) {
        await AutomationPracticeHome_Page.clickOnSignInLink();
        await browser.pause(3000);
        await AutomationPracticeHome_Page.loginWithRegisteredUser('Alibaba@trash-mail.com','123456');
        await browser.pause(3000);
        await AutomationPracticeContactUs_Page.clickOnContactUsLink();
        await browser.pause(3000);
        await AutomationPracticeContactUs_Page.scrollToViewHeading();
        await AutomationPracticeContactUs_Page.selectSubjectHeading('Customer service');
        await AutomationPracticeContactUs_Page.enterYourMessage('Dress is of poor quality kindly replace it');
        await AutomationPracticeContactUs_Page.clickOnSendButton();
        await AutomationPracticeContactUs_Page.confirmSuccessfulServiceRequestSubmission();
    });
});
