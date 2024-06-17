import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { accidentalInfoPage } from '../../page-objects/symptom-accident-information(ICM-111)-pages/symptom-AccidentInformation.ts';
import { linkMedicalCasePage } from '../../page-objects/link-medicalcases(ICM-16)-pages/link-medicalcase.ts';
import { newPreapprovalPage } from '../../page-objects/claim-pages/claims-newpreapproval.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const symptomData = require(`../../testdata/${process.env.ENV || 'uat'}/link-medical-cases.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;
const claimData = require(`../../testdata/${process.env.ENV || 'uat'}/claim-creation-processing.json`) as Record<string, any>;

test('ICM-TC-1235:TC_001_Verify user can see the claim reference', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User able to navigate to the Open Batch - Batching-Open Batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });

    await test.step("User is able to open the required batch sucessfully", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });

    await test.step("User is able to open the cliam from the Batch", async () => {
        await symptompage.openClaim();
    });
    await test.step("The required Claim reference is displayed on the page", async () => {
        await symptompage.verifyClaimReference(symptomData['TC-sysmptom-1'].claimReference);
    });
});


test('ICM-TC-1236: TC_002_Verify the user can see the claim  status', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to see the Claim Status on the medical case", async () => {
        await symptompage.verifyUserCanCheckClaimStatus(symptomData['TC-sysmptom-2'].claimStatus);
    });
});

test('ICM-TC-1237:TC_003_Verify user can see the Beneficiary & Coverage Details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to see the Beneficiary coverage details on the medical case", async () => {
        await symptompage.verifyBeneficiaryCoverageDetails(symptomData['TC-sysmptom-3'].claimBeneficiary);
    });
});

test('ICM-TC-1238:TC_004_Verify the user can see the Medical Case Details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to see the Medical case on the Claim", async () => {
        await symptompage.verifyMedicalCaseDetails(symptomData['TC-sysmptom-4'].medicalCaseDetails);
    });

});

test('ICM-TC-1239:TC_005_Verify the user can see the Medical case link on the medical file', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to see the Medical case link on the claim", async () => {
        await symptompage.verifyMedicalCaseLink(symptomData['TC-sysmptom-5'].medicalCase);
    });

});

test('ICM-TC-1240:TC_006_Verify the functionality of the Medical case link', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to click on the medical case", async () => {
    });
    await symptompage.clickOnMedicalCase();

    await test.step("Verify the user is able to navigate to the list of medical case", async () => {
        await symptompage.verifyMedicalCaseLinkFunctionality();
    });
});

test('ICM-TC-1241:TC_007_Verify the list of claims displayed on the Medical case pPopup', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able Click on the medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });
    await test.step("Verify the user is able to navigate to the list of medical case", async () => {
        await symptompage.naviateToListofMedicalCases();
    });
});

test('ICM-TC-1242:TC_008_Verify the user is able to select the claims from the claim List', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to click On the  medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });
    await test.step("Verify the user is able to Navigate to list of Medical Cases", async () => {
        await symptompage.naviateToListofMedicalCases();

    });
    await test.step("Verify the user is able select the claims from the list", async () => {
        await symptompage.verifyUserCanSelectClaimFromList();

    });

});

test('ICM-TC-1243:TC_009_Verify the medical case conatins Add symbol to add the claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able see the add Iaon on the cliam with Medical Case", async () => {
        await symptompage.verifyTheAddCaseSymbol();
    });
});

test('ICM-TC-1244:TC_010_Verify User can change the Medical case details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Navigate to the application", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Login To the appication using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Navigate to the Open Batch-Batchin - Open Batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Open the existing claim from the given Batch", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user can change the FOC from the given Dropdown", async () => {
        await symptompage.verifyUserCanChangeTheFOC(symptomData['TC-sysmptom-11'].FOC);
    });
});

test('ICM-TC-1245:TC_011_Verify the user can change the FOC from Medical case Details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Navigate to the application", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Login To the application using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Navigate to the Open Batch-Batchin - Open Batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Open the existing claim from the given Batch", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user can change the Cause from the given Dropdown", async () => {
        await symptompage.verifyUserCanChangeTheCause(symptomData['TC-sysmptom-12'].Cause);
    });
});



test('ICM-TC-1246:TC_012_Verify the user can change the Cause  from Medical case Details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able change the case- Reset button functionality verified", async () => {
        await symptompage.verifyUserCanChangeMedicalCaseUsingReset();
    });

});

test('ICM-TC-1247:TC_013_Verify the user can change the specific', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    const accidentalPage: accidentalInfoPage = new accidentalInfoPage(page, context);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able change the specific assessment", async () => {
        await symptompage.verifyUserCanChangeSpecificAssessment2();  

    });
});

test('ICM-TC-1248:TC_014_Verify the user can change the treatment Type from the medical case details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });


    await test.step("Verify the user is able to change the treatment type", async () => {
        await symptompage.verifyUserCanchangeTreatmentType2();

    });
});

test('ICM-TC-1249:TC_015_Verify Export to Excel btn is displayed on the medical case', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to open  click on the medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });
    await test.step("Verify the user is able to see the Export to xls option", async () => {
        await symptompage.verifyExportToXlsBtn(symptomData['TC-sysmptom-15'].ExportToXls);
    });
});

test('ICM-TC-1250:TC_016_Verify the functionality of the Export to Excel btn', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the claim", async () => {
        await symptompage.openClaim();
    });
    await symptompage.clickOnMedicalCase();
    await test.step("Verify the user is able to export the xls", async () => {
        await symptompage.verifyExportToXlsFunctionality();
    });
});

