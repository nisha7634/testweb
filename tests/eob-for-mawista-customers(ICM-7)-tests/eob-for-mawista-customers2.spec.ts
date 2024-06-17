import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { eoBCustDetails } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers.ts';
import { eoBCustDetails_2 } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers-2.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const eobDetailsData = require(`../../testdata/${process.env.ENV || 'uat'}/eob-for-mawista-customers.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;



test('ICM-TC-1836:TC_022_Verify that user can enable and disable Toggle buttons', async ({ browser }) => {
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
    await test.step("3. Verify that user can enable and disable Toggle buttons", async () => {
        await eobDetails_2.verifyToggleBtnFunctionality();
    });
});

test('ICM-TC-1837:TC_023_verify that when group by principal toggle button is enable then user can enable group by benificiary    ', async ({ browser }) => {
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
    await test.step("3. erify that when group by principal toggle button is enable then user can enable group by benificiary", async () => {
        await eobDetails_2.grpByPrincipalBrpByBenificiary();
    });
});


test('ICM-TC-1838:TC_024_verify that when group by principal toggle button is enable then user can disable group by benificiary    ', async ({ browser }) => {
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
    await test.step("3. verify that when group by principal toggle button is enable then user can disable group by benificiary ", async () => {
        await eobDetails_2.grpByPrincipalBrpByBenificiary();
    });
});

test('ICM-TC-1839:TC_025_verify that when group by principal toggle button is disable then user can enable group by benificiary', async ({ browser }) => {
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
    await test.step("3. TC_025_verify that when group by principal toggle button is disable then user can enable group by benificiary", async () => {
        await eobDetails_2.disable_grpByPrincipalBrn_enable_ByBenificiary();
    });
});



test('ICM-TC-1840:TC_026_verify that Print transaction, print transaction2,  print claims display', async ({ browser }) => {
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
    await test.step("3. TC_026_verify that Print transaction, print transaction2,  print claims display    ", async () => {
        await eobDetails_2.verifyPrintTransactionOptions();
    });
});



test('ICM-TC-1841:TC_027_verify that click on Print transaction, print transaction2,  print claims popup alert display', async ({ browser }) => {
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
    await test.step("3.TC_027_verify that click on Print transaction, print transaction2,  print claims popup alert display    ", async () => {
        await eobDetails_2.verifyFunctionalityOfPrintTransactionOptions();
    });
});


test('ICM-TC-1842:TC_028_verify that "You should be select at least One Payment Order item" message display on popup window', async ({ browser }) => {
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
    await test.step("3.TC_027_verify that click on Print transaction, print transaction2,  print claims popup alert display    ", async () => {
        await eobDetails_2.verifyAlertPopUpMessage(eobDetailsData['Testdata'].alertMsgTxt);
    });
});



test('ICM-TC-1843:TC_029_verify that Search Results searchbox is displyed', async ({ browser }) => {
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
    await test.step("3.Verify that Search Results searchbox is displyed   ", async () => {
        await eobDetails_2.verifySearchBox();
    });
});


test('ICM-TC-1844:TC_030_Verify that in search result ID columns are display', async ({ browser }) => {
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
    await test.step("3.Verify that in search result ID columns are display", async () => {
        await eobDetails_2.verifyresultIDColumn();
    });
});


test('ICM-TC-1845:TC_031_Verify that in search result Label columns are display', async ({ browser }) => {
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
    await test.step("3.Verify that in search result Label columns are display", async () => {
        await eobDetails_2.verifyresultIDColumn();
    });
});


test('ICM-TC-1846:TC_032_Verify that in search result Validated columns are display', async ({ browser }) => {
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
    await test.step("3.Verify that in search result Validated columns are display", async () => {
        await eobDetails_2.verifyResultValidatedColumn();
    });
});


test('ICM-TC-1847:TC_033_Verify that in search result Release Date columns are display', async ({ browser }) => {
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
    await test.step("3.TC_033_Verify that in search result Release Date columns are display    ", async () => {
        await eobDetails_2.verifyResultReleaseDateColumn();
    });
});

test('ICM-TC-1848:TC_034_Verify that in search result Delivery Date columns are display', async ({ browser }) => {
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
    await test.step("3.Verify that in search result Delivery Date columns are display ", async () => {
        await eobDetails_2.verifyDeliveryDateColumn();
    });
});


test('ICM-TC-1849:TC_035_search result_Verify that user can search by Release date in search results', async ({ browser }) => {
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
    await test.step("3.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3.search result_Verify that user can search by Release date in search results", async () => {
        await eobDetails_2.verifyUserCanSearchByReleaseDate(eobDetailsData['Testdata'].fromReleaseDate, eobDetailsData['Testdata'].toReleaseDate);

    });
});

test('ICM-TC-1850:TC_036_search result_Verify that user can serach by delivery date in search results', async ({ browser }) => {
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
    await test.step("3.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3.search result_Verify that user can serach by delivery date in search results", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
});



test('ICM-TC-1851:TC_037_search result_verify that user can select one value at a time', async ({ browser }) => {
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
    await test.step("3.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3.search result_verify that user can select one value at a time", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
        await eobDetails_2.selectOneRecord();
    });
});

test('ICM-TC-1852:TC_038_search result_verify that user can select multiple value at a time', async ({ browser }) => {
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
    await test.step("3.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("3.search result_verify that user can select Multiple value at a time", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);

        await eobDetails_2.selectMultipleRecords();

    });
});


test('ICM-TC-1853:TC_039_search result_verify that click on Edit button then user redirected to Payment Order Details screen', async ({ browser }) => {
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
    await test.step("2. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("3.verify that click on Edit button then user redirected to Payment Order Details screen", async () => {
        await eobDetails_2.verifyNavigationFromEditRecord();
    });

});

test('ICM-TC-1854:TC_040_search result_Verify that Items per page label and dropdown is displayed', async ({ browser }) => {
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
    await test.step("3.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("4. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("5.Verify that Items per page label and dropdown is displayed", async () => {
        await eobDetails_2.verifyItemsPerPageandDrodown();
    });
});

test('ICM-TC-1855:TC_042_Pagination_Pagination is display from 1 to n and user can change the pagination using start page and last page', async ({ browser }) => {
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

    await test.step("3.Enter Payer value and verify account and currency", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("4. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("5.Enter Payer value and verify account and currency", async () => {
        await eobDetails_2.verifyPaginationm1_n_Functionality();
    });
});

test('ICM-TC-1856:TC_043_Create New_verify that create new button is display', async ({ browser }) => {
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

});


test('ICM-TC-1857:TC_044_Create New_verify that click on create new button Payment Order popup window display', async ({ browser }) => {
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
    await test.step("5.verify that click on create new button Payment Order popup window display", async () => {
        await eobDetails_2.verifyNavigationFromCreateNewBtn();
    });
});

test('ICM-TC-1858:TC_045_Payment Order popup_verify that Payment Order Type and corrections option  dropdown display', async ({ browser }) => {
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
    await test.step("5.verify that Payment Order Type and corrections option  dropdown display", async () => {
        await eobDetails_2.verifytPaymentOrderType_correctionsOption();
    });
});


test('ICM-TC-1859:TC_046_Payment Order popup_verify that click on cancel button popup window closed', async ({ browser }) => {
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
    await test.step("5.verify that click on create new button Payment Order popup window display", async () => {
        await eobDetails_2.verifyNavigationFromCreateNewBtn();
    });
    await test.step("6._verify that click on cancel button popup window closed", async () => {
        await eobDetails_2.verifyClosePaymetOrderPopupFunctionality();
    });

});

test('ICM-TC-1860:TC_047_Payment Order popup_verify that click on ok then user redirected to payment order details page', async ({ browser }) => {
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
    await test.step("5.verify that click on create new button Payment Order popup window display", async () => {
        await eobDetails_2.verifyNavigationFromCreateNewBtn();
    });
    await test.step("5erify that click on ok then user redirected to payment order details page- Select the Payment Oreder Type -Reim and Click on Ok button", async () => {
        await eobDetails_2.verifyOkBtnFunctionalityOnPaymentOrder();
    });
});

test('ICM-TC-1861:TC_048_set release_Verify that  click on set release without selecting search result popup alert window displays', async ({ browser }) => {
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
    await test.step("5.Verify that  click on set release without selecting search result popup alert window displays", async () => {
        await eobDetails_2.verifyClickSetRelease();
    });
});

test('ICM-TC-1862:TC_049_set release Alert_Verify that  on popup alert window "Please select at least one row to set release date" displays', async ({ browser }) => {
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
    await test.step("5. _Verify that  on popup alert window Please select at least one row to set release date displays", async () => {
        await eobDetails_2.verifySelectRowErrorMsgOnSetReleasePopup(eobDetailsData['Testdata'].alerrpopupOnSetRelease);
    });

});
test('ICM-TC-1863:TC_050_set release Date_Verify that  click on set release with selecting one search result popup Set Release Date window displays', async ({ browser }) => {
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
});

test('ICM-TC-1864:TC_051_set release_verify that on popup window user can select release date less than validate', async ({ browser }) => {
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
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("7.Get the validated Date of the Record and Select the Release date less than Validated Date of the Record-", async () => {

        await eobDetails_2.getValidatedDateSelectReleaseDate();
    });
    await test.step("8.Verify User can apply the selected Release Date ", async () => {
        await eobDetails_2.clickOnApplyBtn();
    });
    await test.step("9.Verify the resrult- popup window when user select release date less than validate", async () => {
        await eobDetails_2.verifyResult();


    });
});

test('ICM-TC-1865:TC_052_set release_verify that on popup window user can select release date greater than validate and delivery date', async ({ browser }) => {
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
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });

    await test.step("7.Get the validated and Delivery Date from the record - set the release Date Greater than validated and Delivery Date", async () => {
        await eobDetails_2.verifyWneUserSelectsReleaseDate_GreaterThan_ValidatedDate_and_DeliveryDate();
    });
    await test.step("8.Verify User can apply the selected Release Date ", async () => {
        await eobDetails_2.clickOnApplyBtn();
    });
    await test.step("9.Verify the result- popup window when user select release date greater than validated and Delivery Date", async () => {
        await eobDetails_2.verifyResultForGreaterDelivery_ValidationDate_than_ReleaseDate();
    });
});


test('ICM-TC-1866:TC_053_set release_verify that on popup window user can select release date less than or equal delivery date', async ({ browser }) => {
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
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });

    await test.step("6.open the Record from the serached Result", async () => {
        await eobDetails_2.openRecordFromSearchResult();
    });
    await test.step("5. verify that on popup window user can select release date less than or equal delivery date", async () => {
        await eobDetails_2.verifyUserCanSelectReleaseDateLessThanOrEqualDeliveryDate();
    });

    await test.step("8.Verify User can apply the selected Release Date ", async () => {
        await eobDetails_2.clickOnApplyBtn();
    });
    await test.step("9.verify that on popup window user can select release date less than or equal delivery date", async () => {
        await eobDetails_2.verifyResultForReleaseDateLessThat_EqualToDeliveryDate();
    });
});



test('ICM-TC-1867:TC_054_set release_verify that on popup window user can select release date greater than validate and less than delivery date', async ({ browser }) => {
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
    await test.step("5. verify that on popup window user can select release date greater than validate and less than delivery date", async () => {
        await eobDetails_2.verifyWneUserSelectsReleaseDate_GreaterThan_ValidatedDate_and_DeliveryDate();
    });
});

test('ICM-TC-1868:TC_055_set release_verify that  on popup window  click on close button popup window get closed', async ({ browser }) => {
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

    await test.step("6.verify that  on popup window  click on close button popup window get closed", async () => {
        await eobDetails_2.verifyCloseFunctionalityOfPopup();
    });
});


test('ICM-TC-1869:TC_056_set delivery_Verify that  click on set delivery without selecting search result popup alert window displays', async ({ browser }) => {
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

    await test.step("6.Verify that  click on set delivery without selecting search result popup alert window displays", async () => {
        await eobDetails_2.verifyClickOnsetDeliveryWithoutselctingResult();
    });
});

test('ICM-TC-1870:TC_057_set delivery_Verify that  on popup alert window "Please select at least one row to set delivery date" displays', async ({ browser }) => {
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
        // await eobDetails_2.setReleaseWindowPopup();
    });

    await test.step("6.Verify that  on popup alert window Please select at least one row to set delivery date displays", async () => {
        await eobDetails_2.setDeliveryWindowPopupWithoutSelectingRecord();
    });
});

test('ICM-TC-1871:TC_058_set delivery_Verify that  click on set delivery with selecting one search result popup Set delivery Date window displays', async ({ browser }) => {
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
    await test.step("5. Verify the user is able to search the record using the valid criteria", async () => {
        await eobDetails_2.verifyUserCanSearchByDeliveryDate(eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });
    await test.step("6._Verify that  click on set delivery with selecting one search result popup Set delivery Date window displays", async () => {
        await eobDetails_2.setDeliveryWindowPopup();
    });

});

test('ICM-TC-1872:TC_058_set deliveryTC_059_set delivery_verify that on popup window user can select delivery date less than validate', async ({ browser }) => {
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

test('ICM-TC-1873:TC_060_set delivery_verify that on popup window user can select delivery date greater than validate and release date', async ({ browser }) => {
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

test('ICM-TC-1874:TC_061_set delivery_verify that on popup window user can select delivery date and release date same', async ({ browser }) => {
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

test('ICM-TC-1875:TC_062_set delivery_verify that  on popup window  click on close button popup window get closed', async ({ browser }) => {
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

    await test.step("6.verify that  on popup window  click on close button popup window get closed", async () => {
        await eobDetails_2.verifyClickOnsetDeliveryWithoutselctingResult();
    });
});
