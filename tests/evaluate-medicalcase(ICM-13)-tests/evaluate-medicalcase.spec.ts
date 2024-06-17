import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { medicalCasepage } from '../../page-objects/evaluate-medical-case(ICM-13)-pages/evaluate-medicalcase-page.ts.ts';
import '../../page-objects/utilities-pages/global-setup.ts';
import { AsyncLocalStorage } from 'node:async_hooks';
//import { medicalCaseNewpage } from '../../page-objects/evaluate-Medicalcase(ICM-13)-pages/evaluateMedicalCase_newpage.ts';

const medicalCaseData = require(`../../testdata/${process.env.ENV || 'uat'}/evaluate-medicalcase.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1300:TC_001_Verify the user can Open the Reimbursement  claim of source Mobile application', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    //const medicalCaseNewPage: medicalCaseNewpage = new medicalCaseNewpage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Navigate to Workflow ", async () => {
        await medicalCasePage.verifyUserCanOpenWorkflow();
    });
    await test.step("User Can open the Task list from the workflow - Pending Tasks displayed", async () => {
        await medicalCasePage.verifyPendingTaskonTaskList();
    });
    await test.step("Required Signoff is displayed on the TakList", async () => {
        await medicalCasePage.verifyReqSignOffonTaskList();
    });
    await test.step("User can open the mobile cliam susscssfully", async () => {
        await medicalCasePage.verifyUserCanSearchMobileClaim();
    });
    await test.step("Verified User can search and open the mobile claim", async () => {
        await medicalCasePage.verifyUserCanOpenMobileClaim();
    });
});
test('ICM-TC-1316:TC_017_Verify user able to see the Medical file option on the Edit Reimbursement Processing Claim page', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can see the Medical file option on the Edit Reim claim page", async () => {
        await medicalCasePage.verifyMedicalFileOnEditClaimPage();
    });
});
test('ICM-TC-1317:TC_018_Verify user is able to open and close the Medical file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can see the Medical file option on the Edit Reim claim page", async () => {
        await medicalCasePage.verifyMedicalFileOnEditClaimPage();
    });
    await test.step("User can cick on the Medical File", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("Verify User can open the Medical file", async () => {
        await medicalCasePage.verifyTitleOnfile();
    });
    await test.step("Verify User can Close the Medical file", async () => {
        await medicalCasePage.verifyCloseFunctionalityOfMedicalFIle();
    });
});

test('ICM-TC-1318:TC_019_Verify the Title on the medical file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can see the Medical file option on the Edit Reim claim page", async () => {
        await medicalCasePage.verifyMedicalFileOnEditClaimPage();
    });
    await test.step("User can cick on the Medical File", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("Verify Title on the Medical file", async () => {
        await medicalCasePage.verifyTitleOnfile();
    });
});

test('ICM-TC-1319:TC_020_Verify the functionality of the  Medical Case Link on the Medical file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can see the Medical file option on the Edit Reim claim page", async () => {
        await medicalCasePage.verifyMedicalFileOnEditClaimPage();
    });
    await medicalCasePage.verifyMedicalCaseLink();

});

test('ICM-TC-1320:TC-021_Verify user able to click on the medical Case and can see beneficiary claims', async ({ browser }) => {
    //intrenal server issue
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Baneficiary Claims from the the medical case summary Tab", async () => {
        await medicalCasePage.beneficiaryBenefificaryClaims();
    });

});

test('ICM-TC-1321:TC_022_Verify the fields on the Medical case summary', async ({ browser }) => {
    //internal server issue
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Baneficiary Claims from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyFieldsonSummaryTab();
    });

})
test('ICM-TC-1322:TC_023_Verify the Medical case summary field Claim Pin  is displayed on the medical file', async ({ browser }) => {
    //Server issue
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Baneficiary Claims from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClaimPin();

    });

});
test('ICM-TC-1323:TC_024_Verify the Medical case summary field Medical Case  is displayed on the medical file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Medical case from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyMedicalCase();
    });

});
test('ICM-TC-1324:TC_025_Verify the Medical case summary field Claim Reference is displayed on the medical file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Claim Reference from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClaimRef();
    });
});


test('ICM-TC-1325:TC_026_Verify the Medical case summary field Medical Description  is displayed on the medical file', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();
    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Claim Description from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClaimDescription();
    });
});


test('ICM-TC-1326:TC_027_Verify the Medical case summary field contains FOB/ER columnn', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the EOB_ER from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClamFOB_ER();
    });


});
test('ICM-TC-1327:TC_027_Verify the Medical case summary field contains Specific Assessment columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {

        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Specific Assessment from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClaimSpecificAssessment();
    });


});
test('ICM-TC-1328:TC_028_Verify the Medical case summary field contains  Admission Date columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Admission Datet from the the medical case summary Tab", async () => {
        await medicalCasePage.VerifyAdmissionDate();
    });


});
test('ICM-TC-1329:TC_029_Verify the Medical case summary field contains  Status columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the  Status columnn from the the medical case summary Tab", async () => {
        await medicalCasePage.VeerifyStatusOfClaim();
    });


});
test('ICM-TC-1330:TC_030_Verify the Medical case summary field contains  Authorization or Invoice columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Authorization or Invoice columnn from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyAuthorization_invoice();
    });


});
test('ICM-TC-1331:TC_031_Verify the Medical case summary field contains  Reserves columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Reserves columnn  from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyReserves();
    });


});
test('ICM-TC-1332:TC_032_Verify the Medical case summary field contains  Copart columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Copart from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyCopartOnClaim();
    });


})
test('ICM-TC-1333:TC_033_Verify the Medical case summary field contains  Deductible columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see theDeductible from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyDeductibleonClaim();
    });


})
test('ICM-TC-1334:TC_034_Verify the Medical case summary field contains  Limit columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Limit from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyLimitColumn();
    });


})
test('ICM-TC-1335:TC_035_Verify the Medical case summary field contains  Claim columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Claim column from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClaimColumn();
    });


})
test('ICM-TC-1336:TC_036_Verify the Medical case summary field contains  Policy Currency  columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the  Policy Currency  columnn from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyPolicyCurrency();
    });


})
test('ICM-TC-1337:TC_037_Verify the Medical case summary field contains Reim columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Reim from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyReimColumn();
    });


})
test('ICM-TC-1338:TC_038_Verify the Medical case summary field contains Payment Method columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the  Payment Method from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyPaymentMethod();
    });


})
test('ICM-TC-1339:TC_039_Verify the Medical case summary field contains Provider Name columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the Provider Name from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyProviderName();
    });


})
test('ICM-TC-1340:TC_040_Verify the Medical case summary field contains class columnn', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const medicalCasePage: medicalCasepage = new medicalCasepage(page, context);
    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });

    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Open the required batch Batch", async () => {
        await medicalCasePage.naviagteToOpenBatch();
        await medicalCasePage.openBatch(medicalCaseData['TC-medicalCase-17'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await medicalCasePage.openClaim();
    });
    await test.step("User can open the medical case", async () => {
        await medicalCasePage.clickOnMedicalFile();

    });
    await test.step("User can see the Medical case summary Tab and Navigation of the user", async () => {
        await medicalCasePage.verifySummaryTab();
    });
    await test.step("User can see the class columnn from the the medical case summary Tab", async () => {
        await medicalCasePage.verifyClass();
    });


})