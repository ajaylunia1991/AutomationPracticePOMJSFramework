var assert = require('assert');

class AutomationPracticeSearch_Page {

  get search(){
    return $("#search_query_top");
  }

  get searchSubmit(){
    return $("#searchbox > button");
  }

  get scrollToItem(){
    return $("#center_column > h1");
  }

  get scrollToHeading(){
  return $("//label[contains(text(),'Condition')]");
  }

  get scrollToSummary(){
  return $("//span[contains(text(),'Summary')]");
  }

  get scrollToChoosePay(){
  return $("//h1[@class='page-heading']");
  }

  get scrollToDelivery(){
  return $("//h3[contains(text(),'Your delivery address')]");
  }

  get scrollToBankWire(){
  return $("//h3[@class='page-subheading']");
  }

  get scrollToBanner(){
  return $("//div[@class='banner']");
  }

  get scrollToCartSummary(){
  return $("//h1[@id='cart_title']");
  }

  get payByBankWire(){
  return $("//div[@class='paiement_block']//div[1]//div[1]");  
  }

  get clickItem(){
    return $("div.right-block > h5 > a");
  }

  get quickView() {
    return $("//span[contains(text(),'Quick view')]");
  }

  get addToCart() {
    return $("#add_to_cart > button");
  }

  get addToWishlist() {
    return $("//a[@id='wishlist_button']");
  }

  get fancyBoxCloseButton() {
    //return $(".fancybox-item");
    //return $(".fancybox-overlay.fancybox-overlay-fixed");
    return $(".fancybox-item.fancybox-close");
  }

  get layerCartCloseButton() {
    return $("//span[@class='cross']");
  }

  get userAccount() {
    return $("//a[@class='account']");
  }

  get proceedToCheckout() {
    return $(".button-medium > span");
  }

  get proceedToCheckoutBtn() {
    return $("a.button.btn.btn-default.standard-checkout.button-medium");
  }

  get termsOfServiceCheckBox() {
    return $("//input[@id='cgv']");
  }

  get proceedAddressButton() {
    return $("//button[@name='processAddress']");
  }

  get proceedCarrierButton() {
     return $("//button[@name='processCarrier']");
  }

  get confirmOrderButton() {
    return $("//button[@class='button btn btn-default button-medium']");
  }

  get removeItem() {
    return $("//i[@class='icon-trash']");
  }
  
  get shoppingCart(){
    return $("//div[@class='shopping_cart']/a[1]")
  }

  async scrollToShoppingCartSummary(){
    return await (await this.scrollToCartSummary).scrollIntoView();
  }
  
  async removeItemFromShoppingCart(){
    return await (await this.removeItem).click();
  }

  async scrollToDeliveryAddress() {
    return await (await this.scrollToDelivery).scrollIntoView(); 
  }

  async scrollToBankWirePayment() {
    return await (await this.scrollToBankWire).scrollIntoView();
  }

  async scrollToTopBanner() {
    return await (await this.scrollToBanner).scrollIntoView();
  }

  async searchItemOnHomePage(searchItem) {
    await (await this.search).setValue(searchItem);
    await this.clickOnSearchSubmitButton();
    await this.scrollToViewItem(); 
  }

  async clickOnSearchSubmitButton() {
    return await (await this.searchSubmit).click();
  }
  
  async scrollToViewItem() {
    return await (await this.scrollToItem).scrollIntoView();
  }

  async scrollToViewPrintedDress() {
    return await(await this.scrollToPrintedDress).scrollIntoView();
  }

  async scrollToViewHeading() {
    return await (await this.scrollToHeading).scrollIntoView();
  }

  async scrollToViewSummary() {
    return await (await this.scrollToSummary).scrollIntoView();
  }

  async scrollToChoosePayment() {
    return await (await this.scrollToChoosePay).scrollIntoView();
  }

  async clickOnUserAccount() {
    return await (await this.userAccount).click();
  }

  async clickOnItem() {
    return await (await this.clickItem).click();
  }

  hoverToQuickViewAndClickOnIt() {
    console.log("Entering into Hover");
    return this.quickView.moveTo(100,100);
  }

  async clickOnAddToCartButton() {
    return await (await this.addToCart).click();
  }

  async clickOnAddToWishListButton(){
    return await (await this.addToWishlist).click();
  }

  async clickOnFancyBoxCloseButton(){
    return await (await this.fancyBoxCloseButton).click()//.click();
  }

