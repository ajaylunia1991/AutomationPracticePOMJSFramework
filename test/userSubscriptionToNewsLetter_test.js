var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

beforeEach( async function() {
    browser.url('/index.php');
});

//covering VTB_5 where user subscribe for newsletter
//@Scenario 1 :- Where user subscribe for newsletter successfully
describe('This test case describes about user subscription to newsletter', function() {  
    it('user should be able to subscribe himself for newsletter', async function (done) {
      await AutomationPracticeHome_Page.scrollToViewHeading();
      await AutomationPracticeHome_Page.enterEmailNewsLetter("chrishemsworthyz@you-spam.com");
      await AutomationPracticeHome_Page.submitNewsLetterButton();
      await browser.pause(3000);
      await AutomationPracticeHome_Page.isSuccessAlertExists();
      await AutomationPracticeHome_Page.confirmSuccessfulNewsLetterSubscription();
    });
});    
//covering VTB_5 where user subscribe for newsletter
//@Scenario 2 :- Where user gets an error message for subscribing newsletter again
describe('This test case tells about already subscribed user should get error', function() {  
    it.skip('user should be able to subscribe himself for newsletter', async function (done) {
        await AutomationPracticeHome_Page.scrollToViewHeading();
        await AutomationPracticeHome_Page.enterEmailNewsLetter("chrishemsworth@you-spam.com");
        await AutomationPracticeHome_Page.submitNewsLetterButton();
        await browser.pause(3000);
        console.log(await AutomationPracticeHome_Page.isSuccessAlertExists());
        console.log(await AutomationPracticeHome_Page.isFailureAlertExists());
        await AutomationPracticeHome_Page.confirmUnSuccessfulNewsLetterSubscription();
      });
    });