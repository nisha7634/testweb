import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { newPreapprovalPage } from '../../page-objects/claim-pages/claims-newpreapproval.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const claimData = require(`../../testdata/${process.env.ENV || 'uat'}/claim-creation-processing.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;


test('ICM-TC-1286:Verify user is able to create a claim using new Pre approval', async ({ browser }) => {
    console.log("Execution Starts for claims new Pre approval");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });

});

test('ICM-TC-1287:Verify the user can open the Beneficiary & Coverage Details using the valid card number', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });


});
test('ICM-TC-1288:Verify the user is able to enter Service Details successfully', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });


    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });

    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });
});

test('ICM-TC-1289:Verify the user is able to enter Medical Case Details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user is able to cselect the appropriate FOC from the medical case details ", async () => {
        await claimPage.selectMedicalFOC(claimData['TC-1'].fOC);
    });
    await test.step("Verify the user is select the Medical case Causes  ", async () => {
        await claimPage.selectMedicalCaseCauses(claimData['TC-1'].causes);
    });
    await test.step("Verify the user is able to select the Specific Causes ", async () => {
        await claimPage.selectSpecificCauses(claimData['TC-1'].specificCauses);
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await claimPage.selectTreatmentType(claimData['TC-1'].dischargeDate);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await claimPage.selectSpecificAssessment(claimData['TC-1'].specificAssessment);
    });//Update
});

test('ICM-TC-1290:verify the functionality of the Reimbursement button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });


    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });


});
test('ICM-TC-1291:Verify the user is able to enter Service Item Details successfully', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });


    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user is able to cselect the appropriate FOC from the medical case details ", async () => {
        await claimPage.selectMedicalFOC(claimData['TC-1'].foc);
    });
    await test.step("Verify the user is select the Medical case Causes  ", async () => {
        await claimPage.selectMedicalCaseCauses(claimData['TC-1'].causes);
    });
    await test.step("Verify the user is able to select the Specific Causes ", async () => {
        await claimPage.selectSpecificCauses(claimData['TC-1'].specificCauses);
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await claimPage.selectSpecificAssessment(claimData['TC-1'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can add the service items as per the requirement", async () => {
        await claimPage.verifyUserCanaAddServiceItems();
    });
});

test('ICM-TC-1292:Verify user can adjudicate the claim once fullfill all the valid requirement', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });


    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });

    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user is able to cselect the appropriate FOC from the medical case details ", async () => {
        await claimPage.selectMedicalFOC(claimData['TC-1'].foc);
    });
    await test.step("Verify the user is select the Medical case Causes  ", async () => {
        await claimPage.selectMedicalCaseCauses(claimData['TC-1'].causes);
    });
    await test.step("Verify the user is able to select the Specific Causes ", async () => {
        await claimPage.selectSpecificCauses(claimData['TC-1'].specificCauses);
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });;
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await claimPage.selectSpecificAssessment(claimData['TC-1'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can add the service items as per the requirement", async () => {
        await claimPage.verifyUserCanaAddServiceItems();
    });

    await test.step("Verify the user can add the unit price claimed", async () => {
        await claimPage.addUnitPriceClaimed();
    });
    await test.step("Verify the Unit Price claimed and the Total claimed amount values", async () => {
        await claimPage.verifyUnitPriceClaimed_TotalCLiamedAmountValues();
    });
    await test.step("Verify the Unit price and the Gross approved amounts", async () => {
        await claimPage.Verify_unitPrice_GrossApprovedvalues();
    });
    await test.step("Verify user is able to select the Reductible resons from Service Items", async () => {
        //await claimPage.verifyUserCanselectDeductibleReasons();
    });
    await test.step("Verify user can see the required columns on teh table as- ItemCode,Item Description,service Description,package Unit,Price per Item Coverage,Quantity Claimed,unit Price Claimed,service Description,unit Price Claimed", async () => {
        await claimPage.verifyRequiredColumnsDisplayed();
    });

    await test.step("Verify user is able to adjudicate the CLaim once fullfill all the requirements ", async () => {
        await claimPage.verifyUserCanAdjudicateClaim();
    });

});

