import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { eoBCustDetails } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers.ts';
import { eoBCustDetails_2 } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers-2.ts';
import { eoBCustDetails_3 } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers-3.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const eobDetailsData = require(`../../testdata/${process.env.ENV || 'uat'}/eob-for-mawista-customers.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1876:TC_063_Payment Order Details_verify that user navigate to Payment order details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("4. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("5.Verify that  click on set release with selecting one search result popup Set Release Date window displays", async () => {
        await eobDetails_2.setReleaseWindowPopup();
    });

    await test.step("6.Verify that  on popup alert window Please select at least one row to set delivery date displays", async () => {
        await eobDetails_2.verifyClickOnsetDeliveryWithoutselctingResult();
    });
});

test('ICM-TC-1877:TC_064_Payment Order Details_verify that  Validbreadcrumbs are displayed Finance >Payment Orders >Payment Order Details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("2. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("3.verify that click on Edit button then user redirected to Payment Order Details screen", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("3.verify that PAYMENT ORDER DETAILS label is displayed", async () => {
        await eobDetails_2.verifyReqFieldsOnPaymentOrderDetails();

    });
});

test('ICM-TC-1878:TC_065_Payment Order Details_verify that PAYMENT ORDER DETAILS label is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("2. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("3.verify that click on Edit button then user redirected to Payment Order Details screen", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("3.verify that PAYMENT ORDER DETAILS label is displayed", async () => {
        await eobDetails_2.verifyReqFieldsOnPaymentOrderDetails();


    });
});

test('ICM-TC-1879:TC_066_Payment Order Details_verify that all fields of Payment order, Report prefrences,  Transaction  displays', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("2. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("3.verify that click on Edit button then user redirected to Payment Order Details screen", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("3.verify that all fields of Payment order, Report prefrences,  Transaction  displays", async () => {
        await eobDetails_2.verifyReqFieldsOnPaymentOrderDetails();
    });
});

test('ICM-TC-1880:TC_067_Payment Order Details_verify that click on show then Add Note popup window is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });

    await test.step("8.verify that click on show then Add Note popup window is displayed", async () => {
        await eobDetails_3.verifyAddNoteFunctionality();
    });

});

test('ICM-TC-1881:TC_068_Payment Order Details_verify that click on Apply without entering details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });

    await test.step("8.verify that click on show then Add Note popup window is displayed", async () => {
        await eobDetails_3.verifyAddNoteFunctionality();
    });
    await test.step("9.verify that click on Apply without entering details on the Add note", async () => {
        await eobDetails_3.verifyApplyFunctionalityWithoutProvidingInput(eobDetailsData['Testdata'].alertOnAddNote);
    });

});

test('ICM-TC-1882:TC_069_Payment Order Details_verify that click on Apply with entering details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });

    await test.step("8.verify that click on show then Add Note popup window is displayed", async () => {
        await eobDetails_3.verifyAddNoteFunctionality();
    });
    await test.step("9.verify that click on Apply without entering details on the Add note", async () => {
        await eobDetails_3.verifyApplyFunctionalityWithProvidingInput(eobDetailsData['Testdata'].noteToAdd);
    });

});

test('ICM-TC-1883:TC_070_Payment Order Details_verify that click on Cancel then popup window get closed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });

    await test.step("8.verify that click on show then Add Note popup window is displayed", async () => {
        await eobDetails_3.verifyAddNoteFunctionality();
    });
    await test.step("9.verify that click on Cancel then popup window get closed", async () => {
        await eobDetails_3.verifyCancelFunctionality();
    });

});

test('ICM-TC-1884:TC_071_Payment Order Details_verify that in Sort by first order and sort by second order dropdown values', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.TC_071_Payment Order Details_verify that in Sort by first order and sort by second order dropdown values    ", async () => {
        // await eobDetails_3.verifySortOrderDropdownValues();
    });

});

test('ICM-TC-1885:TC_072_Verify user is able to save the Payment Order Details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.Verify user is able to save the Payment Order Details", async () => {
        await eobDetails_3.verifySavePOFunctionality(eobDetailsData['Testdata'].PODetailsSavedMsg);
    });

});



test('ICM-TC-1886:TC_073_Payment Order Details_Verify the Download functionality on pdf file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.Verify the Download functionality on pdf file    ", async () => {
        await eobDetails_3.verifyPDFDownloadFunctionality(eobDetailsData['Testdata'].jobAddedMsg);
    });

});

test('ICM-TC-1887:TC_076_Payment Order Details_Verify the functionality of  "Print claims Evaluation"', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.Verify the Download functionality on pdf file    ", async () => {
        await eobDetails_3.verifyPDFDownloadFunctionality(eobDetailsData['Testdata'].jobAddedMsg);
    });

});

test('ICM-TC-1888:TC_077_Payment Order Details_Verify the Download functionality on pdf file of "Print claims Evaluation""', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.Verify the Download functionality on pdf file    ", async () => {
        await eobDetails_3.verifyPDFDownloadFunctionality(eobDetailsData['Testdata'].jobAddedMsg);
    });

});


test('ICM-TC-1889:TC_081_Payment Order Details_verify that Opened pdf has download icon and user can download EOB""', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.Verify the Download functionality on pdf file    ", async () => {
        await eobDetails_3.verifyPDFDownloadFunctionality(eobDetailsData['Testdata'].jobAddedMsg);
    });

});


test('ICM-TC-1890:TC_085_Payment Order Details_verify that click on eye icon then payment order transaction details popup window get open""', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.erify that click on eye icon then payment order transaction details popup window get open", async () => {
        await eobDetails_3.verifyPaymentOrderTransactionFromEyeIcon();
    });

});


test('ICM-TC-1891:TC_085_Payment Order Details_verify that click on eye icon then payment order transaction details popup window get open""', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.verify that click on eye icon then payment order transaction details popup window get open    ", async () => {
        await eobDetails_3.verifyPaymentOrderTransactionFromEyeIcon();
    });

});
test('ICM-TC-1892:TC_086_Payment Order Details_verify that In popup window user can search record by Invoice NBR ex-915001473""', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("erify that In popup window user can search record by Invoice NBR ex-915001473    ", async () => {
        //await eobDetails_3.verifyPaymentOrderTransactionFromEyeIcon();
        // TBD
    });

});

test('ICM-TC-1899:TC_093_Payment Order Details_Verify that Items per page label and dropdown is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("TC_093_Payment Order Details_Verify that Items per page label and dropdown is displayed", async () => {
        await eobDetails_3.verifyItemsPerPageDropdown();

    });

});


test('ICM-TC-1900:TC_093_Payment Order Details_TC_094_Payment Order Details_IN dropdown 10,15,20, 30, 50, 100, 250 values are displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("TC_094_Payment Order Details_IN dropdown 10,15,20, 30, 50, 100, 250 values are displayed", async () => {
        await eobDetails_3.verifyDropdownValues();

    });

});

test('ICM-TC-1901:TC_095_Payment Order Details_Pagination is display from 1 to 10 and user can change the pagination using start page and last page', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8. Payment Order Details_Pagination is display from 1 to 10 and user can change the pagination using start page and last page    ", async () => {
        await eobDetails_3.verifyPaginationFunctionality();

    });

});

test('ICM-TC-1902:TC_097_Payment Order Details_verify that click on Cancel then popup window get closed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify _Create New_verify that create new button is display", async () => {
        await eobDetails_2.verifyCreateNewBtnDisplayed();
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Verify user is on the payment order details Page", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });
    await test.step("8.Verify user is able to navigate to the Payment Order transaction page", async () => {
        await eobDetails_3.verifyPaymentOrderTransactionFromEyeIcon();
    });
    await test.step("9.TC_097_Payment Order Details_verify that click on Cancel then popup window get closed    ", async () => {

        await eobDetails_3.verifyCancelPopUpFunctionality();

    });



});
test('ICM-TC-1903:TC_098_Payment Orders_Verify that parent entity textbox accept alphabeats', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the paren Entity on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify Parent Entity can accept Alphabets", async () => {
        await eobDetails_3.verifyParentEntityAcceptsAlphabets(eobDetailsData['Testdata'].alphabets);
    });
});

test('ICM-TC-1904:TC_99_Payment Orders_Verify that parent entity textbox accept numbers', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3. Verify the paren Entity on search criteria of  Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });
    await test.step("4. Verify that parent entity textbox accept numbers ", async () => {
        await eobDetails_3.verifyParentEntityAcceptsNumbers(eobDetailsData['Testdata'].numbers)

    });
});

test('ICM-TC-1905:TC_100_Payment Orders_Verify that parent entity textbox accept specail charachters', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3. Verify the paren Entity on search criteria of  Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });
    await test.step("4.TC_100_Payment Orders_Verify that parent entity textbox accept specail charachters    ", async () => {
        await eobDetails_3.verifyParentEntityAcceptsSpecialCharacters(eobDetailsData['Testdata'].specialCharacters)

    });
});

test('ICM-TC-1906:TC_101_Payment Orders_Verify that parent entity textbox accept blank spaces', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3. Verify the paren Entity on search criteria of  Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });
    await test.step("4.TC_100_Payment Orders_Verify that parent entity textbox accept blank spaces", async () => {
        await eobDetails_3.verifyParentEntityAcceptsSpecialCharacters(eobDetailsData['Testdata'].blankSpaces)

    });
});

test('ICM-TC-1907:TC_102_Payment Orders_Verify that parent entity textbox accept leading and trailing spaces', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3. Verify the paren Entity on search criteria of  Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });
    await test.step("4.TC_102_Payment Orders_Verify that parent entity textbox accept leading and trailing spaces    ", async () => {
        await eobDetails_3.verifyParentEntityAcceptsLeadingAndTrailingSpaces(eobDetailsData['Testdata'].leadingAndTrailingSpaces)

    });
});


test('ICM-TC-1908:TC_103_Payment Orders_verify that enter test in parent entity textbox then list is shown', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context)
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3. Verify the paren Entity on search criteria of  Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });
    await test.step("4. verify that enter test in parent entity textbox then list is shown    ", async () => {
        await eobDetails_3.ParentEntityValues(eobDetailsData['Testdata'].alphabets)

    });
});

test('ICM-TC-1909:TC_104_Payment Orders_verify that user can select value from list', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const eobDetails = new eoBCustDetails(page, context);
    const eobDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the parent Entity on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });
    await test.step("5. Verify that user can select a value from the list", async () => {
        await eobDetails_3.verifyUserCanSelectValueFromList(eobDetailsData['Testdata'].alphabets)
    });
});



test('ICM-TC-1910:TC_105_Payment Orders_verify that user can select one value at a time from list', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const eobDetails = new eoBCustDetails(page, context);
    const eobDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the parent Entity on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyParentEntityAcceptsPresent();
    });

    await test.step("4. Verify that entering text in parent entity textbox shows a list", async () => {
        await eobDetails_3.ParentEntityValues(eobDetailsData['Testdata'].alphabets);
    });

    await test.step("5. Verify that user can select one value at a time from the list", async () => {
        await eobDetails_3.verifyUserCanSelectOneValueAtATime(eobDetailsData['Testdata'].alphabets);
    });
});

test('ICM-TC-1911:TC_106_Payment Orders_Verify that Id textbox accept alphabeats', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify ID does not accept Alphabets", async () => {
        await eobDetails_3.verifyIDDoesNotAcceptAlphabets(eobDetailsData['Testdata'].alphabets);
    });
});

test('ICM-TC-1912:TC_107_Payment Orders_Verify that Id textbox accept numbers', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify ID accepts Numbers", async () => {
        await eobDetails_3.verifyIDAcceptsNumbers(eobDetailsData['Testdata'].numbers);
    });
});

test('ICM-TC-1913:TC_108_Payment Orders_Verify that Id textbox accept special characters', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify ID does not accept Special characters/Symbols", async () => {
        await eobDetails_3.verifyIDDoesNotAcceptSpecialCharacters(eobDetailsData['Testdata'].specialCharacters);
    });
});


test('ICM-TC-1914:TC_109_Payment Orders_Verify that Id textbox accept blank spaces', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify ID does not accept Blank Spaces", async () => {
        await eobDetails_3.verifyIDAcceptsBlankSpaces(eobDetailsData['Testdata'].blankSpaces);
    });
});


test('ICM-TC-1915:TC_110_Payment Orders_Verify that Id textbox accept leading and trailing spaces', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });
    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify that Id textbox accept leading and trailing spaces", async () => {
        await eobDetails_3.verifyIDDoesNotAcceptBlankSpaces(eobDetailsData['Testdata'].leadingAndTrailingSpaces);
    });
});

test('ICM-TC-1916:TC_111_Payment Orders_verify that enter single alphabeat and click on search', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.verify that enter single alphabeat and click on search", async () => {
        await eobDetails_3.verifySingleAlphabetSearchError(eobDetailsData['Testdata'].singleChar);
    });
});



test('ICM-TC-1917:TC_112_Payment Orders_verify that enter single special charachter and click on search', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.verify that enter single special charachter and click on search", async () => {
        await eobDetails_3.verifySingleAlphabetSearchError(eobDetailsData['Testdata'].singleSpecialSymbol);
    });
});


test('ICM-TC-1918:TC_113_Payment Orders_verify that enter number and blank spaces and click on search', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the ID on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyIDPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.verify that enter number and blank spaces and click on search", async () => {
        await eobDetails_3.verifyNumberWithBlankSpacesSearch(eobDetailsData['Testdata'].blankSpace_number);
    });
});


test('ICM-TC-1919:TC_114_Payment Orders_Verify that label textbox accept alphabeats', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the Label on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyLblPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5. Verify that label textbox accept alphabeats", async () => {
        await eobDetails_3.verifyLabelTextboxAcceptsAlphabets(eobDetailsData['Testdata'].alphabets);
    });
});



test('ICM-TC-1920:TC_115_Payment Orders_Verify that label textbox accept numbers', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the Label on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyLblPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.Verify that label textbox accept numbers", async () => {
        await eobDetails_3.verifyLabelTextboxAcceptsNumbers(eobDetailsData['Testdata'].numbers);
    });
});

test('ICM-TC-1921:TC_116_Payment Orders_Verify that label entity textbox should not accept specials characters', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the Label on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyLblPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.Verify that label entity textbox should  accept specials characters", async () => {
        await eobDetails_3.verifyLabelTextboxAcceptsSpecialCharacters(eobDetailsData['Testdata'].specialCharacters);
    });
});

test('ICM-TC-1922:TC_117_Payment Orders_Verify that label textbox accept blank spaces', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the Label on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyLblPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.TC_117_Payment Orders_Verify that label textbox accept blank spaces", async () => {
        await eobDetails_3.verifyLabelTextboxAcceptsBlankSpaces(eobDetailsData['Testdata'].blankSpaces);
    });
});

test('ICM-TC-1923:TC_118_Payment Orders_Verify that label textbox accept leading and trailing spaces', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Verify the Label on search criteria of Payment Order", async () => {
        await eobDetails_3.verifyLblPresentsOnPage();
    });

    await test.step("4. Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("5.Verify that label textbox accept leading and trailing spaces", async () => {
        await eobDetails_3.verifyLabelTextboxAcceptsBlankSpaces(eobDetailsData['Testdata'].leadingAndTrailingSpaces);
    });
});

test('ICM-TC-1924:TC_119_Payment Orders_verify that from date label and textbox is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Verify that from date label and textbox is displayed", async () => {
        await eobDetails_3.verifyFromDateLabelAndTextboxDisplayed();
    });
});





