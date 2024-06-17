import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { BankDetails } from '../../page-objects/validation-of-bank-details(ICM-516)/validation-of-bank-details.ts'
    ; import '../../page-objects/utilities-pages/global-setup.ts';

const bankDetailsData = require(`../../testdata/${process.env.ENV || 'uat'}/validation-of-bank-details.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1651:Verify the User can see the Payment method on the Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("3. Verify the user is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

});


test('ICM-TC-1652:Verify the User navigation from the PaymentMethod', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see Bank Account Details page", async () => {
        await bankDetails.verifyBankAccountDetailsPage();
    });
    //await page.pause()
});


test('ICM-TC-1653:Verify the required Details are displayed on the  Bank Account Details page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see Bank Account Details page", async () => {
        await bankDetails.verifyBankAccountDetailsPage();
    });

    await test.step("7. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

});


test('ICM-TC-1654:Verify the functionality of the country Dropdown', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Click on the Dropdown and select country", async () => {
        await bankDetails.selectCountry(bankDetailsData['TC-1654'].country);
    });

    await test.step("8. Verify the user is able to selected option county from the Dropdowm ", async () => {
        await bankDetails.verifySelectedCountry(bankDetailsData['TC-1654'].country)
    });

});


test('ICM-TC-1655:Verify the field SWIFT/BIC is mandatory and can accept the valid Data', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
        //CLick on Bank transfer
    });

    await test.step("7. Click on the SWIFT/BIC", async () => {
        await bankDetails.entreSWIFTBIC(bankDetailsData['TC-1655'].text)
    });

    await test.step("8. Verify the SWIFT/BIC field should be editable", async () => {
        await bankDetails.verifySWIFTBICfieldIsEditable()
    });

});


test('ICM-TC-1656:Verify the Account number field on Bank Account Details page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1656'].IBANNumber)
    });

    await test.step("8. Verify the account number filed should be display and Autifilled with IBAN number", async () => {
        await bankDetails.verifyIsAccountNumberFieldDisplayedAndAutoFilled()
    });

});


test('ICM-TC-1657:Verify the account Name field accept the valid input', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Verify the user is able to enter the valid Account Name", async () => {
        await bankDetails.enterAccountName(bankDetailsData['TC-1657'].accountName)
    });

    await test.step("8. Verify Account Name filed should be accepts the valid input", async () => {
        await bankDetails.verifyAccountName(bankDetailsData['TC-1657'].accountName)
    });

    //await page.pause()

});


test('ICM-TC-1658:Verify the below filled are autofilled when user Enter the IBAN No- SWIFT/BIC, Account Number, Bank Name, Bank Address, Branch', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1658'].IBANNumber)
    });

    await test.step("8. Verify when user Enter the IBAN No-Below filed should get autofilled", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

});


test('ICM-TC-1659:Verify the application behaviour when user enters the IBAN number and click on Ok btn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {

        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1659'].IBANNumber)
    });

    await test.step("8. Verify when user Enter the IBAN No-Below filed should get autofilled", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

    await test.step("9. Click on 'OK' button", async () => {
        await bankDetails.clickOnOkButton()
    });

    await test.step("10. Verify error message", async () => {
        await bankDetails.verifyErrorMessage(bankDetailsData['TC-1659'].countryError);
        await bankDetails.verifyErrorMessage(bankDetailsData['TC-1659'].accountNameError);
        await bankDetails.verifyErrorMessage(bankDetailsData['TC-1659'].currencyError);
    });

});


test('ICM-TC-1660:Verify the Field length of the IBAN 22 charactes', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1660'].IBANNumber)
    });

    await test.step("8. Verify when user Enter the IBAN No-Below filed should get autofilled", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

    await test.step("9.Verify the length of the IBAN field should be 22", async () => {
        await bankDetails.verifyIBANNumberLegth(bankDetailsData['TC-1660'].IBANNumberLength)
    });

});


test('ICM-TC-1661:Verify the value of IBAN -  First 2 Values are characters', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1660'].IBANNumber)
    });

    await test.step("8. Verify when user Enter the IBAN No-Below filed should get autofilled", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

    await test.step("9.Verify the First 2 values of  of IBAN values should be characters", async () => {
        await bankDetails.verifyAreFirstTwoValuesChar();
    });

});


test('ICM-TC-1662:Verify the popup when user enters less than 22 charaters', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });


    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7.Enter the invalid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1662'].invalidIBANNumber)
    });

    await test.step("8. Verify the pop up should be display about the IBAN digits not correct ", async () => {
        await bankDetails.verifyIBANErrorMessagePopupDisplayed()
    });

});


test('ICM-TC-1663:Verify the popup when user enters more than 22 charaters', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7.Enter the invalid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1663'].invalidIBANNumber)
    });

    await test.step("8. Verify the pop up should be display about the IBAN digits not correct ", async () => {
        await bankDetails.verifyIBANErrorMessagePopupDisplayed()
    });

});


test('ICM-TC-1664:Verify the Saved Successfully! Pop is displayed when user enters all the required values for Bank account Details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1664'].country);

    await test.step("7.Enter the valid IBAN number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1664'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1664'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1664'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton()
    });

    await test.step("10. Verify saved Successfully! Pop up should get display", async () => {
        await bankDetails.verifySuccesPopIsDisplayed()
    });
});

test('ICM-TC-1665:Verify user is able to see the saved payment details after save the claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1665'].country);

    await test.step("7.Enter the valid IBAN number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1665'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1665'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1665'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
        await bankDetails.clickOnOkButtononPopup();
    });
    await test.step("10. Click on Payment method to verify filled details", async () => {
        await bankDetails.clickOnPaymentMethodOption();

    });
    await test.step("11. Verify user is able to see the saved payment details after save the claim", async () => {
        await bankDetails.verifyIBANFieldValue(bankDetailsData['TC-1665'].IBANNumber);
        //await bankDetails.VerifyCountryNameFieldValue(bankDetailsData['TC-1665'].country);
        //await bankDetails.VerifypaymentCurrencyCodeValue(bankDetailsData['TC-1665'].currency);
    });

});
test('ICM-TC-1666:Verify the currency dropdown is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7.Click on Currency", async () => {
        await bankDetails.clickOnCurrency()
    });

    await test.step("8. Verify the currency dropdown should be display on the page ", async () => {
        await bankDetails.verifyIsDropDownDisplayed()
    });
});


test('ICM-TC-1667:When user update the IBAN Bank country name remains same- Not Null', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Verify the currency dropdown should be display on the page ", async () => {
        await bankDetails.verifySelectedCountry(bankDetailsData['TC-1667'].country)
    });

    await test.step("8. Enter IBAN Number the value of the IBAN Number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1667'].IBANNumber);
    });
    await test.step("9. Enter the IBAN Number", async () => {

        await bankDetails.updateIBAN();
    });

    await test.step("10. Verified :When user update the IBAN Bank country name remains same- Not Null ", async () => {

        await bankDetails.verifyCountryWhenIBANUpdate();


    });


});


test('ICM-TC-1668:When user update the IBAN numbet country Payment Currency  remains same- Not Null', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter IBAN Number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1668'].IBANNumber)
    });

    await test.step("9. Enter the IBAN Number", async () => {

        await bankDetails.updateIBAN();
    });

    await test.step("10. Verified :When user update the IBAN Bank Currency name remains same- Not Null ", async () => {

        await bankDetails.verifyCurrencyWhenIBANUpdate();


    });


});

test('ICM-TC-1669:Verify when user removes the IBAN number the message displayed - IBAN is required', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1669'].IBANNumber)
    });

    await test.step("8. Verify when user Enter the IBAN No-Below filed should get autofilled", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

    await test.step("9. Remove IBAN number", async () => {
        await bankDetails.enterIBANNumber("")
    });

    await test.step("10. Verify the IBAN is required should be display", async () => {
        await bankDetails.verifyErrorMessage(bankDetailsData['TC-1669'].IBANError)
    });

});

test('ICM-TC-1670:Verify the user I is not able to finish the claim without any payment details', async ({ browser }) => {
    //passed
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("Verify the user I is not able to finish the claim without any payment details", async () => {

        await bankDetails.verifyUserIsNotABleToFInishCLaim_WithoutPaymentDetails();
    });
});

test('ICM-TC-1671:Verify the user  can see the warning when finish the claim without any payment details', async ({ browser }) => {
    //Passed
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1671'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });
    await test.step("Verify the user  can see the warning when finish the claim without any payment details", async () => {
        await bankDetails.VerifyWarning_whenFinishClaimWithoutPaymentDetails();
    });
});

test('ICM-TC-1672:Verify there is no Payment Method option when the claim is created', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Navigate to the Batch to create a claim", async () => {
        await bankDetails.naviagteToOpenBatch();

    });

    await test.step("3. Open Batch to crate a claim", async () => {
        await bankDetails.openBatch(bankDetailsData['TC-1671'].BatchID);
    });
    await test.step("4. Verify there is no Payment Method option when the claim is created", async () => {
        await bankDetails.VerifyPaymentMethodOptionWhenClaim_Created();
    });
});

test('ICM-TC-1674:Verify the Bank Transfer and cheque Delivery radio options are displayed on the Payment method page.', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see Bank Account Details page", async () => {
        await bankDetails.PaymentOptionsOnPamentPage();
    });
    //await page.pause()
});

test('ICM-TC-1675:Verify the title on the Payment Method Page-Payment Method', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. Verify the title on the Bank Account Details page", async () => {
        await bankDetails.verifyBankAccountDetailsPage();
    });
    //await page.pause()
});

test('ICM-TC-1676:Verify the Bank details Radio btn is selected by default', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see Bank Account Details page", async () => {
        await bankDetails.verifyBankAccountDetailsPage();
    });
    //await page.pause()
});

test('ICM-TC-1678:Verify the  changes when the user change country  after entering the IBAN no', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Verify the currency dropdown should be display on the page ", async () => {
        await bankDetails.verifySelectedCountry(bankDetailsData['TC-1667'].country)
    });

    await test.step("8. Enter IBAN Number the value of the IBAN Number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1667'].IBANNumber);
    });
    await test.step("9. Update the country", async () => {

        await bankDetails.UpdateCountry(bankDetailsData['TC-1678'].country);
    });

    await test.step("10. Verify the  changes when the user change country  after entering the IBAN no ", async () => {

        await bankDetails.verifyCountryWhenIBANUpdate();


    });
});

test('ICM-TC-1679:Verify user is able to save the Bank Details using the OK btn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1664'].country);

    await test.step("7.Enter the valid IBAN number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1664'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1664'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1664'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton()
    });

    await test.step("10.Verify user is able to save the Bank Details using the OK btn", async () => {
        await bankDetails.verifySuccesPopIsDisplayed()
    });
});

test('ICM-TC-1680:Verify the Currency field functionality when user enters Bank Account Details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1658'].IBANNumber)
    });

    await test.step("8.Verify the Currency field functionality when user enters Bank Account Details", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

});

test('ICM-TC-1681:Verify user is able to change the payment details on processed claim', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7. Verify the currency dropdown should be display on the page ", async () => {
        await bankDetails.verifySelectedCountry(bankDetailsData['TC-1667'].country)
    });

    await test.step("8. Enter IBAN Number the value of the IBAN Number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1667'].IBANNumber);
    });
    await test.step("9. Enter the IBAN Number", async () => {

        await bankDetails.updateIBAN();
    });

    await test.step("10. Verify user is able to change the payment details on processed claim", async () => {

        await bankDetails.verifyCountryWhenIBANUpdate();


    });


});

test('ICM-TC-1682:Verify user is able to save the payment details on pending claim', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1664'].country);

    await test.step("7.Enter the valid IBAN number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1664'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {
        await bankDetails.enterAccountName(bankDetailsData['TC-1664'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1664'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton()
    });

    await test.step("10.Verify user is able to save the payment details on pending claim", async () => {
        await bankDetails.verifySuccesPopIsDisplayed()
    });

});
test('ICM-TC-1683:Verify if user change the IBAN number then validation message should be displayed against IBAN number', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1683'].IBANNumber)
    });

    await test.step("8. Verify when user Enter the IBAN No-Below filed should get autofilled", async () => {
        await bankDetails.verifyIsFieldsAutofilled()
    });

    await test.step("9. Remove IBAN number", async () => {
        await bankDetails.enterIBANNumber("")
    });
    await test.step("10. Verify if user change the IBAN number then validation message should be displayed against IBAN number", async () => {
        await bankDetails.verifyErrorMessage(bankDetailsData['TC-1683'].IBANError)
    });


});
test('ICM-TC-1684:Verify IBAN field should be mandatory', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see Bank Account Details page", async () => {
        await bankDetails.verifyBankAccountDetailsPage();
    });

    await test.step("7. Verify IBAN field should be mandatory", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

});

test('ICM-TC-1685:Verify user is able to see the saved payment details after save the claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1685'].country);

    await test.step("7.Enter the valid IBAN number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1685'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1685'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1685'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
        await bankDetails.clickOnOkButtononPopup();
    });
    await test.step("10. Click on Payment method to verify filled details", async () => {
        await bankDetails.clickOnPaymentMethodOption();

    });
    await test.step("11. Verify user is able to see the saved payment details after save the claim", async () => {
        await bankDetails.verifyIBANFieldValue(bankDetailsData['TC-1685'].IBANNumber);
        //await bankDetails.VerifyCountryNameFieldValue(bankDetailsData['TC-1685'].country);
        //await bankDetails.VerifypaymentCurrencyCodeValue(bankDetailsData['TC-1685'].currency);
    });

});

test('ICM-TC-1686:Verify user is able to see entered payment details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1686'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1686'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1686'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1686'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
        await bankDetails.clickOnOkButtononPopup();
    });
    await test.step("10. Click on Payment method to verify filled details", async () => {
        await bankDetails.clickOnPaymentMethodOption();

    });
    await test.step("11. Verify user is able to see entered payment details", async () => {
        await bankDetails.verifyIBANFieldValue(bankDetailsData['TC-1686'].IBANNumber);
        //await bankDetails.VerifyCountryNameFieldValue(bankDetailsData['TC-1685'].country);
        //await bankDetails.VerifypaymentCurrencyCodeValue(bankDetailsData['TC-1685'].currency);
    });

});

test('ICM-TC-1687  Verify user is able to add payment details on initial claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openInitialClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1687'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1687'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1687'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1687'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
    });
    await test.step("10.  Verify user is able to add payment details on initial claim", async () => {
        await bankDetails.verifySuccesPopIsDisplayed();

    });

});


test('ICM-TC-1688 Verify user is able to change the entered payment details on initial claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openInitialClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });
    //await page.pause();
    await bankDetails.selectCountry(bankDetailsData['TC-1687'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1688'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {
        await bankDetails.enterAccountName(bankDetailsData['TC-1688'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1688'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton();
    });

    await test.step("10.  Verify user is able to add payment details on initial claim", async () => {
        await bankDetails.verifySuccesPopIsDisplayed();

    });
    await test.step("13. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButtononPopup();

    });
    await test.step("14. Click on Payment method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("11 Update the account name ", async () => {
        await bankDetails.updateAccountName(bankDetailsData['TC-1688'].UpdatedAccountName);
    });
    await test.step("15. Click on Okay Button", async () => {
        await bankDetails.VerifypaymentAccountNameValue(bankDetailsData['TC-1688'].UpdatedAccountName);
    });


});


test('ICM-TC-1689 Verify user is able to save the entered payment details on intial claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openInitialClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1664'].country);
    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1664'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1664'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1664'].currency);
    });
    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton()
    });
    await test.step("10. Verify user is able to save the entered payment details on intial claim", async () => {
        await bankDetails.verifySuccesPopIsDisplayed()
    });

});

test('ICM-TC-1690 Verify user is able to see the already entered payment details on initial claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the Initial Claim", async () => {
        await bankDetails.openInitialClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1686'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1686'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1686'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1686'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
        await bankDetails.clickOnOkButtononPopup();
    });
    await test.step("10. Click on Payment method to verify filled details", async () => {
        await bankDetails.clickOnPaymentMethodOption();

    });
    await test.step("11.Verify user is able to see the already entered payment details on initial claim", async () => {
        await bankDetails.verifyIBANFieldValue(bankDetailsData['TC-1686'].IBANNumber);
        //await bankDetails.VerifyCountryNameFieldValue(bankDetailsData['TC-1685'].country);
        //await bankDetails.VerifypaymentCurrencyCodeValue(bankDetailsData['TC-1685'].currency);
    });

});


test('ICM-TC-1691  Verify user is able to add payment details on Authorized  claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
        await page.waitForTimeout(7000);
        await bankDetails.enterClaimToSearch_Processes_AUthorized();
    });

    await test.step("3. User is able to open the  Authorized cliam", async () => {
        // await page.pause();

        await bankDetails.openAutorizedClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1687'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1687'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1687'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1687'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
    });
    await test.step("10.  Verify user is able to add payment details on Authorized claim", async () => {
        await bankDetails.verifySuccesPopIsDisplayed();

    });

});

test('ICM-TC-1692 Verify user is able to change the entered payment details on authorized claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the Authorized claim", async () => {
        await bankDetails.openAutorizedClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });
    //await page.pause();
    await bankDetails.selectCountry(bankDetailsData['TC-1687'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1688'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {
        await bankDetails.enterAccountName(bankDetailsData['TC-1688'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1688'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton();
    });

    await test.step("10.  Verify user is able to add payment details on initial claim", async () => {
        await bankDetails.verifySuccesPopIsDisplayed();

    });
    await test.step("13. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButtononPopup();

    });
    await test.step("14. Click on Payment method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("11 Update the account name ", async () => {
        await bankDetails.updateAccountName(bankDetailsData['TC-1688'].UpdatedAccountName);
    });
    await test.step("15. Verify user is able to change the entered payment details on authorized claim    ", async () => {
        await bankDetails.VerifypaymentAccountNameValue(bankDetailsData['TC-1688'].UpdatedAccountName);
    });


});
test('ICM-TC-1693:Verify user is able to save the entered payment details on authorized claim', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the cliam", async () => {
        await bankDetails.openAutorizedClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1664'].country);

    await test.step("7.Enter the valid IBAN number", async () => {

        await bankDetails.enterIBANNumber(bankDetailsData['TC-1664'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {
        await bankDetails.enterAccountName(bankDetailsData['TC-1664'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1664'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {
        await bankDetails.clickOnOkButton()
    });

    await test.step("10.Verify user is able to save the entered payment details on authorized claim    ", async () => {
        await bankDetails.verifySuccesPopIsDisplayed()
    });

});

test('ICM-TC-1694 Verify user is able to see the already entered payment details on authorized claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });

    await test.step("3. User is able to open the Authorized Claim", async () => {
        await bankDetails.openAutorizedClaim();
    });

    await test.step("4. User is able to see the Payment Method  option on the Edit Reimbursement Processing Claim page", async () => {
        await bankDetails.verifyPaymentMethodOptionVisible();
    });

    await test.step("5. Click on the Payment Method option", async () => {
        await bankDetails.clickOnPaymentMethodOption();
    });

    await test.step("6. User can see the mandatory fields-Bank Country,IBAN,SWIFT/BIC,Account Number,Account Name,Payment Currency Code, Bank Name, Bank Address", async () => {
        await bankDetails.verifyBankAccountDetailsPageDetails();
    });

    await bankDetails.selectCountry(bankDetailsData['TC-1686'].country);

    await test.step("7.Enter the valid IBAN number", async () => {
        await bankDetails.enterIBANNumber(bankDetailsData['TC-1686'].IBANNumber)
    });

    await test.step("8. Enter the valid values for  Country, Account name and Currency ", async () => {

        await bankDetails.enterAccountName(bankDetailsData['TC-1686'].accountName);
        await bankDetails.selectCurrency(bankDetailsData['TC-1686'].currency);
    });

    await test.step("9. Click on Okay Button", async () => {

        await bankDetails.clickOnOkButton();
        await bankDetails.clickOnOkButtononPopup();
    });
    await test.step("10. Click on Payment method to verify filled details", async () => {
        await bankDetails.clickOnPaymentMethodOption();

    });
    await test.step("11.Verify user is able to see the already entered payment details on authorized claim    ", async () => {
        await bankDetails.verifyIBANFieldValue(bankDetailsData['TC-1686'].IBANNumber);
        //await bankDetails.VerifyCountryNameFieldValue(bankDetailsData['TC-1685'].country);
        //await bankDetails.VerifypaymentCurrencyCodeValue(bankDetailsData['TC-1685'].currency);
    });
});


test('ICM-TC-1695 Verify user is able to click on "Actions"', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });
    await test.step("3. Open the required cliam", async () => {

        await bankDetails.openClaim();
    });
    await test.step("4. Verify the Actions btn is displayed and functional", async () => {

        await bankDetails.verifyActionFunctionality();
    });

});

test('ICM-TC-1696 Verify user is able to unvalidate the claim from processed claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });
    await test.step("3. Open the required cliam", async () => {
        await bankDetails.openProcesedClaim();
    });
    await test.step("4. Verify the Actions btn is displayed and functional", async () => {
        await bankDetails.verifyActionBtnOnPrcessingPage();
    });
    await test.step("5.Verify user is able to unvalidate the claim from processed claim", async () => {

        await bankDetails.verifyUnvalidateClaimProcess();

    });

});


test('ICM-TC-1698 Verify user is able to finish the claim', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });
    await test.step("Verify user is able to open the cliam from batch", async () => {
        //await page.pause();
        await bankDetails.openRequiredClaimFromBatch(bankDetailsData['TC-1699'].claimNumber);
    });
    await test.step("4.  Verify user is able to finish the claim", async () => {
        await bankDetails.verifyUserCanFinishClaim();
    });


});

test('ICM-TC-1699 Verify user is able to finish the claim without entering payment details if payer share Is 0', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const bankDetails: BankDetails = new BankDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Enter the valid Batch Number/ Claim Number", async () => {
        await bankDetails.naviagteToOpenBatch();
        await bankDetails.openBatch(bankDetailsData['TC-1651'].BatchID);
    });
    await test.step("Verify user is able to oen the cliam from batch", async () => {
        await bankDetails.openRequiredClaimFromBatch(bankDetailsData['TC-1699'].claimNumber);
    });
    await test.step("4. Verify user is able to finish the claim without entering payment details if payer share Is 0", async () => {
        await bankDetails.verifyUserCanFinishClaim();
    });
});