test('ICM-TC-1251:TC_017_Verify the EOC is displayed on the list of claims', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to click on the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });
    await test.step("Verify the user is able check the EOC on medical case", async () => {
        await symptompage.verifyEOConMedicalCase();
    });

});

test('ICM-TC-1252:TC_018_Verify the claim status is displayed in the list of claims', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the claim", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able to open the CLaim status on the medical case", async () => {
        await symptompage.verifyclaimStatusonMedicalCase();
    });
});

test('ICM-TC-1253:TC_019_Verify the Claim External reference  is displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);
    await test.step("Verify user is able to naviagte to the Valid URL", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Verify the user is able to login using valid credentials", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Verify the user is able to navigate to open batch", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("Verify the user is able to open the Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("Verify the user is able to open the claim", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verify the user is able check the claim reference", async () => {
        await symptompage.verifyclaimReferenceonMedicalCase();
    });
});

test('ICM-TC-1254:TC_020_Verify the Admission Date  is displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verifying- Admission date is displayed on the Medical case", async () => {
        await symptompage.verifyAdmissionDateonMedicalCase();
    });

});

test('ICM-TC-1255:TC_021_Verify the Diagnosis is displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verifying- Dianosis is displayed on the Medical case", async () => {
        await symptompage.verifyDiagnosisOnClaim();
    });
});
test('ICM-TC-1256:TC_022_Verify the Currency  is displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verifying- Currency date is displayed on the Medical case", async () => {
        await symptompage.verifyCurrencyOnClaim();
    });

});

test('ICM-TC-1257:TC_023_Verify the Provider   is displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verifying- Provider is displayed on the Medical case", async () => {
        await symptompage.verifyProviderOnClaim();
    });

});

test('ICM-TC-1258:TC_024_Verify the FOB  is displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verifying- FOB is displayed on the Medical case", async () => {
        await symptompage.verifyFOBOnClaim();
    });

});

test('ICM-TC-1259:TC_025_Verify the   Reserves Logs are displayed on the list of claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });
    await test.step("Verifying- Reserves Logs is displayed on the Medical case", async () => {
        await symptompage.verifyReservesLogsOnClaim();
    });

});
test('ICM-TC-1260:TC_026_Verify the Reverse logs functinality', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("Verifying- the functionality of the Reserves Logs of claim", async () => {

        await symptompage.verifyFunctionalityofReservesLogs();
    });

});
test('ICM-TC-1261: TC_027_Verify the fields on the reserves logs', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("Verifying- the functionality of the Reserves Logs of claim", async () => {

        await symptompage.verifyTheFieldsOnReservesLogs();
    });
    page.close();

});
test('ICM-TC-1262: TC_028_Verify the close btn is displayed on the Reserves page', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("Verifying- the close btn displayed on  claim", async () => {

        await symptompage.verifyCloseBtnonReservesLogs();
    });
    page.close();

});

test('ICM-TC-1263:TC_029_Verify the functinality of the close btn on the Reserves Logs page', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("Verifying- the CLose btn on claim", async () => {



        await symptompage.verifyCloseBtnonReservesLogs();
    });

    await test.step("Verifying- the functionality of the Close btn of claim", async () => {

        await symptompage.verifyFunctionalityOfCloseBtn();
    });
    page.close();

});

test('ICM-TC-1264:TC_030_Verify the Items per page displayed on the reserves logs', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("User is able to open the Reserves Logs", async () => {
        await symptompage.clickOnReserveLogs();
    });

    await test.step("Verifying- the Items per page on claim", async () => {

        await symptompage.verifyItemsPerPageOnReservesLogs();
    });
    page.close();

});
test('ICM-TC-1265:TC_031_Verify the serch textbox is displayed on the  Medical case pPopup', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("User is able to open the Reserves Logs", async () => {
        await symptompage.clickOnReserveLogs();
    });

    await test.step("Verifying- the Items per page on claim", async () => {

        await symptompage.verifyItemsPerPageOnReservesLogs();
    });
    page.close();

});

test('ICM-TC-1266: TC_032_Verify the search text box accepts the input', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("Verifying- Searchh Box is displayed on list of medical cases", async () => {

        await symptompage.verifySearchBoxOnListOfMedicalCases();
    });

});
test('ICM-TC-1267:TC_033_Verify the Magnifier displayed with the search text box', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const symptompage: linkMedicalCasePage = new linkMedicalCasePage(page, context);

    await test.step("Load the URL in Browser", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
    });
    await test.step("Enter the valid User ID and Password", async () => {
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("Enter the required batch number to search", async () => {
        await symptompage.naviagteToOpenBatch(symptomData['TC-sysmptom-1'].OpenBatchTitle);
    });
    await test.step("User is able to Open the required batch Batch", async () => {
        await symptompage.openBatch(symptomData['TC-sysmptom-1'].BatchID);
    });
    await test.step("User is able to open the cliam", async () => {
        await symptompage.openClaim();
    });

    await test.step("User is able to Open the Medical case", async () => {
        await symptompage.clickOnMedicalCase();
    });

    await test.step("User is able to open the Reserves Logs", async () => {
        await symptompage.clickOnReserveLogs();
    });

    await test.step("Verifying- Searchh Box is displayed on list of medical cases", async () => {

        await symptompage.verifySearchBoxOnListOfMedicalCases();
    });
    await test.step("Verifying- User can search the claim using search box", async () => {

        await symptompage.verifyMagnifierOnMedicalCase();
    });

});

