var assert = require('assert');

class ContactUs_page {
  get firstName() {
    return $("[name='first_name']");
  }
  get lastName() {
    return $("[name='last_name']");
  }
  get comments() {
    return $("textarea");
  }
  get emailAddress() {
    return $("[name='email']");
  }
  get submitButton() {
    return $("[type='submit']");
  }
 
  setFirstName(firstName) {
    return this.firstName.setValue(firstName);
  }

  setLastName(lastName) {
    return this.lastName.setValue(lastName);
  }

  setEmailAddress(emailAddress) {
    return this.emailAddress.setValue(emailAddress);
  }

  setComments(comments) {
    return this.comments.setValue(comments);
  }

  async clickSubmitButton() {
    return await (await this.submitButton).click();
  }

  async submitAllInformationViaContactUsForm(firstName,lastName,emailAddress,comments) {
    if (firstName) {
    await (await this.firstName).setValue(firstName);
    //return await (await this.search).setValue(searchItem);
    }
    if (lastName) {
     await (await this.lastName).setValue(lastName);
    }
    if (emailAddress) {
     await (await this.emailAddress).setValue(emailAddress);
    }
    if (comments) {
     await (await this.comments).setValue(comments);
    }

    await this.clickSubmitButton();
    await this.confirmSuccessfulSubmission();
  }

  async confirmSuccessfulSubmission() {
    console.log("Running confirmation ...")
    var successfulSubmissionHeader = "#contact_reply h1";
    console.log("This is the submission header: ", await $(successfulSubmissionHeader));
    console.log("Thank you message: ", await(await $(successfulSubmissionHeader)).getText() == "Thank You for your Message!");
    var validateSubmissionHeader = await browser.waitUntil(async function () {
      return ( await(await $(successfulSubmissionHeader)).getText() == "Thank You for your Message!");
    }, 3000);
    console.log("Submission header: ", validateSubmissionHeader);
    assert.equal(validateSubmissionHeader, true);
  }

  confirmUnsuccessfulSubmission() {
	var unsuccessfulSubmissionHeader = "body"  
    var validateSubmissionHeader = browser.waitUntil(function () {
      return (
        $(unsuccessfulSubmissionHeader).getText() ==
        "Error: all fields are required"
      );
    }, 3000);
    assert.equal(
      browser.getText(unsuccessfulSubmissionHeader),
      "Error: all fields are required"
    );
  }
}

module.exports = new ContactUs_page();