test('ICM-TC-1293:Verify the save -Claim functionality after adjudicate the claim', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {

        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });


    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {

        await claimPage.enterFOB(claimData['TC-1'].fob);
    });

    await test.step("Verify the user can select the required provider value", async () => {
        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });

    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user is able to cselect the appropriate FOC from the medical case details ", async () => {
        await claimPage.selectMedicalFOC(claimData['TC-1'].foc);
    });
    await test.step("Verify the user is select the Medical case Causes  ", async () => {
        await claimPage.selectMedicalCaseCauses(claimData['TC-1'].causes);
    });
    await test.step("Verify the user is able to select the Specific Causes ", async () => {
        await claimPage.selectSpecificCauses(claimData['TC-1'].specificCauses);
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await claimPage.selectSpecificAssessment(claimData['TC-1'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can add the service items as per the requirement", async () => {
        await claimPage.verifyUserCanaAddServiceItems();
    });

    await test.step("Verify the user can add the unit price claimed", async () => {
        await claimPage.addUnitPriceClaimed();
    });
    await test.step("Verify the Unit Price claimed and the Total claimed amount values", async () => {
        await claimPage.verifyUnitPriceClaimed_TotalCLiamedAmountValues();
    });
    await test.step("Verify the Unit price and the Gross approved amounts", async () => {
        await claimPage.Verify_unitPrice_GrossApprovedvalues();
    });
    await test.step("Verify user is able to select the Reductible resons from Service Items", async () => {
        //await claimPage.verifyUserCanselectDeductibleReasons();
    });
    await test.step("Verify user can see the required columns on teh table as- ItemCode,Item Description,service Description,package Unit,Price per Item Coverage,Quantity Claimed,unit Price Claimed,service Description,unit Price Claimed", async () => {
        await claimPage.verifyRequiredColumnsDisplayed();
    });

    await test.step("Verify user is able to adjudicate the CLaim once fullfill all the requirements ", async () => {
        await claimPage.verifyUserCanAdjudicateClaim();
    });
    await test.step("Verify user is able to Save the Claim once successfully Adjudicate the ", async () => {
        await claimPage.saveClam();

    });


});

test('ICM-TC-1294:Verify User is able t Navigate to the batch', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify theUser is able to navigate to the Batching functionality ", async () => {
        // await claimPage.verifyUserCanNavigateBatch()
    });


});

test('ICM-TC-1295:"Verify the functionality of the Create Batch Reimbursement"', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify theUser is able to navigate to the Batching functionality ", async () => {
        // await claimPage.verifyBatchingFunctionality_RequiredUIValidations()
    });

});

test('ICM-TC-1296:"Verify the user can create the REIMBURSEMENT BATCH"', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify theUser is able to navigate to the Batching functionality ", async () => {
        //  await claimPage.verifyBatchingFunctionality_RequiredUIValidations()
    });

});

