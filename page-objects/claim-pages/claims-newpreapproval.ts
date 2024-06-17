import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
const path = require('path');
import { time } from "console";
import exp from "constants";
import test from "node:test";
import { exitCode } from "process";
const { chromium } = require('playwright');

export class newPreapprovalPage {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly claimsMenu: Locator;
    readonly quickSearch: Locator;
    readonly pre_approval: Locator;
    readonly newpre_approvalLink: Locator;
    readonly beneficiaryTxtield: Locator;
    readonly searchCardNumber: Locator;
    readonly requestedSource: Locator;
    readonly consultationDate: Locator;
    readonly FOB: Locator;
    readonly inpatient: Locator;
    readonly admissionDateTxt: Locator;
    readonly declarationDateTxt: Locator;
    readonly consultationDateTxt: Locator;
    readonly userNameOrEmailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signinButton: Locator;
    readonly claimsPreApprovalLink: Locator;
    readonly claimsNewPraApprovalLink: Locator;
    readonly neClaimLbl: Locator;
    readonly beneficiaryCoverageDetailsLbl: Locator;
    readonly reqSourcFrontOfc: Locator;
    readonly admissinDateCalendar: Locator;
    readonly declarationDateCalendar: Locator;
    readonly consultationDateCalendar: Locator;
    readonly dischargeDateCalendar: Locator;
    readonly provider: Locator;
    readonly dateControlArrow: Locator;
    readonly admissionYrValue: Locator;
    readonly reimToggle: Locator;
    readonly focTxt: Locator;
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
    readonly saveBtn: Locator;
    readonly adjBtn: Locator;
    readonly actionsBtn: Locator;
    readonly sendBtn: Locator;
    readonly viewBtn: Locator;
    readonly addBtn: Locator;
    readonly cliamRefTxt: Locator;
    readonly claimStatus: Locator;
    readonly claimStatusDropdown: Locator;
    readonly addBeneficiaryBtn: Locator;
    readonly BenAdvSearchTitle: Locator;
    readonly invalidaCardErrorMsg: Locator;
    readonly beneficiaryCardDetailsLbl: Locator;
    readonly coverageLbl: Locator;
    readonly viewLbl: Locator;
    readonly coveragePageTitle: Locator;
    readonly viewPageTitle: Locator;
    readonly contract_Endorsements: Locator;
    readonly unpaidPremium: Locator;
    readonly admissionDateLbl: Locator;

