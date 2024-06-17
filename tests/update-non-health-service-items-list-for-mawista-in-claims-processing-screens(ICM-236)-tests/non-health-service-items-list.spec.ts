import { expect, test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-pages/login.ts';
import { viewSelectLiabilityPage } from '../../page-objects/view-select-viability(ICM-173)-pages/view-velect-liability.ts'

import '../../page-objects/utilities-pages/global-setup.ts';

const liabiltyData = require(`../../testdata/${process.env.ENV || 'uat'}/view-select-liability.json`) as Record<string, any>;
const data = require(`../../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

test('ICM-TC-1584: Verify user is able to create the claim for PL1, PL2,PL3,PL4 and PL5', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    //User will navigate to the Pre approval

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });


    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();
    });
});


test('ICM-TC-1577: Verify user is able to see "Liability" as FOB to create non health claim', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });


    await test.step("Verify the user is able to select the valid Declaration Date", async () => {

        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();
    });


});

test('ICM-TC-1579: Verify user is able to see "Other" value in FOC if FOB=Liability', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });
    //User will navigate to the Pre approval
    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });
    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });
    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });


    await test.step("Verify the user is able to select the valid Declaration Date", async () => {

        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();
    });

    await test.step("Verify user is able to see Other value in FOC if FOB=Liability", async () => {
        await SelectLiabilityPage.verifyOtherValueinFOC();
    });

});
test('ICM-TC-1582:Verify user is able to set below service description: "Handle personal injury or Attend to personal injury matters ( Schutz vor Personenschaden)" and "Cover cost or Repair rented accommodation (Schutz vor Schäden an Mietwohnungen)"', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });    //User will navigate to the Pre approval

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });
    await test.step("Verify the user is able to select the valid Declaration Date", async () => {

        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();

    });
    await test.step("Verify the user can select the required provider value", async () => {
        await SelectLiabilityPage.enterProviderValue();

    });
    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await SelectLiabilityPage.claimAsReimbursement();
    });

    await test.step("Verify user is able to see Other value in FOC if FOB=Liability", async () => {
        await SelectLiabilityPage.verifyOtherValueinFOC();
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await SelectLiabilityPage.selectTreatmentType();
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await SelectLiabilityPage.selectSpecificAssessment();
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await SelectLiabilityPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can add the service items as per the requirement- Handle personal Injury", async () => {
        await SelectLiabilityPage.verifyUserCanaAddHandlePersonalInjury();
    });

    await test.step("Verify the user can add Multiple the service items as per the requirement- Cover cost Repair Rental Accomodations ", async () => {
        await SelectLiabilityPage.verifyUserCanaCoverCostRepairRentedAccommodation();
    });
});
test('ICM-TC-1583:Verify user is able to set service description for PL3, PL4 and PL5', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });


    await test.step("Verify the user is able to select the valid Declaration Date", async () => {

        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });
    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();

    });
    await test.step("Verify the user can select the required provider value", async () => {
        await SelectLiabilityPage.enterProviderValue();
    });
    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await SelectLiabilityPage.claimAsReimbursement();
    });
    await test.step("Verify user is able to see Other value in FOC if FOB=Liability", async () => {
        await SelectLiabilityPage.verifyOtherValueinFOC();
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await SelectLiabilityPage.selectTreatmentType();
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await SelectLiabilityPage.selectSpecificAssessment();
    });
    await test.step("Verify the Add service Items functionality", async () => {
        await SelectLiabilityPage.verifyAddServiceItemFunctionality();
    });
    await test.step(":Verify user is able to set service description for PL3, PL4 and PL5 Respectively as-Replacement for lost keys (Schutz vor verlorenen Schlusseln),Protection against  Accidental Damage (High value e.g. repair cost of cars)) (Schutz vor Unfallschaden (hoher Wert,z.B. Reparaturkosten von Autos),Protection against Accidental Damage (Low value e.g. Mobile Devices)) (Schutz vor  versehentlicher Beschadigung (geringer Wert, z.B. mobile Gerate)", async () => {
        await SelectLiabilityPage.verifyUserCanSetServiceDescriptionForPL3PL4PL5();
    });
});
test('ICM-TC-1578:Verify while creating the claim when the FOB = Liability then liability values are available in the list of values for Service Items', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    //User will navigate to the Pre approval

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });


    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();
    });
});


test('ICM-TC-1581: Verify user is able to see 780.9 “Other General Symptoms" value in Specific Assessment if FOB=Liability', async ({ browser }) => {//up

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage: LoginPage = new LoginPage(page);
    const SelectLiabilityPage: viewSelectLiabilityPage = new viewSelectLiabilityPage(page, context);
    await test.step("User is able to login application susscssfully", async () => {
        await loginPage.gotoLoginPage(data['TC-Login-2'].url);
        await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].passwordInput);
    });

    //User will navigate to the Pre approval

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await SelectLiabilityPage.navigateToNewPreapproval();
    });
    await test.step("Verify the New Pre approval page and Contents ", async () => {
        await SelectLiabilityPage.verifyUserisOnNewPreapprovalPage()
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claimusing the card number ", async () => {
        await SelectLiabilityPage.SearchBeneficiaryToCreateClaim(liabiltyData['TC-claimCreation-1'].cardNo);
    });

    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await SelectLiabilityPage.verifyReqFieldsVisible();
    });

    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await SelectLiabilityPage.enterRequestedSource();

    });

    await test.step("Verify the user is able to select the valid Admission Date", async () => {

        await SelectLiabilityPage.enterAdmissionDate();
    });


    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await SelectLiabilityPage.eneterDeclarationDate();
    });

    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await SelectLiabilityPage.enterConsultationDate(liabiltyData['TC-claimCreation-1'].consulatationDate);
    });

    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await SelectLiabilityPage.enterFOB();
    });
    await test.step("Verify the user can select the required provider value", async () => {
        await SelectLiabilityPage.enterProviderValue();
    });
    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await SelectLiabilityPage.claimAsReimbursement();
    });
    await test.step("Verify user is able to see Other value in FOC if FOB=Liability", async () => {
        await SelectLiabilityPage.verifyOtherValueinFOC();
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await SelectLiabilityPage.selectTreatmentType();
    });
    await test.step("Verify the user can select the required Specific assessment", async () => {
        await SelectLiabilityPage.selectSpecificAssessment_generalSymptoms();
    });
});