/*
test('ICM-TC-1297,ICM-TC-1298,ICM-TC-1299,ICM-TC-1390,ICM-TC-1391,ICM-TC-1392,ICM-TC-1393,ICM-TC-1394,ICM-TC-1395,ICM-TC-1396,ICM-TC-1397,ICM-TC-1398,ICM-TC-1399,ICM-TC-1400:"Verify user can add the created cliam into the batch"', async ({ browser }) => {
  //These test cases are depend on the REFID's and uniques locators as in https://nextcarehealth.atlassian.net/browse/TMP-7714  once will get by Dev tesm will continue 
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource();
    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(claimData['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(claimData['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(claimData['TC-1'].declarationDate);
    });


    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fob);
    });

    await test.step("Verify the user can select the required provider value", async () => {
        await claimPage.enterProviderValue(claimData['TC-1'].provider);
    });

    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user is able to cselect the appropriate FOC from the medical case details ", async () => {
        await claimPage.selectMedicalFOC(claimData['TC-1'].foc);
    });
    await test.step("Verify the user is select the Medical case Causes  ", async () => {
        await claimPage.selectMedicalCaseCauses(claimData['TC-1'].causes);
    });
    await test.step("Verify the user is able to select the Specific Causes ", async () => {
        await claimPage.selectSpecificCauses(claimData['TC-1'].specificCauses);
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await claimPage.selectSpecificAssessment(claimData['TC-1'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can add the service items as per the requirement", async () => {
        await claimPage.verifyUserCanaAddServiceItems();
    });

    await test.step("Verify the user can add the unit price claimed", async () => {
        await claimPage.addUnitPriceClaimed();
    });
    await test.step("Verify the Unit Price claimed and the Total claimed amount values", async () => {
        await claimPage.verifyUnitPriceClaimed_TotalCLiamedAmountValues();
    });
    await test.step("Verify the Unit price and the Gross approved amounts", async () => {
        await claimPage.Verify_unitPrice_GrossApprovedvalues();
    });
    await test.step("Verify user is able to select the Reductible resons from Service Items", async () => {
        //await claimPage.verifyUserCanselectDeductibleReasons();
    });
    await test.step("Verify user can see the required columns on teh table as- ItemCode,Item Description,service Description,package Unit,Price per Item Coverage,Quantity Claimed,unit Price Claimed,service Description,unit Price Claimed", async () => {
        // await claimPage.verifyRequiredColumnsDisplayed();
    });

    await test.step("Verify user is able to adjudicate the CLaim once fullfill all the requirements ", async () => {
        //await claimPage.verifyUserCanAdjudicateClaim();
    });

    await test.step("Verify user is able to Save the Claim once successfully Adjudicate the ", async () => {
        //await claimPage.saveClam();

    });
    await test.step("Verify the claim is created successfully and User can add it into the Batch Successfully 1: Batching Functionality 2:Verify Payment Menthods 3. Add payment Orders 4. Adjudicate the Claim 5 Save claim 6. Finish The claim and Validate the Record 7 Processed claim ", async () => {
        // await claimPage.Batching_PaymentCreation_Vailadte_finishClaim();

    });
});
*/




test('ICM-TC-2138: Verify Additional Info and Edit icon beside Service Details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Add Button beside Select Beneficiary  ", async () => {
        await claimPage.verifyAddBtn();
    });

});

test('ICM-TC-2137: Verify Additional Info icon at Service Details', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Add Button beside Select Beneficiary  ", async () => {
        await claimPage.verifyAddBtn();
    });

});

test('ICM-TC-2278:Verify New Pre-Approval module', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify New Pre Approval Module", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });

});

test('ICM-TC-2279:Verify Claim Reference filed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Claim Reference Field", async () => {
        await claimPage.VerifyclaimRef();
    });

});

test('ICM-TC-2280:Verify Claim Reference filed functionality', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Claim Reference Field", async () => {
        await claimPage.VerifyclaimRef();
    });

    await test.step("Verify Claim Reference Field", async () => {
        await claimPage.VerifyclaimRefFunctionality(claimData['TestData'].claimRef);
    });

});

test('ICM-TC-2281:Verify Claim Status dropdown filed', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Claim Reference Field", async () => {
        await claimPage.VerifyclaimRef();
    });

    await test.step("Verify Claim Status dropdown filed", async () => {
        await claimPage.verifyClaimStatusField(claimData['TestData'].ClaimStatus);

    });
    await claimPage.verifyStatusDropdownValues();
});

test('ICM-TC-2282:Verify Claim Status dropdown values', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Claim Reference Field", async () => {
        await claimPage.VerifyclaimRef();
    });

    await test.step("Verify Claim Status dropdown filed ", async () => {
        await claimPage.verifyClaimStatusField(claimData['TestData'].ClaimStatus);

    });

    await test.step("Verify Claim Status dropdown values", async () => {
        await claimPage.verifyStatusDropdownValues();
    });
});


test('ICM-TC-2283:Verify Select Beneficiary Search bar', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Claim Reference Field", async () => {
        await claimPage.VerifyclaimRef();
    });

    await test.step("Verify Select Beneficiary Search bar", async () => {
        await claimPage.verifySelectBeneficiarySearchBar();

    });
});