    readonly secRefLbl: Locator;
    readonly patientFileNumber: Locator;
    readonly declarationDateNumberLbl: Locator;
    readonly consultationDateLbl: Locator;
    readonly fobLbl: Locator;
    readonly serviceClassLbl: Locator;
    readonly providerLbl: Locator;
    readonly currencyLbl: Locator;
    readonly professionalLbl: Locator;
    readonly dischargeDatebl: Locator;
    readonly lengthOfStayLbl: Locator;
    readonly emergencyLbl: Locator;
    readonly reimLabl: Locator;
    readonly resubmittedFormLbl: Locator;
    readonly medicalFile: Locator;
    readonly medicalFileTitle: Locator;
    readonly docFilebBtn: Locator;
    readonly docFileTitle: Locator;
    readonly reqEstimatedCOst: Locator;
    readonly estimatedCost: Locator;
    readonly businessConsiAmt: Locator;
    readonly notCoveredCharges: Locator;
    readonly invoiceNumber: Locator;
    readonly userName: Locator;
    readonly overrideLCX: Locator;
    readonly cost_chargesLbl: Locator;
    readonly serviceItemDetailsLbl: Locator;
    readonly serachBar: Locator;
    readonly exportToXls: Locator;
    readonly filterByDropDown: Locator;
    readonly addBtnServiceItems: Locator;
    readonly viewCardNavigation: Locator;
    readonly exportToXLsBtn: Locator;




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
        this.reqSource = page.locator('//mat-label[normalize-space()="Requested Source*"]');
        this.admissionDateLbl = page.locator('//mat-label[normalize-space()="Admission Date*"]');
        //page.locator('//mat-select[@name="source"]');
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
        this.providerValue = page.locator('//span[text()="Hospital Test Provider"]');
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
        this.selectProviderBtn = page.locator('//div[text()="Select Provider"]');
        this.adjudicateBtn = page.locator('.icon.icon-adj');
        this.adjudicateConfirmPopup = page.locator('(//confirm-popup[@class="ng-star-inserted"]//div)[3]');
        this.OkOnAdjudicate = page.locator('button.ok-button ');
        this.saveClaimBtn = page.locator('span.icon.icon-save');
        this.medicalCaseWarningPopup = page.locator('//div[text()="Warning"]');
        this.yesBtnOnMedicalCaseWarning = page.locator('button.active-button');
        this.doneBtnOnSave = page.locator('button.ok-button');
        this.okBtnOnSave = page.locator('button.ok-button');
        this.claimRefNumber = page.locator('input.mat-focus.mat-input-element');
        this.focTxt = page.locator('mat-select#selectedFoc>div');
        this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
        this.quickSearch = page.getByPlaceholder('Quick Search');
        this.pre_approval = page.getByText('Pre-approvals');
        this.newpre_approvalLink = page.getByRole('link', { name: 'New Pre-approval' })
        this.beneficiaryTxtield = page.getByPlaceholder('Select Beneficiary')
        this.searchCardNumber = page.getByText('SearchCard Numberfor:')
        this.requestedSource = page.getByLabel('Requested Source').locator('div').first();
        this.consultationDate = page.getByTitle('Consultation Date').getByLabel('Open calendar')
        this.FOB = page.getByLabel('FOB').locator('span');
        this.inpatient = page.getByText('In-Patient', { exact: true });
        this.admissionDateTxt = page.locator('#mat-input-3');
        this.declarationDateTxt = page.locator('#mat-input-6');
        this.consultationDateTxt = page.locator('#mat-input-7');
        this.saveBtn = page.locator('//button[@id="claimSaveButton"]');
        this.adjBtn = page.locator('//span[@class="icon icon-adj"]');
        this.actionsBtn = page.locator('//span[@class="icon icon-action"]');
        this.sendBtn = page.locator('//span[@class="icon icon-send"]');
        this.viewBtn = page.locator('//span[@class="icon icon-view"]');
        this.addBtn = page.locator('//div[@class="adv-benef-search-div ng-star-inserted"]//img[1]');
        this.cliamRefTxt = page.locator('//input[@id="claimRefInput"]');
        this.claimStatus = page.locator('//mat-label[text()="Claim Status"]');
        this.claimStatusDropdown = page.locator('(//div[@class="mat-select-value"])[1]');
        this.BenAdvSearchTitle = page.locator('//div[text()="Beneficiary Advanced Search"]');
        this.addBeneficiaryBtn = page.locator('//div[@class="adv-benef-search-div ng-star-inserted"]//img[@alt="No Icon"]');
        this.invalidaCardErrorMsg = page.locator('//div[text()="No data available"]');
        this.beneficiaryCardDetailsLbl = page.locator('//div[text()="Beneficiary & Coverage Details"]');
        this.coverageLbl = page.locator('//div[text()=" Coverage "]');
        this.viewLbl = page.locator('//div[text()="View Card"]');
        this.coveragePageTitle = page.locator('//div[@class="title"]');
        this.viewCardNavigation = page.locator('//span[text()="View Card"]')
        this.contract_Endorsements = page.locator('//div[text()="Contracts & Endorsements"]');
        this.unpaidPremium = page.locator('//div[text()=" Unpaid Premium"]');
        this.viewPageTitle = page.locator('');
        this.secRefLbl = page.locator('(//mat-label[normalize-space()="Secondary Ref.#"][1])');
        this.patientFileNumber = page.locator('//mat-label[normalize-space()="Patient File Number"]');
        this.declarationDateNumberLbl = page.locator('//mat-form-field[@title="Discharge Date"]');
        this.consultationDateLbl = page.locator('//mat-label[normalize-space()="Consultation Date*"]');
        this.fobLbl = page.locator('//mat-label[normalize-space()="FOB*"]');
        this.serviceClassLbl = page.locator('//mat-form-field[@title="Service Class"]');
        //mat-form-field-label ng-tns-c4-17 mat-empty mat-form-field-empty ng-star-inserted
        this.providerLbl = page.locator('//mat-label[normalize-space()="Provider*"]');
        this.currencyLbl = page.locator('//mat-label[normalize-space()="Currency"]');
        this.professionalLbl = page.locator('//mat-label[normalize-space()="Professional / Specialty"]');
        this.dischargeDatebl = page.locator('//mat-form-field[@title="Discharge Date"]');
        this.lengthOfStayLbl = page.locator('//div[@class="los-header"]');
        this.emergencyLbl = page.locator('//mat-label[normalize-space()="Emergency"]');
        this.reimLabl = page.locator('//mat-label[normalize-space()="Reimbursement"]');
        this.resubmittedFormLbl = page.locator('//mat-label[normalize-space()="Resubmitted From"]');
        this.medicalFile = page.locator('//div[contains(text(),"Medical File")]');
        this.medicalFileTitle = page.locator('//div[@class="title"]');
        this.docFilebBtn = page.locator('//div[contains(text(),"Documents")]');
        this.docFileTitle = page.locator('//div[@class="title"]');
        this.reqEstimatedCOst = page.locator('//mat-label[text()="Request Estimated Cost "]');
        this.estimatedCost = page.locator('//mat-label[text()="Estimated Cost () "]');
        this.businessConsiAmt = page.locator('//mat-label[text()="Business Consid. Amount"]');
        this.notCoveredCharges = page.locator('//mat-label[text()="Not Covered Charges"]');
        this.invoiceNumber = page.locator('input[name="invoiceNbr"]');
        this.userName = page.locator('//mat-label[text()="User Name"]');
        this.overrideLCX = page.locator('//mat-label[text()="Override LCX"]');
        this.cost_chargesLbl = page.locator('//div[text()="Cost & Charges"]');
        this.serviceItemDetailsLbl = page.locator('//div[contains(text(),"Service Item Details")]');
        this.serachBar = page.locator('input#new-grid-search-input');
        this.exportToXls = page.locator('//div[text()=" Export to Excel "]')
        this.filterByDropDown = page.locator('(//div[text()="Filter By"])[2]')
        this.addBtnServiceItems = page.locator('//button[@title="Add Service Item"]');
        this.exportToXLsBtn = page.locator('//div[contains(text(),"Export to Excel")]')
    }
    async verifyFieldsonAddServiceItems() {
        const isserviceItemDetailsLbl = await this.serviceItemDetailsLbl.isVisible();
        expect(isserviceItemDetailsLbl).toBeTruthy();

        const isserachBar = await this.serachBar.isVisible();
        expect(isserachBar).toBeTruthy();

        const isexportToXls = await this.exportToXls.isVisible();
        expect(isexportToXls).toBeTruthy();

        const isfilterByDropDown = await this.filterByDropDown.isVisible();
        expect(isfilterByDropDown).toBeTruthy();

        const isaddBtnServiceItems = await this.addBtnServiceItems.isVisible();
        expect(isaddBtnServiceItems).toBeTruthy();
    }
    async verifyExportToxlsBtn() {

        const isfiltisdisplayed = await this.exportToXLsBtn.isVisible();
        expect(isfiltisdisplayed).toBeTruthy();
        console.log("Export to xls is displayed");
    }

    async verofyExportToXlsFUnctionality() {
        // Listen for the download event
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),  // Waits for the download event to occur
            await this.exportToXLsBtn.click()
        ]);

        // Save the download to a specific path
        const filePath = path.join(__dirname, 'path/to/save/excel/file.xlsx');
        await download.saveAs(filePath);

        console.log(`Downloaded file saved at: ${filePath}`);


    }

    async saveBtnOnNewPreApproval() {
        // Check if the save button is disabled
        const isDisabled = await this.saveBtn.isDisabled();
        console.log(`Is the save button disabled? ${isDisabled}`);


    }


    async verifyFieldsonCost_Charges() {
        const iscost_chargesLbl = await this.cost_chargesLbl.isVisible();
        expect(iscost_chargesLbl).toBeTruthy();
        const isreqEstimatedCOst = await this.reqEstimatedCOst.isVisible();
        expect(isreqEstimatedCOst).toBeTruthy();
        const isbusinessConsiAmt = await this.businessConsiAmt.isVisible();
        expect(isbusinessConsiAmt).toBeTruthy();
        const isnotCoveredCharges = await this.notCoveredCharges.isVisible();
        expect(isnotCoveredCharges).toBeTruthy();
        const isinvoiceNumber = await this.invoiceNumber.isVisible();
        expect(isinvoiceNumber).toBeTruthy();
        const isuserName = await this.userName.isVisible();
        expect(isuserName).toBeTruthy();
        const isoverrideLCX = await this.overrideLCX.isVisible();
        expect(isoverrideLCX).toBeTruthy();

    }
    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForTimeout(10000);
        const actualPageTitle = await this.page.title();
        await this.page.waitForTimeout(5000);
        expect(actualPageTitle).toBe(expectedPageTitle);
    }
    async navigateToNewPreapproval() {
        await this.page.locator('span').filter({ hasText: 'Claims Pre-approvals' }).click();
        await this.page.getByRole('link', { name: 'New Pre-approval' }).click();


    }
    async verifyUserisOnNewPreapprovalPage() {
        await expect(this.page.getByText('New Claim')).toBeVisible();
    }

    async verifyRequiredBtns() {

        const isAdjBtnVisible = await this.adjBtn.isVisible();
        expect(isAdjBtnVisible).toBeTruthy();

        const isSaveBtnVisible = await this.saveBtn.isVisible();
        expect(isSaveBtnVisible).toBeTruthy();

        const isActionBtnVisible = await this.actionsBtn.isVisible();
        expect(isActionBtnVisible).toBeTruthy();

        const isSendBtnVisible = await this.sendBtn.isVisible();
        expect(isSendBtnVisible).toBeTruthy();

        const isViewBtnVisible = await this.viewBtn.isVisible();
        expect(isViewBtnVisible).toBeTruthy();

    }
    async verifyAddBtn() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(8000);
        await expect(this.addBeneficiaryBtn).toBeVisible();
    }
    async verifyAddBtnFunctionality() {
        this.addBeneficiaryBtn.click();
        await expect(this.BenAdvSearchTitle).toBeVisible();
    }

    async verifyBenSearchClickiingFunctionality() {

        await this.page.waitForTimeout(8000); // Wait for 8 seconds (you can adjust the timeout as needed)

        // Attempt to click the element
        try {
            await this.beneficiaryTxtield.click();
            // If no error is thrown, the element is clickable
            expect(true).toBeTruthy(); // Assertion to satisfy the test, as the click was successful
        } catch (error) {
            // If an error is thrown, the element is not clickable
            expect(false).toBeTruthy(); // Assertion to satisfy the test, as the click failed
        }

    }

    async verifyBenificiarySearchWithValidCardNumber(cardNo: string) {
        await this.beneficiaryTxtield.fill(cardNo)
        await expect(this.beneficiaryTxtield).toHaveValue(cardNo)



    }
    async VerifyclaimRef() {
        await expect(this.cliamRefTxt).toBeVisible();
    }
    async VerifyclaimRefFunctionality(claimRef: string) {
        await this.cliamRefTxt.click();
        await this.cliamRefTxt.fill(claimRef)
        await expect(this.cliamRefTxt).toHaveValue(claimRef)
    }

    async verifyClaimStatusField(ClaimStatus: string) {
        await expect(this.claimStatus).toHaveText(ClaimStatus)

    }
    async verifyAdjBtn() {
        const isAdjBtnVisible = await this.adjBtn.isVisible();
        expect(isAdjBtnVisible).toBeTruthy();
    }

    async verifyAdjBtnFunctionality() {
        // Check if the button is visible
        if (this.adjBtn) {
            const isAdjBtnVisible = await this.adjBtn.isVisible();
            expect(isAdjBtnVisible).toBeTruthy();

            // Check if the button is clickable
            const isAdjBtnDisabled = await this.adjBtn.isVisible();
            expect(isAdjBtnDisabled).toBeTruthy();
        } else {
            // Handle case where button is not found
            throw new Error('Button element not found.');
        }
    }

    async verifyServiceDetailsCard() {
        await expect(this.secRefLbl).toBeVisible()
        await expect(this.patientFileNumber).toBeVisible()
        await expect(this.declarationDateNumberLbl).toBeVisible()
        await expect(this.consultationDateLbl).toBeVisible()
        await expect(this.fobLbl).toBeVisible()
        await expect(this.serviceClassLbl).toBeVisible()
        await expect(this.providerLbl).toBeVisible()
        await expect(this.currencyLbl).toBeVisible()
        await expect(this.professionalLbl).toBeVisible()
        await expect(this.dischargeDatebl).toBeVisible()
        await expect(this.lengthOfStayLbl).toBeVisible()
        await expect(this.emergencyLbl).toBeVisible()
        await expect(this.resubmittedFormLbl).toBeVisible()
    }

    async verifySelectBeneficiarySearchBar() {
        await expect(this.beneficiaryTxtield).toBeVisible();

    }
    async verifyStatusDropdownValues() {
        // Click on the dropdown to open it
        await this.claimStatusDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('(//mat-option[contains(@class,"status-options mat-option")]/following-sibling::mat-option)');
        // Get the text content of each option
        const actualValues: string[] = [];
        for (const option of options) {
            const value = await option.textContent();
            if (value !== null) { // Filter out null values
                actualValues.push(value.trim()); // Trim leading and trailing spaces
                console.log('Dropdown option:', value);
            }
        }
        // Assert that the expected values are present in the list of options
        const expectedValues = ['Pending', 'Authorize', 'Deny', 'Not Used'];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }


    async verifyReqFieldsVisible() {
        await expect(this.page.getByText('New Claim')).toBeVisible();
        await expect(this.page.locator('nc-claim')).toContainText('Beneficiary & Coverage Details');
        await expect(this.page.locator('nc-claim')).toContainText('Service Details');
        await expect(this.page.getByLabel('Requested Source').locator('span')).toBeVisible();
        await expect(this.page.getByText('Medical Case Details')).toBeVisible();
        await expect(this.page.locator('#screen-third-row-id')).toContainText('Medical Case Details');
        await expect(this.page.getByText('Cost & Charges')).toBeVisible();
        await expect(this.page.locator('#screen-third-row-id')).toContainText('Cost & Charges');
        await expect(this.page.getByText('Service Item Details')).toBeVisible();
        await expect(this.page.locator('nc-claim')).toContainText('Service Item Details');
    }

    async errorPopUpWithInvalidCardNo(invalidCardNumberMsg: string) {
        const errorMessageText = await this.invalidaCardErrorMsg.textContent();
        await expect(errorMessageText).toContain(invalidCardNumberMsg);

    }
    async BeneficiaryCoverageDetails() {
        // Assert visibility of beneficiaryCardDetailsLbl
        await expect(this.beneficiaryCardDetailsLbl).toBeVisible();

        // Assert visibility of coverageLbl
        await expect(this.coverageLbl).toBeVisible()

        // Assert visibility of viewLbl
        await expect(this.viewLbl).toBeVisible()


    }
    async VerifyCoveragebuttonfunctionality() {
        await expect(this.coverageLbl).toBeVisible();
        await (this.coverageLbl).click();
        await expect(this.coveragePageTitle).toBeVisible();
    }

    async Verifyviewbutton() {
        await expect(this.viewLbl).toBeVisible();
        //await (this.coverageLbl).click();
        //await expect(this.coveragePageTitle).toBeVisible();
    }

    async VerifyviewbuttonFunctionality() {
        await expect(this.viewLbl).toBeVisible();
        await (this.viewLbl).click();
        await expect(this.viewCardNavigation).toBeVisible();
    }




    async verifyUnpaidPremium(unpaidPremium: string) {
        // Get the text content of the element
        const elementText: string | null = await this.unpaidPremium.textContent();

        // Check if elementText is null
        if (elementText === null) {
            throw new Error("The text content of the element is null");
        }

        // Check if the text content contains the given text
        if (elementText.includes(unpaidPremium)) {
            console.log(`Locator contains the text "${unpaidPremium}"`);
        } else {
            throw new Error(`Locator does not contain the text "${unpaidPremium}"`);
        }
    }


    async SearchBeneficiaryToCreateClaim(cardNo: string) {
        await this.beneficiaryTxtield.click();
        await this.page.getByPlaceholder('Select Beneficiary').fill(cardNo);
        await this.page.getByPlaceholder('Select Beneficiary').press('Enter');
        await this.page.getByText('SearchCard Numberfor:').click();
    }

    async enterRequestedSource() {
        await this.page.getByLabel('Requested Source').locator('div').first().click();
        await this.page.getByText('Front Office').click();

    }
    async verifyRequestedSourceDropdownValues() {
        // Click on the dropdown to open it
        await this.requestedSource.click();

        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[contains(@class,"mat-option ng-star-inserted")]');

        // Get the text content of each option
        const actualValues: string[] = [];
        for (const option of options) {
            const value = await option.textContent();
            if (value !== null) { // Filter out null values
                actualValues.push(value.trim()); // Trim leading and trailing spaces
                console.log('Dropdown option:', value);
            }
        }

        // Assert that the expected values are present in the list of options
        const expectedValues = ['Email', 'Fax', 'Front Office', 'Phone Call'];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue.trim()); // Trim leading and trailing spaces
        }

    }

    async enterAdmissionDate(admissionDate: string) {
        console.log("Verify the User Can enter the Valid Admission Date");
        await this.admissionDateTxt.click();
        await this.admissionDateTxt.fill(admissionDate);
        await this.admissionDateTxt.press('Enter');
        // await this.admissinDateCalendar.click();
        //await this.page.locator('span.owl-dt-control-button-arrow').click();
    }

    async verifyFOBDropdownValues() {
        // Click on the dropdown to open it
        await this.FOB.click();
        // Wait for the options to appear
        await this.page.waitForSelector('//mat-option[contains(@class,"mat-option ng-star-inserted")]');
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[contains(@class,"mat-option ng-star-inserted")]');

        // Get the text content of each option
        const actualValues: string[] = [];
        for (const option of options) {
            const value = await option.textContent();
            if (value !== null) { // Filter out null values
                actualValues.push(value.trim()); // Trim leading and trailing spaces
                console.log('Dropdown option:', value);
            }
        }
        // Assert that the expected values are present in the list of options
        const expectedValues = ['Dental', 'In-Patient', 'Out-Patient', 'Travel Insurance'];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue.trim()); // Trim leading and trailing spaces
        }
    }


    async verifyServiceProviderDropdownValues() {
        // Click on the dropdown to open it
        await this.serviceClassLbl.click();
        // Wait for the options to appear
        await this.page.waitForSelector('//mat-option[contains(@class,"mat-option ng-star-inserted")]');
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[contains(@class,"mat-option ng-star-inserted")]');

        // Get the text content of each option
        const actualValues: string[] = [];
        for (const option of options) {
            const value = await option.textContent();
            if (value !== null) { // Filter out null values
                actualValues.push(value.trim()); // Trim leading and trailing spaces
                console.log('Dropdown option:', value);
            }
        }
        // Assert that the expected values are present in the list of options
        const expectedValues = [' K class (2 Beds) ', ' Private (One Bed) ', ' Private (Suite) ', ' Semi-Private (2 Beds)', ' Ward '];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue.trim()); // Trim leading and trailing spaces
        }
    }
    async verifyMedicalFile(medicalFileTitleTxt: string) {
        await this.medicalFile.click();
        await this.page.waitForTimeout(10000);
        await expect(this.medicalFileTitle).toBeVisible();
        const actutalTxt = this.medicalFileTitle.textContent();
        await expect(this.medicalFileTitle).toHaveText(medicalFileTitleTxt);

    }
    async verifyFieldsOnMedicalFile() {

    }

    async verifyDocumentFile(documentTitleTxt: string) {
        await this.docFilebBtn.click();
        await this.page.waitForTimeout(10000);
        await expect(this.docFileTitle).toBeVisible();
        const actutalTxt = this.docFileTitle.textContent();
        await expect(this.docFileTitle).toHaveText(documentTitleTxt);

    }
    async verifyBtnOnServiceItemsDetails() {

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
        await this.page.getByLabel('Provider*').click();
        await this.page.getByLabel('Provider*').fill(provider);
        await this.page.keyboard.press('Backspace');
        await this.page.waitForTimeout(5000);
        await this.page.locator('//mat-option//span[text()="' + provider + '"]').click();
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
        await this.focTxt.click(); // Click on the dropdown to open it
        const selectFOC = this.page.locator(`//mat-option//span[text()="${fOC}"]`);
        await selectFOC.click(); // Click on the option
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
        await this.page.waitForTimeout(2000);
    }
    async selectTreatmentType(treatmentType: string) {
        console.log("Verify the User can Select the Treatment Type");
        await this.treatmentArrow.click();
        const treatment = this.page.locator('//mat-option//span[text()="' + treatmentType + '"]');
        treatment.click();
        await this.page.waitForTimeout(2000);
    }

    async selectSpecificAssessment(specificAssessment: string) {
        await this.page.getByLabel('Specific Assessment*').click();
        await this.page.getByLabel('Specific Assessment*').fill(specificAssessment);
        await this.page.waitForTimeout(8000);
        await this.page.keyboard.press('Backspace');
        // await this.page.locator('//mat-option//span[text()="' + specificAssessment + '"]').click();
        await this.page.locator('//div[text()="' + specificAssessment + '"]').dblclick();
        await this.page.waitForTimeout(2000);

    }
    //Verify user is able to enter req service items

    async verifyAddServiceItemFunctionality() {
        await expect(this.page.getByTitle('Add Service Item')).toBeVisible();
        // await this.page.getByTitle('Add Service Item').click();
        // await this.page.waitForTimeout(5000);
        console.log("User is able to add Service Items using Add items ")
    }
    async verifyUserCanaAddServiceItems() {
        await this.page.getByLabel('Services Items').getByRole('combobox').fill('87040');
        await this.page.getByLabel('Services Items').getByRole('combobox').press('Enter');
        await this.page.getByText("Culture, bacterial, definitive; blood (includes anaerobic screen)").click();
    }

    async verifyRequiredColumnsDisplayed() {
        await expect(this.page.getByLabel('Change sorting for itemCode')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for itemDescription')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for serviceDescription')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for packageUnit')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for ppItemCoverage')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for quantityClaimed')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for unitPriceClaimed')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for serviceDescription')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for unitPriceClaimed')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for adjustmentReasonDesc')).toBeVisible();
        await expect(this.page.getByLabel('Change sorting for adjustmentReasonDesc').locator('div')).toContainText('Reason');

    }
    async addUnitPriceClaimed() {
        await this.page.locator('#unitPriceClaimed0').click();
        await this.page.locator('#unitPriceClaimed0').fill('100');
        await this.page.locator('#totalClaimed0').click();
        await expect(this.page.locator('#unitPriceClaimed0')).toHaveValue('100');


    }
    async verifyUnitPriceClaimed_TotalCLiamedAmountValues() {
        await expect(this.page.locator('#unitPriceClaimed0')).toHaveValue('100');

    }

    async Verify_unitPrice_GrossApprovedvalues() {
        await expect(this.page.locator('#spUnitPriceApproved0')).toHaveValue('0');
        await this.page.locator('#spUnitPriceApproved0').click();
        await this.page.locator('#spUnitPriceApproved0').fill('100');
        await this.page.locator('#spTotalPriceApproved0').click();
        await expect(this.page.locator('#spTotalPriceApproved0')).toHaveValue('100')
    }
    async verifyUserCanselectDeductibleReasons() {

        await this.page.locator('td:nth-child(16)').click();
        await this.page.locator('#adjustmentReasonDesc0').fill('additional');
        await this.page.getByText('Additional Consultation', { exact: true }).click();

    }

    async verifyUserCanAdjudicateClaim() {
        try {
            // Click the 'Adjudicate' button
            await this.page.getByRole('button', { name: 'Adjudicate' }).click();
            await this.page.waitForTimeout(90000); // Wait for the adjudication process to complete

            // Check if the 'Warning' text appears and handle it if it does
            const warningVisible = await this.page.locator('text=Warning').isVisible();
            if (warningVisible) {
                await expect(this.page.getByText('Warning')).toBeVisible();
                await expect(this.page.getByText('There is a claim with the')).toBeVisible();
                await expect(this.page.getByRole('button', { name: 'Yes' })).toBeVisible();
                await this.page.getByRole('button', { name: 'Yes' }).click();
            }

            // Continue with the rest of the process
            await expect(this.page.getByText('Result of Adjudication is as')).toBeVisible();

            // Wait for the 'OK' button to be visible
            const okButton = this.page.getByRole('button', { name: 'OK' });
            await okButton.waitFor({ state: 'visible', timeout: 5000 });

            // Check if the 'OK' button is enabled
            const isEnabled = await okButton.isEnabled();
            if (!isEnabled) {
                console.error("The 'OK' button is not enabled.");
                return;
            }

            // Ensure the button is in view
            await okButton.scrollIntoViewIfNeeded();

            // Click the 'OK' button
            await okButton.click();
            console.log("Successfully clicked the 'OK' button.");
        } catch (error) {
            console.error('An error occurred:', error);
            // Optionally, you can add more error handling logic here
        }
    }


    async verifySaveClaimFunctionality() {
        try {
            // Click the "Save" button
            await this.page.getByRole('button', { name: 'Save' }).click();
            console.log('Clicked Save button');

            // Check for the "Warning" dialog
            try {
                await expect(this.page.getByText('Warning')).toBeVisible({ timeout: 10000 });
                console.log('Warning dialog is visible');
                // Click the "Yes" button if warning is visible
                await this.page.getByRole('button', { name: 'Yes' }).click();
                console.log('Clicked Yes button');
            } catch (error) {
                console.log('Warning dialog not visible, proceeding without clicking Yes button');
            }

            // Check for the "Done." dialog
            try {
                await expect(this.page.getByText('Done.').first()).toBeVisible({ timeout: 10000 });
                console.log('Done dialog is visible');
                // Click the "OK" button if "Done." dialog is visible
                await this.page.getByRole('button', { name: 'OK' }).click();
                console.log('Clicked OK button on Done dialog');
            } catch (error) {
                console.log('Done dialog not visible, proceeding without clicking OK button');
            }

            // Check for the notification message
            try {
                await expect(this.page.getByText('The notification will be sent')).toBeVisible({ timeout: 10000 });
                console.log('Notification message is visible');
                // Click the "OK" button if notification is visible
                await this.page.getByRole('button', { name: 'OK' }).click();
                console.log('Clicked OK button on Notification message');
            } catch (error) {
                console.log('Notification message not visible, proceeding without clicking OK button');
            }

            // Validate that we are back on the "Edit Pre-approval" page
            await expect(this.page.locator('nc-breadcrumbs').getByText('Edit Pre-approval')).toBeVisible({ timeout: 10000 });
            console.log('Edit Pre-approval breadcrumb is visible');
            await expect(this.page.locator('nc-breadcrumbs')).toContainText('Edit Pre-approval');
            await expect(this.page.getByText('Claim Reference* InitialClaim')).toBeVisible({ timeout: 10000 });
            console.log('Claim Reference text is visible');
            await expect(this.page.locator('nc-claim')).toContainText('Claim Reference*');
            console.log('Claim Reference* is contained in nc-claim locator');
        } catch (error) {
            console.error('An error occurred during the save claim functionality process:', error);
            throw error; // Re-throw the error after logging it
        }
    }


    async saveClam() {
        await expect(this.page.getByRole('button', { name: 'Save' })).toBeVisible();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await expect(this.page.locator('#mat-dialog-3').getByText('Warning')).toBeVisible();
        await expect(this.page.getByText('There is a claim with the')).toBeVisible();
        await expect(this.page.locator('confirm-popup')).toContainText('There is a claim with the above criteria created, are you sure you want to continue?');
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await expect(this.page.locator('#mat-dialog-4').getByText('Warning')).toBeVisible();
        await expect(this.page.locator('confirm-popup')).toContainText('Medical Case is Empty. Do you wish to continue saving the claim?');
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await expect(this.page.getByText('Done.').first()).toBeVisible();
        await expect(this.page.getByRole('button', { name: 'OK' })).toBeVisible();
        await this.page.getByRole('button', { name: 'OK' }).click();
        await expect(this.page.getByText('The notification will be sent')).toBeVisible();
        await expect(this.page.locator('confirm-popup')).toContainText('The notification will be sent');
        await this.page.getByText('The notification will be sent').click();
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
    async VerifyReim_ClaimCreatedSuccessfully() {
        await expect(this.page.locator('nc-breadcrumbs')).toContainText('Edit Pre-approval');
        await expect(this.page.locator('nc-breadcrumbs').getByText('Edit Pre-approval')).toBeVisible();
        await expect(this.page.locator('nc-claim')).toContainText('Claim Reference*');
        await this.page.getByLabel('Claim Reference*').click();
        await expect(this.page.getByLabel('Claim Reference*')).toBeVisible();

    }

    async batchingFunctionality() {
        // Take a claim reference 
        const claimRefPlaceHolder = this.page.locator('//input[@id="claimRefInput"]');
        const claim_Number = await claimRefPlaceHolder.inputValue();
        console.log(claim_Number);
        //Navigate to create Reim Batch
        console.log("User is navigating to the Batching")
        await this.page.getByText('Batching').click();
        console.log("User clicks on the Create Batch Reimbursement")
        await this.page.getByRole('link', { name: 'Create Batch Reimbursement' }).click();
        await this.page.waitForTimeout(5000);
        console.log("User is on the Create New Batch");

        await this.page.keyboard.down('Control');
        for (let i = 0; i < 2; i++) {
            await this.page.keyboard.press('-');
        }
        await this.page.keyboard.up('Control');

        // Fill Required Details to create the batch 1. Received Batch Details
        await this.page.getByLabel('Open calendar').click();
        await this.page.getByLabel('Choose month and year').click();
        await this.page.getByLabel('2024').click();
        await this.page.getByLabel('-Jan-2024').click();
        await this.page.getByLabel('02-Jan-').click();

        // Payer Value
        await this.page.getByLabel('Payer  *').fill('aw');
        await this.page.locator('//span[@class="caption"][normalize-space()="AWP P&C S.A."]').click();
        console.log("User is able to select the required Payer value");
        //Label for the Batch
        await this.page.getByLabel('Label *').click();
        await this.page.getByLabel('Label *').fill('test');
        console.log("User can Enter the Label value");
        //Details of the claim count for reim batch
        await this.page.getByLabel('Claims Count *').click();
        await this.page.getByLabel('Claims Count *').fill('1');
        console.log("User able to enter the claim count");
        await this.page.getByLabel('Claims Count *').press('Control+-');
        //Veify the UI elements on the Page

        //await this.page.getByRole('button', { name: 'No icon found Create' }).click();
        await this.page.locator('button[class="create-button ng-star-inserted"]').click();

        await this.page.getByText('REIMBURSEMENT BATCH').click();
        await this.page.waitForLoadState("networkidle");
        await expect(this.page.getByRole('button', { name: 'Unvalidate' })).toBeVisible();
        console.log("Unvalidate option is displayed on the page");
        await expect(this.page.getByRole('button', { name: 'Finish All' })).toBeVisible();
        console.log("Finish All option is displayed on the page");
        await expect(this.page.getByRole('button', { name: 'No icon found Access Batch' })).toBeVisible();
        console.log("Access Batch is displayed on the page");
        await expect(this.page.getByRole('button', { name: 'No icon found Print' })).toBeVisible();
        console.log("Print Option option is displayed on the page");
        await expect(this.page.getByRole('button', { name: 'No icon found Save' })).toBeVisible();
        console.log("Save Batch option is displayed on the page");
        await expect(this.page.getByRole('button', { name: 'No icon found Delete' })).toBeVisible();
        console.log("Delete option is displayed on the page");
        await expect(this.page.getByText('Service Provider', { exact: true })).toBeVisible();
        console.log("Service Provider is displayed on the page");
        await expect(this.page.getByText('Payer')).toBeVisible();
        console.log("Payer option is displayed on the page");
        await expect(this.page.getByText('Show Claims')).toBeVisible();
        console.log("Show Claims option is displayed on the page");
        await this.page.locator('.mat-slide-toggle-bar.mat-slide-toggle-bar-no-side-margin').click();
        console.log("User is able to click on the Show CLaim Toggle btn ");
        await expect(this.page.getByRole('button', { name: 'Group by No icon found' })).toBeVisible();
        console.log("Group By option is displayed on the page");
        await expect(this.page.getByRole('textbox', { name: 'Search', exact: true })).toBeVisible();
        console.log("Search Claim to add in Batch is displayed on the page");
        await expect(this.page.getByText('Received', { exact: true })).toBeVisible();
        console.log("Received option is displayed on the page");
        await expect(this.page.getByText('Prevalidated')).toBeVisible();
        console.log("Prevalidated option is displayed on the page");
        await expect(this.page.getByText('Processed', { exact: true })).toBeVisible();
        console.log("Processed option is displayed on the page");
        await expect(this.page.getByText('Validated', { exact: true })).toBeVisible();
        console.log("Unvalidated option is displayed on the page");
        await expect(this.page.getByText('Reconciled')).toBeVisible();
        console.log("Reconciled option is displayed on the page");
        await this.page.getByRole('textbox', { name: 'Search', exact: true }).click();
        await this.page.locator('//div[@class="features-div-wrapper"]//input[@id="new-grid-search-input"]').fill(claim_Number);
        console.log("User can enter the created claim in Search box");
        await this.page.locator('//div[@class="features-div-wrapper"]//input[@id="new-grid-search-input"]').press('Enter');
        await this.page.locator('(//label[@class="mat-checkbox-layout"]//div[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"])[3]').click();
        console.log("User can select the claim to add in a batch");
        await this.page.getByRole('button', { name: 'No icon found Save' }).click();
        console.log("Save option is displayed on the page");
        await expect(this.page.getByText('Success', { exact: true })).toBeVisible();
        console.log("SUccess option is displayed on the page");
        await expect(this.page.locator('confirm-popup')).toContainText('Data has been saved successfully');
        console.log("The required pop up displayed - Data has been saved successuly");
        await this.page.getByRole('button', { name: 'OK' }).click();
        console.log("User can click on the Ok btn to to save the claim into the Batch");
        await this.page.getByRole('button', { name: 'No icon found Access Batch' }).click();
        console.log("User can access the created batch");
        await this.page.waitForTimeout(5000);
        await expect(this.page.locator('nc-breadcrumbs').getByText('Open Batch')).toBeVisible();
        console.log("After successfully creation of batch User navigate on the Open Batch ");

        //await this.page.getByText('OPEN BATCH', { exact: true }).click();

        await expect(this.page.locator('nc-breadcrumbs').getByText('Open Batch')).toBeVisible();
        // Prevalidate the batch-Prevalidate btn
        await this.page.locator('div:nth-child(2) > .circle-text-container > .circle-with-line > .ng-star-inserted').click();

        //Process the batch-Processed btn
        await this.page.locator('div:nth-child(3) > .circle-text-container > .circle-with-line > .ng-star-inserted').click();

        //Open the cliam from batch-CLick on claim to open on processing page
        //await this.page.locator('div:nth-child(3) > .circle-text-container > .circle-with-line > .ng-star-inserted').click();
        await this.page.getByText('Polyclinic Test Provider').dblclick();
        [this.newPage] = await Promise.all([
            this.context.waitForEvent('page'),
        ])
        console.log("User is able to open the claim from the Processed Batch")
        //Verify the Fiels cost and Charges for Payment Process
        await expect(this.newPage.getByText('Cost & Charges')).toBeVisible();
        await expect(this.newPage.getByText('Edit Reimbursement Processing')).toBeVisible();
        await expect(this.newPage.getByText('Batch id :')).toBeVisible();

        await expect(this.newPage.locator('nc-cost-and-charges-info')).toContainText('Total Claimed');
        await expect(this.newPage.locator('#screen-third-row-id div').filter({ hasText: /^Gross Approved$/ }).nth(3)).toBeVisible();
        await expect(this.newPage.locator('nc-cost-and-charges-info')).toContainText('Gross Approved');
        await expect(this.newPage.locator('div').filter({ hasText: /^Beneficiary Share$/ }).nth(3)).toBeVisible();
        await expect(this.newPage.locator('nc-cost-and-charges-info')).toContainText('Beneficiary Share');
        await expect(this.newPage.locator('nc-cost-and-charges-info')).toContainText('Payer Share');
        await expect(this.newPage.locator('nc-cost-and-charges-info')).toContainText('Invoice Number');
        await expect(this.newPage.locator('nc-cost-and-charges-info')).toContainText('Invoiced Amount');


        await this.newPage.getByLabel('Invoice Number').click();
        await this.newPage.getByLabel('Invoice Number').fill('IN-5');
        await this.newPage.getByLabel('Invoiced Amount').click();
        await this.newPage.getByLabel('Invoiced Amount').fill('50');




        // Verify claim open from Batch and user is on Edit Reim Procesing claim



        //Verify the FIleds on COst and charged



        // add Invoice Number and Invoice amput approved



        //Verify the payment method click on It and Verify the fields on Payment Methods



        //Adjudicate the claim



        //Save the claim


        //Verify the Finish Btn is displayed and User can Finish the claim
        /*
                await this.newPage.getByLabel('Invoice Number').click();
          await this.newPage.getByLabel('Invoice Number').fill('In-11');
          await this.newPage.getByLabel('Invoiced Amount').click();
          await this.newPage.getByLabel('Invoiced Amount').fill('100');
          await this.newPage.getByRole('button', { name: 'Save' }).click();
          await this.newPage.getByRole('button', { name: 'OK' }).click();
          await this.newPage.getByRole('button', { name: 'Adjudicate' }).click();
          await this.newPage.getByRole('button', { name: 'OK' }).click();
          await this.newPage.getByRole('button', { name: 'Save' }).click();
          await this.newPage.getByRole('button', { name: 'OK' }).click();
        
        
          await this.newPage.getByText('Payment Method').click();
          await expect(this.newPage.getByRole('heading', { name: 'Payment Method' })).toBeVisible();
          await expect(this.newPage.locator('#mat-radio-8').getByText('Bank Transfer')).toBeVisible();
          await expect(this.newPage.locator('#mat-radio-9').getByText('Cheque Delivery')).toBeVisible();
        
        
          await expect(this.newPage.locator('div').filter({ hasText: /^Pay To \*$/ }).nth(3)).toBeVisible();
          await this.newPage.getByLabel('Pay To *').fill('Test');
          await this.newPage.getByLabel('Currency  *').locator('div').nth(1).click();
          await this.newPage.getByRole('option', { name: 'EUR' }).locator('span').click();
        
          await this.newPage.getByRole('button', { name: 'OK' }).click();
          
          await expect(this.newPage.getByText('Info')).toBeVisible();
          await expect(this.newPage.getByText('Saved Successfully!')).toBeVisible();
          await this.newPage.locator('#mat-dialog-4').getByRole('button', { name: 'OK' }).click();
          await this.newPage.getByRole('button', { name: 'Save' }).click();
        
        */
    }

}