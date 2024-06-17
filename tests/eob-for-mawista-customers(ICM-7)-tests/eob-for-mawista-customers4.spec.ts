import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { eoBCustDetails } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers.ts';
import { eoBCustDetails_2 } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers-2.ts';
import { eoBCustDetails_3 } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers-3.ts';
import { eoBCustDetails_4 } from '../../page-objects/eob-for-mawista-customers(ICM-7)-pages/eob-for-mawista-customers-4.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const eobDetailsData = require(`../../testdata/${process.env.ENV || 'uat'}/eob-for-mawista-customers.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;




test('ICM-TC-1925:TC_120_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);
    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Payment Orders_verify that calender icon is displayed", async () => {
        await eobDetails_4.verifyFromDateCalendarIconDisplayed();
    });
});



test('ICM-TC-1926:TC_121_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Payment Orders_verify that click on calender icon then calender get open with current date selected by default", async () => {
        await eobDetails_4.VerifyFromDateCalendarFunctionality();
    });
});


//up
test('ICM-TC-1927:TC_122_Payment Orders_verify that user can select old date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3. Payment Orders_verify that click on calender icon then calender get open with current date selected by default", async () => {
        await eobDetails_4.verifySelectFromPastDate();
    });
});

test('ICM-TC-1928:TC_123_Payment Orders_verify that user can select future date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3. TC_123_Payment Orders_verify that user can select future date", async () => {
        await eobDetails_4.verifySelectFromFutureDate();
    });
});


test('ICM-TC-1929:TC_124_Payment Orders_verify that To date label and textbox is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Verify that To date label and textbox is displayed", async () => {
        await eobDetails_4.verifyToDateLabelAndTextboxDisplayed();
    });
});


test('ICM-TC-1930:TC_125_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.TC_125_Payment Orders_verify that To Date calender icon is displayed", async () => {
        await eobDetails_4.verifyToDateCalendarIconDisplayed();
    });
});

test('ICM-TC-1931:TC_126_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.verify that click on calender icon then calender get open with current date selected by default", async () => {
        await eobDetails_4.VerifyToDateCalendarFunctionality();
    });
});


test('ICM-TC-1932: TC_127_Payment Orders_verify that user can select old date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Verify that user can select old date", async () => {
        await eobDetails_4.verifySelectToPastDate();
    });
});





test('ICM-TC-1933:TC_128_Payment Orders_verify that user can select future date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Verify that user can select future date", async () => {
        await eobDetails_4.verifySelectToFutureDate();
    });
});


test('ICM-TC-1934: TC_129_Payment Orders_verify that user can select To date less than from date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Verify that user can select To date less than from date", async () => {
        await eobDetails_4.verifyToLessThanFromDate();
    });
});


test('ICM-TC-1935: TC_130_Payment Orders_verify that user can select To date greater than from date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.verify that user can select To date greater than from date", async () => {
        await eobDetails_4.verifyToGreaterThanFromDate();
    });
});



test('ICM-TC-1936: TC_131_Payment Orders_verify that user can select same To date and from date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.verify that user can select same To date and from date", async () => {
        await eobDetails_4.verifyToSameAsFromDate();
    });
});

test('ICM-TC-1937:TC_132_Payment Orders_verify that from Realease date label and textbox is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.Verify that from date label and textbox is displayed", async () => {
        await eobDetails_4.verifyFromReleaseDateLabelAndTextboxDisplayed();
    });
});


test('ICM-TC-1938:TC_133_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.TC_133_Payment Orders_verify Release Date calender icon is displayed", async () => {
        await eobDetails_4.verifyReleaseDateCalendarIcon();
    });
});


test('ICM-TC-1939:TC_134_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });

    await test.step("3.verify Release Date calender icon is displayed", async () => {
        await eobDetails_4.verifyReleaseDateCalendarIcon();
    });

    await test.step("4.verify Release Date calender icon Navigation", async () => {
        await eobDetails_4.VerifyFromReleaseDateCalendarFunctionality();
    });
});


test('ICM-TC-1940:TC_140_Payment Orders_verify that user can select old date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);

    });
    await test.step("3.verify that user can select old date from Release Date", async () => {
        await eobDetails_4.verifySelectFromReleasePastDate();
    });
});


test('ICM-TC-1941:TC_141_Payment Orders_verify that user can select future date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });


    await test.step("3.verify that user can select Future date from Release Date", async () => {
        await eobDetails_4.verifySelectFromFutureReleaseDate();
    });
});