  async clickOnProceedToCheckout() {
    return await (await this.proceedToCheckout).click();
  }

  async clickOnProceedToCheckoutOnSummaryPage() {
    return await (await this.proceedToCheckoutBtn).click();
  }

  async clickOnTermsOfServiceCheckBox() {
    return await(await this.termsOfServiceCheckBox).click();
  }

  async clickOnProceedAddressButton() {
    return await(await this.proceedAddressButton).click();
  }

  async clickOnProceedCarrierButton() {
    return await(await this.proceedCarrierButton).click();
  }

  async clickOnPayByBankWireButton() {
    return await(await this.payByBankWire).click();
  }

  async clickOnConfirmMyOrderButton() {
    return await(await this.confirmOrderButton).click();
  }
 
  async clickOnLayerCartCloseButton() {
    return await(await this.layerCartCloseButton).click();
  }

  async clickOnShoppingCart(){
    return await((await this.shoppingCart)).click();
  }


  async validateShoppingCartEmptyMessage(){
    var successfulOrderConfirmation = "//p[@class='alert alert-warning']";
    var validateSuccessfulOrderConfirmation = await browser.waitUntil(async function () {
      return (await(await $(successfulOrderConfirmation)).getText() == "Your order on My Store is complete.");
    }, 3000);
    assert.equal(validateSuccessfulOrderConfirmation, true);
  }

  async successfulOrderConfirmation(){ 
    var successfulOrderConfirmation = "//strong[contains(text(),'Your order on My Store is complete.')]";
    var validateSuccessfulOrderConfirmation = await browser.waitUntil(async function () {
      return (await(await $(successfulOrderConfirmation)).getText() == "Your order on My Store is complete.")
    }, 3000);
    assert.equal(validateSuccessfulOrderConfirmation, true);
  }

  async validateCartItem(){
    var itemQty = "//input[@name='quantity_4_16_0_328919']";
    var validateNumberOfCartItem = await browser.waitUntil(async function () {
      return (await(await $(itemQty)).getValue() == '1')
   }, 3000);
   assert.equal(validateNumberOfCartItem, true);
  }

  async completeCheckOutProcess(){
    await browser.pause(3000);
    await this.clickOnItem();
    await browser.pause(3000);
    await this.scrollToViewHeading();
    await browser.pause(3000);
    await this.clickOnAddToCartButton();
    await browser.pause(3000);
    await this.clickOnProceedToCheckout();
    await browser.pause(3000);
    await this.scrollToViewSummary();
    await this.clickOnProceedToCheckoutOnSummaryPage();
  }

  async addItemToWishlist(){
    await this.clickOnSearchSubmitButton();
    await this.scrollToViewItem();
    await browser.pause(3000);
    await this.clickOnItem();
    await browser.pause(3000);
    await this.scrollToViewHeading();
    await browser.pause(3000);
    await this.clickOnAddToWishListButton();
    await browser.pause(3000);
    await browser.refresh()
    await this.clickOnUserAccount();
  }   

  async completeAddressToPayment(){
    await this.scrollToDeliveryAddress(); 
    await this.clickOnProceedAddressButton();
    await browser.pause(3000);
    await this.clickOnTermsOfServiceCheckBox();
    await this.clickOnProceedCarrierButton();
    await this.scrollToChoosePayment();
    await this.clickOnPayByBankWireButton();
    await this.scrollToBankWirePayment();
    await this.clickOnConfirmMyOrderButton();
    await this.successfulOrderConfirmation();
  } 

  async addItemToShoppingCart(){
    await this.clickOnItem();
    await browser.pause(3000);
    await this.scrollToViewHeading();
    await browser.pause(3000);
    await this.clickOnAddToCartButton();
    await browser.pause(3000);
    await this.clickOnLayerCartCloseButton();
    await browser.pause(3000);
    await this.scrollToTopBanner();
    await browser.pause(3000);
    await this.clickOnShoppingCart();
    await browser.pause(3000);
    await this.scrollToShoppingCartSummary();
    await browser.pause(3000); 
  }

  async validateShoppingCartEmptyMessage(){
    var emptyMessage = "//p[@class='alert alert-warning']";
    var validateCartEmptyMessage = await browser.waitUntil(async function () {
      return (await(await $(emptyMessage)).getText() == 'Your shopping cart is empty.');
   }, 3000);
   assert.equal(validateCartEmptyMessage, true);
  }

}

module.exports = new AutomationPracticeSearch_Page();
