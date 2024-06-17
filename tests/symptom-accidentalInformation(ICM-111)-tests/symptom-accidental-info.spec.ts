import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { accidentalInfoPage } from '../../page-objects/symptom-accident-information(ICM-111)-pages/symptom-AccidentInformation.ts';

import '../../page-objects/utilities-pages/global-setup.ts';

const accidentalData = require(`../../testdata/${process.env.ENV || 'uat'}/symptom-accidental-info.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1341:TC_041_Verify the user  is able to search the Mobile cliams', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Navigate to Workflow ", async () => {
        await accidentalPage.verifyUserCanOpenWorkflow();
    });
    await test.step("User Can open the Task list from the workflow - Pending Tasks displayed", async () => {
        await accidentalPage.verifyPendingTaskonTaskList();
    });
    await test.step("Required Signoff is displayed on the TakList", async () => {
        await accidentalPage.verifyReqSignOffonTaskList();
    });
    await test.step("User can open the mobile cliam susscssfully", async () => {
        await accidentalPage.verifyUserCanSearchMobileClaim();
    });
    await test.step("Verified User can search and open the mobile claim", async () => {
        await accidentalPage.verifyUserCanOpenMobileClaim();
    });
});


test('ICM-TC-1342:TC_042_Verify user able to click on the specific assessment', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user can click the specific assessment", async () => {
        await accidentalPage.verifyUserCanClickOnSpecificAssessment();
    });
});


test('ICM-TC-1343:TC_043_Verify user able to see the Assessments btn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user is able see the Specific Assessment Btn", async () => {
        await accidentalPage.verifyAssessmentBtn();
    });
});

test('ICM-TC-1344:TC_044_Verify the specific assessment is dipalyed on the page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user is able change the specific assessment", async () => {
        await accidentalPage.verifyThespecificAssessmentDisplayed();
    });
});

test('ICM-TC-1345:TC_045_Verify the user navigation when click on the assess btn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user is able change the specific assessment", async () => {
        await accidentalPage.verifyUserNavigationFromAsseeementBtn();
    });
});

test('ICM-TC-1346:TC_046-Verify the user able  to open  the ASOAP Assessments', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user is able change the specific assessment", async () => {
        await accidentalPage.verifyUserNavigationFromAsseeementBtn();
    });
});

test('ICM-TC-1347:TC_047_Verify the title on the Assessmets page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user is able change the specific assessment", async () => {
        await accidentalPage.verifyTitleonASOAPAss();
    });
});
test('ICM-TC-1348:TC_048_Verify the field blood Pressure on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Blood Pressure field on the ASOAP assessment", async () => {
        await accidentalPage.VerifyFieldBloodPressure();
    });
});


test('ICM-TC-1349ICM-TC-1349:TC_049_Verify the field Temperature  on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Temperature field on the ASOAP assessment", async () => {
        await accidentalPage.VerifyFieldTemperature();
    });
});

test('ICM-TC-1350:TC_050_Verify the field Pulse on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the pulse field on the ASOAP assessment", async () => {
        await accidentalPage.vrifyFieldPulse();
    });
});


test('ICM-TC-1351: TC_051_Verify the field Respiratory Rate  on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the field Respiratory on the ASOAP assessment ", async () => {
        await accidentalPage.verfiyFieldRespiratoryRate();
    });
});

test('ICM-TC-1352: TC_052_Verify the field Weight  on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Weight field on the ASOAP assessment", async () => {
        await accidentalPage.verfiyFieldWeight();
    });
});

test('ICM-TC-1353: TC_053_Verify the field  LMP on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the LMP field on the ASOAP assessment", async () => {
        await accidentalPage.verifyFieldLMP();
    });
});

test('ICM-TC-1354:TC_054_Verify the field  Chief complaints Symptomes   on the ASOAP ASSESSMENT Page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Chief complaints symptoms field on the ASOAP assessment", async () => {
        await accidentalPage.VerifyChiefComplaintsSymptomes();
    });
});
test('ICM-TC-1355:TC_055_Verify the search field is present on ASOAP ASSESSMENTS page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Search field on ASOAP assessment", async () => {
        await accidentalPage.verifySearchField();
    });
});

test('ICM-TC-1356:TC_056_Verify the Search field can accept the data   on ASOAP ASSESSMENTS page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Search field on ASOAP assessment accepts the test data", async () => {
        await accidentalPage.verifySearchFieldAcceptsData();
    });
});

test('ICM-TC-1357:TC_057_Verify the magnifier tool displayed with search textbox', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the the magnifier tool displayed with search textbox", async () => {
        await accidentalPage.verifyMagnifierIcon();
    });
});
test('ICM-TC-1358:TS_058_Verify the search magnifier is functional on the ASOAP Assessment', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("_Verify the search magnifier is functional on the ASOAP Assessment", async () => {
        await accidentalPage.verifyMagnifierIconFunctionaliy();
    });
})
test('ICM-TC-1359:TC_059_Verify the Export to Excel btn is present on the ASOAP ASSESSMENT page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Export To Excel btn is displayed on the ASHOP Assessment", async () => {
        await accidentalPage.verifyExportToxlsBtn();
    });
})

test('ICM-TC-1360:TC_060_Verify the column Specific Assessment is displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Specific Assessment column  is displayed on the ASHOP Assessment", async () => {
        await accidentalPage.verifyTheSpecificAssessmentonASOAP();
    });
})

test('ICM-TC-1361:TC_061_Verify the column  Assessment is displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the assessment column is displayed on the ASHOP Assessment column", async () => {
        await accidentalPage.verifyAssessmentOnASOAP();
    });
})
test('ICM-TC-1362:TC_062_Verify the column  General  Assessment is displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the General assessment displayed on the ASHOP Assessment column", async () => {
        await accidentalPage.verifyGeneralAssessmentAOSP();
    });
})
test('ICM-TC-1363:TC_063_Verify the column Is Primary is displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Is Primary column displayed on the ASHOP Assessment column", async () => {
        await accidentalPage.verifyIsPrimaryOnASOAP();
    });
})

test('ICM-TC-1364:TC_064_Verify the column First Occure Date displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the first Occure Date column displayed on the ASHOP Assessment column", async () => {
        await accidentalPage.verifyFirstOccureDate();
    });
})

test('ICM-TC-1365:TC_065_Verify the column POA displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the POA column displayed on the ASHOP Assessment column", async () => {
        await accidentalPage.verifyPOA();
    });
})

test('ICM-TC-1366:TC_066_Verify the column Reason for visit  displayed on the ASOAP Assessment page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Reason for visit column displayed on the ASHOP Assessment column", async () => {
        await accidentalPage.verifReasonForVisit();
    });
})

test('ICM-TC-1367:TC_067_Verify the First Occure date field is clickable', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the First Occure date field is clickable", async () => {
        await accidentalPage.VerifyFirstOccureDate_Clickable();
    });
})

test('ICM-TC-1368: TC_068_Verify the calendar is displayed with First Occure Date', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the calendar is displayed with First Occure Date", async () => {
        await accidentalPage.verifyCalendarOnFirstOccureDate();
        await page.close();
    });

})

test('ICM-TC-1369:TC_069_Verify user able to select the date from the calendar', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the calendar is displayed with First Occure Date", async () => {
        await accidentalPage.selectTheDateFromCalendar();
        // the calendar is not getting open ..check with Dev
    });

});

test('ICM-TC-1374:TC_074_Verify the user can view relevant symptom while processing a reimbursement claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the   symptoms related data field on the ASOAP assessment", async () => {
        await accidentalPage.VerifyChiefComplaintsSymptomes();
        await page.bringToFront();
        await page.close();
    });
});

test('ICM-TC-1375:TC_075_Verify the user can view Accident related Data while processing a reimbursement claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();

    });
    await test.step("Verify the   symptoms related data field on the ASOAP assessment", async () => {
        await accidentalPage.verifyUserCanSeeDescriptionOfAccident();
        await page.bringToFront();
    });
});


test('ICM-TC-1376:TC_076_Verify the User is able to see the Description of symptoms', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user can see description of Symptoms the ASOAP assessment", async () => {
        await accidentalPage.verifySymptompsDescription();
        await page.bringToFront();
    });
});

test('ICM-TC-1377:TC_077_Verify the Date of onset of symptoms is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Date of onset symptoms on the ASOAP assessment", async () => {
        await accidentalPage.verifyFirstOccureDate();
        await page.bringToFront();
    });
});

test('ICM-TC-1378:TC_078_Verify the "Treatment for symptoms" is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the treatment for symptoms is displayed on the ASOAP assessment", async () => {
        await accidentalPage.verifyusercanSeeTreatmentOfSymptomsReceivedStatus();
        await page.bringToFront();
    });
});
test('ICM-TC-1379:TC_079_Verify the "Date of first treatment for symptoms" is displayed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Date of first treatment for symptoms is displayed on the ASOAP assessment", async () => {
        await accidentalPage.verifyDateOfFisrtTreatment();
    });
});

test('ICM-TC-1380:TC_080_Verify "Accident?" is displayed if the claim is related to the accident', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the Is accident? is displayed on the ASOAP assessment", async () => {
        await accidentalPage.verifyAccidentToggle();
        await page.bringToFront();
    });
});

test('ICM-TC-1381: TC_081_Verify the Description of the accident is displayed if the claim is related to the accident', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the Desciption when the claim is related to the accident on the ASOAP assessment", async () => {
        await accidentalPage.verifyDescriptionDisplayedWhenClaimRelatedToAccident
    });
});

test('ICM-TC-1382:TC_084_Verify the user  able to properly adjudicate the claim when view symptom related data', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the user  able to properly adjudicate the claim when view symptom related data", async () => {

        await accidentalPage.VerifyUserCanAdjudicateClaimWhenViewSymptomRelatedData();
        await page.bringToFront();
    });
});
test('ICM-TC-1383:TC_085_Verify the user  able to properly adjudicate the claim when view accident related data', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the Desciption when the claim is related to the accident on the ASOAP assessment", async () => {
        await accidentalPage.verifyUserCanSeeDescriptionOfAccident();
        await accidentalPage.verifyDescriptionDisplayedWhenClaimRelatedToAccident
        await page.bringToFront();
    });
});
test('ICM-TC-1384:Verify the User can Select / Deselect the Reason for Visit checkbox', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the Desciption when the claim is related to the accident on the ASOAP assessment", async () => {
        await accidentalPage.verifyUserCanSelectDeselctResonForVisit();
        await page.bringToFront();
    });
});
//To be automated
test('ICM-TC-1385:Verify the User can select the Received Treatment checkbox', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the User can select the Received Treatment checkbox", async () => {
        await accidentalPage.verifyUserCanSelectReceivedTreatmentCheckbox();
        //Due to the blocker https://nextcarehealth.atlassian.net/browse/TMP-7400

        await page.bringToFront();
    });
});
test('ICM-TC-1386:Verify the user can select the date of First Treatment For symptoms', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify the user can select the date of First Treatment For symptoms", async () => {
        await accidentalPage.verifyUserCanSelectDateOfFirstTreatment();
        // Due to the blocker https://nextcarehealth.atlassian.net/browse/TMP-7400
        await page.bringToFront();
    });
});
test('ICM-TC-1387:Verify  the user is not able to select the future Date of First Treatment For symptoms', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });

    await test.step("Verify  the user is not able to select the future Date of First Treatment For symptoms", async () => {
        await accidentalPage.VerifyUserCannotSelectFurureDate();
        //Update due to the blocker- https://nextcarehealth.atlassian.net/browse/TMP-7400
        await page.bringToFront();
    });
});
test('ICM-TC-1388:Verify after  properly adjudicate the claim when view view symptom related data user can save the claims', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the Desciption when the claim is related to the accident on the ASOAP assessment", async () => {

        await accidentalPage.VerifyUserCanAdjudicateClaimWhenViewSymptomRelatedData();
        await page.bringToFront();
    });
});

test('ICM-TC-1389:Verify the user can select the date of First Occur Date', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await page.getByText('Batching').click();
        await page.getByRole('link', { name: 'Open Batch' }).click();
        await accidentalPage.openBatch(accidentalData['TC-accidentData-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await accidentalPage.openClaim();
    });
    await test.step("Verify the user can select the date of First Occur Date", async () => {
        await accidentalPage.verifyUserCanSelectDateOfFirstOccureDate();
        //Due to the blocker user is not able to select the Date https://nextcarehealth.atlassian.net/browse/TMP-7400

        await page.bringToFront();
    });
});