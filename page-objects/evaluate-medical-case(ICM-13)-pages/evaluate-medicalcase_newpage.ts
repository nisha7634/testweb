import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import { symlinkSync } from "fs";
import test from "node:test";
const { chromium } = require('playwright');

export class medicalCaseNewpage {
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
    this.claimsMenu = page.locator('//mat-sidenav//a[@hrefmedicalCaseNewpage="/layout/search-claim"]');
    this.batching = page.locator('span[class="ng-star-inserted"]');
    this.OpenBatchMenu = page.locator("//a[normalize-space()='Open Batch']");
    this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
    this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
    this.classColumn = this.newPage.locator('getByRole("cell", { name: "Class"})');
    this.ProviderColumn = this.newPage.locator('getByRole("cell", { name: "Provider Name" })');
    this.caseSummaryTab = this.newPage.locator('getByText("Medical Case Summary")');
    this.ok_btn_warning = page.locator('button.ok-button');
    this.workflowMenu = page.locator('//img[@src="assets/iris/icons/navbar/workflow.svg"]');
    this.taskListMenu = page.locator('//a[contains(.," Task List")]');
    this.pendingTask = page.locator('div[class="pending-task box"] div[class="box-content"]');
    this.reqSignOff = page.locator('div[class="signingoff-task box"] div[class="box-content"]');
    this.searchInputTxtBox = page.locator('(//input[@id="new-grid-search-input"])[2]');
    this.nxtCareMblApp = page.locator('//span[text()=" NEXtCARE mobile application"]');
    this.batchingmenu = page.locator('//img[@src="assets/iris/icons/navbar/batching.svg"]');
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

    await expect(this.newPage.locator('//a[contains(text(),"Edit Reimbursement Processing Claim")]')).toBeVisible();
    await expect(this.newPage.getByText('NEXtCARE mobile application')).toBeVisible();
    await expect(this.newPage.getByText('NEXtCARE mobile applicationRequested Source')).toBeVisible();
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

    await expect(this.medicalFIle).toBeVisible();
    await expect(this.medicalFIle).toContainText('Medical File');
  }
  async clickOnMedicalFile() {
    await this.newPage.getByText('Medical File').click();

  }

  async verifyCloseFunctionalityOfMedicalFIle() {
    let closeBtn = this.newPage.locator('img[src="assets/img/cross-circle.svg"]');
    await expect(this.newPage.locator('img[src="assets/img/cross-circle.svg"]')).toBeVisible();
    await closeBtn.click();
    await expect(this.newPage.getByText('Medical File')).toBeVisible();

  }
  async verifyTitleOnfile() {
    await expect(this.newPage.locator('#mat-dialog-0').getByText('Medical File')).toBeVisible();
  }
  async verifyMedicalCaseLink() {
    let medicalCaseLink = this.newPage.locator('img[class="input-end-icon"]');
    let listOfMedicalCases = this.newPage.locator('div.card-header')
    await medicalCaseLink.click();
    await expect(listOfMedicalCases).toBeVisible();
  }
  async verifySummaryTab() {
    let medicalCaseSUmmaryTab = this.newPage.locator('//span[text()=" Medical Case Summary "]')
    await expect(medicalCaseSUmmaryTab).toBeVisible();
    await medicalCaseSUmmaryTab.click();
    //await expect(this.caseSummaryTab).toBeVisible();
    //await this.caseSummaryTab.click();

  }
  async beneficiaryBenefificaryClaims() {
    let cliamPin = this.newPage.locator('//th[text()="Claim Pin"]');
    await expect(cliamPin).toBeVisible();
  }
  async verifyFieldsonSummaryTab() {
    let medicalCaseColumn = this.newPage.locator('//th[text()="Medical Case"]');
    let ClaimRef = this.newPage.locator('//th[text()="Claim Ref"]');
    let Description = this.newPage.locator('//th[text()="Description"]');
    let Specific_Assessment = this.newPage.locator('//th[text()="Specific Assessment"]');
    let FOB_ER = this.newPage.locator('//th[text()="FOB/ER "]');
    await expect(medicalCaseColumn).toBeVisible();
    await expect(ClaimRef).toBeVisible();
    await expect(Description).toBeVisible();
    await expect(Specific_Assessment).toBeVisible();
    await expect(FOB_ER).toBeVisible();
  }
  async verifyClaimPin() {
    let cliamPin = this.newPage.locator('//th[text()="Claim Pin"]');
    await expect(cliamPin).toBeVisible();
  }
  async verifyMedicalCase() {
    let medicalCaseColumn = this.newPage.locator('//th[text()="Medical Case"]');
    await expect(medicalCaseColumn).toBeVisible();
  }
  async verifyClaimRef() {
    let ClaimRef = this.newPage.locator('//th[text()="Claim Ref"]');
  }
  async verifyClaimDescription() {
    let Description = this.newPage.locator('//th[text()="Description"]');
  }

  async verifyClamFOB_ER() {
    let FOB_ER = this.newPage.locator('//th[text()="FOB/ER "]');
  }
  async verifyClaimSpecificAssessment() {
    let Specific_Assessment = this.newPage.locator('//th[text()="Specific Assessment"]');
  }
  async VerifyAdmissionDate() {
    let admissionDate = this.newPage.locator('//th[text()="Admission Date"]');
    await expect(admissionDate).toBeVisible();
  }
  async VeerifyStatusOfClaim() {
    let status = this.newPage.locator('//th[text()="Status"]');
    await expect(status).toBeVisible();
  }
  async verifyAuthorization_invoice() {
    let authorizationInvoiceNumber = this.newPage.locator('//th[text()="Authorization or Invoice"]')
    await expect(authorizationInvoiceNumber).toBeVisible();
  }
  async verifyReserves() {
    let reserves = this.newPage.locator('//th[text()="Reserves"]');
    await expect(reserves).toBeVisible();
  }
  async verifyCopartOnClaim() {
    let copart = this.newPage.locator('//th[text()="Copart"]');
    await expect(copart).toBeVisible();
  }
  async verifyDeductibleonClaim() {
    let deductible = this.newPage.locator('//th[text()="Deductible"]');
    await expect(deductible).toBeVisible();
  }
  async verifyLimitColumn() {
    let limit = this.newPage.locator('//th[text()="Limit"]');
    await expect(this.newPage.getByRole('cell', { name: 'Limit' })).toBeVisible();
  }
  async verifyClaimColumn() {
    let claim = this.newPage.locator('//th[text()="Claim"]');
    await expect(claim).toBeVisible();
  }
  async verifyPolicyCurrency() {
    let policyCurrency = this.newPage.locator('//th[text()="Policy Cur"]');
    await expect(policyCurrency).toBeVisible();
  }
  async verifyReimColumn() {
    let reimClaim = this.newPage.locator('//th[text()="Reim"]')
    await expect(reimClaim).toBeVisible();
  }
  async verifyPaymentMethod() {
    let paymentMethod = this.newPage.locator('//th[text()="Payment Method"]');
    await expect(paymentMethod).toBeVisible();
  }
  async verifyProviderName() {
    let providerName = this.newPage.locator('//th[text()="Payment Method"]');
    await expect(providerName).toBeVisible();
    //await expect(this.ProviderColumn).toBeVisible();
  }
  async verifyClass() {
    let classColumn = this.newPage.locator('//th[text()="Class"]');
    await expect(classColumn).toBeVisible();
  }

}
