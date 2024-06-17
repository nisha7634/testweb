import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import exp from "constants";


export class eoBCustDetails {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;

    readonly serachTxt: Locator;

    readonly authorizationNo: Locator;
    readonly paymentMethodBtn: Locator;
    readonly batchingmenu: Locator;
    readonly openBatchMenu: Locator;
    readonly txt_BatchID: Locator;
    readonly paymentOrder: Locator;
    readonly financialsBtn: Locator;
    readonly paymentOrdereading: Locator;
    readonly breadcums: Locator;
    readonly paymentLbl: Locator;
    readonly serachCriteriaLbl: Locator;
    readonly searchCriteari_PayerTxt: Locator;
    readonly searchCriteriaCurrency: Locator;
    readonly searchCriteriaAccount: Locator;
    readonly searchCriteriaFromDate: Locator;
    readonly searchCriteriaTODate: Locator;
    readonly searchCriteria_searchButton: Locator;
    readonly noRecordFound: Locator;
    readonly printEvaluationBtn: Locator;
    readonly alertSearchCriteria: Locator;
    readonly alertMsg: Locator;
    readonly searchCriteriaId: Locator;
    readonly searchCriteriaLbl: Locator;
    readonly fromReleaseDate: Locator;
    readonly toReleaseToDate: Locator;
    readonly fromDeliveryDate: Locator;
    readonly toDeleveryDate: Locator;
    readonly batchID: Locator;
    readonly currencyMandatory: Locator;
    readonly payerMandatory: Locator;
    readonly reportPrefrencesLbl: Locator;
    readonly firstOrderDropdown: Locator;
    readonly secondOrderDropdown: Locator;
    readonly sortByFirstOrder: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.serachTxt = page.locator('//input[@placeholder="Quick Search"]');
        this.paymentOrder = page.locator('//a[contains(.,"Payment Orders")]')
        this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
        this.batchingmenu = page.locator('//img[@src="assets/iris/icons/navbar/batching.svg"]');
        this.openBatchMenu = page.locator('//a[contains(.," Open Batch")]');
        this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
        this.paymentMethodBtn = page.locator('a[href="/layout/paymentorders"]');
        this.financialsBtn = page.locator('//span[text()=" Financials "]');
        this.paymentOrdereading = page.locator('//div[text()="Payment Orders"]');
        this.breadcums = page.locator('//div[contains(@class,"fixed top-toolbar-height")]');
        this.paymentLbl = page.locator('(//a[contains(@class,"body-2 text-hint")])[2]');
        this.serachCriteriaLbl = page.locator('//p[text()="Search Criteria"]');
        this.searchCriteari_PayerTxt = page.locator('//input[@id="payerRF56"]');
        this.searchCriteriaCurrency = page.locator('//mat-select[@id="currecnyRF56"]');
        this.searchCriteriaAccount = page.locator('//mat-select[@id="accountRF56"]');
        this.searchCriteria_searchButton = page.locator('//div[text()="Search"]');
        this.searchCriteriaFromDate = page.locator('input[formcontrolname="fromDate"]');
        this.searchCriteriaTODate = page.locator('input[formcontrolname="toDate"]');
        this.noRecordFound = page.locator('//div[text()=" No Records Found "]');
        this.printEvaluationBtn = page.locator('//span[text()="Print Claims Evaluation"]');
        this.alertSearchCriteria = page.locator('h2.mat-dialog-title');
        this.alertMsg = page.locator('//mat-dialog-content[@class="mat-dialog-content ng-star-inserted"]');
        this.searchCriteriaId = page.locator('input[formcontrolname="id"]');
        this.searchCriteriaLbl = page.locator('input[formcontrolname="label"]');
        this.fromReleaseDate = page.locator('input[formcontrolname="fromReleaseDate"]');
        this.toReleaseToDate = page.locator('input[formcontrolname="toReleaseDate"]');
        this.fromDeliveryDate = page.locator('input[formcontrolname="fromDeliveryDate"]');
        this.toDeleveryDate = page.locator('input[formcontrolname="toDeliveryDate"]')
        this.batchID = page.locator('input[formcontrolname="batchId"]');
        this.currencyMandatory = page.locator('//mat-error[text()=" Currency is required "]');
        this.payerMandatory = page.locator('//small[text()=" Payer is required "]');
        this.reportPrefrencesLbl = page.locator('//p[text()="Report Preferences"]');
        this.firstOrderDropdown = page.locator('(//div[@class="mat-select-value"]//span)[3]');
        // this.secondOrderDropdown = page.locator('');
        this.sortByFirstOrder = page.locator('.mat-select-placeholder.ng-tns-c36-169.ng-star-inserted');



    }
    async naviagtepaymentOrder(PaymentOrder: string) {
        await this.page.getByPlaceholder('Quick Search');
        await this.page.getByPlaceholder('Quick Search').fill(PaymentOrder);
        //await this.serachTxt.fill(PaymentOrder);
        await this.financialsBtn.click();
        await this.paymentMethodBtn.click();
    }
    async verifyProperBreadcumsonPaymentPage() {
        await expect(this.breadcums).toBeVisible();
        /*
        // Check if breadcrumbs container exists
        if (this.breadcums) {
            // Check if breadcrumbs container is visible
            const breadcrumbsVisible = await this.breadcums.isVisible();
            if (breadcrumbsVisible) {
                // Get text content of breadcrumbs
                const breadcrumbsText = await this.breadcums.textContent();
                console.log(breadcrumbsText);
                // Check if breadcrumbsText is not null
                if (breadcrumbsText !== null) {
                    // Check if breadcrumbs contain expected text
                    if (breadcrumbsText.includes('Finance') && breadcrumbsText.includes('Payment') && breadcrumbsText.includes('Orders')) {
                        console.log('Valid breadcrumbs for Finance Payment Orders');
                    } else {
                        console.log('Breadcrumbs do not match expected content');
                    }
                } else {
                    console.log('Breadcrumbs text is null');
                }
            } else {
                console.log('Breadcrumbs container is not visible');
            }
        } else {
            console.log('Breadcrumbs container not found');
        }
        */
    }

    async verifyPaymentOrderLbl(paymentOrder: string) {
        await expect(this.paymentLbl).toBeVisible();
        console.log("Payment Lbl is displayed as expected")

    }
    async verifySearchCriteriaLbl(searchCriteria: string) {
        await expect(this.serachCriteriaLbl).toHaveText(searchCriteria)
    }
    async openBatch(BatchID: string) {
        await this.txt_BatchID.fill(BatchID);
        await this.txt_BatchID.press('Enter');
    }

    async verifyFieldsOnSearchCriteria() {
        await expect(this.searchCriteari_PayerTxt).toBeVisible();
        await expect(this.searchCriteriaCurrency).toBeVisible();

    }
    async verifyCurrencyAccountValuesAutofetched(payer: string, currency: string, account: string) {
        await this.searchCriteari_PayerTxt.click();
        await this.searchCriteari_PayerTxt.fill(payer);
        await this.page.waitForTimeout(5000);
        // Press the down arrow key
        await this.page.keyboard.press('ArrowDown');
        // Press the enter key
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);

        const currencyFetchedValue = await this.searchCriteriaCurrency.textContent();
        console.log(currencyFetchedValue);
        await expect(currencyFetchedValue).toContain(currency);

        await this.page.waitForTimeout(5000);
        const accountFetchedValue = await this.searchCriteriaAccount.textContent();
        console.log(accountFetchedValue);
        await expect(accountFetchedValue).toContain(account);
    }

    async verifyValuesFromCurrencyDropdown() {
        console.log("Verify the User can select the First Order Dropdown");

        // Click to open the dropdown
        await this.firstOrderDropdown.click();

        // Wait for the dropdown options to be visible
        const dropdownOptions = this.page.locator('//mat-option[@class="mat-option ng-star-inserted"]');
        await dropdownOptions.first().waitFor({ state: 'visible' });
        await this.page.pause();
        // Get the text content of each option
        const actualValues = await dropdownOptions.evaluateAll(options =>
            options.map(option => option.textContent?.trim()).filter(Boolean)
        );

        // Log each dropdown option
        actualValues.forEach(value => console.log('Dropdown option:', value));

        // Define expected values to check against
        const expectedValues = [
            "ATS", "Afghani", "Algerian Dinar", "Argentine Peso", "Armenian Dram",
            "Aruban Florin", "Australian Dollar", "Azerbaijan Manat", "Bahamian Dollar", "Bahraini Dinar"
        ];

        // Verify that the actual values contain the expected values
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }


    async verifyValuesFromAccountDropdown() {
        // Click on the dropdown to open it
        await this.searchCriteriaCurrency.click();
        await this.page.keyboard.press('ArrowDown');
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('mat-option ng-star-inserted');
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
        const expectedValues = ['ATS', 'Afghani', 'Algerian Dinar', 'Argentine Peso', ' Aruban Florin'];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }

    }
    async verifySearchBtnFunctionality(fromDate: string, toDate: string) {
        // Fill the date fields
        await this.searchCriteriaFromDate.fill(fromDate);
        await this.searchCriteriaTODate.fill(toDate);
        // Click the search button
        await this.searchCriteria_searchButton.click();
        const noRecordsVisible = await this.noRecordFound.isVisible();
        if (noRecordsVisible) {
            console.log('No records found using search btn.');
        } else {
            console.log('Records found using Search Btn');
        }
    }

    async verifyFunctionalityOfSearchbtnWithMandatoryFields() {
        // Click the search button
        await this.searchCriteria_searchButton.click();
        await expect(this.alertMsg).toBeVisible();
    }
    async verifyFunctionalityOfSearchbtnWithAllFields(fromDate: string, toDate: string, fromReleaseDate: string, toReleaseDate: string, fromDeliveryDate: string, toDeliveryDate: string) {
        await this.searchCriteriaFromDate.fill(fromDate);
        await this.searchCriteriaTODate.fill(toDate);
        await this.fromReleaseDate.fill(fromReleaseDate);
        await this.toReleaseToDate.fill(toReleaseDate);
        await this.fromDeliveryDate.fill(fromDeliveryDate);
        await this.toDeleveryDate.fill(toDeliveryDate);
        // Click the search button
        await this.searchCriteria_searchButton.click();
        const noRecordsVisible = await this.noRecordFound.isVisible();
        if (noRecordsVisible) {
            console.log('No records found using search btn.');
        } else {
            console.log('Records found using Search Btn');
        }
    }

    async searchFunctionalityWithoutAnyField() {
        await this.searchCriteria_searchButton.click();
        await expect(this.payerMandatory).toBeVisible();
        await expect(this.currencyMandatory).toBeVisible();
    }

    async verifyReportPreferences(reportPreferences: string) {
        await expect(this.reportPrefrencesLbl).toBeVisible();
        await expect(this.reportPrefrencesLbl).toHaveText(reportPreferences);

    }
    async verifyDropdownValuesOfFirstOrderDropdown(firstOrderDropdown: string) {
        await this.firstOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = this.page.locator('//mat-option//span[text()="' + firstOrderDropdown + '"]');
        // Get the text content of each option using evaluateAll
        const actualValues = await options.evaluateAll((elements) =>
            elements
                .map((element) => element.textContent?.trim())
                .filter((text): text is string => text !== undefined && text !== null)
        );
        // Log each dropdown option
        actualValues.forEach((value) => console.log('Dropdown option:', value));
        // Assert that the expected values are present in the list of options
        const expectedValues = ['Policy Number', 'Patient Name', 'Staff Number', 'Argentine Peso', 'Claim Amount'];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }


    async verifyDropdownValuesByFirstOrder() {
        // Click on the dropdown to open it
        await this.firstOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Policy Number", "Patient Name", "Staff Number", "Claim Amount"];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }

    async VerifySortByFirstOrderValue(firstOrderDropdown: string) {
        console.log("Verify the User can select the First Order Dropdown");
        // Click to open the dropdown
        await this.firstOrderDropdown.click();
        // Wait for the dropdown options to be visible
        const selectOrder = this.page.locator(`//mat-option//span[text()="${firstOrderDropdown}"]`);
        //const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdown.trim()}"]`);
        await selectOrder.waitFor({ state: 'visible' });
        // Click the desired option
        await selectOrder.click();
        // Wait for the dropdown to reflect the selected value
        await expect(this.firstOrderDropdown).toHaveText(firstOrderDropdown);
        console.log("Selected value:", firstOrderDropdown);
    }

    a


    async VerifySortBySecondOrderValue(secondOrderDropdown: string) {
        // Click on the dropdown to open it
        await this.secondOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Policy Number", "Staff Number", "Claim Amount"];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }
    async verifysortByWhenUserSelectFirstOrder_staffName(firstOrderDropdownstaffName: string) {

        console.log("Verify the User can select the First Order Dropdown");
        // Click to open the dropdown
        await this.firstOrderDropdown.click();
        // Wait for the dropdown options to be visible
        const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdownstaffName.trim()}"]`);

        await selectOrder.waitFor({ state: 'visible' });
        // Click the desired option
        await selectOrder.click();
        // Wait for the dropdown to reflect the selected value
        await expect(this.firstOrderDropdown).toHaveText(firstOrderDropdownstaffName);
        console.log("Selected value:", firstOrderDropdownstaffName);

        await this.secondOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Claim Amount", "Patient Name", "Policy Number"]
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }


    async verifysortByWhenUserSelectFirstOrder_PolicyNumber(firstOrderDropdownPolicyNumber: string) {
        console.log("Verify the User can select the First Order Dropdown");
        // Click to open the dropdown
        await this.firstOrderDropdown.click();
        // Wait for the dropdown options to be visible
        const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdownPolicyNumber.trim()}"]`);
        //const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdown.trim()}"]`);
        await selectOrder.waitFor({ state: 'visible' });
        // Click the desired option
        // Click the desired option
        await selectOrder.click();
        // Wait for the dropdown to reflect the selected value
        await expect(this.firstOrderDropdown).toHaveText(firstOrderDropdownPolicyNumber);
        console.log("Selected value:", firstOrderDropdownPolicyNumber);

        await this.secondOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Claim Amount", "Policy Number", "Staff Number"];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }
    }


    async verifysortByWhenUserSelectFirstOrder_PatientName(firstOrderDropdownPName: string) {
        console.log("Verify the User can select the First Order Dropdown");
        // Click to open the dropdown
        await this.firstOrderDropdown.click();
        // Wait for the dropdown options to be visible
        const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdownPName.trim()}"]`);
        //const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdown.trim()}"]`);
        await selectOrder.waitFor({ state: 'visible' });
        // Click the desired option
        await selectOrder.click();
        // Wait for the dropdown to reflect the selected value
        await expect(this.firstOrderDropdown).toHaveText(firstOrderDropdownPName);
        console.log("Selected value:", firstOrderDropdownPName);
        await this.secondOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Claim Amount", "Policy Number", "Staff Number"];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }

    }

    async verifysortByWhenUserSelectFirstOrder_StafftName(firstOrderDropdownstaffName: string) {
        console.log("Verify the User can select the First Order Dropdown");
        // Click to open the dropdown
        await this.firstOrderDropdown.click();
        // Wait for the dropdown options to be visible
        const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdownstaffName.trim()}"]`);
        //const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdown.trim()}"]`);
        await selectOrder.waitFor({ state: 'visible' });
        // Click the desired option
        await selectOrder.click();
        // Wait for the dropdown to reflect the selected value
        await expect(this.firstOrderDropdown).toHaveText(firstOrderDropdownstaffName);
        console.log("Selected value:", firstOrderDropdownstaffName);
        await this.secondOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Claim Amount", "Policy Number", "Staff Number"];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }

    }


    async verifysortByWhenUserSelectFirstOrder_ClaimAmt(firstOrderDropdownClaimAmt: string) {
        console.log("Verify the User can select the First Order Dropdown");
        // Click to open the dropdown
        await this.firstOrderDropdown.click();
        // Wait for the dropdown options to be visible
        const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdownClaimAmt.trim()}"]`);
        //const selectOrder = this.page.locator(`//mat-option//span[normalize-space(text())="${firstOrderDropdown.trim()}"]`);
        await selectOrder.waitFor({ state: 'visible' });
        // Click the desired option
        await selectOrder.click();
        // Wait for the dropdown to reflect the selected value
        await expect(this.firstOrderDropdown).toHaveText(firstOrderDropdownClaimAmt);
        console.log("Selected value:", firstOrderDropdownClaimAmt);
        await this.page.waitForTimeout(5000);
        await this.page.keyboard.press('Tab');
        await this.secondOrderDropdown.click();
        // Retrieve the list of options within the dropdown
        const options = await this.page.$$('//mat-option[@class="mat-option ng-star-inserted"]');
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
        const expectedValues = ["Patient Name", "Policy Number", "Staff Number"];
        for (const expectedValue of expectedValues) {
            expect(actualValues).toContain(expectedValue);
        }


    }



}