test('ICM-TC-1942:TC_137_Payment Orders_verify that To Realease date label and textbox is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });


    await test.step("3.verify that user can select Future date To Release Date", async () => {
        await eobDetails_4.verifyToReleaseDateLabelAndTextboxDisplayed();
    });
});



test('ICM-TC-1943:TC_138_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that user can select Future date To Release Date", async () => {
        await eobDetails_4.verifyToReleaseDateCalendarIcon();
    });
});




test('ICM-TC-1944:TC_139_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that click on calender icon then calender get open with current date selected by default", async () => {
        await eobDetails_4.VerifyToReleaseDateCalendarFunctionality();
    });
});


test('ICM-TC-1945:TC_140_Payment Orders_verify that user can select old date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify that user can select old date", async () => {
        await eobDetails_4.verifySelectToReleasePastDate();
    });
});

test('ICM-TC-1946:TC_141_Payment Orders_verify that user can select future date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify that user can select future date", async () => {
        await eobDetails_4.verifySelectToReleaseFutureDate();
    });
});


test('ICM-TC-1947:TC_142_Payment Orders_verify that user can select To Realease date less than from Realease date', async ({ browser }) => {
    // Failed not as expected
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that user can select To Realease date less than from Realease date", async () => {
        await eobDetails_4.verifyToReleaseLessThanFromReleaseDate();
    });
});


test('ICM-TC-1948:TC_143_Payment Orders_verify that user can select To Realease date greater than from Realease date', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify that user can select To Realease date greater than from Realease date", async () => {
        await eobDetails_4.verifyToReleaseGreaterThanFromReleaseDate();
    });
});

test('ICM-TC-1949:TC_144_Payment Orders_verify that user can select same To Realease date and from Realease date', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.TC_144_Payment Orders_verify that user can select same To Realease date and from Realease date", async () => {
        await eobDetails_4.verifyToReleaseSameAsFromReleaseDate();
    });
});


test('ICM-TC-1950:TC_145_Payment Orders_verify that From Delivery date label and textbox is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that From Delivery date label and textbox is displayed", async () => {
        await eobDetails_4.verifyToFromDeliveryDateLabelAndTextboxDisplayed();
    });
});



test('ICM-TC-1951:TC_146_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that calender icon is displayed", async () => {
        await eobDetails_4.verifyFromDeliveryDateCalendarIcon();
    });
});


test('ICM-TC-1952:TC_147_Payment Orders_verify that click on calender icon then calender get open with current date selected by default', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that click on calender icon then calender get open with current date selected by default", async () => {
        await eobDetails_4.VerifyFromDeliveryDateCalendarFunctionality();
    });
});


test('ICM-TC-1953:TC_148_Payment Orders_verify that user can select old date', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify that user can select old date", async () => {
        await eobDetails_4.verifySelectFromDeliveryPastDate();
    });
});



test('ICM-TC-1954:TC_149_Payment Orders_verify that user can select future date', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.TC_149_Payment Orders_verify that user can select future date", async () => {
        await eobDetails_4.verifySelectFromDeliveryFutureDate();
    });
});


test('ICM-TC-1955:TC_150_Payment Orders_verify that To Delivery date label and textbox is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.verify that To Delivery date label and textbox is displayed", async () => {
        await eobDetails_4.verifyToToDeliveryDateLabelAndTextboxDisplayed();
    });
});


test('ICM-TC-1956:TC_151_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify that calender icon is displayed", async () => {
        await eobDetails_4.verifyToDeliveryDateCalendarIcon();
    });
});


test('ICM-TC-1957:TC_151_Payment Orders_verify that calender icon is displayed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const eobDetails: eoBCustDetails = new eoBCustDetails(page, context);
    const eobDetails_2: eoBCustDetails_2 = new eoBCustDetails_2(page, context);
    const eobDetails_3: eoBCustDetails_3 = new eoBCustDetails_3(page, context);
    const eobDetails_4: eoBCustDetails_4 = new eoBCustDetails_4(page, context);

    await test.step("1. Login to the IRIS Application in Test Environment", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify the user navigation To the Payment Order", async () => {
        await eobDetails.naviagtepaymentOrder(eobDetailsData['Testdata'].PaymentOrder);
    });
    await test.step("3.Verify that calender icon is displayed", async () => {
        await eobDetails_4.verifyToDeliveryDateCalendarIcon();
    });
});
