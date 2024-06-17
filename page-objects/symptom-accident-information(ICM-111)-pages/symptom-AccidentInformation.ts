import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import test from "node:test";
const { chromium } = require('playwright');

export class accidentalInfoPage {
  newPage: Page;
  readonly page: Page;
  readonly context: BrowserContext;
  readonly claimsMenu: Locator;
  readonly batching: Locator;
  readonly quickSearch: Locator;
  readonly OpenBatchMenu: Locator;
  readonly openBatchHeading: Locator;
  readonly txt_BatchID: Locator;
  readonly btn_nxt: Locator;
  readonly authorizationNo: Locator;
  readonly editClaimTitle: Locator;
  readonly ashopAssessmentPage: Locator;

  readonly reasonForVisit: Locator;

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
    this.openBatchHeading = page.locator('//div[@class="heading"]');
    this.btn_nxt = page.locator('btn-disable btn-enable');

    this.reasonForVisit = this.newPage.locator('label[for="A1S2A3O4P5reasonForVisit0-input"] div[class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"]')

  }
  async verifyPageTitle(expectedPageTitle: string) {
    await this.page.waitForTimeout(10000);
    const actualPageTitle = await this.page.title();
    await this.page.waitForTimeout(5000);
    expect(actualPageTitle).toBe(expectedPageTitle);
  }
  async verifyUserCanOpenWorkflow() {
    await this.page.getByText('Workflow').click();
    await this.page.getByRole('link', { name: 'Task List' }).click();
  }

  async verifyPendingTaskonTaskList() {
    await expect(this.page.getByText('Pending Tasks')).toBeVisible();
  }
  async verifyReqSignOffonTaskList() {
    await expect(this.page.getByText('Requiring Sign Off')).toBeVisible();
  }
  async verifyUserCanSearchMobileClaim() {
    await expect(this.page.getByRole('textbox', { name: 'Search', exact: true })).toBeVisible();
    await this.page.getByRole('textbox', { name: 'Search', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Search', exact: true }).press('Enter');
    await this.page.getByRole('textbox', { name: 'Search', exact: true }).fill('mobile');
    await expect(this.page.getByText('NEXtCARE mobile application')).toBeVisible();
    await expect(this.page.locator('tbody')).toContainText('NEXtCARE mobile application');
    await this.page.getByText('NEXtCARE mobile application').click();
  }
  async verifyUserCanOpenMobileClaim() {
    const page1Promise = this.page.waitForEvent('popup');
    const mobileCLaimNo = this.page.getByRole('row', { name: 'select row NaN NEXtCARE' });

    await mobileCLaimNo.dblclick();
    [this.newPage] = await Promise.all([
      this.context.waitForEvent('page'),
    ])
    await expect(this.newPage.getByText('Edit Reimbursement Processing')).toBeTruthy();
    await expect(this.newPage.getByText('NEXtCARE mobile application')).toBeTruthy();
    await expect(this.newPage.getByText('NEXtCARE mobile applicationRequested Source')).toBeTruthy();

  }
  async naviagteToOpenBatch(OpenBatchTitle: string) {
    await this.quickSearch.fill("Batching");
    await this.quickSearch.press('Enter');
    await this.OpenBatchMenu.click();
    await expect(this.openBatchHeading).toHaveText(OpenBatchTitle);
  }
  async openBatch(BatchID: string) {
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


  async verifyUserCanClickOnSpecificAssessment() {
    //locator for specific assessment
    let title = await this.newPage.locator('.title');
    await expect(this.newPage.getByLabel('Specific Assessment* (1)')).toBeVisible();
    await this.newPage.locator('button[class="pr-assess-button"]').click();
    await expect(this.newPage.getByLabel('Specific Assessment* (1)')).toBeVisible();
    await expect(title).toBeVisible();

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
  async verifyAssessmentBtn() {
    await expect(this.newPage.locator('#screen-third-row-id auto-complete-component div').filter({ hasText: 'Specific Assessment* (1)' }).nth(4)).toBeVisible();
  }
  async navigateToASOAP() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
  }
  async verifyAssopBtn() {
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeTruthy();
  }
  async verifyTitleonASOAP() {
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
  }
  async verifyThespecificAssessmentDisplayed() {

    await expect(this.newPage.getByLabel('Specific Assessment* (1)')).toBeVisible();
  }
  async verifyUserNavigationFromAsseeementBtn() {

    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('ASOAP Assessments');
  }
  async verifyTitleonASOAPAss() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('ASOAP Assessments');
    //await expect(this.newPage.locator('//button[normalize-space()="Specific Assessment"]')).toBeVisible();
  }
  async VerifyFieldBloodPressure() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Blood Pressure')).toBeVisible();

  }

  async VerifyFieldTemperature() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('Temperature');

  }

  async vrifyFieldPulse() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('Pulse');
  }
  async verfiyFieldRespiratoryRate() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('Respiratory Rate');
  }

  async verfiyFieldWeight() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('Weight');
  }
  async verifyFieldLMP() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('LMP');
  }
  async verify() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('LMP');
  }
  async VerifyChiefComplaintsSymptomes() {

    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('Chief Complaint Symptoms');
  }
  async verifySearchField() {

    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByRole('textbox', { name: 'Search' })).toBeVisible();
  }
  async verifySearchFieldAcceptsData() {
    await this.newPage.getByRole('textbox', { name: 'Search' }).fill('other');
    await this.newPage.getByRole('textbox', { name: 'Search' }).press('Enter');
    await expect(this.newPage.getByRole('textbox', { name: 'Search' })).toHaveValue('other');

  }
  async verifyMagnifierIcon() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByRole('img', { name: 'No icon found' }).nth(1)).toBeVisible();

  }

  async verifyMagnifierIconFunctionaliy() {
    let magnifierICon = this.newPage.locator('//div[@class="new-grid-search-suffix ng-star-inserted"]//img[1]');
    let expResult = this.newPage.locator('td.mat-cell.cdk-column-assessmentDesc');
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await this.newPage.getByRole('img', { name: 'No icon found' }).nth(1).click();
    await expect(expResult).toBeVisible();



  }
  async verifyExportToxlsBtn() {
    await expect(this.newPage.getByRole('button', { name: 'Export to Excel' })).toBeVisible();
  }
  async verifyTheSpecificAssessmentonASOAP() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for specificAssessment')).toContainText('Specific Assessment');

  }
  async verifyAssessmentOnASOAP() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for assessmentDesc')).toContainText('Assessment');
  }


  async verifyGeneralAssessmentAOSP() {

    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for generalAssessment')).toContainText('General Assessment');


  }
  async verifyIsPrimaryOnASOAP() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for isPrimaryAssess')).toContainText('Is Primary');
  }
  async verifyFirstOccureDate() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for firstOccurrenceDate')).toContainText('First Occur Date');

  }
  async verifyPOA() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for poaId')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for poaId')).toContainText('POA');

  }
  async verifReasonForVisit() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for reasonForVisit')).toContainText('Reason for Visit');
  }
  async VerifyFirstOccureDate_Clickable() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for firstOccurrenceDate')).toBeVisible();
    await this.newPage.locator('.test > td:nth-child(5)').dblclick();
    await expect(this.newPage.locator('mat-datepicker-toggle[class="date mat-datepicker-toggle"] button[aria-label="Open calendar"]')).toBeVisible();


  }
  async verifyCalendarOnFirstOccureDate() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for firstOccurrenceDate')).toBeVisible();
    await this.newPage.locator('.test > td:nth-child(5)').dblclick();

    await expect(this.newPage.locator('mat-datepicker-toggle[class="date mat-datepicker-toggle"] button[aria-label="Open calendar"]')).toBeVisible();
  }
  async selectTheDateFromCalendar() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for firstOccurrenceDate')).toBeVisible();
    await this.newPage.locator('.test > td:nth-child(5)').dblclick();
    //const buttonLocator = '.grid-datepicker .date.mat-datepicker-toggle button.mat-icon-button';
    const buttonLocator = this.newPage.locator(' input[name="dateF"]')
    await buttonLocator.fill('1-1-2024');
  }

  async verifyUserCanViewAccidentRelatedData() {
    let accidentToggleBtn = this.newPage.locator('//label[@for="mat-slide-toggle-71-input"]//div[@class="mat-slide-toggle-bar"]');
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await this.newPage.getByText('Accident').click();
    //await expect(accidentToggleBtn).toContainText('Accident');

  }

  async verifySymptompsDescription() {
    let symptomsDescription = this.newPage.locator('//mat-label[text()="Chief Complaint Symptoms"]');
    await expect(symptomsDescription).toBeTruthy();

  }

  async verifyUserCanSeeDescriptionOfAccident() {
    const accidentToggleBtn = this.newPage.locator('(//div[@class="mat-slide-toggle-bar"])[3]');
    const description = this.newPage.locator('//mat-label[text()="Description of the accident "]');

    // Click on the button to navigate to ASOAP Assessments
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();

    // Wait for the toggle button to be visible
    await accidentToggleBtn.waitFor({ state: 'visible', timeout: 5000 });

    // Check if the toggle button is selected
    const isSelected = await accidentToggleBtn.isChecked();
    console.log(`Toggle button selected state: ${isSelected}`);

    // If the toggle button is not selected, select it
    if (!isSelected) {
        await accidentToggleBtn.click();
        console.log('Toggle button was not selected. Clicked to select.');
    } else {
        console.log('Toggle button was already selected.');
    }

    // Wait for the description to be visible
    await description.waitFor({ state: 'visible', timeout: 5000 });
    await expect(description).toBeVisible();
}

  async verifyusercanSeeTreatmentOfSymptomsReceivedStatus() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for treatmentOfSymptoms')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for treatmentOfSymptoms')).toContainText('Received Treatment');
  }
  async verifyDateOfFisrtTreatment() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for dateFirstTreatmentForSymptoms')).toContainText('Date of first treatment for symptoms');
  }
  async verifyAccidentToggle() {
    let accidentToggleBtn = this.newPage.locator('(//div[@class="mat-slide-toggle-bar"])[3]');
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(accidentToggleBtn).toBeVisible();
  }
  async verifyDescriptionDisplayedWhenClaimRelatedToAccident() {
    let txtAccidentDescription = await this.page.locator('input[name="accidentDesc"]');

    await (txtAccidentDescription).fill('Sports Accident');
    await this.newPage.getByLabel('Description of the accident  *').press('Enter');
    await this.newPage.getByRole('button', { name: 'Apply' }).click();
    await expect(this.newPage.getByRole('button', { name: 'Adjudicate' })).toBeVisible();
    await expect(this.newPage.locator('#expand-save')).toContainText('Adjudicate');
    await this.newPage.getByRole('button', { name: 'Adjudicate' }).click();
    await expect(this.newPage.locator('confirm-popup')).toContainText('Adjudication Result');
    await expect(this.newPage.getByRole('button')).toContainText('OK');
    await this.newPage.getByRole('img', { name: 'No icon found' }).click();
  }
  async verifyUserCanSelectDeselctResonForVisit() {
    let reasonForVisitfield = this.newPage.locator('td[class="mat-cell cdk-column-reasonForVisit mat-column-reasonForVisit ng-star-inserted"]');

    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await this.newPage.getByText('ASOAP AssessmentsBlood').click();
    await expect(this.newPage.getByLabel('Change sorting for reasonForVisit')).toBeVisible();
    await expect(this.newPage.getByLabel('Change sorting for reasonForVisit')).toContainText('Reason for Visit');
    await reasonForVisitfield.dblclick();
    await expect(this.newPage.locator('#A1S2A3O4P5reasonForVisit0 > .mat-checkbox-layout > .mat-checkbox-inner-container')).toBeVisible();
  }

  async VerifyUserCanAdjudicateClaimWhenViewSymptomRelatedData() {
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();
    await expect(this.newPage.getByLabel('Chief Complaint Symptoms')).toBeVisible();
    await expect(this.newPage.locator('asaop-assessments-popup')).toContainText('Apply');
    await this.newPage.getByRole('button', { name: 'Apply' }).click();
    await expect(this.newPage.getByRole('button', { name: 'Adjudicate' })).toBeVisible();
    await expect(this.newPage.locator('#expand-save')).toContainText('Adjudicate');
    await this.newPage.getByRole('button', { name: 'Adjudicate' }).click();
    await expect(this.newPage.getByRole('button', { name: 'OK' })).toBeVisible();
    await expect(this.newPage.locator('confirm-popup')).toContainText('Adjudication Result');
    await this.newPage.getByRole('button', { name: 'OK' }).click()
  }
  async verifyUserCanSelectReceivedTreatmentCheckbox() {
    //Issue it there with Calender
    await this.newPage.getByRole('button', { name: 'No Icon', exact: true }).click();
    await expect(this.newPage.getByText('ASOAP Assessments')).toBeVisible();

    await this.newPage.getByLabel('Change sorting for treatmentOfSymptoms').click();
    await expect(this.newPage.getByLabel('Change sorting for dateFirstTreatmentForSymptoms')).toContainText('Date of first treatment for symptoms');
    await expect(this.newPage.locator('td[class="mat-cell cdk-column-treatmentOfSymptoms mat-column-treatmentOfSymptoms ng-star-inserted"]')).toBeVisible();
  }

  async VerifyUserCannotSelectFurureDate() {

  }
  async verifyUserCanSelectDateOfFirstOccureDate() {

  }
  async verifyUserCanSelectDateOfFirstTreatment() {

  }
}
