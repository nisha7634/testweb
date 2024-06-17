import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { openreimBatchPage } from '../../page-objects/claims-Open-batch-reimbursement -pages/claims-open-batch-reimbursement.ts'
import '../../page-objects/utilities-pages/global-setup.ts';

const batchData = require(`../../testdata/${process.env.ENV || 'uat'}/open-reimbursement-batch.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;


test('ICM-TC-2463:Verify user is able to see "Open Batch" sub module under Batching module', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {

        await loginPage.gotoLoginPage(data['TC-Login-2'].url);

        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to see Open Batch sub module under Batching module ", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });

});


test('ICM-TC-2464:Verify user is able to click on "Open Batch" sub module under Batching module', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3.Verify user is able to click on Open Batch sub module under Batching module ", async () => {
        await openBatchPage.verifyUserCanOpenBatch()
    });

});

test('ICM-TC-2465:"Verify Open Batch page contains 1. Batch Id field2. Next button"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. Verify user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4.Verify user is able to click on Open Batch sub module under Batching module ", async () => {
        await openBatchPage.verifyReqFieldsOnOpenBatchPage()
    });

});

test('ICM-TC-2466:Verify "Next" button colour changes from grey to blue if user enters data in Batch id field', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4.Verify Next button colour changes from grey to blue if user enters data in Batch id field ", async () => {
        await openBatchPage.verifyNxtBtnWhenUserEntersValidBatchID(batchData['TestData'].validBatchID)
    });
});

test('ICM-TC-2467:Verify alert popup is getting displayed if user enters invalid batch id', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify alert popup is getting displayed if user enters invalid batch id ", async () => {
        await openBatchPage.verifyPopUpWhenEntersInvalidBatchID(batchData['TestData'].invalidBatchID, batchData['TestData'].invalidBatchError);
    });
});

test('ICM-TC-2468:"Verify alert popup contains:1. Alert label 2. ""The entered batch does not exists"" error text 3. OK button 4. Close icon" ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify alert popup is getting displayed if user enters invalid batch id ", async () => {
        await openBatchPage.verifyPopUp_errMsg_OkBtn_CloseBtn_WhenEntersInvalidBatchID(batchData['TestData'].invalidBatchID, batchData['TestData'].invalidBatchError);
    });
});


test('ICM-TC-2469:"Verify user is able to close the alert popup on click on close icon" ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify alert popup is getting displayed if user enters invalid batch id ", async () => {
        await openBatchPage.verifyClickPopupFunctionality_closeBtn(batchData['TestData'].invalidBatchID);
    });
});


test('ICM-TC-2470:"Verify user is able to close the alert popup on click on Ok button" ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify alert popup is getting displayed if user enters invalid batch id ", async () => {
        await openBatchPage.verifyClickPopupFunctionality_okBtn(batchData['TestData'].invalidBatchID);
    });
});



test('ICM-TC-2471:"Verify user is able to get error message "Please enter batch #" if user keeps the batch Id field blank" ', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify alert popup is getting displayed if user enters invalid batch id ", async () => {
        await openBatchPage.verifyErrorMessageForBlankBatchID(batchData['TestData'].emptyBatcherror);
    });
});


test('ICM-TC-2472:"Verify user is able to remove entered batch id" ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify alert popup is getting displayed if user enters invalid batch id ", async () => {
        await openBatchPage.verifyUserCanRemoveEnteredBatchID(batchData['TestData'].invalidBatchID);
    });
});


test('ICM-TC-2473:"Verify user is able to open valid batch successfully" ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const openBatchPage: openreimBatchPage = new openreimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await openBatchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to Open the Batch", async () => {
        await openBatchPage.verifyUserCanOpenBatch();
    });
    await test.step("4. Verify User can open the Batch using Valid Batch ID ", async () => {
        await openBatchPage.openBatchWithValidBatchID(batchData['TestData'].validBatchID);
    });
});