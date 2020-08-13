
var ContactUs_Page = require("../pages/ContactUs_Page");
//var AutomationPracticeSearch_Page = require("../pages/AutomationPracticeSearch_Page");

beforeEach(function () {
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUni", function () {
  it.only("Should be able to submit a successful submission via contact us form", async function (done) {
    await ContactUs_Page.submitAllInformationViaContactUsForm('joe','Blogs','Joe_blogs123@outlook.com','How are you ?');
    //await browser.pause(5000);
    //
  });

//   it("Should not be able to submit a successful submission via contact us form as all fields are required", function (done) {
//     ContactUs_Page.setFirstName("Mike");
//     ContactUs_Page.setLastName("Woods");
//     ContactUs_Page.setEmailAddress("mike_woods@mail.com");
//     ContactUs_Page.clickSubmitButton();
//     ContactUs_Page.confirmUnsuccessfulSubmission();
//   });

//   it("Should not be able to submit a successful submission via contact us form as all fields are required", function (done) {
//     setFirstName("Sarah");
//     setEmailAddress("sarah_woods@mail.com");
//     clickSubmitButton();
//     confirmUnsuccessfulSubmission();
//   });

//   it("Should not be able to submit a successful submission via contact us form as all fields are required", function (done) {
//     setLastName("Jomes");
//     setEmailAddress("sarah_Jomes@mail.com");
//     clickSubmitButton();
//     confirmUnsuccessfulSubmission();
//   });
});

// async submitAllInformationViaContactUsForm(firstName,lastName,emailAddress,comments) {
//     let promise1, promise2,promise3,promise4;
//     if (firstName) {
//       promise1 = this.firstName;
//       //(await this.firstName).setValue(firstName);
//     //return await (await this.search).setValue(searchItem);
//     }
//     if (lastName) {
//       promise2 = this.lastName;  // .setValue(lastName);
//       //(await this.lastName).setValue(lastName);
//     }
//     if (emailAddress) {
//       promise3 = this.emailAddress//.setValue(emailAddress);
//       //(await this.emailAddress).setValue(emailAddress);
//     }
//     if (comments) {
//       promise4 = this.comments//.setValue(comments);
//       //(await this.comments).setValue(comments);
//     }

//     let promise5 = this.submitButton;
    
//     Promise.all([promise1,promise2,promise3,promise4,promise5]).then((values) => {
//       values[0].setValue(firstName);
//       values[1].setValue(lastName);
//       values[2].setValue(emailAddress);
//       values[3].setValue(comments);
//       return values[4].click();
//     });
	
//	https://github.com/deepak0174/bootstrap-sass-use-migration#readme
	//http://bluebirdjs.com/docs/getting-started.html
