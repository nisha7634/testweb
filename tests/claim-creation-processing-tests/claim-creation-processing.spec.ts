import { expect, test } from '@playwright/test';
import { Claimpage } from '../../page-objects/claim-pages/claim-creation-Processing.ts';
import '../../page-objects/utilities-pages/global-setup.ts';

/*test('TC-Claim Creation and procession', async ({ browser, request }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const claimPage: Claimpage = new Claimpage(page, context);
    // Access environment variable
    const bu = process.env.ENVIRONMENT;
    console.log(bu);

    // Choose data file based on BU(UAE,EU)
    let testDataFile;

    if (bu === 'EU') {
        testDataFile = require(`../../testdata/claimEU.json`) as Record<string, any>;
    }
    else if (bu === 'UAE') {
        testDataFile = require(`../../testdata/claimUAE.json`) as Record<string, any>;
    }
    else {
        console.log("Select the Required BU")
    }

    //const claimData = require(testDataFile) as Record<string, any>;
    //Login to the application
    await test.step("User is able to login application susscssfully", async () => {
        await claimPage.gotoLoginPage(testDataFile['TC-1'].url);
        await claimPage.loginToApplication(testDataFile['TC-1'].userName, testDataFile['TC-1'].password);
    });

    await test.step("User is able to Navigate to the New pre approval", async () => {
        await claimPage.navigateToNewPreapproval();
    });
    await test.step("Verify the user is able tosearch the Beneficiary to create a new claim using the card number ", async () => {
        await claimPage.SearchBeneficiaryToCreateClaim(testDataFile['TC-1'].cardNo);
    });
    await test.step("Verify all the required fields on the New pre approval page ", async () => {
        await claimPage.verifyReqFieldsVisible();
    });
    await test.step("Verify the user is able to select the Valid Requested Source", async () => {
        await claimPage.enterRequestedSource(testDataFile['TC-1'].requestSource);
    });
    await test.step("Verify the user is able to select the valid Admission Date", async () => {
        await claimPage.enterAdmissionDate(testDataFile['TC-1'].admissionDate);
    });
    await test.step("Verify the user is able to select the valid consultation Date", async () => {
        await claimPage.enterConsultationDate(testDataFile['TC-1'].consultationDate);
    });

    await test.step("Verify the user is able to select the valid Declaration Date", async () => {
        await claimPage.enterDeclarationDate(testDataFile['TC-1'].declarationDate);
    });
    await test.step("Verify the user can select the appropriate FOB to create a claim", async () => {
        await claimPage.enterFOB(testDataFile['TC-1'].fOB);
    });

    await test.step("Verify the user is able to create a claim as Reimbursement claim ", async () => {
        await claimPage.claimAsReimbursement();
    });

    await test.step("Verify the user can select the required provider value", async () => {

        await claimPage.enterProviderValue(testDataFile['TC-1'].provider);
    });
    await test.step("Verify the user is able to enter the Dischare Date", async () => {
        await claimPage.enterDischargeDate(testDataFile['TC-1'].dischargeDate);
    });

    await test.step("Verify the user is able to cselect the appropriate FOC from the medical case details ", async () => {
        await claimPage.selectMedicalFOC(testDataFile['TC-1'].fOC);
    });
    await test.step("Verify the user is select the Medical case Causes  ", async () => {
        await claimPage.selectMedicalCaseCauses(testDataFile['TC-1'].causes);
    });
    await test.step("Verify the user is able to select the Specific Causes ", async () => {
        await claimPage.selectSpecificCauses(testDataFile['TC-1'].specificCauses);
    });
    await test.step("Verify the user can select the Treatment type accordingly ", async () => {
        await claimPage.selectTreatmentType(testDataFile['TC-1'].treatmentType);
    });

    await test.step("Verify the user can select the required Specific assessment", async () => {
        await claimPage.selectSpecificAssessment(testDataFile['TC-1'].specificAssessment);
    });

    await test.step("Verify the Add service Items functionality", async () => {
        await claimPage.verifyAddServiceItemFunctionality();
    });
    await test.step("Verify the user can add the service items as per the requirement", async () => {
        await claimPage.verifyUserCanaAddServiceItems(testDataFile['TC-1'].serviceItemCode);
    });

    await test.step("Verify the user can add the QTY claimed", async () => {
        await claimPage.addQtyClaimed(testDataFile['TC-1'].UnitPriceClaimedUnitPriceClaimed);
    });

    await test.step("Verify the user can add the unit price claimed", async () => {
        await claimPage.addUnitPriceClaimed(testDataFile['TC-1'].UnitPriceClaimedUnitPriceClaimed);
    });
    await test.step("Verify the Unit Price claimed and the Total claimed amount values", async () => {
        await claimPage.verifyUnitPriceClaimed_TotalCLiamedAmountValues(testDataFile['TC-1'].UnitPriceClaimed);
    });

    await test.step("Verify the user can add the unit price Approved", async () => {
        await claimPage.addUnitPriceApproved(testDataFile['TC-1'].UnitPriceApproved);
    });
    await test.step("Verify the Unit price and the Gross approved amounts", async () => {
        await claimPage.Verify_unitPrice_GrossApprovedvalues(testDataFile['TC-1'].UnitPriceApproved);
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
    await test.step("Verify the user is able to Save the Claim once successfully Adjudicate the ", async () => {
        await claimPage.saveClaim();
        const response = await request.get("https://test-api-eu.tatsh.cloud/tatshboportal/common/api/serviceprovider/v1.0/serviceprovidersetting?terrId=19&sProviderId=4&columnName=ProvSocSecurandOtherInsValues", {
            headers: {
                'Accept': 'application/json, text/plain, ',
                'Accept-Language': 'en-US,en;q=0.9',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
                'Origin': 'https://test-tatshboportal-eu.tatsh.cloud',
                'Referer': 'https://test-tatshboportal-eu.tatsh.cloud/'
            }
        })

        console.log(response.json());
        await claimPage.checkAndHandleMedicalCasePopup();
    });


    await test.step("Verify the claim is created successfully and User can add it into the Batch Successfully 1: Batching Functionality 2:Verify Payment Menthods 3. Add payment Orders 4. Adjudicate the Claim 5 Save claim 6. Finish The claim and Validate the Record 7 Processed claim ", async () => {
        // await claimPage.Batching_PaymentCreation_Vailadte_finishClaim();

    });


    
});
*/