import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import exp from "constants";
import test from "node:test";
import { exitCode } from "process";
const { chromium } = require('playwright');

export class reimBatchPage {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly claimsMenu: Locator;
    readonly quickSearch: Locator;
    readonly pre_approval: Locator;
    readonly newpre_approvalLink: Locator;
    readonly beneficiaryTxtield: Locator;
    readonly createReimBatch: Locator;
    readonly batching: Locator;
    readonly receivedDateinput: Locator;
    readonly payerInput: Locator;
    readonly lblInput: Locator;
    readonly claimCount: Locator;
    readonly capitalChkBox: Locator
    readonly reSubmittedChkBox: Locator;
    readonly errorPopup: Locator;
    readonly errorMsgClaimCount: Locator;
    readonly createBtchBtn: Locator;
    readonly accessBatch: Locator;
    readonly payerqMsg: Locator;
    readonly lblReqMsg: Locator;
    readonly clamcountReqMsg: Locator;
    readonly payerMandatorySymbol;
    readonly lblMandatorySymbol: Locator;
    readonly claimCOuntMandatorySymbol: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.page = page;
        this.createReimBatch = page.locator('//a[contains(.,"Create Batch Reimbursement")]')
        this.batching = page.locator('//span[text()=" Batching "]')
        this.receivedDateinput = page.locator('//input[contains(@class,"date-input mat-input-element")]')
        this.payerInput = page.locator('//input[contains(@class,"payer-input mat-input-element")]')
        this.lblInput = page.locator('//input[@formcontrolname="label"]')
        this.claimCount = page.locator('//input[@formcontrolname="nbrOfClaims"]')
        this.capitalChkBox = page.locator('(//div[@class="mat-checkbox-inner-container"])[1]')
        this.reSubmittedChkBox = page.locator('(//div[@class="mat-checkbox-inner-container"])[2]')
        // this.signinButton = page.locator('button[type="submit"] span[class="mat-button-wrapper"]');
        this.errorPopup = page.locator('(//div[@class="ng-star-inserted"]//span)[3]')
        this.errorMsgClaimCount = page.locator('//mat-error[text()=" Please enter a value greater than zero " ]')
        this.createBtchBtn = page.locator('//div[@class="button-text"]')
        this.accessBatch = page.locator('//div[text()="Access Batch"]')
        this.payerqMsg = page.locator('//mat-error[text()=" Payer is required. "]')
        this.lblReqMsg = page.locator('//mat-error[text()=" Label is required. "]')
        this.clamcountReqMsg = page.locator('//mat-error[text()=" Claims Count is required. "]')
        this.payerMandatorySymbol = page.locator('(//span[text()=" *"])[1]')
        this.lblMandatorySymbol = page.locator('(//span[text()=" *"])[2]')
        this.claimCOuntMandatorySymbol = page.locator('(//span[text()=" *"])[3]')
    }
    async navigateToBatching() {
        // Ensure the batching element is visible using Locator methods
        await this.batching.waitFor({ state: 'visible' });
        // Check if the batching element is visible
        const isVisible = await this.batching.isVisible();
        expect(isVisible).toBe(true);
        console.log('Batching element is visible');
        await this.batching.click();
        await this.page.waitForTimeout(5000);
    }

    async verify_Create_batch_reimbursement() {
        // Ensure the batching element is visible using Locator methods
        await this.createReimBatch.waitFor({ state: 'visible' });
        // Check if the batching element is visible
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Barch element is visible');
    }
    async verifyUserCanClickCreateRimBatch() {
        await this.createReimBatch.scrollIntoViewIfNeeded();
        const isClickable = await this.createReimBatch.isEnabled();
        expect(isClickable).toBe(true);
        console.log('CreateReimBatch button is clickable');
        await this.batching.click();
        console.log("User can click on the Batching");
    }
    async verifyReqFieldsOnCreateBatchReim() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Barch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.receivedDateinput.waitFor({ state: 'visible' });
        await expect(this.receivedDateinput).toBeVisible();
        console.log('receivedDateinput element is visible');
        // Check if receivedDateinput is visible
        await expect(this.payerInput).toBeVisible();
        console.log('payerInput is visible');
        // Check if payerInput is visible
        await expect(this.lblInput).toBeVisible();
        console.log('Lable  is visible');
        // Check if lblInput is visible
        await expect(this.claimCount).toBeVisible();
        console.log('Claim count is visible');
        // Check if elemclaimCount  is visible
        await expect(this.capitalChkBox).toBeVisible();
        console.log('Capital Check Box is visible');
        // Check if Capital Check Box is visible
        await expect(this.reSubmittedChkBox).toBeVisible();
        console.log('Re sumbitted Checckbox is visible');

    }
    async verifyCalendarFunctionality() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Barch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.receivedDateinput.waitFor({ state: 'visible' });
        await expect(this.receivedDateinput).toBeVisible();
        console.log('receivedDateinput element is visible');
        await this.page.getByLabel('Open calendar').click();
        await expect(this.page.getByLabel('Choose month and year')).toBeVisible();
        await this.page.getByLabel('Choose month and year').click();


    }

    async verifyUserCannotSelectFutureDate() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.receivedDateinput.waitFor({ state: 'visible' });
        await expect(this.receivedDateinput).toBeVisible();
        console.log('receivedDateinput element is visible');
        await this.page.getByLabel('Open calendar').click();
        await expect(this.page.getByLabel('Choose month and year')).toBeVisible();
        console.log('Calendar is opened');
        // Attempt to select future dates and verify they are disabled
        const futureDates = this.page.locator('td.mat-calendar-body-cell[aria-disabled="true"]');
        const futureDatesCount = await futureDates.count();
        for (let i = 0; i < futureDatesCount; i++) {
            const futureDate = futureDates.nth(i);
            const isDisabled = await futureDate.getAttribute('aria-disabled') === 'true';
            expect(isDisabled).toBe(true);
            await this.page.waitForTimeout(1000);
        }
        console.log('All future dates are not selectable as expected');
    }



    async verifyUserCanRemoveSelectedDate() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');

        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");

        await this.receivedDateinput.waitFor({ state: 'visible' });
        await expect(this.receivedDateinput).toBeVisible();
        console.log('receivedDateinput element is visible');

        await this.page.getByLabel('Open calendar').click();
        await expect(this.page.getByLabel('Choose month and year')).toBeVisible();
        console.log('Calendar is opened');

        // Select a date from the calendar
        const selectableDates = this.page.locator('td.mat-calendar-body-cell[aria-disabled="false"]');
        await selectableDates.nth(0).click(); // Click the first selectable date

        console.log('Date selected from the calendar');

        // Verify that the selected date is displayed in the input field
        // const receivedDateInput = await this.page.locator('your-receivedDateinput-selector'); // Replace with actual selector for the date input
        const selectedDate = await this.receivedDateinput.inputValue();
        expect(selectedDate).not.toBe(''); // Verify that the input field is not empty

        // Remove the selected date
        await this.receivedDateinput.clear();

        console.log('Selected date removed');

        // Verify that the input field is empty after removing the date
        const removedDate = await this.receivedDateinput.inputValue();
        expect(removedDate).toBe(''); // Verify that the input field is empty after removing the date
    }


    async enterValidReceivedDateToCreateBatch() {

    }
    async verifyUserCanEnterDataInPayer(payer: string) {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.payerInput.waitFor({ state: 'visible' });
        // Fill the payer input field with the provided value
        await this.payerInput.fill(payer);
        // Press down arrow and then enter
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        // Wait for some time to ensure the input value is updated
        await this.page.waitForTimeout(1000);
        // Retrieve the value of the payer input field
        const payerInputValue = await this.payerInput.inputValue();
        console.log(payerInputValue);
        // Verify that the entered value matches the provided value
        expect(payerInputValue).toContain(payer);
    }
    async verifyPayerwithInvalidValue(invalidPayer: string, errorMsgForInvalidPayer: string) {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.payerInput.waitFor({ state: 'visible' });
        // Fill the payer input field with the provided value
        await this.payerInput.fill(invalidPayer);
        // Press down arrow and then enter
        await this.page.keyboard.press('Tab');

        const errorMsg = await this.errorPopup.textContent();
        console.log(errorMsg);
        // Verify that the entered value matches the provided value
        expect(errorMsg).toContain(errorMsgForInvalidPayer);
    }
    async verifyUserCanEnterClaimCount(claimCountValue: string) {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');

        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");

        await this.claimCount.waitFor({ state: 'visible' });

        // Fill the claim count input field with the provided value
        await this.claimCount.fill(claimCountValue);
        console.log(`Filled claim count with value: ${claimCountValue}`);

        // Wait for a short time to ensure the value is set
        await this.page.waitForTimeout(1000);

        // Retrieve the value from the input field
        const claimcountValueRetrieved = await this.claimCount.inputValue();
        console.log(`Claim count value retrieved from input field: ${claimcountValueRetrieved}`);

        // Verify that the entered value matches the provided value
        expect(claimcountValueRetrieved).toBe(claimCountValue);
    }

    async verifyFunctionalityWithInvalidClaimCount(invalidClaimCount: string, erroMsgInvalidCount: string) {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');

        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");

        await this.claimCount.waitFor({ state: 'visible' });

        // Fill the claim count input field with the provided value
        await this.claimCount.fill(invalidClaimCount);
        await this.page.keyboard.press('Tab');

        // Wait for the error message to appear
        const errorMessageLocator = this.errorMsgClaimCount;
        await errorMessageLocator.waitFor({ state: 'visible', timeout: 5000 });

        // Retrieve the error message text
        const msg = await errorMessageLocator.textContent();
        console.log(`Error message displayed: ${msg}`);

        // Verify that the displayed error message matches the expected error message
        expect(msg).toContain(erroMsgInvalidCount);
    }


    async verifyCheckUncheckFunctionalityOf_Capititation() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.capitalChkBox.waitFor({ state: 'visible' });

        // Check the initial state of the checkbox
        const isInitiallyChecked = await this.capitalChkBox.isChecked();
        console.log(`Initial state: ${isInitiallyChecked ? 'Checked' : 'Unchecked'}`);
        // Tick the checkbox if it is not already checked
        if (!isInitiallyChecked) {
            await this.capitalChkBox.check();
            const isCheckedAfterTicking = await this.capitalChkBox.isChecked();
            expect(isCheckedAfterTicking).toBe(true);
            console.log('Checkbox is now checked');
        }
        // Untick the checkbox if it is checked
        await this.capitalChkBox.uncheck();
        const isCheckedAfterUnticking = await this.capitalChkBox.isChecked();
        expect(isCheckedAfterUnticking).toBe(false);
        console.log('Checkbox is now unchecked');

        // Optionally, tick the checkbox again to verify the process
        await this.capitalChkBox.check();
        const isCheckedAfterFinalTick = await this.capitalChkBox.isChecked();
        expect(isCheckedAfterFinalTick).toBe(true);
        console.log('Checkbox is now checked again');
    }

    async verifyCheckUncheckFunctionalityOf_reSubmitted() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.reSubmittedChkBox.waitFor({ state: 'visible' });

        // Check the initial state of the checkbox
        const isInitiallyChecked = await this.reSubmittedChkBox.isChecked();
        console.log(`Initial state: ${isInitiallyChecked ? 'Checked' : 'Unchecked'}`);
        // Tick the checkbox if it is not already checked
        if (!isInitiallyChecked) {
            await this.reSubmittedChkBox.check();
            const isCheckedAfterTicking = await this.reSubmittedChkBox.isChecked();
            expect(isCheckedAfterTicking).toBe(true);
            console.log('Checkbox is now checked');
        }
        // Untick the checkbox if it is checked
        await this.reSubmittedChkBox.uncheck();
        const isCheckedAfterUnticking = await this.reSubmittedChkBox.isChecked();
        expect(isCheckedAfterUnticking).toBe(false);
        console.log('Checkbox is now unchecked');

        // Optionally, tick the checkbox again to verify the process
        await this.reSubmittedChkBox.check();
        const isCheckedAfterFinalTick = await this.reSubmittedChkBox.isChecked();
        expect(isCheckedAfterFinalTick).toBe(true);
        console.log('Checkbox is now checked again');
    }
    async verifyCreateBtnCLickable() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.createBtchBtn.waitFor({ state: 'visible' });

        // Check if the Create Batch button is enabled (clickable)
        const isClickable = await this.createBtchBtn.isEnabled();
        expect(isClickable).toBe(true);
        console.log('Create Batch button is clickable');

        // Optionally, you can perform a click action to verify it further
        await this.createBtchBtn.click();
        console.log('Create Batch button was clicked');

    }
    async verifyUseCanCreateReimBatchSuccessfully(payer: string, lblValue: string, claimCountValue: string) {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');

        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");

        await this.createBtchBtn.waitFor({ state: 'visible' });

        /// Open the calendar
        await this.page.getByLabel('Open calendar').click();

        // Wait for the calendar to open and display dates


        // Select the first available date
        const selectableDates = this.page.locator('//td[@aria-selected="false" and not(@aria-disabled="true")]');
        const count = await selectableDates.count();

        console.log(count);
        if (count > 0) {
            await selectableDates.first().click(); // Click the first selectable date
            console.log('Date selected from the calendar');
        } else {
            console.log('No selectable dates found in the calendar');
        }

        await this.page.waitForTimeout(5000);
        // Fill the payer input field
        await this.payerInput.fill(payer);
        await this.page.waitForTimeout(3000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
        // Fill the label input field
        console.log("Payer Value filled");
        await this.lblInput.fill(lblValue);
        console.log("Lbl Value filled");
        // Fill the claim count input field
        await this.claimCount.fill(claimCountValue);
        await this.page.waitForTimeout(3000);
        // Click the create batch button
        console.log("Claim Count Value filled");
        await this.createBtchBtn.click();
        console.log("Clicked on create btn");
        // Wait for batch creation
        await this.page.waitForTimeout(5000);
        // Verify if the access batch element is visible
        await expect(this.accessBatch).toBeVisible();
        console.log("User is on Access Batch batch and created Batch Successfully");

    }
    async verifyCreateBatchFunctionalityWithBlankFields() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.createBtchBtn.waitFor({ state: 'visible' });
        /// Open the calendar
        await this.page.getByLabel('Open calendar').click();
        // Wait for the calendar to open and display dates
        // Select the first available date
        const selectableDates = this.page.locator('//td[@aria-selected="false" and not(@aria-disabled="true")]');
        const count = await selectableDates.count();
        console.log(count);
        if (count > 0) {
            await selectableDates.first().click(); // Click the first selectable date
            console.log('Date selected from the calendar');
        } else {
            console.log('No selectable dates found in the calendar');
        }
        await this.page.waitForTimeout(5000);
        await this.createBtchBtn.click();
        console.log("Clicked on create btn");
        await expect(this.payerqMsg).toBeVisible();
        await expect(this.lblReqMsg).toBeVisible();
        await expect(this.clamcountReqMsg).toBeVisible();
    }
    async verifyMandatorySymbols() {
        const isVisible = await this.createReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Batch element is visible');
        await this.createReimBatch.click();
        console.log("User is able to click on the Create Batch Reim");
        await this.createBtchBtn.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(5000);
        await this.createBtchBtn.click();
        console.log("Clicked on create btn");
        await expect(this.payerMandatorySymbol).toBeVisible();
        await expect(this.lblMandatorySymbol).toBeVisible();
        await expect(this.claimCOuntMandatorySymbol).toBeVisible();

    }
}


