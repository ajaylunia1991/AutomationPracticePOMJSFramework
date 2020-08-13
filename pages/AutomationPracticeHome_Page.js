var assert = require('assert');

class AutomationPracticeHomePage {
  get signInLink() {
    return $("//a[@class='login']");
  }
  get clickOnCreateAccount() {
    return $("//input[@id='email_create']");
  }
  get submitCreateButton() {
    return $("//button[@id='SubmitCreate']");
  }
  get firstName() {
    return $("//input[@id='customer_firstname']");
  }
  get lastName() {
    return $("//input[@id='customer_lastname']");
  }
  get emailId() {
    return $("//input[@id='email']")
  }
  get password() {
    return $("//input[@id='passwd']");
  }
  get address() {
    return $("//input[@id='address1']");
  }
  get city() {
    return $("//input[@id='city']");
  }
  get state() {
    return $("#id_state");
  }
  get zipcode() {
    return $("//input[@id='postcode']");
  }
  get mobilephone() {
    return $("//input[@id='phone_mobile']");
  }
  get submitButton() {
    return $("//button[@id='submitAccount']");
  }
  get searchBox() {
    return $("//input[@id='search_query_top']");
  }
  get submitSearch() {
    return $("//button[@name='submit_search']");
  }
  get scrollToHeading() {
    return $("//h1[contains(text(),'Automation Practice Website')]");
  }
  get newsletterInputField() {
    return $("//input[@id='newsletter-input']");
  }  
  get submitNewsletter(){
    return $("//button[@name='submitNewsletter']");
  }
  get submitLogin(){
    return $("//button[@id='SubmitLogin']");
  }
  get dresses(){
    return $('//*[@id="block_top_menu"]/ul/li[2]/a');
  } 
  get women(){
    return $('//*[@id="block_top_menu"]/ul/li[1]/a');
  }
  get tShirts(){
    return $('//*[@id="block_top_menu"]/ul/li[3]/a')
  }
  get casualDress(){
    return $("//a[@class='subcategory-name'][contains(text(),'Casual Dresses')]");
  }
  get eveningDress(){
    return $("//a[@class='subcategory-name'][contains(text(),'Evening Dresses')]");
  }
  get summerDress(){
    return $("//a[@class='subcategory-name'][contains(text(),'Summer Dresses')]");
  }
  get tops(){
    return $("//a[@class='subcategory-name'][contains(text(),'Tops')]");
  }
  get blouses(){
    return $("//a[@class='subcategory-name'][contains(text(),'Blouses')]");
  }
  get signOut(){
    return $("//a[@class='logout']");
  }
  get dressesHover(){
    return $('//*[@id="block_top_menu"]/ul/li[2]/a');
  }
  get casual_dress(){
    return $('//*[@id="block_top_menu"]/ul/li[2]/ul/li[1]/a');
  }
  get home(){
    return $("//img[@class='logo img-responsive']");
  }
  get successAlert(){
    return $("//p[@class='alert alert-success']");  
  }  
  get failureAlert(){
    return $("//p[@class='alert alert-danger']");  
  }  
    
  async isSuccessAlertExists(){
    return await ((await this.successAlert).isExisting());  
  }  
    
  async isFailureAlertExists(){
    return await ((await this.failureAlert).isExisting());    
  } 


  async scrollToViewHeading() {
    return await (await this.scrollToHeading).scrollIntoView();
  }

  async enterEmailNewsLetter(emailAddress){
    return await ((await this.newsletterInputField).setValue(emailAddress));
  }

  async submitNewsLetterButton(){
    return await (await this.submitNewsletter).click();
  } 

  async clickOnCreateAccountButton(emailAddress) {
    return await ((await this.clickOnCreateAccount).setValue(emailAddress));
  }

  async submitButtonCreateAccount() {
    return await (await this.submitCreateButton).click();
  }

  async setFirstName(firstName) {
    return await ((await this.firstName).setValue(firstName));
  }

  async setLastName(lastName) {
    return await ((await this.lastName).setValue(lastName));
  }

  async setEmailId(email) {
    return await((await this.emailId).setValue(email));
  }

  async setPassword(password) {
    return await ((await this.password).setValue(password));
  }

  async setAddress(address) {
    return await ((await this.address).setValue(address));
  }

  async setCity(city) {
    return await ((await this.city).setValue(city));
  }

  async setState(state) {
    return await ((await this.state).selectByVisibleText(state));
  }

  async setZipCode(zipcode) {
    return await ((await this.zipcode).setValue(zipcode));
  }

  async setMobilePhone(mobileNumber) {
    return await ((await this.mobilephone).setValue(mobileNumber));
  }

  async clickSubmitButton() {
    return await ((await this.submitButton).click());
  }

