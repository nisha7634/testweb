import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { eoBCustDetails } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const eobDetailsData = require(`../../testdata/${process.env.ENV || 'uat'}/eob-for-mawista-customers.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1816:TC_001_Verify that the user is able to navigate to Payment Orders', async ({ browser }) => {
    console.log("Execution started for Eob for mawista customer");
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2.  Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });


});


test('ICM-TC-1817:TC_002_verify that Validbreadcrumbs are displayed  Finance > Payment Orders', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("3 verify that Validbreadcrumbs are displayed  Finance > Payment Orders", async () => {

        await eobDetails.verifyProperBreadcumsonPaymentPage();
    });
});


test('ICM-TC-1818:TC_003_verify that PAYMENT ORDERS label is displayed', async ({ browser }) => {
    console.log("Execution End for Eob for mawista customer");
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });
    await test.step("4 Verify that PAYMENT  label is displayed    ", async () => {
        await eobDetails.verifyPaymentOrderLbl(eobDetailsData['Testdata'].paymentOrder);;
    });
});



test('ICM-TC-1819:TC_004_verify that Search Criteria label is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("4 Verify that Search Criteria label is displayed    ", async () => {
        await eobDetails.verifySearchCriteriaLbl(eobDetailsData['Testdata'].searchCriteria);;

    });

});


test('ICM-TC-1820:TC_005_Verify that all fields are displyed in Search Criteria', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("3 TC_005_Verify that all fields are displyed in Search Criteria    ", async () => {
        await eobDetails.verifyFieldsOnSearchCriteria();

    });




});



test('ICM-TC-1821:TC_006__verify that enter Validpayer then currency and Account dropdown values get fetched', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });
    await test.step("3. verify that enter Validpayer then currency and Account dropdown values get fetched   ", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

});


test('ICM-TC-1822:TC_007_Verify that In Currency dropdown values are displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("3 TC_005_Verify that all fields are displyed in Search Criteria    ", async () => {
        await eobDetails.verifyValuesFromCurrencyDropdown();

    });
});


test('ICM-TC-1823:TC_008_Verify that Account dropdown Values are displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("3 TC_005_Verify that all fields are displyed in Search Criteria    ", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
});


test('ICM-TC-1824:TC_009_Verify the Functionality of theSearch btn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });
    await test.step("3 TC_005_Verify that all fields are displyed in Search Criteria    ", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("3 TC_005_Verify the Functionality of theSearch btn", async () => {
        await eobDetails.verifySearchBtnFunctionality(eobDetailsData['Testdata'].fromDate, eobDetailsData['Testdata'].toDate);
    });
});


test('ICM-TC-1825:TC_010_Verify that functinality when  fill only mandatory fields click on serach', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("3 TC_005_Verify that all fields are displyed in Search Criteria    ", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });

    await test.step("3 TC_005_Verify that functinality when  fill only mandatory fields click on serach   ", async () => {
        await eobDetails.verifyFunctionalityOfSearchbtnWithMandatoryFields();

    });




});


test('ICM-TC-1826:TC_011_Verify that  fill all fields click on serach', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3 Verify that all fields are displyed in Search Criteria    ", async () => {
        await eobDetails.verifyCurrencyAccountValuesAutofetched(eobDetailsData['Testdata'].payer, eobDetailsData['Testdata'].currency, eobDetailsData['Testdata'].account);
    });
    await test.step("4 Verify that  fill all fields click on serach   ", async () => {
        await eobDetails.verifyFunctionalityOfSearchbtnWithAllFields(eobDetailsData['Testdata'].fromDate, eobDetailsData['Testdata'].toDate, eobDetailsData['Testdata'].fromReleaseDate, eobDetailsData['Testdata'].toReleaseDate, eobDetailsData['Testdata'].fromDeliveryDate, eobDetailsData['Testdata'].toDeliveryDate);
    });



});



test('ICM-TC-1827:TC_012_Verify that  without filling any values and click on search', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("4 _Verify that  without filling any values and click on search  ", async () => {
        await eobDetails.searchFunctionalityWithoutAnyField();
    });




});


test('ICM-TC-1828:TC_013_verify that Report preferences label is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });

    await test.step("3 verify that Report preferences label is displayed  ", async () => {
        await eobDetails.verifyReportPreferences(eobDetailsData['Testdata'].reportPreferences);

    });




});

test('ICM-TC-1829:TC_014_Verify that dropdown values of First order', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });
    await test.step("3 Verify that dropdown values of First order ", async () => {
        await eobDetails.verifyDropdownValuesByFirstOrder();
    });
});

test('ICM-TC-1830:TC_015_Verify that  dropdown values of  Sort by First order', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        await eobDetails.VerifySortByFirstOrderValue(eobDetailsData['Testdata'].firstOrderDropdown);
    });

});

test('ICM-TC-1831:TC_017_Verify that  dropdown values of  Sort by Second order', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        await eobDetails.VerifySortByFirstOrderValue(eobDetailsData['Testdata'].firstOrderDropdown);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        await eobDetails.VerifySortBySecondOrderValue(eobDetailsData['Testdata'].secondOrderDropdown);
    });

});

test('ICM-TC-1832:TC_018__Verify that First order dropdown select  Policy Number and in second order dropdown values', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        //await eobDetails.VerifySortByFirstOrderValue(eobDetailsData['Testdata'].firstOrderDropdown);
    });
    await test.step("4.Verify that First order dropdown select  Policy Number and in second order dropdown values", async () => {
        await eobDetails.verifysortByWhenUserSelectFirstOrder_PatientName(eobDetailsData['Testdata'].firstOrderDropdownPolicyNumber);
    });

});

test('ICM-TC-1833:TC_019_Verify that First order dropdown select Patient Name then in second order dropdown values', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        //await eobDetails.VerifySortByFirstOrderValue(eobDetailsData['Testdata'].firstOrderDropdown);
    });
    await test.step("4.Verify that First order dropdown select Patient Name then in second order dropdown values    ", async () => {
        await eobDetails.verifysortByWhenUserSelectFirstOrder_PatientName(eobDetailsData['Testdata'].firstOrderDropdownPName);
    });

});

test('ICM-TC-1834:TC_020_Verify that First order dropdown select  staff Number then in second order dropdown values', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        //await eobDetails.VerifySortByFirstOrderValue(eobDetailsData['Testdata'].firstOrderDropdown);
    });
    await test.step("4._Verify that First order dropdown select  staff Number then in second order dropdown values", async () => {
        await eobDetails.verifysortByWhenUserSelectFirstOrder_StafftName(eobDetailsData['Testdata'].firstOrderDropdownstaffName);
    });

});

test('ICM-TC-1835:TC_021_Verify that First order dropdown select Claim Amount then in second order dropdown values', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context)
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. Verify that  dropdown values of  Sort by First order", async () => {
        //await eobDetails.VerifySortByFirstOrderValue(eobDetailsData['Testdata'].firstOrderDropdown);
    });
    await test.step("4. Verify that First order dropdown select Claim Amount then in second order dropdown values    ", async () => {
        await eobDetails.verifysortByWhenUserSelectFirstOrder_ClaimAmt(eobDetailsData['Testdata'].firstOrderDropdownClaimAmt);
    });

});
