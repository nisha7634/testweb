import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { newPreapprovalPage } from '../../page-objects/claim-pages/claims-newpreapproval.ts';
import { HealthServiceDetails } from '../../page-objects/update-health-servie(ICM-242)-pages/update-health-service.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

const claimData = require(`../../testdata/${process.env.ENV || 'uat'}/claim-creation-processing.json`) as Record<string, any>;
const updatehealthData = require(`../../testdata/${process.env.ENV || 'uat'}/update-health-service.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1585:Verify user is able to create health claim', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);

    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });

    await test.step("Verify the user can add the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1585'].serviceItemCode);
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
    await test.step("Verify user is able to adjudicate the CLaim once fullfill all the requirements ", async () => {
        await claimPage.verifyUserCanAdjudicateClaim();
    });
    await test.step("Verify user is able to Save the Claim once successfully Adjudicate the ", async () => {
        // await claimPage.saveClam();
    });

    await context.close();
    await browser.close();

});

test('ICM-TC-1586:Verify user is able to set health service items while creating health claims', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);

    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1585'].serviceItemCode);
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1585'].seviceDescription);
    });
});


test('ICM-TC-1587:Verify user is able to see service item description in "English(German)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {

        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);

    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1585'].serviceItemCode);
    });
    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1585'].seviceDescription);
    });
});

test('ICM-TC-1588:"Verify user is able to enter below health service item:Dental treatment(Zahnbehandlung)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });
    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);

    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1588'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Dental treatment(Zahnbehandlung) DT1", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1588'].seviceDescription);
    });
});

test('ICM-TC-1589:"Verify user is able to enter below health service item:Laboratory bill(Laborrechnung )"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1589'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Laboratory bill(Laborrechnung ) Lab1", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1589'].seviceDescription);
    });
});

test('ICM-TC-1590:"Verify user is able to enter below health service item:Medication (Medikamente)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1589'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Medication (Medikamente) Med 1", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1590'].seviceDescription);
    });
});

test('ICM-TC-1591:"Verify user is able to enter below health service item: Radiology(Radiologie) "', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1591'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item: Radiology(Radiologie)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1591'].seviceDescription);
    });
});


test('ICM-TC-1592:"Verify user is able to enter below health service item: Aids (Hilfsmittel)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1592'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item: Aids (Hilfsmittel)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1592'].seviceDescription);
    });
});


test('ICM-TC-1593:"Verify user is able to enter below health service item:Inpatient treatment ( Stationäre Behandlung)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1593'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Inpatient treatment ( Stationäre Behandlung)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1593'].seviceDescription);
    });
});

test('ICM-TC-1594:"Verify user is able to enter below health service item:Travel expenses (Fahrtkosten)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1594'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Travel expenses (Fahrtkosten)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1594'].seviceDescription);
    });
});

test('ICM-TC-1595:"Verify user is able to enter below health service item:Transference costs / funeral costs ( Überführungskosten / Bestattungskosten)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1595'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Transference costs / funeral costs ( Überführungskosten / Bestattungskosten)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1595'].seviceDescription);
    });
});

test('ICM-TC-1596:"Verify user is able to enter below health service item:Psychotherapy (Psychotherapie)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1596'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:    Psychotherapy (Psychotherapie)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1596'].seviceDescription);
    });
});

test('ICM-TC-1597:"Verify user is able to enter below health service item:Pregnancy (Schwangerschaft)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1597'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item: Pregnancy (Schwangerschaft)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1597'].seviceDescription);
    });
});

test('ICM-TC-1598:"Verify user is able to enter below health service item:Premature birth (Frühgeburt)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1598'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:Premature birth (Frühgeburt) ", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1598'].seviceDescription);
    });
});

test('ICM-TC-1599:""Verify user is able to enter below health service item:Medical Bill (Arztrechnung)""', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1599'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:    Medical Bill (Arztrechnung)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1599'].seviceDescription);
    });
});

test('ICM-TC-1600:"Verify user is able to enter below health service item:Remedies (Heilmittel)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
    const claimPage: newPreapprovalPage = new newPreapprovalPage(page, context);

    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
        await page.evaluate(() => {
            // This script maximizes the browser window
            window.moveTo(0, 0);
            window.resizeTo(screen.width, screen.height);
        });
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        //await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1600'].serviceItemCode);
    });
    await test.step("Verify user is able to enter below health service item:    Remedies (Heilmittel) ", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1600'].seviceDescription);
    });
});

test('ICM-TC-1601:"Verify user is able to enter below health service item:Service Fees (Service Fee)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage()
    const loginPage: LoginPage = new LoginPage(page);

    const healthDetailspage: HealthServiceDetails = new HealthServiceDetails(page, context)
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
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(claimData['TC-1'].dischargeDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(claimData['TC-1'].fOB);
    });

    await test.step("Verify user is able to see service item description in English(German)", async () => {
        await healthDetailspage.enterProviderValue(updatehealthData['TC-1585'].HealthProvider);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
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
        await claimPage.selectTreatmentType(claimData['TC-1'].treatmentType);
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await healthDetailspage.selectSpecificAssessment(updatehealthData['TC-1585'].specificAssessment);
    });
    await test.step("Verify the Add service Items functionality", async () => {
        // await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can Set the service items as per the requirement", async () => {
        await healthDetailspage.verifyUserCanAddServiceItems(updatehealthData['TC-1601'].serviceItemCode);
        //await page.pause();
    });
    await test.step("Verify user is able to enter below health service item:Service Fees (Service Fee)", async () => {
        await healthDetailspage.VerifyUserCanSeeServiceItemDescriptionInEnglish_German(updatehealthData['TC-1601'].seviceDescription);
    });
});