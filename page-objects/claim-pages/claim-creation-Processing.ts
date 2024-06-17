import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import test from "node:test";
const { chromium } = require('playwright');

export class Claimpage {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly userNameOrEmailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signinButton: Locator;
    readonly claimsPreApprovalLink: Locator;
    readonly claimsNewPraApprovalLink: Locator;
    readonly beneficiaryTxtield: Locator;
    readonly searchCardNumber: Locator;
    readonly neClaimLbl: Locator;
    readonly beneficiaryCoverageDetailsLbl: Locator;
    readonly requestedSource: Locator;
    readonly reqSourcFrontOfc: Locator;
    readonly admissinDateCalendar: Locator;
    readonly declarationDateCalendar: Locator;
    readonly consultationDateCalendar: Locator;
    readonly dischargeDateCalendar: Locator;
    readonly FOB: Locator;
    readonly provider: Locator;
    readonly dateControlArrow: Locator;
    readonly admissionYrValue: Locator;
    readonly reimToggle: Locator;
    readonly fOCArrow: Locator;
    readonly causesArrow: Locator;
    readonly specificCausesArrow: Locator;
    readonly specificAssessmentTxt: Locator;
    readonly addServiceItem: Locator;
    readonly itemCodeTxt: Locator;
    readonly payerLbl: Locator;
    readonly reqSource: Locator;
    readonly treatmentArrow: Locator;
    readonly qtyClaimed: Locator;
    readonly unitPriceClaimed: Locator;
    readonly qtyApproved: Locator;
    readonly unitPriceApproved: Locator;
    readonly totalClaimedAmtTxt: Locator;
    readonly adjustmentReasonTxt: Locator;
    readonly admissionDateTxt: Locator;
    readonly declarationDateTxt: Locator;
    readonly consultationDateTxt: Locator;
    readonly dischargeDateTxt: Locator;
    readonly selectProviderBtn: Locator;
    readonly specificAssessmentValue: Locator;
    readonly providerValue: Locator;
    readonly adjudicateBtn: Locator;
    readonly adjudicateConfirmPopup: Locator;
    readonly OkOnAdjudicate: Locator;
    readonly saveClaimBtn: Locator;
    readonly medicalCaseWarningPopup: Locator;
    readonly yesBtnOnMedicalCaseWarning: Locator;
    readonly doneBtnOnSave: Locator;
    readonly okBtnOnSave: Locator;
    readonly claimRefNumber: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.page = page;
        this.userNameOrEmailInputField = page.locator('#mat-input-0');
        this.passwordInputField = page.locator('#mat-input-1');
        this.signinButton = page.locator('button[type="submit"] span[class="mat-button-wrapper"]');
        this.claimsPreApprovalLink = page.locator('//img[@src="assets/iris/icons/navbar/claims-preapproval.svg"]');
        this.claimsNewPraApprovalLink = page.locator('//a[contains(.,"New Pre-approval")]');
        this.beneficiaryTxtield = page.locator('//input[@placeholder="Select Beneficiary"]')
        this.searchCardNumber = page.locator('(//div[@class="custom-option"])[1]');
        this.neClaimLbl = page.locator('//div[@class="heading ng-star-inserted"]');
        this.beneficiaryCoverageDetailsLbl = page.locator('(//div[@class="title-div"])[2]');
        this.payerLbl = page.locator('(//div[@class="benef-label"])[1]');
        this.reqSource = page.locator('//mat-select[@name="source"]');
        this.reqSourcFrontOfc = page.locator('(//span[@class="mat-option-text"])[3]');
        this.admissinDateCalendar = page.locator('(//mat-icon[contains(@class,"date-c mat-icon")])[1]');
        this.dateControlArrow = page.locator('span.owl-dt-control-button-arrow');
        this.admissionYrValue = page.locator('span.owl-dt-calendar-cell-content.owl-dt-calendar-cell-today');

        this.admissionDateTxt = page.locator('#mat-input-3');
        this.declarationDateTxt = page.locator('#mat-input-6');
        this.consultationDateTxt = page.locator('#mat-input-7');

        this.dischargeDateTxt = page.locator('input[name="dischargeDate"]');
        this.FOB = page.locator('mat-select[id="mat-select-1"] div[class="mat-select-arrow"]');
        this.provider = page.locator('input[name="provider"]');
        this.providerValue = page.locator('mat-option[id="mat-option-276"]');

