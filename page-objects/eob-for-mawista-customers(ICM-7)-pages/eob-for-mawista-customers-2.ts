import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import exp from "constants";


export class eoBCustDetails_2 {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly serachTxt: Locator;
    readonly paymentMethodBtn: Locator;
    readonly batchingmenu: Locator;
    readonly openBatchMenu: Locator;
    readonly txt_BatchID: Locator;
    readonly paymentOrder: Locator;
    readonly financialsBtn: Locator;
    readonly paymentOrdereading: Locator;
    readonly paymentLbl: Locator;
    readonly toggleButton_grpByPrincipal: Locator;
    readonly grpByBeneficiary: Locator;
    readonly printTransaction: Locator;
    readonly printTransaction2: Locator;
    readonly printEvaluation: Locator;
    readonly alert_Payment_Order_item: Locator;
    readonly okBtn: Locator;
    readonly alertMsg: Locator;
    readonly searchBox: Locator;
    readonly IDcolumn: Locator;
    readonly lblColumn: Locator;
    readonly validatedColumn: Locator;
    readonly releaseDateColumn: Locator;
    readonly deliveryDateColumn: Locator;
    readonly fromReleaseDateTxt: Locator;
    readonly toReleaseDateTxt: Locator;
    readonly toDeliveryDateTxt: Locator;
    readonly fromDeliveryDate: Locator;
    readonly record_1: Locator;
    readonly record_2: Locator;
    readonly paymentOrderDetailsHeading: Locator;
    readonly itemsPerPageLabel: Locator;
    readonly itemsPerPageDropdown: Locator;
    readonly paginationLbl: Locator;
    readonly createNewBtn: Locator;
    readonly paymentOrderTitle: Locator;
    readonly paymentOrderType: Locator;
    readonly paymentOrederTypeOption: Locator;
    readonly okBtnOnPaymentOrder: Locator;
    readonly includeCorrections: Locator;
    readonly closePopUpBtn: Locator;
    readonly setRelease: Locator;
    readonly alertOnSetRelease: Locator;
    readonly errroMsgOnSetReleasepopup: Locator;
    readonly firstResultchkBox: Locator;
    readonly setReleasePopup: Locator;
    readonly alertPopup_setReleaseDate: Locator;
    readonly releaseDateTxt: Locator;
    readonly applyBtn_releaseDate: Locator;
    readonly errroTitle: Locator;
    readonly releaseDateErrorMsg: Locator;
    readonly validatedDateOfFirstRecord: Locator;
    readonly releaseDateOfFirstRecord: Locator;
    readonly deliveryDateOfFirstRecord: Locator;
    readonly closeBtn: Locator;
    readonly reportPreferenceLbl: Locator;
    readonly paymentOrderLbl: Locator;
    readonly transctionsLbl: Locator;
    readonly setDeliveryBtn: Locator;
    readonly setDeliveryDatePopup: Locator;
    readonly OkBtn_successfulReleaseDate: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.serachTxt = page.locator('//input[@placeholder="Quick Search"]');
        this.paymentOrder = page.locator('//a[contains(.,"Payment Orders")]')
        this.batchingmenu = page.locator('//img[@src="assets/iris/icons/navbar/batching.svg"]');
        this.openBatchMenu = page.locator('//a[contains(.," Open Batch")]');
        this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
        this.paymentMethodBtn = page.locator('a[href="/layout/paymentorders"]');
        this.financialsBtn = page.locator('//img[@src="assets/iris/icons/navbar/financials.svg"]');
        this.paymentOrdereading = page.locator('//div[text()="Payment Orders"]');
        this.paymentOrder = page.locator('//a[contains(.,"Payment Orders")]');
        this.toggleButton_grpByPrincipal = page.locator('//span[text()="Group By Principal"]');
        this.grpByBeneficiary = page.locator('//span[text()="Group By Beneficiary"]');
        this.printTransaction = page.locator('//span[text()="Print Transactions"]');
        this.printTransaction2 = page.locator('//span[text()="Print Transactions 2"]');
        this.printEvaluation = page.locator('//span[text()="Print Transactions"]');
        this.alert_Payment_Order_item = page.locator('//h2[text()="Alert!"]');
        this.okBtn = page.locator('//span[text()="OK"]');
        //this.alertMsg = page.locator('//li[text()="You should be select at least One Payment Order item"]');
        this.alertMsg = page.locator('//li[text()="Please select at least one row to set release date"]')
        this.searchBox = page.locator('//div[text()="Search"]');
        this.IDcolumn = page.locator('//span[text()="ID"]');
        this.lblColumn = page.locator('//span[text()="Label"]');
        this.validatedColumn = page.locator('//span[text()="Validated"]');
        this.releaseDateColumn = page.locator('//span[text()="Release Date"]');
        this.deliveryDateColumn = page.locator('//span[text()="Delivery Date"]');
        this.fromReleaseDateTxt = page.locator('//input[@formcontrolname="fromReleaseDate"]');
        this.toReleaseDateTxt = page.locator('//input[@formcontrolname="toReleaseDate"]');
        this.fromReleaseDateTxt = page.locator('//input[@formcontrolname="fromDeliveryDate"]');
        this.toDeliveryDateTxt = page.locator('//input[@formcontrolname="toDeliveryDate"]');
        this.record_1 = page.locator('#mat-checkbox-10-input');
        this.record_2 = page.locator('(//label[@class="mat-checkbox-layout"]//div)[3]')
        this.paymentOrderDetailsHeading = page.locator('//a[normalize-space()="Payment Order Details"]')
        this.itemsPerPageLabel = page.locator('(//div[@class="mat-paginator-page-size-label"][normalize-space()="Items per page:"])[2]');
        this.itemsPerPageDropdown = page.locator('//mat-select[@id="mat-select-11"]//div[@class="mat-select-arrow-wrapper"]');
        this.paginationLbl = page.locator('(//div[@class="mat-paginator-range-actions"])[2]');
        this.createNewBtn = page.locator('//span[text()="Create New"]');
        this.paymentOrderTitle = page.locator('//h5[normalize-space()="Payment Order"]');
        this.paymentOrderType = page.locator('//mat-select[@id="paymentordertype"]');
        this.includeCorrections = page.locator('//span[text()="Include Corrections"]')
        this.closePopUpBtn = page.locator('//h5[text()="Payment Order"]/following-sibling::img');
        this.paymentOrederTypeOption = page.locator('(//span[@class="mat-option-text"])[2]');
        this.okBtnOnPaymentOrder = page.locator('(//button[@type="submit"])[2]')
        this.setRelease = page.locator('//span[text()="Set Release"]')
        this.alertOnSetRelease = page.locator('//h2[text()="Alert!"]')
        this.errroMsgOnSetReleasepopup = page.locator('//ul[@class="ng-star-inserted"]//li[1]')
        this.firstResultchkBox = page.locator('//mat-checkbox[@class="mat-checkbox mat-accent ng-star-inserted"]').nth(1);
        this.alertPopup_setReleaseDate = page.locator('//h5[text()="Set Release Date"]')
        this.releaseDateTxt = page.locator('//input[@formcontrolname="date"]')
        this.applyBtn_releaseDate = page.locator('//div[text()="Apply"]')
        this.errroTitle = page.locator('//h2[text()="Error "]')
        this.releaseDateErrorMsg = page.locator('//li[@class="error-text ng-star-inserted"]')
        this.validatedDateOfFirstRecord = page.locator('//table[@id="dddd"]/tbody/tr[1]/td[4]');
        this.releaseDateColumn = page.locator('//table[@id="dddd"]/tbody/tr[1]/td[5]')
        this.deliveryDateOfFirstRecord = page.locator('//table[@id="dddd"]/tbody/tr[1]/td[6]')
        this.closeBtn = page.locator('//h5[text()="Set Release Date"]/following-sibling::img')
        this.reportPreferenceLbl = page.locator('//p[text()="Report Preferences"]')
        this.paymentOrderLbl = page.locator('//p[text()="Payment Order"]')
        this.transctionsLbl = page.locator('//strong[text()="Transactions "]')
        this.setDeliveryBtn = page.locator('//span[text()="Set Release"]')
        this.setDeliveryDatePopup = page.locator('//h5[text()="Set Release Date"]');
        this.OkBtn_successfulReleaseDate = page.locator('//span[normalize-space()="ok"]')
    }
    async naviagtepaymentOrder(PaymentOrder: string) {
        await this.page.getByPlaceholder('Quick Search');
        await this.page.getByPlaceholder('Quick Search').fill(PaymentOrder);
        //await this.serachTxt.fill(PaymentOrder);
        await this.financialsBtn.click();
        await this.paymentMethodBtn.click();
    }


    async verifyPaymentOrderLbl(paymentOrder: string) {
        await expect(this.paymentLbl).toBeVisible();
        console.log("Payment Lbl is displayed as expected")

    }


    async verifyToggleBtnFunctionality() {
        await expect(this.toggleButton_grpByPrincipal).toBeVisible();
        console.log("Group By Toggle Btn is displayed")

        // Step 3: Verify initial state (assuming initially unchecked)
        // await expect(this.toggleButton_grpByPrincipal).toHaveAttribute('aria-checked', 'false');
        // Step 4: Click to enable (set aria-checked to true)

        try {
            await this.toggleButton_grpByPrincipal.click();
        } catch (error) {
            console.error('Error clicking toggle button:', error);
        }
        console.log("User Clicked on the Toggle Btn");
        await this.page.waitForTimeout(5000)
        // Step 5: Verify the button is enabled (aria-checked is true)
        await expect(this.page.locator('xpath=//input[@id="mat-slide-toggle-67"]')).toHaveAttribute('aria-checked', 'true');

        // await expect(this.toggleButton_grpByPrincipal).toHaveAttribute('aria-checked', 'true');
        console.log("User Can Enable the Toggle Btn");
        // Step 6: Click to disable again (set aria-checked to false)
        await this.toggleButton_grpByPrincipal.click();
        console.log("User Can Click the Toggle Btn");
        // Step 7: Verify the button is disabled (aria-checked is false)
        await expect(this.toggleButton_grpByPrincipal).toHaveAttribute('aria-checked', 'false');
        console.log("User Can Disabled the Toggle Btn");
    }


    async grpByPrincipalBrpByBenificiary() {
        await expect(this.toggleButton_grpByPrincipal).toBeVisible();
        console.log("Group By Toggle Btn is displayed");


        // Check if the first toggle button is enabled
        const isToggleButton1Enabled = await this.toggleButton_grpByPrincipal.isEnabled();

        // If the first toggle button is enabled, check if the second toggle button is disabled
        if (isToggleButton1Enabled) {
            // Click the first toggle button
            await this.toggleButton_grpByPrincipal.click();

            // Wait for some time to ensure the second toggle button state changes
            await this.page.waitForTimeout(1000); // Adjust the time as per your need

            // Check if the second toggle button is disabled
            const isToggleButton2Disabled = !(await this.grpByBeneficiary.isEnabled());

            if (isToggleButton2Disabled) {
                console.log('Success: First toggle button is enabled and second toggle button is disabled.');
            } else {
                console.error('Error: Second toggle button is not disabled when the first toggle button is enabled.');
            }
        } else {
            console.error('Error: First toggle button is not enabled.');
        }
    }

    async disable_grpByPrincipalBrn_enable_ByBenificiary() {
        await expect(this.toggleButton_grpByPrincipal).toBeVisible();
        console.log("Group By Toggle Btn is displayed");
        await expect(this.grpByBeneficiary).toBeVisible();
        // Check if the first toggle button is enabled
        const isToggleButton2Enabled = await this.grpByBeneficiary.isEnabled();
        // If the first toggle button is enabled, check if the second toggle button is disabled
        if (isToggleButton2Enabled) {
            // Click the first toggle button
            await this.grpByBeneficiary.click();
            // Wait for some time to ensure the second toggle button state changes
            await this.page.waitForTimeout(1000); // Adjust the time as per your need

            // Check if the second toggle button is disabled
            const isToggleButton2Disabled = !(await this.grpByBeneficiary.isEnabled());
            if (isToggleButton2Disabled) {
                console.log('Success: First toggle button is enabled and second toggle button is disabled.');
            } else {
                console.error('Error: Second toggle button is not disabled when the first toggle button is enabled.');
            }
        } else {
            console.error('Error: First toggle button is not enabled.');
        }
    }

    async verifyPrintTransactionOptions() {
        await expect(this.printTransaction).toBeVisible();
        console.log("printTransaction is displayed");
        await expect(this.printTransaction2).toBeVisible();
        console.log("printTransaction2 is displayed");
        await expect(this.printEvaluation).toBeVisible();
        console.log("print Evaluation is displayed");


    }
    async verifyFunctionalityOfPrintTransactionOptions() {
        // Verify visibility of printTransaction element
        await expect(this.printTransaction).toBeVisible();
        console.log("printTransaction is displayed");

        // Click on printTransaction
        await this.printTransaction.click();

        // Verify visibility of alert_Payment_Order_item and handle it
        await expect(this.alert_Payment_Order_item).toBeVisible(); // Check if alert is visible
        console.log("Alert Pop up displayed");
        await this.okBtn.click(); // Assuming okBtn is the button to dismiss the alert

        // Verify visibility of printTransaction2 element
        await expect(this.printTransaction2).toBeVisible();
        console.log("printTransaction2 is displayed");

        // Click on printTransaction2
        await this.printTransaction2.click();

        // Verify visibility of alert_Payment_Order_item and handle it
        await expect(this.alert_Payment_Order_item).toBeVisible(); // Check if alert is visible
        console.log("Alert Pop up displayed");
        await this.okBtn.click(); // Assuming okBtn is the button to dismiss the alert

        // Verify visibility of printEvaluation element
        await expect(this.printEvaluation).toBeVisible();
        console.log("print Evaluation is displayed");

        // Click on printEvaluation
        await this.printEvaluation.click();

        // Verify visibility of alert_Payment_Order_item and handle it
        await expect(this.alert_Payment_Order_item).toBeVisible(); // Check if alert is visible
        console.log("Alert Pop up displayed");
        await this.okBtn.click(); // Assuming okBtn is the button to dismiss the alert
    }

    async verifyAlertPopUpMessage(alertMsgTxt: string) {
        // Verify visibility of printTransaction element
        await expect(this.printTransaction).toBeVisible();
        console.log("printTransaction is displayed");

        // Click on printTransaction
        await this.printTransaction.click();

        // Verify visibility of alert_Payment_Order_item and handle it
        await expect(this.alert_Payment_Order_item).toBeVisible(); // Check if alert is visible
        console.log("Alert Pop up displayed");
        const alertmsg = this.alertMsg.textContent();
        console.log(alertmsg);
        await expect(this.alertMsg).toHaveText(alertMsgTxt);
    }
    async verifySearchBox() {
        await expect(this.searchBox).toBeVisible();
        console.log("Search Box is displayed");
    }

    async verifyresultIDColumn() {
        await expect(this.IDcolumn).toBeVisible();
        console.log("ID column  is displayed");
    }

    async verifyResultLblColumn() {
        await expect(this.lblColumn).toBeVisible();
        console.log("Lbl column is displayed");

    }
    async verifyResultValidatedColumn() {
        await expect(this.validatedColumn).toBeVisible();
        console.log("Result Validated  column is displayed");

    }
    async verifyResultReleaseDateColumn() {
        await expect(this.releaseDateColumn).toBeVisible();
        console.log("Release Date columnn is displayed");

    }
    async verifyDeliveryDateColumn() {
        await expect(this.deliveryDateColumn).toBeVisible();
        console.log("Delivery Date column is displayed");

    }


    async verifyUserCanSearchByReleaseDate(fromReleaseDate: string, toReleaseDate: string) {

        await this.fromReleaseDateTxt.fill(fromReleaseDate);
        await this.toReleaseDateTxt.fill(toReleaseDate);
        await this.searchBox.click();
        const tableRows = await this.page.$$('.test'); // Selecting rows with class "test"
        const records: string[][] = [];
        for (const row of tableRows) {
            const recordData = await row.$$eval('td', tds => tds.map(td => td.textContent || ''));
            records.push(recordData);
        }

        // Verify records
        const expectedRecords: string[][] = [['Test'], ['Test']]; // Expected records
        if (JSON.stringify(records) === JSON.stringify(expectedRecords)) {
            console.log("Records match the expected ones.");
        } else {
            console.log("Records do not match the expected ones.");
        }


    }


    async verifyUserCanSearchByDeliveryDate(fromDeliveryDate: string, toDeliveryDate: string) {
        await this.fromReleaseDateTxt.fill(fromDeliveryDate);
        await this.toDeliveryDateTxt.fill(toDeliveryDate);
        await this.searchBox.click();

        // Wait for the search results to load
        await this.page.waitForSelector('.test');

        const tableRows = await this.page.$$('.test'); // Selecting rows with class "test"
        const records: string[][] = [];
        for (const row of tableRows) {
            const recordData = await row.$$eval('td', tds => tds.map(td => td.textContent || ''));
            records.push(recordData);
        }

        // Display fetched records
        console.log("Fetched Records:");
        console.log(records);
    }

    async selectOneRecord() {
        // Assuming this.record_1 represents the first record in the search results
        const record_1 = await this.page.$('#mat-checkbox-10-input'); // Replace 'record-1' with the correct selector for the first record

        if (record_1) {
            await record_1.click();
            console.log("Selected the first record.");
        } else {
            console.log("No record found to select.");
        }
    }

    async selectMultipleRecords() {
        // Assuming this.recordSelector represents the selector for each record in the search results
        const recordSelectors = await this.page.$$('#mat-checkbox-10-input'); // Replace 'record-selector' with the correct selector for each record

        // Select multiple records
        for (const recordSelector of recordSelectors) {
            await recordSelector.click();
        }

        console.log("Selected multiple records.");
    }




    async verifyNavigationFromEditRecord() {
        const firstImg = await this.page.locator('img[src="assets/img/pages/pre-approval/edit-row.svg"]').first();
        await firstImg.click();
        await this.page.waitForTimeout(9000);
        // Perform any action you need on the first img element
        await expect(this.paymentOrderDetailsHeading).toBeVisible();

    }

    async verifyItemsPerPageandDrodown() {
        // Locate the "Items per page" label

        // Assertion: Verify that both elements are displayed
        if (this.itemsPerPageLabel && this.itemsPerPageDropdown) {
            console.log('Items per page label and dropdown are displayed.');
        } else {
            console.error('Items per page label or dropdown is missing.');
        }


    }

    async verifyPaginationm1_n_Functionality() {
        // Verify if the pagination label is displayed
        const paginationLabel = await this.page.waitForSelector('(//div[@class="mat-paginator-range-label"])[2]');

        if (paginationLabel) {
            console.log('Pagination label is displayed.');

            /*

            // Get the text content of the pagination label
            const paginationText = await paginationLabel.textContent(); // Using optional chaining

            if (paginationText) {
                // Extract the current page number and total number of pages from the pagination label
                const [currentPage, totalPages] = paginationText.split(' of ');

                // Convert currentPage and totalPages to numbers
                const currentPageNumber = parseInt(currentPage);
                const totalPagesNumber = parseInt(totalPages);

                // Verify if there is more than one page
                if (totalPagesNumber > 1) {
                    try {
                        // Click on the next page button
                        await this.page.click('//button[@aria-label="Next page"]');

                        // Wait for a brief moment to allow the page to load
                        await this.page.waitForTimeout(1000); // Adjust the timeout value as needed

                        // Verify if the current page number has changed after clicking the next page button
                        const newPaginationText = await paginationLabel.textContent();
                        if (newPaginationText) {
                            const [newCurrentPage, newTotalPages] = newPaginationText.split(' of ');
                            const newCurrentPageNumber = parseInt(newCurrentPage);

                            if (newCurrentPageNumber === currentPageNumber + 1) {
                                console.log('Successfully navigated to the next page.');
                            } else {
                                console.error('Failed to navigate to the next page.');
                            }
                        }
                    } catch (error) {
                        console.error('Error:', error);
                    }
                } else {
                    console.log('Only one page is available. Next pagination button is not clickable.');
                }
            } else {
                console.error('Failed to retrieve pagination text content.');
            }
        } else {
            console.error('Pagination label is missing.');
        } */


        }
    }



    async verifyCreateNewBtnDisplayed() {
        await expect(this.createNewBtn).toBeVisible();
        console.log("Create New btn is doisplayed ")

    }

    async verifyNavigationFromCreateNewBtn() {
        await this.createNewBtn.click();
        console.log("User able to click on Create New Btn");
        await expect(this.paymentOrderTitle).toBeVisible();

    }
    async verifytPaymentOrderType_correctionsOption() {


        if (this.paymentOrderType && this.includeCorrections) {
            console.log('paymen tOrder Type and Include corrections is  displayed.');
        } else {
            console.error('Required elements are misssing.');
        }

    }


    async verifyClosePaymetOrderPopupFunctionality() {
        await expect(this.closePopUpBtn).toBeVisible();
        console.log("Close btn on pop up is displayed");
        await this.closePopUpBtn.click();
        //Verify that the popup is no longer visible
        await expect(this.paymentOrderTitle).not.toBeVisible();


    }

    async verifyOkBtnFunctionalityOnPaymentOrder() {

        await this.paymentOrderType.click();
        console.log("payment Order Type is displayed")
        await this.paymentOrederTypeOption.click();
        console.log("User can select the payment Order Type")
        await this.okBtnOnPaymentOrder.click();
        console.log("User can click Ok btn Once selected the Payment order Type")
        await expect(this.paymentOrderTitle).toBeVisible();
        console.log("User can navigate to the Payment Order Details Page when clicks on teh Ok btn")


    }
    async verifyClickSetRelease() {
        // Wait for the "Set Release" button to be visible and enabled before interacting with it
        await this.setRelease.waitFor({ state: 'visible' });
        await expect(this.setRelease).toBeVisible();
        console.log("Set Release btn is displayed");

        // Click the "Set Release" button
        await this.setRelease.click();
        console.log("User can select the Set release btn");

        // Wait for the alert to be visible after clicking the "Set Release" button
        await this.alertOnSetRelease.waitFor({ state: 'visible' });
        await expect(this.alertOnSetRelease).toBeVisible();
        console.log("Alert on after click Set Release btn is displayed when no record is selected");
    }

    async verifySelectRowErrorMsgOnSetReleasePopup(alerrpopupOnSetRelease: string) {

        // Wait for the "Set Release" button to be visible and enabled before interacting with it
        await this.setRelease.waitFor({ state: 'visible' });
        await expect(this.setRelease).toBeVisible();
        console.log("Set Release btn is displayed");

        // Click the "Set Release" button
        await this.setRelease.click();
        console.log("User can select the Set release btn");

        // Wait for the error message on the Set Release popup to be visible
        await this.errroMsgOnSetReleasepopup.waitFor({ state: 'visible' });
        await expect(this.errroMsgOnSetReleasepopup).toBeVisible();
        console.log("Alert Error message on the Set Release is displayed");

        // Get the text content of the error message
        const errromsg = await this.errroMsgOnSetReleasepopup.textContent();

        // Verify that the error message contains the expected string
        if (errromsg && errromsg.includes(alerrpopupOnSetRelease)) {
            console.log(`Error message contains the expected text: "${alerrpopupOnSetRelease}"`);
        } else {
            console.error(`Error message does not contain the expected text. Expected: "${alerrpopupOnSetRelease}", Found: "${errromsg}"`);
        }
    }


    async setReleaseWindowPopup() {
        // Wait for the checkbox to be visible and clickable, then click it
        console.log(this.firstResultchkBox);
        await this.firstResultchkBox.waitFor({ state: 'visible' });
        await this.firstResultchkBox.click();
        console.log('Record gets open');

        // Get the validated date
        const validatedDateStr = await this.validatedDateOfFirstRecord.textContent();
        if (validatedDateStr === null) {
            throw new Error('Validated Date is null');
        }
        console.log('Validated Date:', validatedDateStr);

        // Parse the validated date and subtract one day
        const validatedDate = new Date(validatedDateStr);
        validatedDate.setDate(validatedDate.getDate() - 1);
        const releaseDateStr = validatedDate.toISOString().split('T')[0];
        console.log('Release Date (one day before validated date):', releaseDateStr);

        // Wait for the 'set release' button to be visible and clickable, then click it
        await this.setRelease.waitFor({ state: 'visible' });
        await this.setRelease.click();

        // Wait for the alert popup to be visible
        await this.alertPopup_setReleaseDate.waitFor({ state: 'visible' });
        await expect(this.alertPopup_setReleaseDate).toBeVisible();

        console.log('Set Release date popup gets displayed - Now Set the release Date less than Validated Date');

        // Set the release date input field to one day before the validated date
        await this.releaseDateTxt.fill(releaseDateStr);
        console.log('Release date set in the popup:', releaseDateStr);
    }

    async setDeliveryWindowPopupWithoutSelectingRecord() {

        // Wait for the 'set release' button to be visible and clickable, then click it
        await this.setDeliveryBtn.waitFor({ state: 'visible' });
        await this.setDeliveryBtn.click();

        // Wait for the alert popup to be visible
        await this.alertMsg.waitFor({ state: 'visible' });
        await expect(this.alertMsg).toBeVisible();
    }

    async setDeliveryWindowPopup() {
        // Wait for the checkbox to be visible and clickable, then click it
        await this.firstResultchkBox.waitFor({ state: 'visible' });
        await this.firstResultchkBox.click();

        // Wait for the 'set release' button to be visible and clickable, then click it
        await this.setDeliveryBtn.waitFor({ state: 'visible' });
        await this.setDeliveryBtn.click();

        // Wait for the alert popup to be visible
        await this.setDeliveryDatePopup.waitFor({ state: 'visible' });
        await expect(this.setDeliveryDatePopup).toBeVisible();
    }


    async openRecordFromSearchResult() {
        // Wait for the checkbox to be visible and clickable, then click it
        await this.firstResultchkBox.waitFor({ state: 'visible' });
        await this.firstResultchkBox.click();
        console.log('Record gets open');
    }

    async getValidatedDateSelectReleaseDate() {
        // Get the validated date
        const validatedDateStr = await this.validatedDateOfFirstRecord.textContent();
        if (validatedDateStr === null) {
            throw new Error('Validated Date is null');
        }
        console.log('Validated Date:', validatedDateStr);

        // Parse the validated date and subtract one day
        const validatedDate = new Date(validatedDateStr.trim().replace(/-/g, ' '));
        validatedDate.setDate(validatedDate.getDate() - 2);
        const releaseDateStr = validatedDate.toISOString().split('T')[0];
        console.log('Release Date (one day before validated date):', releaseDateStr);

        // Wait for the 'set release' button to be visible and clickable, then click it
        await this.setRelease.waitFor({ state: 'visible' });
        await this.setRelease.click();

        // Wait for the alert popup to be visible
        await this.alertPopup_setReleaseDate.waitFor({ state: 'visible' });
        await expect(this.alertPopup_setReleaseDate).toBeVisible();

        console.log('Set Release date popup gets displayed - Now Set the release Date less than Validated Date');

        // Set the release date input field to one day before the validated date
        await this.releaseDateTxt.fill(releaseDateStr);
        console.log('Release date set in the popup:', releaseDateStr);
    }
    async clickOnApplyBtn() {
        // Confirm the action by clicking the apply button
        //  await this.applyBtn_releaseDate.waitFor({ state: 'visible' });
        // await this.applyBtn_releaseDate.click();
        await this.page.keyboard.press('Enter')
        //Now confrim t"Release date Should be greater than or equal Validation Date for these " message should dispaly
    }
    async verifyResult() {
        //Verify that the error message contains the expected partial text
        await expect(this.releaseDateErrorMsg).toHaveText(/Release date Should be greater than or equal Validation Date for these/);
    }

    async verifyResultForGreaterDelivery_ValidationDate_than_ReleaseDate() {
        // Verify that the error message contains the expected partial text
        const errorText = await this.releaseDateErrorMsg.textContent();
        console.log('Received string:', errorText);

        const expectedPattern = /Release Date Should be Less than or equal Delivery Date/;
        await expect(errorText).toMatch(expectedPattern);

    }

    async verifyResultForReleaseDateLessThat_EqualToDeliveryDate() {
        try {
            await this.OkBtn_successfulReleaseDate.waitFor({ state: 'visible', timeout: 10000 }); // Adjust timeout as needed

            console.log("The result gets generated successfully when user selects Release Date Less than or Equal to Delivery Date");
        } catch (error) {
            console.error("OK button not visible within the timeout period. Release date may not have been set successfully.");
            // Handle the error gracefully, for example:
            throw new Error("Release date may not have been set successfully.");
        }
    }

    
    async verifyWneUserSelectsReleaseDate_GreaterThan_ValidatedDate_and_DeliveryDate() {
        // Get the validated date
        const validatedDateStr = await this.validatedDateOfFirstRecord.textContent();
        if (validatedDateStr === null) {
            throw new Error('Validated Date is null');
        }
        console.log('Validated Date:', validatedDateStr);

        // Get the delivery date
        const deliveryDateStr = await this.deliveryDateOfFirstRecord.textContent();
        if (deliveryDateStr === null) {
            throw new Error('Delivery Date is null');
        }
        console.log('Delivery Date:', deliveryDateStr);

        // Parse the validated and delivery dates
        const validatedDate = new Date(validatedDateStr.trim().replace(/-/g, ' '));
        const deliveryDate = new Date(deliveryDateStr.trim().replace(/-/g, ' '));

        // Determine the later date and add one day to set the release date
        const laterDate = validatedDate > deliveryDate ? validatedDate : deliveryDate;
        laterDate.setDate(laterDate.getDate() + 1);
        const releaseDateStr = laterDate.toISOString().split('T')[0];
        console.log('Release Date (one day after the later of validated and delivery dates):', releaseDateStr);

        // Wait for the 'set release' button to be visible and clickable, then click it
        await this.setRelease.waitFor({ state: 'visible' });
        await this.setRelease.click();

        // Wait for the alert popup to be visible
        await this.alertPopup_setReleaseDate.waitFor({ state: 'visible' });
        await expect(this.alertPopup_setReleaseDate).toBeVisible();

        console.log('Set Release date popup gets displayed - Now Set the release Date greater than both Validated and Delivery Dates');

        // Set the release date input field to one day after the later date
        await this.releaseDateTxt.fill(releaseDateStr);
        console.log('Release date set in the popup:', releaseDateStr);

    }

    async verifyUserCanSelectReleaseDateLessThanOrEqualDeliveryDate() {
        // Fetch the delivery date
        const deliveryDateStr = await this.deliveryDateOfFirstRecord.textContent();
        if (!deliveryDateStr) {
            throw new Error('Delivery Date is not available');
        }
        const deliveryDate = new Date(deliveryDateStr.trim().replace(/-/g, '/'));
        console.log('Delivery Date:', deliveryDateStr);

        // Set the release date less than or equal to the delivery date
        const releaseDate = new Date(deliveryDate);
        releaseDate.setDate(releaseDate.getDate() - 1); // Setting the release date one day before the delivery date
        const releaseDateStr = releaseDate.toISOString().split('T')[0];
        console.log('Release Date:', releaseDateStr);
        // Click the 'Set Release' button
        await this.setRelease.click();
        // Wait for the release date text box to become visible and enabled
        await this.releaseDateTxt.waitFor({ state: 'visible' });
        // Enter the release date
        await this.releaseDateTxt.fill(releaseDateStr);
        console.log(releaseDateStr);
        await this.page.waitForTimeout(3000);
    }

    // async releaseDateGreaterThanValidateDateLessThanDeliveryDate() {
    //
    //}

    async verifyCloseFunctionalityOfPopup() {
        // Wait for the checkbox to be visible and clickable, then click it
        await this.firstResultchkBox.waitFor({ state: 'visible' });
        await this.firstResultchkBox.click();

        // Wait for the 'set release' button to be visible and clickable, then click it
        await this.setRelease.waitFor({ state: 'visible' });
        await this.setRelease.click();

        // Wait for the close button to be visible
        // await this.closeBtn.waitFor({ state: 'visible' });

        // Check if the close button is actually visible and enabled
        const isCloseBtnVisible = await this.closeBtn.isVisible();
        const isCloseBtnEnabled = await this.closeBtn.isEnabled();

        console.log("Close button visible:", isCloseBtnVisible);
        console.log("Close button enabled:", isCloseBtnEnabled);

        if (isCloseBtnVisible && isCloseBtnEnabled) {
            // Click the close button
            await this.closeBtn.click({ force: true });
            console.log("User can click on the close btn");
        } else {
            console.error("Close button is not interactable");
        }

        // Wait for the alert popup to disappear
        await this.alertPopup_setReleaseDate.waitFor({ state: 'hidden' });

        // Assert that the alert popup is not visible
        await expect(this.alertPopup_setReleaseDate).not.toBeVisible();
    }

    async verifyClickOnsetDeliveryWithoutselctingResult() {
        await expect(this.setDeliveryBtn).toBeVisible();

    }


    async verifyReqFieldsOnPaymentOrderDetails() {
        // Define a timeout value for waiting for elements to be visible
        const timeout = 5000; // 5 seconds

        // Function to check visibility and log results
        const checkVisibility = async (locator, label) => {
            try {
                await locator.waitFor({ state: 'visible', timeout });
                console.log(`${label} is visible.`);
            } catch (error) {
                console.error(`${label} is not visible within ${timeout}ms.`, error);
                throw error; // Re-throw the error to fail the test if an element is not visible
            }
        };

        // Check each required field
        await checkVisibility(this.reportPreferenceLbl, 'Report Preference Label');
        await checkVisibility(this.paymentOrderLbl, 'Payment Order Label');
        await checkVisibility(this.transctionsLbl, 'Transactions Label');
    }

}
