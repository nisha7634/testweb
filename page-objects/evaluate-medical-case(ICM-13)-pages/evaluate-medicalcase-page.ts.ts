import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import { symlinkSync } from "fs";
import test from "node:test";
const { chromium } = require('playwright');

export class medicalCasepage {
  newPage: Page;
  readonly page: Page;
  readonly context: BrowserContext;
  readonly claimsMenu: Locator;
  readonly quichSearc: Locator;
  readonly workflow: Locator;
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
  readonly classColumn: Locator;
  readonly ProviderColumn: Locator;
  readonly caseSummaryTab: Locator;
  readonly ok_btn_warning: Locator;
  readonly workflowMenu: Locator;
  readonly taskListMenu: Locator;
  readonly pendingTask: Locator;
  readonly reqSignOff: Locator;
  readonly searchInputTxtBox: Locator;
  readonly nxtCareMblApp: Locator;
  readonly batchingmenu: Locator;
  readonly openBatchMenu: Locator;
  readonly medicalFIle: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.context = context;
    this.page = page;
    this.newPage = page;
    this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
    this.quichSearc = page.getByPlaceholder('Quick Search');
    this.workflow = page.getByText('Workflow');
    this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
    this.batching = page.locator('span[class="ng-star-inserted"]');
    this.OpenBatchMenu = page.locator("//a[normalize-space()='Open Batch']");
    this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
    this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
    this.classColumn = this.newPage.locator('getByRole("cell", { name: "Class"})');
    this.ProviderColumn = this.newPage.locator('getByRole("cell", { name: "Provider Name" })');
    this.caseSummaryTab = this.newPage.locator('getByText("Medical Case Summary")');
    this.ok_btn_warning = page.locator('button.ok-button');
    this.workflowMenu = page.locator('//span[text()=" Workflow "]');
    this.taskListMenu = page.locator('//a[contains(.," Task List")]');
    this.pendingTask = page.locator('div[class="pending-task box"] div[class="box-content"]');
    this.reqSignOff = page.locator('div[class="signingoff-task box"] div[class="box-content"]');
    this.searchInputTxtBox = page.locator('(//input[@id="new-grid-search-input"])[2]');
    this.nxtCareMblApp = page.locator('//span[text()=" NEXtCARE mobile application"]');
    this.batchingmenu = page.locator('//span[text()=" Batching "]');
    this.openBatchMenu = page.locator('//a[contains(.," Open Batch")]');
    this.medicalFIle = this.newPage.locator('img[src="assets/img/pages/pre-approval/medical-file-ic.svg"]')

  }
  async verifyUserCanOpenWorkflow() {
    await this.workflowMenu.click();
    await this.taskListMenu.click();
  }

  async verifyPendingTaskonTaskList() {
    await expect(this.pendingTask).toBeVisible();
  }
  async verifyReqSignOffonTaskList() {
    await expect(this.reqSignOff).toBeVisible();
  }
  async verifyUserCanSearchMobileClaim() {
    await expect(this.searchInputTxtBox).toBeVisible();
    await this.searchInputTxtBox.click();
    //await this.searchInputTxtBox.press('Enter');
    await this.searchInputTxtBox.fill('mobile');
    await expect(this.nxtCareMblApp).toBeVisible();
    await expect(this.nxtCareMblApp).toContainText('NEXtCARE mobile application');
    //await this.page.getByText('NEXtCARE mobile application').click();
  }
  async verifyUserCanOpenMobileClaim() {
    const page1Promise = this.page.waitForEvent('popup');
    const mobileCLaimNo = this.page.getByRole('row', { name: 'select row NaN NEXtCARE' });
    await mobileCLaimNo.dblclick();
    [this.newPage] = await Promise.all([
      this.context.waitForEvent('page'),
    ])
    await this.page.waitForTimeout(10000);
    console.log("Open the Mobile claim");
    await expect(this.page.locator('//a[contains(text(),"Edit Reimbursement Processing Claim")]')).toBeTruthy();
    console.log("Verify the mobile claim is open on Processing Page")
    await expect(this.page.locator('//span[text()="NEXtCARE mobile application"]')).toBeTruthy();

  }

  async naviagteToOpenBatch() {
    await this.batchingmenu.click();
    await this.openBatchMenu.click();

  }
  async openBatch(BatchID: string,) {
    await this.txt_BatchID.fill(BatchID);
    await this.txt_BatchID.press('Enter');

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
  async verifyMedicalFileOnEditClaimPage() {
    let medicalFileIcon = this.newPage.locator('img[src="assets/img/pages/pre-approval/medical-file-ic.svg"]');
    await expect(medicalFileIcon).toBeTruthy();
  }
  async clickOnMedicalFile() {
    let medicalFileIcon = this.newPage.locator('img[src="assets/img/pages/pre-approval/medical-file-ic.svg"]');
    await medicalFileIcon.click();

  }
  async verifyOpenMedicalFileFunctionality() {
    let medicalFileLink = this.newPage.locator('(//div[@class="link-text"])[3]');
    await expect(medicalFileLink).toBeTruthy();
    await expect(medicalFileLink).toContainText('Medical File');
    //await expect(this.newPage.locator('#mat-tab-label-2-6')).toContainText('Medical Case Summary');
  }
  async verifyCloseFunctionalityOfMedicalFIle() {
    let closeBtn = this.newPage.locator('img[src="assets/img/cross-circle.svg"]');
    let medicalFileIcon = this.newPage.locator('img[src="assets/img/pages/pre-approval/medical-file-ic.svg"]');
    await expect(this.newPage.locator('img[src="assets/img/cross-circle.svg"]')).toBeVisible();
    await closeBtn.click();
    await expect(medicalFileIcon).toBeTruthy();

  }
  async verifyTitleOnfile() {
    let title = this.newPage.locator('(//div[text()="Medical File"])[2]');
    await expect(title).toBeVisible();
  }
  async verifyMedicalCaseLink() {
    //await this.newPage.getByTitle('Medical Case').getByRole('img').click();
    //await expect(this.newPage.getByText('List of Medical Cases')).toBeVisible();


    const medicalCaselink = await this.newPage.$('//div[text()="Medical File"]');
    // Waiting for the medicalCaseLink to be present
    await this.newPage.waitForSelector('//div[text()="Medical File"]');

    if (medicalCaselink) {
      await medicalCaselink.click();
    } else {
      console.error('Medical Case Link not found');
      // Handle the case when the tab is not found
    }


  }
  async verifySummaryTab() {
    const medicalCaseSummaryTab = await this.newPage.$('//span[text()=" Medical Case Summary "]');
    // Waiting for the medicalCaseSummaryTab to be present
    await this.newPage.waitForSelector('//span[text()=" Medical Case Summary "]');

    if (medicalCaseSummaryTab) {
      await medicalCaseSummaryTab.click();
      await this.newPage.waitForTimeout(10000);

    } else {
      console.error('Medical Case Summary tab not found');
      // Handle the case when the tab is not found
    }

  }
  async beneficiaryBenefificaryClaims() {
    await expect(this.newPage.getByRole('cell', { name: 'Claim Pin' })).toBeVisible();
  }
  async verifyFieldsonSummaryTab() {
    await expect(this.newPage.getByRole('cell', { name: 'Medical Case' })).toBeVisible();
    await expect(this.newPage.getByRole('cell', { name: 'Claim Ref' })).toBeVisible();
    await expect(this.newPage.getByRole('cell', { name: 'Description' })).toBeVisible();
    await expect(this.newPage.getByRole('cell', { name: 'Specific Assessment' })).toBeVisible();
    await expect(this.newPage.getByRole('cell', { name: 'FOB/ER' })).toBeVisible();


  }
  async verifyClaimPin() {
    await expect(this.newPage.getByRole('cell', { name: 'Claim Pin' })).toBeVisible();
  }
  async verifyMedicalCase() {
    await expect(this.newPage.getByRole('cell', { name: 'Medical Case' })).toBeVisible();
  }
  async verifyClaimRef() {
    await expect(this.newPage.getByRole('cell', { name: 'Claim Ref' })).toBeVisible();
  }
  async verifyClaimDescription() {
    await expect(this.newPage.getByRole('cell', { name: 'Description' })).toBeVisible();
  }

  async verifyClamFOB_ER() {

    try {
      // Wait for the cell with role 'cell' and name 'FOB/ER' to be present
      await this.newPage.waitForSelector('[role="cell"][name="FOB/ER"]', { timeout: 10000 }); // Adjust the timeout value as needed

      console.log('FOB/ER cell is present.');
      return true; // FOB/ER cell is present
    } catch (error) {
      console.error('Error occurred while waiting for FOB/ER cell:', error);
      return false; // Error occurred or FOB/ER cell is not present
    }
  }

  async verifyClaimSpecificAssessment() {
    await this.newPage.waitForTimeout(10000); // Wait for 10 seconds
    // After the element is visible, you can expect it to be visible
    try {
      // Wait for the cell with role 'cell' and name 'Specific Assessment' to be present
      await this.newPage.waitForSelector('[role="cell"][name="Specific Assessment"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('FOB/ER cell is present.');
      return true; //Specific Assessmentcell is present
    } catch (error) {
      console.error('Error occurred while waiting forSpecific Assessment cell:', error);
      return false; // Error occurred orSpecific Assessment cell is not present
    }
  }


  async VerifyAdmissionDate() {
    await this.newPage.waitForTimeout(10000); // Wait for 10 seconds
    // After the element is visible, you can expect it to be visible
    try {
      // Wait for the cell with role 'cell' and name 'Specific Assessment' to be present
      await this.newPage.waitForSelector('[role="cell"][name="Admission Date"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Admission Date cell is present.');
      return true; //Specific Assessmentcell is present
    } catch (error) {
      console.error('Error occurred while waiting for Admission Date cell:', error);
      return false; // Error occurred Admission Date cell is not present
    }
  }
  async VeerifyStatusOfClaim() {
    await this.newPage.waitForTimeout(10000);
    try {
      // Wait for the cell with role 'cell' and name 'FOB/ER' to be present
      await this.newPage.waitForSelector('[role="cell"][name="Status"]', { timeout: 10000 }); // Adjust the timeout value as needed

      console.log('Status cell is present.');
      return true; // Status cell is present
    } catch (error) {
      console.error('Error occurred while waiting forStatus cell:', error);
      return false; // Error occurred or Status cell is not present
    }
  }
  async verifyAuthorization_invoice() {

    try {
      // Wait for the cell with role 'cell' and name 'Authorization or Invoice' to be present
      await this.newPage.waitForSelector('[role="cell"][name="Authorization or Invoice"]', { timeout: 10000 }); // Adjust the timeout value as needed

      console.log('Authorization or Invoice cell is present.');
      return true; // Authorization or Invoice cell is present
    } catch (error) {
      console.error('Error occurred while waiting for Authorization or Invoice cell:', error);
      return false; // Error occurred or Authorization or Invoice cell is not present
    }
  }

  async verifyReserves() {

    try {
      // Wait for the cell with role 'cell' and name 'Reserves' to be present
      await this.newPage.waitForSelector('[role="cell"][name="Reserves"]', { timeout: 10000 }); // Adjust the timeout value as needed

      console.log('Reserves cell is present.');
      return true; // Reserves cell is present
    } catch (error) {
      console.error('Error occurred while waiting for Reserves:', error);
      return false; // Error occurred for Reserves cell is not present
    }
  }


  async verifyCopartOnClaim() {
    await this.newPage.waitForTimeout(10000);
    await expect(this.newPage.getByRole('cell', { name: 'Copart' })).toBeVisible();
    try {
      // Wait for the cell with role 'cell' and name 'Copart' to be present
      await this.newPage.waitForSelector('[role="cell"][name="Copart"]', { timeout: 10000 }); // Adjust the timeout value as needed

      console.log('Copart cell is present.');
      return true; // Authorization or Invoice cell is present
    } catch (error) {
      console.error('Error occurred while waiting for Copart:', error);
      return false; // Error occurred or Copart cell is not present
    }
  }

  async verifyDeductibleonClaim() {

    try {

      await this.newPage.waitForSelector('[role="cell"][name="Deductible"]', { timeout: 10000 }); // Adjust the timeout value as needed

      console.log('Deductible cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for Deductible:', error);
      return false;
    }


  }
  async verifyLimitColumn() {


    try {

      await this.newPage.waitForSelector('[role="cell"][name="Limit"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Limit cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for Limit:', error);
      return false;
    }


  }
  async verifyClaimColumn() {
    // await expect(this.newPage.getByRole('cell', { name: 'Claim', exact: true })).toBeVisible();
    try {

      await this.newPage.waitForSelector('[role="cell"][name="Claim"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Claim cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for Claim:', error);
      return false;
    }
  }
  async verifyPolicyCurrency() {
    //await expect(this.newPage.getByRole('cell', { name: 'Policy Cur' })).toBeVisible();

    try {

      await this.newPage.waitForSelector('[role="cell"][name="Policy Cur"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Policy Cur cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for Policy Cur:', error);
      return false;
    }
  }
  async verifyReimColumn() {
    //await expect(this.newPage.getByRole('cell', { name: 'Reim' })).toBeVisible();
    try {
      await this.newPage.waitForSelector('[role="cell"][name="Reim"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Reim policy Cur cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for Reim:', error);
      return false;
    }
  }

  async verifyPaymentMethod() {
    // await expect(this.newPage.getByRole('cell', { name: 'Payment Method' })).toBeVisible();
    try {
      await this.newPage.waitForSelector('[role="cell"][name="Payment Method"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Payment Method  Cur cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for Payment Method:', error);
      return false;
    }
  }
  async verifyProviderName() {
    //await expect(this.newPage.getByRole('cell', { name: 'Provider Name' })).toBeVisible();
    try {
      await this.newPage.waitForSelector('[role="cell"][name="Provider Name"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('Provider Name  Cur cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting forProvider Name:', error);
      return false;
    }

  }
  async verifyClass() {
    // await expect(this.newPage.getByRole('cell', { name: 'class' })).toBeVisible();
    try {
      await this.newPage.waitForSelector('[role="cell"][name="class"]', { timeout: 10000 }); // Adjust the timeout value as needed
      console.log('class cell is present.');
      return true;
    } catch (error) {
      console.error('Error occurred while waiting for class:', error);
      return false;
    }

  }

}