test('ICM-TC-2284:Verify Add button beside Select Beneficiary', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Add Button beside Select Beneficiary  ", async () => {
        await claimPage.verifyAddBtn();
    });

});


test('ICM-TC-2285:Verify Click on Add button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Add Button beside Select Beneficiary  ", async () => {
        await claimPage.verifyAddBtn();
    });

    await test.step("Verify Click on Add button", async () => {
        await claimPage.verifyAddBtnFunctionality();
    });

});


test('ICM-TC-2286:Verify Clicking on Add button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Add Button beside Select Beneficiary  ", async () => {
        await claimPage.verifyAddBtn();
    });

    await test.step("Verify Clicking on Add button    ", async () => {
        await claimPage.verifyAddBtnFunctionality();
    });

});



test('ICM-TC-2287:Verify Popup', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Add Button beside Select Beneficiary  ", async () => {
        await claimPage.verifyAddBtn();
    });

    await test.step("Verify Popup ", async () => {
        await claimPage.verifyAddBtnFunctionality();
    });

});



test('ICM-TC-2288:Verify 5 buttons', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the  Buttons 1 Adjudicate. 2. Save 3. Send 4. View 5 Send on the  New Pre approval page  ", async () => {
        await claimPage.verifyRequiredBtns();
    });

});


test('ICM-TC-2289:Verify Clicking on Select Beneficiary Search', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });

});



test('ICM-TC-2290: Verify Beneficiary Search for valid card number', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
        await claimPage.verifyReqFieldsVisible();
    });

});


test('ICM-TC-2291: Verify Beneficiary Search for invalid card number', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TestData'].invalidCardNumber);
        await claimPage.errorPopUpWithInvalidCardNo(claimData['TestData'].invalidCardNumberMsg);
    });
});


test('ICM-TC-2292:Verify Beneficiary & Coverage Details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step(" Verify Beneficiary & Coverage Details Card", async () => {
        await claimPage.BeneficiaryCoverageDetails();
    });


});


test('ICM-TC-2293:Verify Coverage button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step(" Verify Beneficiary & Coverage Details Card", async () => {
        await claimPage.VerifyCoveragebuttonfunctionality();
    });


});


test('ICM-TC-2294:Verify Clicking on Coverage button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step(" Verify Clicking on Coverage button ", async () => {
        await claimPage.VerifyCoveragebuttonfunctionality();
    });


});


test('ICM-TC-2295:Verify Unpaid Premium', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step(" Click on Coverage Btn ", async () => {
        await claimPage.VerifyCoveragebuttonfunctionality();
    });

    await test.step(" Verify Unpaid Premium ", async () => {
        await claimPage.verifyUnpaidPremium(claimData['TestData'].unpaidPremium);
    });
});

test('ICM-TC-2296:Verify View Card button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify View Card button ", async () => {
        await claimPage.Verifyviewbutton();
    });
});

test('ICM-TC-2297:Verify View Card button clickable', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify View Card button ", async () => {
        await claimPage.Verifyviewbutton();
    });
    await test.step("Verify View Card button clickable ", async () => {
        await claimPage.VerifyviewbuttonFunctionality();
    });
});


test('ICM-TC-2298:Verify Clicking on View Card button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await page.goto(data['TC-Login-2'].url); // Navigate to the login page
    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage();
    });
    await test.step("Verify Clicking on Select Beneficiary Search ", async () => {
        await claimPage.verifyBenSearchClickiingFunctionality();
    });
    await test.step(" Verify Beneficiary Search for valid card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify View Card button ", async () => {
        await claimPage.Verifyviewbutton();
    });
    await test.step("Verify Clicking on View Card button", async () => {
        await claimPage.VerifyviewbuttonFunctionality();
    });
});



test('ICM-TC-2299:Verify Adjudication Result button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Adjudication Result button ", async () => {
        await claimPage.verifyAdjBtn();
    });

});

test('ICM-TC-2300:Verify Adjudication Result button clickable', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Adjudication Result button clickable", async () => {
        await claimPage.verifyAdjBtnFunctionality();
    });

});

