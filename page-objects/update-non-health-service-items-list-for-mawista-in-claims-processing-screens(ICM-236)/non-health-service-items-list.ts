import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import test from "node:test";
import { threadId } from "worker_threads";
const { chromium } = require('playwright');

export class viewSelectLiabilityPage {
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


  constructor(page: Page, context: BrowserContext) {
    this.context = context;
    this.page = page;
    this.newPage = page;
    this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
    this.quickSearch = page.getByPlaceholder('Quick Search');
    this.pre_approval = page.getByText('Pre-approvals');
    this.newpre_approvalLink = page.getByRole('link', { name: 'New Pre-approval' })
    this.beneficiaryTxtield = page.getByPlaceholder('Select Beneficiary')
    this.searchCardNumber = page.getByText('SearchCard Numberfor:')
    this.requestedSource = page.getByLabel('Requested Source').locator('div').first();
    this.consultationDate = page.locator('#mat-input-7');
    this.FOB = page.getByLabel('FOB').locator('span');
    this.inpatient = page.getByText('In-Patient', { exact: true });



  }
  async navigateToNewPreapproval() {
    await this.page.locator('span').filter({ hasText: 'Claims Pre-approvals' }).click();
    await this.page.getByRole('link', { name: 'New Pre-approval' }).click();


  }
  async verifyUserisOnNewPreapprovalPage() {
    await expect(this.page.getByText('New Claim')).toBeVisible();
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
  async enterAdmissionDate() {
    await this.page.getByTitle('Admission Date').locator('svg').click();
    await this.page.getByLabel('Choose month and year').click();
    await this.page.getByLabel('2024').getByText('2024').click();
    await this.page.getByText('Jan', { exact: true }).click();
    await this.page.getByLabel('02-Jan-2024 00:00:').getByText('2').click();
    await this.page.getByRole('button', { name: 'Set' }).click();
  }
  async eneterDeclarationDate() {
    await this.page.getByTitle('Declaration Date').locator('svg').click();
    await this.page.getByLabel('Choose month and year').click();
    await this.page.getByLabel('2024').getByText('2024').click();
    await this.page.getByText('Jan', { exact: true }).click();
    await this.page.getByLabel('02-Jan-2024 00:00:').getByText('2').click();
    await this.page.getByRole('button', { name: 'Set' }).click();

  }
  async enterConsultationDate(consulatationDate: string) {
    // await this.page.getByTitle('Consultation Date').getByLabel('Open calendar').click();
    //await this.page.getByLabel('Choose month and year').click();
    //await this.page.getByLabel('2024').click();
    //await this.page.getByLabel('-Jan-2024').click();

    await this.consultationDate.click();
    await this.consultationDate.fill(consulatationDate);
    await this.consultationDate.press('Enter');

  }
  async enterFOB() {
    await expect(this.page.getByLabel('FOB').locator('span')).toBeVisible();
    await this.page.getByLabel('FOB').locator('span').click();
    await expect(this.page.locator('#mat-option-271')).toContainText('Liability');
    await expect(this.page.locator('#mat-option-273')).toContainText('Travel Insurance');
    await this.page.getByText('Liability').click();
  }
  async verifyOtherValueinFOC() {
    await this.page.getByLabel('FOC').locator('div').nth(3).click();
    await expect(this.page.getByText('Other')).toBeVisible();
    await this.page.getByText('Other').click();
    await expect(this.page.getByLabel('FOC')).toContainText('Other');
  }

  async enterProviderValue() {
    await expect(this.page.getByLabel('Provider')).toBeVisible();
    await this.page.getByLabel('Provider').click();
    await this.page.getByLabel('Provider').fill('lawyer');
    this.page.waitForTimeout(2000);
  }
  async enterDischargeDate() {
    await this.page.getByTitle('Discharge Date').getByLabel('Open calendar').click();
    await this.page.getByLabel('Choose month and year').click();
    await this.page.getByLabel('2024').click();
    await this.page.getByLabel('-Jan-2024').click();
    await this.page.getByLabel('02-Jan-').click();
  }
  async claimAsReimbursement() {
    await expect(this.page.getByText('Reimbursement', { exact: true })).toBeVisible();
    await expect(this.page.locator('#mat-slide-toggle-4 div').nth(1)).toBeVisible();
    await this.page.locator('#mat-slide-toggle-4 div').first().click();
  }
  async selectMedicalFOC() {
    await expect(this.page.getByLabel('FOC').locator('span')).toBeVisible();
    await this.page.getByLabel('FOC').locator('span').click();
    await this.page.getByText('Physical Illness').click();
  }
  async selectMedicalCaseCauses() {
    await expect(this.page.getByLabel('Causes', { exact: true }).locator('span')).toBeVisible();
    await this.page.getByLabel('Causes', { exact: true }).locator('span').click();
    await this.page.getByText('to be specified under').click();
    await expect(this.page.getByLabel('Causes', { exact: true })).toContainText('to be specified under assessment');
  }
  async selectSpecificCauses() {
    await expect(this.page.getByLabel('Specific Causes').locator('span')).toBeVisible();
    await this.page.getByLabel('Specific Causes').locator('span').click();
    await this.page.getByText('Pre-Hospitalization').click();
    await expect(this.page.getByLabel('Specific Causes')).toContainText('Pre-Hospitalization');
  }
  async selectTreatmentType() {
    await expect(this.page.getByLabel('Treatment Type').locator('span')).toBeVisible();
    await this.page.getByLabel('Treatment Type').locator('span').click();
    await this.page.getByText('Medical', { exact: true }).click();
    await expect(this.page.getByLabel('Treatment Type')).toContainText('Medical');
  }

  async selectSpecificAssessment() {
    //await this.page.getByLabel('Specific Assessment*').click();
    await this.page.getByLabel('Specific Assessment*').fill('J30.9 Allergic rhinitis, unspecified');
    await this.page.getByLabel('Specific Assessment*').press('Enter');
    await this.page.getByText('J30.9 Allergic rhinitis,').dblclick();
  }
  async selectSpecificAssessment_generalSymptoms() {
    //await this.page.getByLabel('Specific Assessment*').click();
    await this.page.getByLabel('Specific Assessment*').fill('general symptoms ');
    await this.page.getByLabel('input[formcontrolname="assessmentDesc"]').press('Enter');
    //await expect(this.page.getByText(' tbody tr[role="row"] td:nth-child(3) div:nth-child(1)')).toBeVisible();
    await this.page.getByText('J30.9 Allergic rhinitis,').dblclick();
    await this.newPage.locator('button[title="Add Service Item"] ').click();
  }

  //Verify user is able to enter req service items
  async verifyAddServiceItemFunctionality() {
    await expect(this.page.getByTitle('Add Service Item')).toBeVisible();
    await this.newPage.locator('button[title="Add Service Item"] ').click();
    await this.newPage.waitForTimeout(5000);
    console.log("User is able to add Service Items using Add items ");
  }
  async verifyUserCanaAddHandlePersonalInjury() {
    await this.page.getByLabel('Services Items').getByRole('combobox').fill('PL1');
    await this.page.getByLabel('Services Items').getByRole('combobox').press('Enter');
    await expect(this.page.getByText('Handle personal injury or')).toBeVisible();
    await expect(this.page.locator('tbody')).toContainText('Handle personal injury or Attend to personal injury matters ( Schutz vor Personenschaden)');
    await this.page.getByLabel('Services Items').getByRole('combobox').click();
    await expect(this.page.locator('tbody')).toContainText('Personal liability');
  }
  async verifyUserCanaCoverCostRepairRentedAccommodation() {
    await this.page.getByLabel('Services Items').getByRole('combobox').fill('PL2');
    await this.page.getByLabel('Services Items').getByRole('combobox').press('Enter');
    await expect(this.page.getByText('Cover cost or Repair rented')).toBeVisible();
    await expect(this.page.locator('tbody')).toContainText('Cover cost or Repair rented accommodation (Schutz vor Schaden an Mietwohnungen)');
    await expect(this.page.locator('tbody')).toContainText('Personal liability');
  }
  async verifyUserCanSetServiceDescriptionForPL3PL4PL5() {
    await this.page.getByLabel('Services Items').getByRole('combobox').fill('PL3');
    await this.page.getByLabel('Services Items').getByRole('combobox').press('Enter');
    await expect(this.page.locator('tbody')).toContainText('Replacement for lost keys (Schutz vor verlorenen Schlusseln)');
    await this.page.getByTitle('Add Service Item').click();
    await this.page.getByLabel('Services Items').getByRole('combobox').fill('PL4');
    await this.page.getByLabel('Services Items').getByRole('combobox').press('Enter');
    await expect(this.page.locator('tbody')).toContainText('Protection against Accidental Damage (High value e.g. repair cost of cars)) (Schutz vor Unfallschaden (hoher Wert,z.B. Reparaturkosten von Autos)');
    await this.page.getByTitle('Add Service Item').click();
    await this.page.getByLabel('Services Items').getByRole('combobox').click();
    await this.page.getByLabel('Services Items').getByRole('combobox').fill('PL5');
    await this.page.getByLabel('Services Items').getByRole('combobox').press('Enter');
    await expect(this.page.locator('tbody')).toContainText('Protection against Accidental Damage (Low value e.g. Mobile Devices)) (Schutz vor versehentlicher Beschadigung (geringer Wert, z.B. mobile Gerate)');

  }

  async verifyUserCanCreateClaimUsingServiceDescriptionsPL1PL2PL3PL4PL5() {
    await this.page.getByRole('button', { name: 'Adjudicate' }).click();
    await expect(this.page.locator('confirm-popup')).toContainText('Warning');
    await this.page.getByRole('button', { name: 'Yes' }).click();
    // await expect(this.page.locator('confirm-popup')).toContainText('Adjudication Result');
    await this.page.getByRole('button', { name: 'OK' }).click();
    await this.page.getByRole('button', { name: 'Save' }).click();
    await expect(this.page.locator('confirm-popup')).toContainText('Warning');
    // await expect(this.page.locator('confirm-popup')).toContainText('There is a claim with the above criteria created, are you sure you want to continue?');
    await this.page.getByRole('button', { name: 'Yes' }).click();
    await expect(this.page.locator('confirm-popup')).toContainText('Medical Case is Empty. Do you wish to continue saving the claim?');
    await expect(this.page.locator('confirm-popup')).toContainText('Yes');
    await this.page.getByRole('button', { name: 'Yes' }).click();
    await expect(this.page.locator('confirm-popup')).toContainText('Done.');
    await this.page.getByRole('button', { name: 'OK' }).click();
    await expect(this.page.locator('confirm-popup')).toContainText('The notification will be sent');
    await this.page.getByRole('button', { name: 'OK' }).click();
    await expect(this.page.locator('nc-claim')).toContainText('Claim Reference*');
    await expect(this.page.locator('nc-breadcrumbs')).toContainText('Edit Pre-approval');

  }

}