        this.reimToggle = page.locator('(//div[@class="mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin"])[2]');
        this.fOCArrow = page.locator('mat-select#selectedFoc>div>div:nth-of-type(2)>div');
        this.causesArrow = page.locator('mat-select#selectedCause>div>div:nth-of-type(2)>div');
        this.specificCausesArrow = page.locator('mat-select#selectedSpecificCause>div>div:nth-of-type(2)>div')
        this.treatmentArrow = page.locator('mat-select[id="mat-select-4"] div[class="mat-select-arrow"]');
        this.specificAssessmentTxt = page.locator('#primaryAssessmentAC');
        this.specificAssessmentValue = page.locator('//td[contains(@class,"mat-cell cdk-column-specificAssessment")]')
        this.addServiceItem = page.locator('button.disable-div.ng-star-inserted');
        this.itemCodeTxt = page.locator('input#itemCode0');
        this.qtyClaimed = page.locator('#quantityClaimed0');
        this.unitPriceClaimed = page.locator('#unitPriceClaimed0');
        this.qtyApproved = page.locator('#spQuantityApproved0');
        this.unitPriceApproved = page.locator('#spUnitPriceApproved0');
        this.adjustmentReasonTxt = page.locator('td.mat-cell.cdk-column-adjustmentReasonDesc');
        this.selectProviderBtn = page.locator('button.select-button');
        this.adjudicateBtn = page.locator('.icon.icon-adj');
        this.adjudicateConfirmPopup = page.locator('(//confirm-popup[@class="ng-star-inserted"]//div)[3]');
        this.OkOnAdjudicate = page.locator('button.ok-button ');
        this.saveClaimBtn = page.locator('span.icon.icon-save');
        this.medicalCaseWarningPopup = page.locator('//div[text()="Warning"]');
        this.yesBtnOnMedicalCaseWarning = page.locator('button.active-button');
        this.doneBtnOnSave = page.locator('button.ok-button');
        this.okBtnOnSave = page.locator('button.ok-button');
        this.claimRefNumber = page.locator('input.mat-focus.mat-input-element');
    }
    async gotoLoginPage(url: string) {
        console.log("Verify the user is able to naviagte to the valid login URL");
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
    }
    async loginToApplication(userName: string, password: string) {
        console.log("Verify the Login Functionality of the user using Valid Credentials");
        await this.userNameOrEmailInputField.fill(userName);
        await this.passwordInputField.fill(password);
        await this.signinButton.click();
    }
    async navigateToNewPreapproval() {
        console.log("Verify user can Navigate to the New Pre-Approval Page");
        await this.claimsPreApprovalLink.click();
        await this.claimsNewPraApprovalLink.click();
    }
    async SearchBeneficiaryToCreateClaim(cardNo: string) {
        console.log("Verify the User can check Beneficiary details using Valid Card Number ");
        await this.beneficiaryTxtield.fill(cardNo);
        await this.beneficiaryTxtield.press('Enter');
        await this.searchCardNumber.click();
    }
    async verifyReqFieldsVisible() {
        console.log("Verify the required fields of  the Beneficiary ")
        await expect(this.neClaimLbl).toBeVisible();
        await expect(this.beneficiaryCoverageDetailsLbl).toBeVisible();
        await expect(this.payerLbl).toBeVisible();
    }
    async enterRequestedSource(requestSource: string) {
        console.log("Verify user can select the required Request Source");
        await this.reqSource.click();
        await this.reqSourcFrontOfc.click();
        console.log(requestSource);

        //waitForSelector(`[${requestSourceValue}]`)
        /*await this.page.evaluate(() => {
            // Find the element with the attribute containing the value 'refId=10'
            const element = document.querySelector('[attribute*="refId=10"]');

            // Loop through the elements and trigger a click event on each one
            if (element instanceof HTMLElement) {
                element.click();
            } else {
                console.error("Element with refId=1F0 not found");
            }
            */
    }
    async enterAdmissionDate(admissionDate: string) {
        console.log("Verify the User Can enter the Valid Admission Date");
        await this.admissionDateTxt.click();
        await this.admissionDateTxt.fill(admissionDate);
        await this.admissionDateTxt.press('Enter');
        // await this.admissinDateCalendar.click();
        //await this.page.locator('span.owl-dt-control-button-arrow').click();
    }
    async enterDeclarationDate(declarationDate: string) {
        console.log("Verify the User can Enter valid Declaration Date");
        await this.declarationDateTxt.fill(declarationDate);
        await this.declarationDateTxt.press('Enter');
    }
    async enterConsultationDate(consultationDate: string) {
        console.log("Verify the User can Enter valid Consultation Date");
        await this.consultationDateTxt.fill(consultationDate);
        await this.consultationDateTxt.press('Enter');
    }
    async enterFOB(fOB: string) {
        console.log("Verify the User can Enter the Required FOB");
        await this.FOB.click();
        const selectFOB = this.page.locator('//mat-option//span[text()="' + fOB + '"]');
        console.log(selectFOB);
        selectFOB.click();
    }
    async enterProviderValue(provider: string) {
        console.log("Verify the User can Enter the valid Provider Value");
        await this.provider.click();
        await this.provider.fill(provider);
        await this.providerValue.waitFor();
        await this.providerValue.click();
        //await this.provider.press('Enter');
        //await this.selectProviderBtn.click();

    }
    async enterDischargeDate(dischargeDate: string) {
        console.log("Verify the User can Enter the Valid Discharge Date");
        await this.dischargeDateTxt.fill(dischargeDate)
        await this.dischargeDateTxt.press('Enter');
    }
    async claimAsReimbursement() {
        console.log("Verify the User can create a claim as Reimbursement claim");
        await expect(this.reimToggle).toBeVisible();
        await this.reimToggle.click();
    }
    async selectMedicalFOC(fOC: string) {
        console.log("Verify the User can Select the Required FOC");
        await this.fOCArrow.click();
        const selectFOC = this.page.locator('//mat-option//span[text()="' + fOC + '"]');
        selectFOC.click();
    }
    async selectMedicalCaseCauses(causes: string) {
        console.log("Verify the User can Select the Required Medical Causes");
        await this.causesArrow.click();
        const selectCauses = this.page.locator('//mat-option//span[text()="' + causes + '"]');
        selectCauses.click();
    }
    async selectSpecificCauses(specificCauses: string) {
        console.log("Verify the User can Select the Specific Causes");
        await this.specificCausesArrow.click();
        const selectCauses = this.page.locator('//mat-option//span[text()="' + specificCauses + '"]');
        selectCauses.click();

    }
    async selectTreatmentType(treatmentType: string) {
        console.log("Verify the User can Select the Treatment Type");
        await this.treatmentArrow.click();
        const treatment = this.page.locator('//mat-option//span[text()="' + treatmentType + '"]');
        treatment.click();
    }
    async selectSpecificAssessment(specificAssessment: string) {
        console.log("Verify the User can Select the Required SPecific Assessment");
        await this.specificAssessmentTxt.click();
        await this.specificAssessmentTxt.fill(specificAssessment);
        await this.specificAssessmentValue.waitFor();
        //await this.specificAssessmentValue.click();

    }

    //Verify user is able to enter req service items

    async verifyAddServiceItemFunctionality() {
        await this.addServiceItem.click();
        console.log("User is able to add Service Items using Add items ")
    }
    async verifyUserCanaAddServiceItems(serviceItemCode: string) {
        console.log("User is able to add Service Items using Add items ")
        await this.itemCodeTxt.fill(serviceItemCode);
        await this.itemCodeTxt.press('Enter');
    }

    async addQtyClaimed(QtyClaimed: string) {
        console.log("Verify the User can add the Required qty claimed");
        await this.qtyClaimed.click();
        await this.qtyClaimed.fill(QtyClaimed)
    }
    async addUnitPriceClaimed(UnitPriceClaimed: string) {
        console.log("Verify the User can Select the Required Unit Price claimed");
        await this.unitPriceClaimed.click();
        await this.unitPriceClaimed.fill(UnitPriceClaimed);
        await expect(this.unitPriceClaimed).toHaveValue(UnitPriceClaimed);
    }
    async verifyUnitPriceClaimed_TotalCLiamedAmountValues(UnitPriceClaimed: string) {
        await expect(this.totalClaimedAmtTxt).toHaveValue(UnitPriceClaimed);

    }
    async Verify_unitPrice_GrossApprovedvalues(UnitPriceApproved: string) {
        await this.unitPriceClaimed.click();
        await this.qtyClaimed.fill(UnitPriceApproved);
        await expect(this.page.locator('#unitPriceClaimed0')).toHaveValue(UnitPriceApproved);

    }
    async addUnitPriceApproved(UnitPriceApproved: string) {
        await this.unitPriceApproved.click();
        await this.unitPriceApproved.fill(UnitPriceApproved);
        await expect(this.unitPriceApproved).toHaveValue(UnitPriceApproved);
    }

    async verifyUserCanAdjudicateClaim() {

        await (this.adjudicateBtn).click();
        await expect(this.adjudicateConfirmPopup).toBeVisible();
        //await this.page.getByRole('button', { name: 'Yes' }).click();
        await this.OkOnAdjudicate.click();
    }
    async checkAndHandleMedicalCasePopup() {
        if (await this.medicalCaseWarningPopup.isVisible()) {
            console.log("Medical Case Popup is visible.");
            await expect(this.medicalCaseWarningPopup).toBeVisible();
            await expect(this.yesBtnOnMedicalCaseWarning).toBeVisible();
            await this.yesBtnOnMedicalCaseWarning.click();
        } else {
            console.log("Medical Case Popup is not visible.");
        }
    }
   
    

   

async saveClaim() {
    await expect(this.saveClaimBtn).toBeVisible();
    await this.saveClaimBtn.click();
    await expect(this.medicalCaseWarningPopup).toBeVisible();
    await expect(this.saveClaimBtn).toBeVisible();
    await this.yesBtnOnMedicalCaseWarning.click();
    await this.doneBtnOnSave.click();
    await this.okBtnOnSave.click();
    await expect(this.claimRefNumber).toBeVisible();
}
}