import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import test from "node:test";
const { chromium } = require('playwright');

export class linkMedicalCasePage {
  newPage: Page;
  readonly page: Page;
  readonly context: BrowserContext;
  readonly claimsMenu: Locator;
  readonly batching: Locator;
  readonly OpenBatchMenu: Locator;
  readonly openBatchHeading: Locator;
  readonly txt_BatchID: Locator;
  readonly btn_nxt: Locator;
  readonly quickSearch: Locator;
  readonly searchMenu: Locator;
  readonly searchClaimTitle: Locator;
  readonly searchTextBox: Locator;
  readonly claimReference: Locator;
  readonly authorizationNo: Locator;
  readonly editClaimTitle: Locator;

  readonly claimStatus: Locator;
  readonly editClaimBtn: Locator;
  readonly claimRefInput: Locator;
  readonly claimBeneficiary: Locator;
  readonly medicalCaseDetails: Locator;
  readonly medicalCase: Locator;
  readonly medicalCaseIcon: Locator;
  readonly listOfMedicalCases: Locator;
  readonly addCaseSymbol: Locator;
  readonly btn_reset: Locator;
  readonly txt_MedicalCase: Locator;
  readonly selectFOCArroe: Locator;
  readonly accidentalInjury: Locator;
  readonly exportToXls: Locator;
  readonly lblEOC: Locator;
  readonly claimStatusOnCase: Locator;
  readonly ClainRef: Locator;
  readonly admissionDate: Locator;
  readonly treatmentType: Locator;
  readonly treatmentTypeMedical: Locator;
  readonly FOC_ValueDropdown: Locator;
  readonly search_Specific_ass: Locator;

  readonly ok_btn_warning: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.context = context;
    this.page = page;
    this.newPage = page;
    this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
    this.batching = page.locator('span[class="ng-star-inserted"]');
    this.OpenBatchMenu = page.locator("//a[normalize-space()='Open Batch']");
    this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
    this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
    this.openBatchHeading = page.locator('//div[@class="heading"]');
    this.btn_nxt = page.locator('btn-disable btn-enable');
    this.editClaimTitle = page.locator('//a[normalize-space()="Edit Reimbursement Processing Claim"]');
    this.quickSearch = page.locator('input[placeholder="Quick Search"]');
    this.searchMenu = page.locator('//a[@class="active selected"]');
    this.searchClaimTitle = page.locator('//div[@class="heading"]');
    this.searchTextBox = page.locator('//div[@class="final-grid-component"]//input[@id="new-grid-search-input"]');
    this.claimReference = page.locator('//mat-label[normalize-space()="Claim Reference*"]');
    this.claimStatus = page.locator('//span[normalize-space()="Status"]');
    this.editClaimBtn = page.locator('.edit-action.ng-star-inserted');
    this.claimRefInput = page.locator('//input[@id="claimRefInput"]');

