
class PersonalInformation_Page {
    get myAccount(){
        return $("//h1[@class='page-heading']");
    }

    get myPersonalInfo(){
        return $("//div[@class='columns-container']//li[4]//a[1]");
    }    
    
    get yourPersonalInfo(){
      return $("//h1[@class='page-subheading']");
    }
  
    get currentPassword(){
      return $("//input[@id='old_passwd']");
    }
  
    get newPassword(){
    return $("//input[@id='passwd']");
    }

    get confirmationPassword(){
    return $("//input[@id='confirmation']");    
    }

    get saveButton(){
      return $("//button[@name='submitIdentity']");
    }
  
    get  myWishListButton(){
      return $("//li[@class='lnk_wishlist']");
    }
   
    get orderHistoryButton(){
      return $("//span[contains(text(),'Order history and details')]");
    }

    get myWishListHyperLink(){
      return $("//a[contains(text(),'My wishlist')]");
    }

    get creditSlipsButton(){
      return $("//span[contains(text(),'My credit slips')]");
    }

    get myAddressesButton(){
      return $("//span[contains(text(),'My addresses')]");
    }

    get myPersonalInfoButton(){
      return $("//span[contains(text(),'My personal information')]");
    }

    get sendWishlist(){
      return $("//span[contains(text(),'Send this wishlist')]");
    }

    async scrollToHeading() {
        return await (await this.myAccount).scrollIntoView();
    }

    async clickOnMyPersonalInfoButton() {
        return await (await this.myPersonalInfo).click();
    }
      
    async scrollToYourPersonalInfoHeading() {
        return await (await this.yourPersonalInfo).scrollIntoView();
    }

    async scrollToSendThisWishlist() {
        return await (await this.sendWishlist).scrollIntoView();
    }

    async enterYourCurrentPassword(password) {
      return await (await this.currentPassword).setValue(password);
    }
    
    async enterYourNewPassword(password){
      return await(await this.newPassword).setValue(password);   
    }

    async enterConfirmationPassword(password){
      return await(await this.confirmationPassword).setValue(password);
    }

    async clickOnSaveButton(){
        return await (await this.saveButton).click();
    }
    
    async enterYourMessage(message){
       return await(await this.message).setValue(message);
    }  

    async clickOnSendButton() {
      return await (await this.submitButton).click();
    }

     async clickOnMyWishListButton() {
       return await(await this.myWishListButton).click();
     }
     
     async clickOnOrderHistoryButton() {
       return await(await this.orderHistoryButton).click();
     }
    
     async clickOnMyWishListHyperLink() {
      return await(await this.myWishListHyperLink).click();
     }

     async clickOnMyCreditSlipsButton() {
       return await(await this.creditSlipsButton).click();
     }
     
     async clickOnMyAddressesButton() {
       return await(await this.myAddressesButton).click();
     }  
    
     async clickOnMyPersonalInformationButton() {
       return await(await this.myPersonalInfoButton).click();      
     }

     async confirmWishListItem() {
       var itemName = 'Printed Summer Dress S, Yellow' ;
       var item = "//p[@id='s_title']"
       var validateMyWishListItem = await browser.waitUntil(async function () {
        return (await(await $(item)).getText() == itemName)
      }, 3000);
      assert.equal(validateMyWishListItem, true);
     }

      async confirmSuccessfulPasswordChange(){ 
        var SuccessfulPasswordHeader = "//p[@class='alert alert-success']";
        var validateSuccessfulPasswordChange = await browser.waitUntil(async function () {
          return (await(await $(SuccessfulPasswordHeader)).getText() == "Your personal information has been successfully updated.")
        }, 3000);
        assert.equal(validateSuccessfulPasswordChange, true);
      } 

    async changeUserPassword(oldPwd,newPwd)
    {
        if(oldPwd){
          await (this.enterYourCurrentPassword(oldPwd));
        }
        if(newPwd){
          await (this.enterYourNewPassword(newPwd));
          await (this.enterConfirmationPassword(newPwd));
        }
        await this.clickOnSaveButton();
        await this.confirmSuccessfulPasswordChange();

   }

   async validateWishList()
   { await this.clickOnMyWishListButton();
     await this.scrollToHeading();
     await this.clickOnMyWishListHyperLink();
     await browser.pause(3000);
     await this.confirmWishListItem();
   }

}
  
module.exports = new PersonalInformation_Page();
  