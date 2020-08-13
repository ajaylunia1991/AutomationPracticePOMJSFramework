var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");

  beforeEach(async function() {
  browser.url("/index.php");
});

//covering VTB_5 where Guest User can search t-shirt and proceed to checkout page
describe("Functioning of Guest User on Automation Practice Website", function () {
  it("should make guest user to search t-shirt and proceed to checkout page", async function (done) {
    await AutomationPracticeSearch_Page.searchItemOnHomePage('T-shirt'); //made it generic so that anything can be searched
    await AutomationPracticeSearch_Page.addToCart();
  });
});