    this.claimBeneficiary = page.locator('//div[@class="title-div"]');
    this.medicalCaseDetails = page.locator('//div[contains(text(),"Medical Case Details")]');
    this.medicalCase = page.locator('//mat-form-field[@title="Medical Case"]');
    this.medicalCaseIcon = page.locator('//img[@class="input-end-icon"]');
    this.listOfMedicalCases = page.locator('//div[@class="card-header"]');
    this.addCaseSymbol = page.locator('img[class="input-end-icon"]');
    this.btn_reset = page.locator('//button[@class="reset-button"]');
    this.txt_MedicalCase = page.locator('#mat-input-24');
    this.selectFOCArroe = page.locator('mat-select[id="selectedFoc"] div[class="mat-select-arrow"]');
    this.accidentalInjury = page.locator('//span[@class="mat-option-text"][normalize-space()="Accidental Injury"]');
    this.exportToXls = page.getByRole('button', { name: 'Export to Excel' });
    this.lblEOC = page.getByLabel('Change sorting for eoc');
    this.claimStatusOnCase = page.getByLabel('Change sorting for claimStatus');
    this.ClainRef = page.getByLabel('Change sorting for claimRef');
    this.admissionDate = page.getByLabel('Change sorting for admissionDate');
    this.treatmentType = page.getByLabel('Treatment Type').locator('div').nth(3);
    this.treatmentTypeMedical = page.getByText('Medical', { exact: true });
    this.FOC_ValueDropdown = page.locator('span[class="ng-tns-c29-278 ng-star-inserted"]');
    this.search_Specific_ass = page.locator('//img[@class="input-end-icon input-end-icon-pointer"]');
    this.ok_btn_warning = page.locator('button.ok-button');

  }
  async verifyPageTitle(expectedPageTitle: string) {
    await this.page.waitForTimeout(10000);
    const actualPageTitle = await this.page.title();
    await this.page.waitForTimeout(5000);
    expect(actualPageTitle).toBe(expectedPageTitle);
  }

  async naviagteToSearchClaim(expectedData: string, SearchClaimPageTitle: string) {
    await this.quickSearch.click();
    await this.quickSearch.fill(expectedData);
    await this.quickSearch.press('Enter');
    await this.claimsMenu.click();
    await expect(this.searchClaimTitle).toHaveText(SearchClaimPageTitle);
  }

  async naviagteToOpenBatch(OpenBatchTitle: string) {
    await this.quickSearch.fill("Batching");
    await this.quickSearch.press('Enter');
    await this.OpenBatchMenu.click();
    await expect(this.openBatchHeading).toHaveText(OpenBatchTitle);
  }
  async openBatch(BatchID: string,) {
    await this.txt_BatchID.fill(BatchID);
    await this.txt_BatchID.press('Enter');
    await this.page.waitForTimeout(8000);
  }
  async openClaim() {
    await this.authorizationNo.dblclick();
    [this.newPage] = await Promise.all([
      this.context.waitForEvent('page'),
    ])

  }
  async verifyUserNavigateToEditEditReimbursementProcessingClaim(EditCLaimPageTitle: string) {
    await this.page.waitForTimeout(5000);
    expect(EditCLaimPageTitle).toBe(EditCLaimPageTitle);
    await expect(this.editClaimTitle).toHaveText(EditCLaimPageTitle);

  }
  async searchMobileCliam(mobileClaimNo: string) {
    await this.searchTextBox.fill(mobileClaimNo);
    await this.searchTextBox.press('Enter');
    await this.page.waitForTimeout(15000);

  }
  async verifyUserCanSearchMblClaim(claimReference: string) {
    await expect(this.claimReference).toHaveText(claimReference);
    console.log("User is able to open the Mobile claim using the Search Claim Btn");
  }
  async openTheClaim() {
    await this.editClaimBtn.click();
    expect(this.claimRefInput).toBeTruthy();
  }

  async verifyClaimReference(claimReference: string) {
    await expect(this.claimReference).toBeTruthy();
    console.log("User is able to Check the cliam Reference");
  }

  async verifyUserCanCheckClaimStatus(claimStatus: string) {
    await expect(this.claimStatus).toBeTruthy();
    console.log("User is able to check the claim status");
  }

  async verifyBeneficiaryCoverageDetails(claimBeneficiary: string) {
    await expect(this.verifyBeneficiaryCoverageDetails).toBeTruthy();
    console.log("User is able to check the claim sBeneficiary Coverage Details");

  }

  async verifyMedicalCaseDetails(medicalCaseDetails: string) {
    await expect(this.verifyBeneficiaryCoverageDetails).toBeTruthy();
    console.log("User is able to check the Medical Case Details");
  }

  async verifyMedicalCaseLink(medicalCase: string) {
    await expect(this.medicalCase).toBeTruthy();
    console.log("User is able to check the Medical Case Details");

  }

  async clickOnMedicalCase() {
    this.newPage.keyboard.press('PageDown');
    await this.newPage.getByTitle('Medical Case').getByRole('img').click();
    await this.newPage.waitForTimeout(8000);
  }
  async verifyMedicalCaseLinkFunctionality() {
    await this.newPage.waitForTimeout(10000);
    await this.listOfMedicalCases.isVisible();
  }
  async naviateToListofMedicalCases() {
    await this.newPage.waitForTimeout(10000);
    await this.listOfMedicalCases.isVisible();
  }
  async verifyListOfClaims() {
    await this.newPage.waitForTimeout(10000);
    await expect(this.listOfMedicalCases).toBeVisible();
    console.log("User is able to find the List of Medical Cases");
  }

  async verifyUserCanSelectClaimFromList() {
    await this.newPage.getByRole('button', { name: 'Reset' }).click();
    await this.newPage.getByTitle('Medical Case').getByRole('img').click();
    await this.newPage.locator('.test > td').first().click();
    await this.newPage.locator('.test > td').first().dblclick();
    await expect(this.newPage.locator('nc-medical-case-input')).toContainText('Medical Case');

  }
  async verifyTheAddCaseSymbol() {
    await this.newPage.waitForTimeout(8000);
    await expect(this.addCaseSymbol).toBeTruthy();
    console.log("User is able to find the Add Medical Cases Icon");
  }
  async verifyUserCanChangeMedicalCase() {
    let resetBtn = this.newPage.locator('//button[@class="reset-button"]');
    expect(resetBtn).toBeTruthy();
    await resetBtn.click();
  }

  async verifyUserCanChangeMedicalCaseUsingReset() {
    //let beforeReset = this.txt_MedicalCase.textContent();
    const beforeReset = this.newPage.locator('//input[@id="mat-input-24"]').textContent();
    console.log(beforeReset);
    this.newPage.keyboard.press('PageDown');
    await this.newPage.getByTitle('Medical Case').getByRole('img').click();
    await this.newPage.waitForTimeout(8000);
    const resetBtn = this.newPage.locator('//button[@class="reset-button"]');
    expect(resetBtn).toBeTruthy();
    await resetBtn.click();
    let afterReset = this.newPage.locator('//input[@id="mat-input-24"]').textContent();
    console.log(afterReset);
    console.log("User is able to update the Medical case using Reset button");
  }
  async veridyUserCanClickOnFOC() {
    let FOCDropdown = this.newPage.getByText("Physical Illness");
    expect(FOCDropdown).toBeTruthy();
    await FOCDropdown.click();
    console.log("User Can click on the FOC dropdown");


  }
  async verifyUserCanChangeTheFOC(FOC: string) {
    let FOCValue = this.newPage.getByText('Physical Illness', { exact: true });
    expect(FOCValue).toBeTruthy();
    await FOCValue.click();
    console.log("User can change the FOC - Selected Physical Illness");

    // Locate the dropdown menu and select 'Accidental Injury' specifically
    let FOCValueAfterChange = this.newPage.locator('.mat-option-text', { hasText: ' Accidental Injury ' });
    expect(FOCValueAfterChange).toBeTruthy();
    await FOCValueAfterChange.click();

    // Verify that the selected value is updated
    let selectedFOCValue = this.newPage.locator('//mat-select[@id="selectedFoc"]');
    await expect(selectedFOCValue).toHaveText(FOC);
    await this.newPage.waitForTimeout(5000);
    console.log("User Can Change the FOC value from dropdown - Selected Accidental Injury");
  }


  async verifyUserCanChangeTheCause(Cause: string) {
    // Use a more specific locator to identify the correct element
    let causeValue = this.newPage.locator('span:has-text("to be specified under")').first();
    expect(causeValue).toBeTruthy();
    await causeValue.click();
    console.log("User can change the Cause - to be specified under");

    // Locate the dropdown menu and select 'Malignancy' specifically
    let causeValueAfterChange = this.newPage.locator('span:has-text("Malignancy")').first();
    expect(causeValueAfterChange).toBeTruthy();
    await causeValueAfterChange.click();

    // Verify that the selected value is updated
    let selectedCauseValue = this.newPage.locator('//mat-select[@id="selectedCause"]//div[@class="mat-select-value"]');
    await expect(selectedCauseValue).toHaveText(Cause);
    await this.newPage.waitForTimeout(5000);
    console.log("User Can Change the Cause value from dropdown - Malignancy");
  }

  async verifyUserCanChangeSpecificAssessment2() {
    await expect(this.newPage.getByLabel('Specific Assessment* (1)')).toBeVisible();
    await this.newPage.locator('primary-and-secondary-assessments').getByRole('img', { name: 'No icon found' }).click();
    await this.newPage.getByRole('button', { name: 'No Icon Clear' }).click();
    await this.newPage.getByLabel('ICD Source').locator('span').click();
    await this.newPage.getByText('ICD 9').click();
    await this.newPage.getByLabel('ICD Source').locator('div').first().click();
    await this.newPage.getByText('ICD10-CM').click();
    await this.newPage.getByLabel('Specific Assessment Description *').click();
    await this.newPage.getByLabel('Specific Assessment Description *').fill('accident');
    await this.newPage.getByRole('button', { name: 'No icon found Search' }).click();
    await this.newPage.getByText('D78.11 Accidental puncture').click();
    await expect(this.newPage.getByLabel('Specific Assessment* (1)')).toBeVisible();
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
  async verifyUserCanclickOnTreatmentType() {
    let treatmentTypeDropdown = this.newPage.locator('button[class="pr-assess-button"]');
    expect(treatmentTypeDropdown).toBeTruthy();
    await treatmentTypeDropdown.click();
    console.log("User Can click on the Treatment Type dropdown");

  }
  async verifyUserCanchangeTreatmentType2() {

    /*
    await expect(this.newPage.getByText('Medical Treatment Type')).toBeVisible();
    await expect(this.newPage.locator('nc-medical-file-info')).toContainText('MedicalTreatment Type');
    await this.newPage.getByLabel('Treatment Type').locator('div').nth(3).click();
    await this.newPage.getByText('MediumSurgery').click();
    await expect(this.newPage.getByLabel('Treatment Type')).toContainText('MediumSurgery');
    await this.newPage.getByText('MediumSurgery').click();
    await this.newPage.getByText('Medical', { exact: true }).click();
    await expect(this.newPage.getByText('Medical', { exact: true })).toBeVisible();
    */
    await expect(this.newPage.getByText('MedicalTreatment Type')).toBeVisible();
    await this.newPage.getByLabel('Treatment Type').locator('div').first().click();
    await this.newPage.getByText('Critical Illness').click();
    await expect(this.newPage.getByText('Critical Illness')).toBeVisible();
    await this.newPage.getByText('Critical Illness').click();
    await this.newPage.getByText('Medical', { exact: true }).click();
    await expect(this.newPage.getByText('Medical', { exact: true })).toBeVisible();
  }
  async verifyExportToXlsBtn(ExportToXls: string) {
    await this.exportToXls.isVisible();

  }
  async verifyExportToXlsFunctionality() {
    await this.exportToXls.isVisible();
    await this.newPage.getByRole('button', { name: 'Export to Excel' }).click();
    await this.newPage.waitForTimeout(5000);

  }
  async verifyEOConMedicalCase() {
    await this.lblEOC.isVisible();

  }

  async verifyclaimStatusonMedicalCase() {
    await this.lblEOC.isVisible();

  }
  async verifyclaimReferenceonMedicalCase() {
    await this.lblEOC.isVisible();

  }
  async verifyAdmissionDateonMedicalCase() {
    await this.lblEOC.isVisible();

  }
  async verifyDiagnosisOnClaim() {

    let Diagnosis = this.newPage.locator('//span[contains(text(),"Diagnosis")]');
    expect(Diagnosis).toBeTruthy();
  }
  async verifyCurrencyOnClaim() {

    let currency = this.newPage.locator('//span[contains(text(),"Currency")]');
    expect(currency).toBeTruthy();
  }
  async verifyProviderOnClaim() {

    let provider = this.newPage.locator('//span[contains(text(),"Provider")]');
    expect(provider).toBeTruthy();
  }
  async verifyFOBOnClaim() {

    let FOB = this.newPage.locator('//span[contains(text(),"FOB")]');
    expect(FOB).toBeTruthy();
  }

  async verifyReservesLogsOnClaim() {

    let logs = this.newPage.locator('//span[contains(text(),"Reserves Logs")]');
    expect(logs).toBeTruthy();
  }
  async clickOnReserveLogs() {
    let LogsIcon = this.newPage.locator('//div[@class="td-icons ng-star-inserted"]//img[@alt="No icon found"]');
    await LogsIcon.click();

  }

  async verifyFunctionalityofReservesLogs() {
    let logs = this.newPage.locator('//span[contains(text(),"Reserves Logs")]');
    expect(logs).toBeTruthy();
    let LogsIcon = this.newPage.locator('//div[@class="td-icons ng-star-inserted"]//img[@alt="No icon found"]');
    await LogsIcon.click();
    let reserveLogsPage = this.newPage.locator('//div[contains(text(),"Reserve Logs")]');
    expect(reserveLogsPage).toBeTruthy();
  }

  async verifyTheFieldsOnReservesLogs() {
    this.verifyFunctionalityofReservesLogs();

    // Verify -Date and Time, Total Reserve, User,Items per page
    await this.newPage.getByLabel('Change sorting for updateDate').click();
    await expect(this.newPage.getByLabel('Change sorting for updateDate').locator('span')).toContainText('Date & Time');
    await expect(this.newPage.getByLabel('Change sorting for totalReserves').locator('span')).toContainText('Total Reservers');
    await expect(this.newPage.getByLabel('Change sorting for userName').locator('span')).toContainText('User');

  }
  async handlePopUp() {
    // Check if the element exists
    const element = await this.newPage.$('button.ok-button');
    if (element) {
      // If the element exists, click on it
      await element.click();
      console.log('Clicked on the element!');
    } else {
      console.log('Element does not exist!');
    }
  }



  async verifyCloseBtnonReservesLogs() {

    let closeBtn = this.newPage.locator('//div[@class="test-res-close"]//img[1]');
    const element = await this.newPage.$('button.ok-button');
    if (element) {
      // If the element exists, click on it
      await element.click();
      console.log('Clicked on the element!');
    } else {
      await expect(closeBtn).toBeVisible();
      console.log('Element does not exist!');
    }
  }

  async verifyFunctionalityOfCloseBtn() {


    let closeBtn = this.newPage.locator('//div[@class="test-res-close"]//img[1]');
    await expect(closeBtn).toBeVisible();
    closeBtn.click();
    let Diagnosis = this.newPage.locator('//div[text()="Medical Case Details"]');
    expect(Diagnosis).toBeTruthy();

  }
  async verifyItemsPerPageOnReservesLogs() {
    let itemsPerPage = this.newPage.locator('#mat-dialog-2 final-grid-component').getByText('Items per page:');
    await expect(itemsPerPage).toBeTruthy();
  }
  async verifySearchBoxOnListOfMedicalCases() {
    expect(this.newPage.getByRole('textbox', { name: 'Search' })).toBeTruthy();
  }
  async verifySearchBoxFUnctionalityOnListOfMedicalCases() {
    expect(this.newPage.getByRole('textbox', { name: 'Search' })).toBeVisible();
    await this.newPage.getByRole('textbox', { name: 'Search' }).click();
    await this.newPage.getByRole('textbox', { name: 'Search' }).fill('drugs');
    expect(this.newPage.getByRole('img', { name: 'No icon found' }).nth(1)).toBeTruthy();
  }
  async verifyMagnifierOnMedicalCase() {
    expect(this.newPage.getByRole('img', { name: 'No icon found' }).nth(1)).toBeTruthy();
  }
  async resultWhenUserEnterSearchData_InSearch_textbox() {
    await this.newPage.getByRole('textbox', { name: 'Search' }).click();
    await this.newPage.getByRole('textbox', { name: 'Search' }).fill('T00000');
    await this.newPage.getByRole('textbox', { name: 'Search' }).press('Enter');
    await expect(this.newPage.getByRole('textbox', { name: 'Search' })).toBeVisible();
  }
}
