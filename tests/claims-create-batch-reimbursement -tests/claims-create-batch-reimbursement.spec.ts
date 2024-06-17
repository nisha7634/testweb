import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { reimBatchPage } from '../../page-objects/claims-create-batch-reimbursement -pages/claims-create-batch-reimbursement.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const batchData = require(`../../testdata/${process.env.ENV || 'uat'}/create-reimbursement-batch.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;


test('ICM-TC-2414:Verify user is able to see "Create batch reimbursement" sub module under Batching module', async ({ browser }) => {
    console.log("Execution Starts for claims new Pre approval");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: reimBatchPage = new reimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await claimPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to see Create batch reimbursement sub module under Batching module ", async () => {
        await claimPage.verify_Create_batch_reimbursement()
    });

});


test('ICM-TC-2415:Verify user is able to click on "Create batch reimbursement" sub module under Batching module', async ({ browser }) => {
    console.log("Execution Starts for claims new Pre approval");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });
    await test.step("3.Verify user is able to click on Create batch reimbursement sub module under Batching module", async () => {
        await batchPage.verify_Create_batch_reimbursement();
        await batchPage.verifyUserCanClickCreateRimBatch();
    });

});


test('ICM-TC-2416:Verify create batch reimbursement page contains:1. Received Date 2. Payer 3. Label 4. Claims count 5. Capitation checkbox 6. Re-submitted checkbox 7. Create button', async ({ browser }) => {
    console.log("Execution Starts for claims new Pre approval");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);

    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });
    await test.step("3.Verify create batch reimbursement page contains:1. Received Date 2. Payer3. Label 4. Claims count 5. Capitation checkbox 6. Re-submitted checkbox 7. Create button", async () => {
        await batchPage.verifyReqFieldsOnCreateBatchReim();
    });

});


test('ICM-TC-2417:Verify calendar will get open if user clicks on date picker from Received date field', async ({ browser }) => {
    console.log("Execution Starts for claims new Pre approval");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);


    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("5. Verify calendar will get open if user clicks on date picker from Received date field", async () => {
        await batchPage.verifyCalendarFunctionality();
    });

});

test('ICM-TC-2418:Verify user is not able to select future date on received date field', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);


    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("5. Verify user is not able to select future date on received date field", async () => {
        await batchPage.verifyUserCannotSelectFutureDate();
    });

});

test('ICM-TC-2419:Verify user is able to remove selected date on received date field', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);


    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("5. Verify user is able to remove selected date on received date field", async () => {
        await batchPage.verifyUserCannotSelectFutureDate();
    });

});


test('ICM-TC-2420:Verify user is able to enter data in Payer field', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);


    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("3. Verify user is able to enter data in Payer field", async () => {
        await batchPage.verifyUserCanEnterDataInPayer(batchData['TestData'].payer);

    });
});


test('ICM-TC-2421:Verify user is able to get error message "Payer name was not found" if user enters incorrect data in payer name field    ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);


    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });


    await test.step("3. Verify user is able to enter data in Payer field", async () => {
        await batchPage.verifyPayerwithInvalidValue(batchData['TestData'].invalidPayer, batchData['TestData'].errorMsgForInvalidPayer);

    });


});

test('ICM-TC-2422:Verify user is able to enter data in Claims count field', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);


    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to enter data in Claims count field", async () => {
        await batchPage.verifyUserCanEnterClaimCount(batchData['TestData'].claimCountValue);

    });


});

test('ICM-TC-2423:Verify user will get error message "Enter only numeric character" if user enters data expect numeric characters', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });
    await test.step("3. Verify user will get error message Enter only numeric character if user enters data expect numeric characters", async () => {
        await batchPage.verifyFunctionalityWithInvalidClaimCount(batchData['TestData'].invalidClaimCount, batchData['TestData'].erroMsgInvalidCount);

    });
});


test('ICM-TC-2424:Verify user is able to tick/untick on "Capitation" checkbox', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });
    await test.step("3. Verify user is able to tick/untick on Capitation checkbox", async () => {
        await batchPage.verifyCheckUncheckFunctionalityOf_Capititation();

    });

});




test('ICM-TC-2425: Verify user is able to tick/untick on "Re-submitted" checkbox', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("3. Verify user is able to tick/untick on 'Re-submitted' checkbox", async () => {
        await batchPage.verifyCheckUncheckFunctionalityOf_reSubmitted();
    });
});


test('ICM-TC-2426: Verify user is able to click on "Create" button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("3. Verify user is able to click on Create button", async () => {
        await batchPage.verifyCreateBtnCLickable();
    });
});


test('ICM-TC-2427: Verify user is able to create reimbursement batch successfully', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("3. Verify user is able to create reimbursement batch successfully", async () => {
        await batchPage.verifyUseCanCreateReimBatchSuccessfully(batchData['TestData'].payer, batchData['TestData'].lblValue, batchData['TestData'].claimCountValue);

    });
});//Total Test cases 14

test('ICM-TC-2428:Verify user is not able to create reimbursement batch with blank data on mandatory fields', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("3. Verify user is able to create reimbursement batch successfully", async () => {
        await batchPage.verifyCreateBatchFunctionalityWithBlankFields();

    });
})

test('ICM-TC-2429: Verify mandatory icon should be available on "Payer", "Label" and "Claims count" fields', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const batchPage: reimBatchPage = new reimBatchPage(page, context);
    await test.step("1. User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("2. user is able to Navigate to the Batching", async () => {
        await batchPage.navigateToBatching();
    });

    await test.step("3. Verify user is able to create reimbursement batch successfully", async () => {
        await batchPage.verifyMandatorySymbols();

    });
})