  async submitLoginButton() {
    return await ((await this.submitLogin).click());
  }

  async clickOnSignInLink(){
    return await ((await this.signInLink)).click();
  }

  async clickOnSignOut(){
    return await ((await this.signOut)).click();
  }

  async clickOnDresses(){
    return await((await this.dresses)).click();
  }

  async clickOnCasualDress(){
    return await((await this.casualDress)).click();
  }

  async clickOnEveningDress(){
    return await((await this.eveningDress)).click();
  }

  async clickOnSummerDress(){
    return await((await this.summerDress)).click();
  }

  async clickOnWomen(){
    return await((await this.women)).click();
  }

  async clickOnTops(){
    return await((await this.tops)).click();
  }

  async clickOnBlouses(){
    return await((await this.blouses)).click();
  }

  async clickOnTshirts(){
    return await((await this.tShirts)).click();
  }

  async clickOnHome() {
    return await((await this.home)).click();
  }

  async hoverToDressesAndClickOnCasualDress(){
    await((await this.dressesHover)).moveTo();
    await browser.pause(1000);
    console.log('hovering on casual dress after Dresses');
    await((await this.casual_dress)).moveTo();
    console.log('click should happen');
    await browser.positionClick(); 
    await browser.pause(30000);
  } 

  async loginWithRegisteredUser(email,password){
    if(email){
      await (this.setEmailId(email));
    }
    if (password) {
      await (this.setPassword(password));
    }
    await this.submitLoginButton();
  }

  async loginWithRegisteredUserButWithWrongPassword(email,password){
    if(email){
      await (this.setEmailId(email));
    }
    if (password) {
      await (this.setPassword(password));
    }
    await this.submitLoginButton();
    await this.confirmAuthenticationFailed();
  }

  async submitAllInformationViaRegistrationForm(firstName,lastName,password,address,city,state,zipcode,mobilephone){
    if (firstName) {
     await (this.setFirstName(firstName));
    }
    if (lastName) {
     await (this.setLastName(lastName));
    }
    if (password) {
      await (this.setPassword(password));
    }
    if (address) {
      await (this.setAddress(address));
    }
    if (city) {
      await (this.setCity(city));
    }
    if (state) {
      browser.pause(3000);
      await (this.setState(state));
    }
    if (zipcode) {
      await (this.setZipCode(zipcode));
    }
    if (mobilephone){
      await (this.setMobilePhone(mobilephone));
    }
    await this.clickSubmitButton();
    await this.confirmSuccessfulUserAccountCreation(firstName,lastName);

  }

  async confirmSuccessfulUserAccountCreation(firstName, lastName) {
    var successfulSubmissionHeader = "//a[@class='account']";
    var validateSubmissionHeader = await browser.waitUntil(async function () {
      return (await(await $(successfulSubmissionHeader)).getText() == firstName +" " + lastName)
    }, 3000);
    assert.equal(validateSubmissionHeader, true);
  }
   
  async confirmUnsuccessfulAccountCreation(emailId) {
    await this.clickOnCreateAccountButton(emailId);
    await this.submitButtonCreateAccount();
    var unsuccessfulSubmissionHeader = "ol:nth-child(1) > li";
    var validateNoSubmissionHeader = await browser.waitUntil(async function () {
      return (await(await $(unsuccessfulSubmissionHeader)).getText() ==
        "An account using this email address has already been registered. Please enter a valid password or request a new one."
      );
    }, 3000);
    assert.equal(validateNoSubmissionHeader, true);
 }

  async confirmAuthenticationFailed() {
    var errorMessage ="//li[contains(text(),'Authentication failed.')]";
    var validateErrorMessage = await browser.waitUntil(async function () {
      return (await(await $(errorMessage)).getText() == "Authentication failed.");
    }, 3000);
    assert.equal(validateErrorMessage, true);
 }

 async confirmSuccessfulNewsLetterSubscription(){ 
  var successfulSubscriptionHeader = "//p[@class='alert alert-success']";
  var validateSuccessfulSubscriptionHeader = await browser.waitUntil(async function () {
    return (await(await $(successfulSubscriptionHeader)).getText() == "Newsletter : You have successfully subscribed to this newsletter.")
  }, 3000);
  assert.equal(validateSuccessfulSubscriptionHeader, true);
}

async confirmUnSuccessfulNewsLetterSubscription(){
  var unsuccessfulSubscriptionHeader = "//p[@class='alert alert-danger']";
    var validateUnsuccessfulSubscriptionHeader = await browser.waitUntil(async function () {
      return (await(await $(unsuccessfulSubscriptionHeader)).getText() =="Newsletter : This email address is already registered.");
    }, 3000);
    assert.equal(validateUnsuccessfulSubscriptionHeader, true);
 }

}
module.exports = new AutomationPracticeHomePage();
