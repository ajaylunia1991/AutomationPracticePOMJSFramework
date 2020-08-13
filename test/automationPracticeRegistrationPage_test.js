var AutomationPracticeHome_Page = require("../pages/AutomationPracticeHome_Page");

var assert = require('assert');

beforeEach( async function() {
    browser.url('/index.php');
    await(await $("//a[@class='login']")).click();    
});

//covering VTB_4 where user registration is completed.
describe('Test Registeration form for Registering user in Automation practice', function() {  
  it('Should be able to create account with passed email id for a kind of user', async function (done) {
    await AutomationPracticeHome_Page.clickOnCreateAccountButton('shoaibakhtar@you-spam.com');
    await AutomationPracticeHome_Page.submitButtonCreateAccount();   
    await AutomationPracticeHome_Page.submitAllInformationViaRegistrationForm('shoaib','akhtar','123456','wallstreet,Washington','Washington','Alabama','02861','011001');
  });
 
  //In This Case we are using emailId for which already account exists for AutomationPractice.com
  it('User should not be able to create Account due to mail id already present in database', async function (done) {
   await AutomationPracticeHome_Page.confirmUnsuccessfulAccountCreation('chrishemsworth@you-spam.com');
    });
  
  //In This Case we are using Registered Email Id with Wrong Password and Validating the error message
  it('User should see error message on entering Correct EmailId but Wrong Password', async function (done) {
  await AutomationPracticeHome_Page.loginWithRegisteredUserButWithWrongPassword('chrishemsworth@you-spam.com','456789');
  await AutomationPracticeHome_Page.confirmAuthenticationFailed();
  });      
});