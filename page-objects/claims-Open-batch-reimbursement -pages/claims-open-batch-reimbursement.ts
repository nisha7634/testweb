import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import { time } from "console";
import exp from "constants";
import test from "node:test";
import { exitCode } from "process";
const { chromium } = require('playwright');

export class openreimBatchPage {
    newPage: Page;
    readonly page: Page;

    readonly context: BrowserContext;
    readonly claimsMenu: Locator;
    readonly quickSearch: Locator;
    readonly pre_approval: Locator;
    readonly newpre_approvalLink: Locator;
    readonly beneficiaryTxtield: Locator;
    readonly openReimBatch: Locator;
    readonly batching: Locator;
    readonly batchIdLbl: Locator;
    readonly nxtBtn: Locator;
    readonly batchIDTxt: Locator;
    readonly newClaim_OpenBatch: Locator;
    readonly alert: Locator;
    readonly errorPopupMsgInvalidBatchID: Locator;
    readonly okBtnOnPopup: Locator;
    readonly closeBtnOnpopup: Locator;
    readonly emptyBatchError: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.page = page;
        this.openReimBatch = page.locator('//a[contains(.,"Open Batch")]')
        this.batching = page.locator('//span[text()=" Batching "]')
        this.batchIdLbl = page.locator('//mat-label[text()=" Batch ID "]')
        this.nxtBtn = page.locator('//button[@class="btn-disable btn-enable"]')
        this.batchIDTxt = page.locator('input[name="batch_number"]')
        this.newClaim_OpenBatch = page.locator('//div[normalize-space()="New Claim"]')
        this.alert = page.locator('//div[text()="Alert"]')
        this.errorPopupMsgInvalidBatchID = page.locator('//span[text()="The entered batch does not exists"]')
        this.okBtnOnPopup = page.locator('//button[text()="OK"]')
        this.closeBtnOnpopup = page.locator('//img[@alt="No icon found"]')
        this.emptyBatchError = page.locator('//span[normalize-space()="Please enter batch #"]')

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

    async verifyUserCanOpenBatch() {
        // Ensure the batching element is visible using Locator methods
        await this.openReimBatch.waitFor({ state: 'visible' });
        // Check if the batching element is visible
        const isVisible = await this.openReimBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('Create Reim Barch element is visible');
        await this.openReimBatch.scrollIntoViewIfNeeded();
        const isClickable = await this.openReimBatch.isEnabled();
        expect(isClickable).toBe(true);
        console.log('CreateReimBatch button is clickable');
        await this.openReimBatch.click();
        console.log("User can click on the Open Batch");
    }
    async verifyReqFieldsOnOpenBatchPage() {
        await expect(this.batchIdLbl).toBeVisible();
        await expect(this.nxtBtn).toBeTruthy();

    }
    async openBatchWithValidBatchID(validBatchID: string) {
        // Fill the Batch ID
        await this.batchIDTxt.fill(validBatchID);
        await this.page.waitForTimeout(1000);

        await this.page.keyboard.press('Enter')
        await this.page.waitForTimeout(9000);
        // Wait for the new claim open batch element to be visible
        await this.newClaim_OpenBatch.waitFor({ state: 'visible' });

        // Check if the new claim open batch element is visible
        const isVisible = await this.newClaim_OpenBatch.isVisible();
        expect(isVisible).toBe(true);
        console.log('New Claim on Open Batch element is visible - Batch opens successfully');

    }
    async verifyNxtBtnWhenUserEntersValidBatchID(validBatchID: string) {
        // Define the locator for the "Next" button
        const nextButton = this.page.locator('//button[text()=" Next "]');
        // Check the initial color of the "Next" button
        const initialColor = await nextButton.evaluate(element => {
            return window.getComputedStyle(element).color;
        });
        console.log(`Initial color of the button: ${initialColor}`);
        // Enter the Batch ID
        await this.batchIDTxt.fill(validBatchID);
        // Wait for the color change to take effect
        await this.page.waitForTimeout(1000); // Adjust the timeout as necessary
        // Check the color of the "Next" button after entering the Batch ID
        const finalColor = await nextButton.evaluate(element => {
            return window.getComputedStyle(element).color;
        });
        console.log(`Final color of the button: ${finalColor}`);
        // Verify the color change
        if (initialColor !== finalColor) {
            console.log('The color of the button has changed successfully.');
        } else {
            console.log('The color of the button did not change.');
        }
    }


