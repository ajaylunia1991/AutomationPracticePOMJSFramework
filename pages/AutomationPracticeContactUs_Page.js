var assert = require('assert');

class AutomationPracticeContactUs_Page {

    get contactUs(){
        return $("//div[@id='contact-link']");
    }

    get scrollToHeading(){
        return $("//h1[@class='page-heading bottom-indent']");
        }    
    
    get selectHeading(){
      return $("//select[@id='id_contact']");
    }
  
    get emailAddress(){
      return $("//input[@id='email']");
    }
  
    get orderId(){
    return $("//input[@id='id_order']");
    }

    get message(){
    return $("//textarea[@id='message']");    
    }
  
    get submitButton(){
      return $("//button[@id='submitMessage']");
    }
  
    async clickOnContactUsLink() {
        return await (await this.contactUs).click();
    }

    async scrollToViewHeading() {
        return await (await this.scrollToHeading).scrollIntoView();
    }
      
    async selectSubjectHeading(service) {
      return await (await this.selectHeading).selectByVisibleText(await service);
    }
    
    async enterEmailAddress(emailAddress){
      return await(await this.emailAddress).setValue(emailAddress);   
    }

    async enterOrderReference(orderId){
      return await(await this.orderId).setValue(orderId);
    }
    
    async enterYourMessage(message){
       return await(await this.message).setValue(message);
    }  

    async clickOnSendButton() {
      return await (await this.submitButton).click();
    }
  

    async confirmSuccessfulServiceRequestSubmission(){ 
        var successfulSubscriptionHeader = "//p[@class='alert alert-success']";
        var validateSuccessfulSubscriptionHeader = await browser.waitUntil(async function () {
          return (await(await $(successfulSubscriptionHeader)).getText() == "Your message has been successfully sent to our team.")
        }, 3000);
        assert.equal(validateSuccessfulSubscriptionHeader, true);
      } 
  }
  
  module.exports = new AutomationPracticeContactUs_Page();
  