test('ICM-TC-2301:Verify Clicking on Adjudication Result button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Clicking on Adjudication Result button    ", async () => {
        await claimPage.verifyAdjBtnFunctionality();
    });
});

test('ICM-TC-2302:Verify Service Details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Service Details Card", async () => {
        await claimPage.verifyServiceDetailsCard();
    });
});


test('ICM-TC-2303:Verify Requested Dropdown values in Service details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify Requested Dropdown values in Service details Card ", async () => {
        await claimPage.verifyRequestedSourceDropdownValues();
    });

});

test('ICM-TC-2304:Verify FOB Dropdown values in Service details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });

    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });

    await test.step("Verify FOB Dropdown values in Service details Card    ", async () => {
        await claimPage.verifyFOBDropdownValues();
    });

});

test('ICM-TC-2305:Verify Service Class Dropdown values in Service details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Service Class Dropdown values in Service details Card ", async () => {
        await claimPage.verifyServiceProviderDropdownValues();
    });

});

test('ICM-TC-2306:Verify Medical File button in Medical Case Details Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Medical File button in Medical Case Details Card", async () => {
        await claimPage.verifyMedicalFile(claimData['TestData'].medicalFileTitleTxt);
    });

});

test('ICM-TC-2307:Verify Medical File button clickable', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Medical File button clickable    ", async () => {
        await claimPage.verifyMedicalFile(claimData['TestData'].medicalFileTitleTxt);
    });

});

test('ICM-TC-2308:Verify Clicking on Medical File button', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Clicking on Medical File button    ", async () => {
        await claimPage.verifyMedicalFile(claimData['TestData'].medicalFileTitleTxt);
    });

});

test('ICM-TC-2309:Verify Fields in Medical Case Details Card', async ({ browser }) => {
    //Update
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Fields in Medical Case Details Card", async () => {
        await claimPage.verifyMedicalFile(claimData['TestData'].medicalFileTitleTxt);
    });

});


test('ICM-TC-2310:Verify Documents button in Medical Case Details Card', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Documents button in Medical Case Details Card    ", async () => {
        await claimPage.verifyDocumentFile(claimData['TestData'].documentTitleTxt);
    });

});

test('ICM-TC-2311:Verify Documents button in Medical Case Details Card', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Documents button in Medical Case Details Card    ", async () => {
        await claimPage.verifyDocumentFile(claimData['TestData'].documentTitleTxt);
    });

});

test('ICM-TC-2312:Verify Clicking on Documents button', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Documents button in Medical Case Details Card    ", async () => {
        await claimPage.verifyDocumentFile(claimData['TestData'].documentTitleTxt);
    });

});

test('ICM-TC-2313:Verify fields in Cost & Charges Card', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Documents button in Medical Case Details Card    ", async () => {
        await claimPage.verifyFieldsonCost_Charges();
    });

});

test('ICM-TC-2314:Verify Service Item Details filed', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Service Item Details filed    ", async () => {
        await claimPage.verifyFieldsonCost_Charges();
    });

});

test('ICM-TC-2315:Verify buttons in Service Item Details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify buttons in Service Item Details", async () => {
        await claimPage.verifyFieldsonAddServiceItems();
    });

});

test('ICM-TC-2316:Verify Export to Excel', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Export to Excel", async () => {
        await claimPage.verifyExportToxlsBtn();
    });

});

test('ICM-TC-2317:Verify clicking on Export to Excel', async ({ browser }) => {
    console.log("Execution Ends for claims new Pre approval");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify clicking on Export to Excel    ", async () => {
        await claimPage.verofyExportToXlsFUnctionality();
    });

});

test('ICM-TC-2318:Verify Clicking on Save button', async ({ browser }) => {
    console.log("Execution End for Eob for Claims Pre approval Tests");
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await claimPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Enter the required card number", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(claimData['TC-1'].cardNo);
    });
    await test.step("Verify Clicking on Save button", async () => {
        await claimPage.saveBtnOnNewPreApproval();;
    });

});
//Total Test Cases 68