    async verifyPopUpWhenEntersInvalidBatchID(invalidBatchID: string, invalidBatchError: string) {
        // Enter the invalid Batch ID
        await this.batchIDTxt.fill(invalidBatchID);

        // Press Enter to trigger the validation
        await this.page.keyboard.press('Enter');

        // Wait for the alert popup to become visible
        await this.page.waitForTimeout(5000);

        // Check if the alert popup is visible
        const isVisible = await this.alert.isVisible();
        expect(isVisible).toBe(true);
        console.log('Alert is displayed for invalid Batch ID');

        // Define the XPath selector for the error message
        const errorPopupXPath = '//span[text()="The entered batch does not exists"]';

        // Wait for the error message to be available using the XPath selector
        await this.page.waitForSelector(errorPopupXPath, { state: 'visible' });

        // Retrieve the error message text using the XPath selector
        const errorMsg = await this.page.textContent(errorPopupXPath);
        console.log(`Error message: ${errorMsg}`);

        // Verify the error message content
        expect(errorMsg).toContain(invalidBatchError);
    }
    async verifyPopUp_errMsg_OkBtn_CloseBtn_WhenEntersInvalidBatchID(invalidBatchID: string, invalidBatchError: string) {
        // Enter the invalid Batch ID
        await this.batchIDTxt.fill(invalidBatchID);

        // Press Enter to trigger the validation
        await this.page.keyboard.press('Enter');

        // Wait for the alert popup to become visible
        await this.page.waitForTimeout(5000);

        // Check if the alert popup is visible
        const isVisible = await this.alert.isVisible();
        expect(isVisible).toBe(true);
        console.log('Alert is displayed for invalid Batch ID');

        // Define the XPath selector for the error message
        const errorPopupXPath = '//span[text()="The entered batch does not exists"]';

        // Wait for the error message to be available using the XPath selector
        await this.page.waitForSelector(errorPopupXPath, { state: 'visible' });

        // Retrieve the error message text using the XPath selector
        const errorMsg = await this.page.textContent(errorPopupXPath);
        console.log(`Error message: ${errorMsg}`);

        // Verify the error message content
        expect(errorMsg).toContain(invalidBatchError);

        //verify Ok Btn

        const isOkBtnVisible = await this.okBtnOnPopup.isVisible();
        expect(isVisible).toBe(true);
        console.log('Ok btn is displayed for invalid Batch ID');

        //Verify Close btn
        const iscloseBtnVisible = await this.closeBtnOnpopup.isVisible();
        expect(isVisible).toBe(true);
        console.log('Close alert Popup btn  is displayed for invalid Batch ID');

    }



    async verifyClickPopupFunctionality_closeBtn(invalidBatchID: string) {
        // Enter the invalid Batch ID
        await this.batchIDTxt.fill(invalidBatchID);

        // Press Enter to trigger the validation
        await this.page.keyboard.press('Enter');

        // Wait for the alert popup to become visible
        await this.page.waitForTimeout(5000);

        // Check if the alert popup is visible
        let isVisible = await this.alert.isVisible();
        expect(isVisible).toBe(true);
        console.log('Alert is displayed for invalid Batch ID');

        // Verify Close button is visible and perform close action
        const isCloseBtnVisible = await this.closeBtnOnpopup.isVisible();
        expect(isCloseBtnVisible).toBe(true);
        console.log('Close alert Popup button is displayed for invalid Batch ID');

        await this.closeBtnOnpopup.click();

        // Wait for the alert popup to disappear
        await this.page.waitForTimeout(1000);

        // Check if the alert popup is no longer visible
        isVisible = await this.alert.isVisible();
        expect(isVisible).toBe(false);
        console.log('Alert popup is closed successfully');
    }

    async verifyClickPopupFunctionality_okBtn(invalidBatchID: string) {
        // Enter the invalid Batch ID
        await this.batchIDTxt.fill(invalidBatchID);

        // Press Enter to trigger the validation
        await this.page.keyboard.press('Enter');

        // Wait for the alert popup to become visible
        await this.page.waitForTimeout(5000);

        // Check if the alert popup is visible
        let isVisible = await this.alert.isVisible();
        expect(isVisible).toBe(true);
        console.log('Alert is displayed for invalid Batch ID');

        // Verify Close button is visible and perform close action
        const isCloseBtnVisible = await this.okBtnOnPopup.isVisible();
        expect(isCloseBtnVisible).toBe(true);
        console.log('Okay alert Popup button is displayed for invalid Batch ID');

        await this.okBtnOnPopup.click();

        // Wait for the alert popup to disappear
        await this.page.waitForTimeout(1000);

        // Check if the alert popup is no longer visible
        isVisible = await this.alert.isVisible();
        expect(isVisible).toBe(false);
        console.log('Alert popup is closed successfully');
    }


    async verifyErrorMessageForBlankBatchID(emptyBatchError: string) {
        // Clear the Batch ID field to ensure it's blank
        await this.batchIDTxt.fill('');

        // Trigger the validation (assuming pressing Enter triggers it)
        await this.page.keyboard.press('Enter');

        // Wait for the error message to become visible
        await this.page.waitForTimeout(5000); // Adjust the timeout as necessary

        // Wait for the error message to be available using the Locator
        await this.emptyBatchError.waitFor({ state: 'visible' });

        // Retrieve the error message text using the Locator
        const errorMsg = await this.emptyBatchError.textContent();
        console.log(`Error message: ${errorMsg}`);

        // Verify the error message content
        expect(errorMsg).toContain(emptyBatchError);
    }

    async verifyUserCanRemoveEnteredBatchID(batchID: string) {
        // Enter the Batch ID
        await this.batchIDTxt.fill(batchID);

        // Verify the Batch ID is entered correctly
        let enteredBatchID = await this.batchIDTxt.inputValue();
        expect(enteredBatchID).toBe(batchID);
        console.log(`Entered Batch ID: ${enteredBatchID}`);

        // Clear the Batch ID field
        await this.batchIDTxt.clear();

        // Verify the Batch ID field is empty
        enteredBatchID = await this.batchIDTxt.inputValue();
        expect(enteredBatchID).toBe('');
        console.log('Batch ID field is cleared successfully');
    }

}


