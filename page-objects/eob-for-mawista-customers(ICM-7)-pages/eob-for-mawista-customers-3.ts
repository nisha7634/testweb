import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import exp from "constants";


export class eoBCustDetails_3 {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly addNoteBtn: Locator;
    readonly showBtn: Locator;
    readonly addNoteTitle: Locator;
    readonly applyAddNoteBtn: Locator;
    readonly alert: Locator;
    readonly addNoteAlertErrorMsg: Locator;
    readonly noteTxtArea: Locator;
    readonly cancelBtn: Locator;
    readonly firstOrderDropdown: Locator;
    readonly secondOrderDropdown: Locator;
    readonly saveBtn: Locator;
    readonly saveConfirmationPopup: Locator;
    readonly yesBtn: Locator;
    readonly saveSuccesssfulMsg: Locator;
    readonly printCliamEvaluationBtn: Locator;
    readonly jobAddedSuccessfulMsg: Locator;
    readonly jobIcon: Locator;
    readonly jobHeading: Locator;
    readonly downloadIcon: Locator;
    readonly eyeIcon: Locator;
    readonly paymentOrederTransactionDetailsTitle: Locator;
    readonly itemsPerPageLbl: Locator;
    readonly itemsPerPageDropdown: Locator;
    readonly closePaymentOrderTransactionPopup: Locator;
    readonly parentEntity: Locator;
    readonly idOnSearchCriteria: Locator;
    readonly searchButton: Locator;
    readonly errorPopupMessage: Locator;
    readonly labelTextbox: Locator;
    readonly fromDateLabel: Locator;
    readonly fromDateTextbox: Locator;
    readonly calendarIcon: Locator;
    readonly toDateLabel: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.addNoteBtn = page.locator('//label[text()="Add Note"]')
        this.showBtn = page.locator('//span[text()="Show"]');
        this.addNoteTitle = page.locator('//h5[text()="Add Note"]')
        this.applyAddNoteBtn = page.locator('//button[@type="submit"]')
        this.alert = page.locator('//div[text()="Alert"]')
        this.addNoteAlertErrorMsg = page.locator('//div[@class="ng-star-inserted"]//span[1]')
        this.noteTxtArea = page.locator('//textarea[@formcontrolname="note"]')
        this.cancelBtn = page.locator('//button[@class="clear-button"]')
        this.firstOrderDropdown = page.locator('(//span[contains(@class, "mat-select-placeholder")])[1]')
        this.secondOrderDropdown = page.locator('(//span[contains(@class, "mat-select-placeholder")])[2]')
        this.saveBtn = page.locator('//span[text()="Save"]')
        this.saveConfirmationPopup = page.locator('//span[text()="Are you sure you want to save ?"]')
        this.yesBtn = page.locator('//button[text()="Yes"]')
        this.saveSuccesssfulMsg = page.locator('//span[text()="Payment order updated successfully."]')
        this.printCliamEvaluationBtn = page.locator('//span[text()="Print Claims Evaluation"]')
        this.jobAddedSuccessfulMsg = page.locator('//span[text()="Job added successfully, please review it!"]')
        this.jobIcon = page.locator('//img[@alt="Jobs icon"]')
        this.jobHeading = page.locator('//div[text()="Jobs"]')
        this.downloadIcon = page.locator('(//img[@alt="Download icon"])[1]')
        this.eyeIcon = page.locator('(//div[@class="view-action ng-star-inserted"]//img)[1]')
        this.paymentOrederTransactionDetailsTitle = page.locator('//h5[text()="Payment Order Transaction Detail"]')
        this.itemsPerPageLbl = page.locator('(//div[text()="Items per page:"])[2]')
        this.itemsPerPageDropdown = page.locator('(//mat-select[@aria-label="Items per page:"]//div)[1]')
        this.closePaymentOrderTransactionPopup = page.locator('//h5[text()="Payment Order Transaction Detail"]/following-sibling::img')
        this.parentEntity = page.locator('//input[@id="parentEntity"]')
        this.idOnSearchCriteria = page.locator('//input[@name="id"]')
        this.searchButton = page.locator('//div[@class="button-text"]')
        this.errorPopupMessage = page.locator('//li[@class="error-text ng-star-inserted"]')
        this.labelTextbox = page.locator('//input[@formcontrolname="label"]')
        this.fromDateTextbox = page.locator('//input[@formcontrolname="fromDate"]')
        this.fromDateLabel = page.locator('//label[@for="fromdate"]//mat-label[1]')
        this.calendarIcon = page.locator('(//button[@aria-label="Open calendar"])[1]')
        this.toDateLabel = page.locator('//input[@formcontrolname="toDate"]')

    }
    async verifyAddNoteFunctionality() {
        // Verify the visibility of the "Add Note" button
        await expect(this.addNoteBtn).toBeVisible();

        // Verify the visibility of the "Show" button
        await expect(this.showBtn).toBeVisible();

        // Click the "Show" button and ensure it's functional
        await this.showBtn.click();
        console.log('Show button is enabled and clickable');

        // Verify the visibility of the "Add Note" popup window
        await expect(this.addNoteTitle).toBeVisible();
        console.log('Add Note popup window is displayed');
    }
    async verifyApplyFunctionalityWithoutProvidingInput(alertOnAddNote) {
        // Verify the visibility of the "Apply" button
        await expect(this.applyAddNoteBtn).toBeVisible();

        // Click the "Apply" button and ensure it's functional
        await this.applyAddNoteBtn.click();
        console.log('Apply button is enabled and clickable');

        // Verify the visibility of the alert
        await expect(this.alert).toBeVisible();

        // Get the text content of the alert error message
        const errorMsg = await this.addNoteAlertErrorMsg.textContent();
        console.log(errorMsg);
        // Verify that the error message contains the expected alert message
        await expect(errorMsg).toContain(alertOnAddNote);
        console.log('Alert message is displayed correctly');
    }

    async verifyApplyFunctionalityWithProvidingInput(noteToAdd: string) {
        // Fill the note text area with the provided note
        await this.noteTxtArea.fill(noteToAdd);

        // Verify the visibility of the "Apply" button
        await expect(this.applyAddNoteBtn).toBeVisible();

        // Click the "Apply" button
        await this.applyAddNoteBtn.click();
        console.log('Apply button is enabled and clickable');

        // Verify the popup window is closed by checking its absence
        await expect(this.addNoteTitle).not.toBeVisible();
        console.log('Popup window is closed, note added successfully');
    }
    async verifyCancelFunctionality() {
        // Verify the visibility of the "Cancel" button
        await expect(this.cancelBtn).toBeVisible();

        // Click the "Cancel" button
        await this.cancelBtn.click();
        console.log('Cancel button is enabled and clickable');

        // Verify the popup window is closed by checking its absence
        await expect(this.addNoteTitle).not.toBeVisible();
        console.log('Popup window is closed successfully on clicking Cancel');
    }

    async verifySortOrderDropdownValues() {
        // Click the First Order dropdown to display options
        await this.firstOrderDropdown.click();

        // Select an option from the First Order dropdown
        // For example, selecting the first option
        const firstOption = await this.page.locator('mat-select#mat-select-31 mat-option:first-child');
        await firstOption.click();

        // Extract and print the values of the First Order dropdown
        const firstOrderOptions = await this.page.locator('mat-select#mat-select-31 mat-option');
        const firstOrderValues: string[] = await firstOrderOptions.evaluateAll((options: HTMLOptionElement[]) =>
            options.map(option => option.textContent?.trim()).filter((text): text is string => text !== undefined && text !== "")
        );
        console.log('First Order dropdown values:', firstOrderValues);

        // Click the Second Order dropdown to display options
        await this.secondOrderDropdown.click();

        // Extract and print the values of the Second Order dropdown
        const secondOrderOptions = await this.page.locator('mat-select#mat-select-32 mat-option');
        const secondOrderValues: string[] = await secondOrderOptions.evaluateAll((options: HTMLOptionElement[]) =>
            options.map(option => option.textContent?.trim()).filter((text): text is string => text !== undefined && text !== "")
        );
        console.log('Second Order dropdown values:', secondOrderValues);

        // Now, verify the dropdown values
        // Expected values for First Order dropdown
        const expectedFirstOrderValues: string[] = [
            'Policy Number',
            'Patient Name',
            'Staff Number',
            'Claim Amount'
        ];

        // Expected values for Second Order dropdown
        const expectedSecondOrderValues: string[] = [
            'Claim Amount',
            'Policy Number',
            'Staff Number'
        ];

        // Verify the values in the First Order dropdown
        for (const value of expectedFirstOrderValues) {
            if (value !== "") {
                await expect(firstOrderValues).toContain(value);
            }
        }
        console.log('First Order dropdown values are correct');

        // Verify the values in the Second Order dropdown
        for (const value of expectedSecondOrderValues) {
            if (value !== "") {
                await expect(secondOrderValues).toContain(value);
            }
        }
        console.log('Second Order dropdown values are correct');
    }


    async verifySavePOFunctionality(PODetailsSavedMsg: string) {
        try {
            // Wait for the Save button to be visible
            await this.saveBtn.waitFor({ timeout: 5000 });

            // Click on the Save button
            await this.saveBtn.click();
            console.log("User clicked on the Save Payment order details");

            // Wait for the save confirmation popup to be visible
            await this.saveConfirmationPopup.waitFor({ timeout: 5000 });

            // Wait for the Yes button in the confirmation popup to be visible
            await this.yesBtn.waitFor({ timeout: 5000 });

            // Click on the Yes button in the confirmation popup
            await this.yesBtn.click();
            console.log('User clicked on the save button');

            // Wait for the save successful message to be visible
            await this.saveSuccesssfulMsg.waitFor({ timeout: 5000 });

            // Assert that the save successful message is visible
            await expect(this.saveSuccesssfulMsg).toBeVisible();

            const saveedPoMsg = await (this.saveSuccesssfulMsg).textContent();
            console.log(saveedPoMsg)
            await expect(saveedPoMsg).toContain(PODetailsSavedMsg);
        } catch (error) {
            console.error("Error occurred while verifying save functionality:", error);
            // You can handle the error as per your requirement, for example, capturing a screenshot or retrying the action.
        }
    }


    async verifyPDFDownloadFunctionality(jobAddedMsg: string) {
        try {
            // Wait for the Print Claim Evaluation button to be visible
            await this.printCliamEvaluationBtn.waitFor({ timeout: 5000 });

            // Click on the Print Claim Evaluation button
            await this.printCliamEvaluationBtn.click();
            console.log("User clicked on the Print Evaluation Button");

            // Wait for the job added successful message to appear
            await this.jobAddedSuccessfulMsg.waitFor({ timeout: 5000 });

            // Get the text of the job added successful message
            const jobmsg = await this.jobAddedSuccessfulMsg.textContent();
            console.log(jobmsg);

            // Assert that the job added successful message contains the expected text
            await expect(jobmsg).toContain(jobAddedMsg);

            // Wait for the job icon to be visible
            await this.jobIcon.waitFor({ timeout: 5000 });

            // Assert that the job icon is visible
            await expect(this.jobIcon).toBeVisible();
            console.log("Job Icon Displayed on the page");

            // Click on the job icon
            await this.jobIcon.click();
            console.log("User clicked on the Job Icon");

            // Wait for the job heading to be visible
            await this.jobHeading.waitFor({ timeout: 5000 });

            // Assert that the job heading is visible
            await expect(this.jobHeading).toBeVisible();
            console.log("User can open the saved Jobs successfully");

            // Click on the download icon to download the PDF
            // Assuming the download icon has a unique locator
            await this.downloadIcon.click();
            console.log("User clicked on the Download Icon to download the PDF");

            // Verify that the PDF is downloaded successfully
            // You can add your verification steps here

        } catch (error) {
            console.error("Error occurred while verifying PDF download functionality:", error);
            // You can handle the error as per your requirement, for example, capturing a screenshot or retrying the action.
        }
    }
    async verifyPrintClaimEvaluationFunctionaty(jobAddedMsg: string) {

        // Wait for the Print Claim Evaluation button to be visible
        await this.printCliamEvaluationBtn.waitFor({ timeout: 5000 });

        // Click on the Print Claim Evaluation button
        await this.printCliamEvaluationBtn.click();
        console.log("User clicked on the Print Evaluation Button");

        // Wait for the job added successful message to appear
        await this.jobAddedSuccessfulMsg.waitFor({ timeout: 5000 });

        // Get the text of the job added successful message
        const jobmsg = await this.jobAddedSuccessfulMsg.textContent();
        console.log(jobmsg);

        // Assert that the job added successful message contains the expected text
        await expect(jobmsg).toContain(jobAddedMsg);
    }
    async verifyPaymentOrderTransactionFromEyeIcon() {
        await expect(this.eyeIcon).toBeVisible();
        console.log("View Icon is present on the payment order details page")
        await (this.eyeIcon).click();
        console.log("User can click on the View icon on the Payment order details page")

        await expect(this.paymentOrederTransactionDetailsTitle).toBeVisible();
    }

    async verifyUserCanSEarchByInvoiceNumber() {

    }
    async verifyItemsPerPageDropdown() {
        await expect(this.itemsPerPageLbl).toBeVisible();
        console.log("Items per page get displayed on the page")
        await expect(this.itemsPerPageDropdown).toBeVisible();
        console.log("Items per page Dropdown displayed on the page")


    }
    async verifyDropdownValues() {
        // Expected dropdown values
        const expectedDropdownValues = ['10', '15', '20', '30', '50', '100', '250'];

        // Click on the dropdown to display the options
        await this.itemsPerPageDropdown.click();
        console.log("User clicked on the Dropdown");

        // Get the text content of all dropdown options
        const dropdownOptionsLocator = this.page.locator('//div[@class="cdk-overlay-pane"]//mat-option');

        const dropdownOptions = await dropdownOptionsLocator.allTextContents();

        // Log the dropdown values for debugging purposes
        console.log('Dropdown values:', dropdownOptions);

        // Verify that the expected values are present in the dropdown options
        for (const value of expectedDropdownValues) {
            console.log('Checking value:', value);
            await expect(dropdownOptions).toContain(value);
        }
        console.log('Dropdown values are correct');
    }

    async verifyPaginationFunctionality() {
        // Locator for pagination elements
        const paginationLocator = this.page.locator('.pagination-class'); // Replace with the actual class or identifier for pagination elements

        try {
            // Verify that pagination elements are present
            if (await paginationLocator.count() === 0) {
                console.log('No pagination elements found. Only one page is present.');
                return;
            }

            // Verify that pagination is displayed from 1 to 10
            const expectedPageNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            const pageNumbers = await paginationLocator.allTextContents();

            // Log the pagination values for debugging purposes
            console.log('Pagination values:', pageNumbers);

            // Verify that the expected page numbers are present in the pagination
            for (const pageNumber of expectedPageNumbers) {
                console.log('Checking page number:', pageNumber);
                await expect(pageNumbers).toContain(pageNumber);
            }
            console.log('Pagination values are correct');

            // Verify the user can change the pagination using start page and last page
            const firstPageButton = this.page.locator('button.first-page'); // Replace with the actual selector for the first page button
            const lastPageButton = this.page.locator('button.last-page'); // Replace with the actual selector for the last page button

            // Click on the first page button and verify the page change
            await firstPageButton.click();
            await this.page.waitForTimeout(1000); // Wait for the page to load
            console.log('User clicked on the first page button');

            // Verify the first page is active
            const activePageLocator = this.page.locator('.pagination-class .active'); // Replace with the actual selector for the active page
            const activePage = await activePageLocator.textContent();
            console.log('Active page after clicking first page button:', activePage);
            await expect(activePage).toBe('1');

            // Click on the last page button and verify the page change
            await lastPageButton.click();
            await this.page.waitForTimeout(1000); // Wait for the page to load
            console.log('User clicked on the last page button');

            // Verify the last page is active
            const totalPagesLocator = this.page.locator('.pagination-class .total-pages'); // Replace with the actual selector to get the total number of pages
            const totalPages = await totalPagesLocator.textContent();
            const activeLastPage = await activePageLocator.textContent();
            console.log('Active page after clicking last page button:', activeLastPage);
            await expect(activeLastPage).toBe(totalPages);

            console.log('Pagination functionality is verified successfully');
        } catch (error) {
            console.error("Error occurred while verifying pagination functionality:", error);
            // Handle the single-page case
            console.log('Only one page is present or pagination elements are not available.');
        }
    }

    async verifyCancelPopUpFunctionality() {
        try {
            // Click the close button on the payment order transaction popup
            await this.closePaymentOrderTransactionPopup.click();
            console.log("User clicked on close popup button");

            // Wait for the payment order transaction details title to be not visible, indicating the popup is closed
            await expect(this.paymentOrederTransactionDetailsTitle).toBeHidden();
            console.log("Close button closed the popup successfully");
        } catch (error) {
            console.error("Error occurred while verifying cancel popup functionality:", error);
        }
    }

    async verifyParentEntityAcceptsPresent() {

        await expect(this.parentEntity).toBeVisible()
        console.log("Parent Entity is visible on the page")


    }
    async verifyIDPresentsOnPage() {

        await expect(this.idOnSearchCriteria).toBeVisible()
        console.log("ID on search criteria page is visible")

    }
    async verifyLblPresentsOnPage() {

        await expect(this.labelTextbox).toBeVisible()
        console.log("Label Textbox  on search criteria page is visible")

    }


    async verifyParentEntityAcceptsAlphabets(alphabets: string) {
        try {
            // Verify that the parent entity text box is visible
            await expect(this.parentEntity).toBeVisible();
            console.log("Parent Entity is visible on the page");

            // Fill the parent entity text box with the provided alphabets
            await this.parentEntity.fill(alphabets);
            console.log("Filled Parent Entity text box with alphabets:", alphabets);

            // Get the value of the parent entity text box to verify that it accepts the alphabets
            const enteredValue = await this.parentEntity.inputValue();
            console.log("Entered value in Parent Entity text box:", enteredValue);

            // Verify that the entered value matches the provided alphabets
            await expect(enteredValue).toBe(alphabets);
            console.log("Parent Entity text box accepts alphabets");
        } catch (error) {
            console.error("Error occurred while verifying Parent Entity text box functionality:", error);
        }
    }
    async verifyParentEntityAcceptsNumbers(numbers: string) {
        try {
            // Verify that the parent entity text box is visible
            await expect(this.parentEntity).toBeVisible();
            console.log("Parent Entity is visible on the page");

            // Fill the parent entity text box with the provided numbers
            await this.parentEntity.fill(numbers);
            console.log("Filled Parent Entity text box with numbers:", numbers);

            // Get the value of the parent entity text box to verify that it accepts the numbers
            const enteredValue = await this.parentEntity.inputValue();
            console.log("Entered value in Parent Entity text box:", enteredValue);

            // Verify that the entered value matches the provided numbers
            await expect(enteredValue).toBe(numbers);
            console.log("Parent Entity text box accepts numbers");
        } catch (error) {
            console.error("Error occurred while verifying Parent Entity text box functionality:", error);
        }
    }

    async verifyParentEntityAcceptsSpecialCharacters(specialCharacters: string) {
        try {
            // Verify that the parent entity text box is visible
            await expect(this.parentEntity).toBeVisible();
            console.log("Parent Entity is visible on the page");

            // Fill the parent entity text box with the provided special characters
            await this.parentEntity.fill(specialCharacters);
            console.log("Filled Parent Entity text box with special characters:", specialCharacters);

            // Get the value of the parent entity text box to verify that it accepts the special characters
            const enteredValue = await this.parentEntity.inputValue();
            console.log("Entered value in Parent Entity text box:", enteredValue);

            // Verify that the entered value matches the provided special characters
            await expect(enteredValue).toBe(specialCharacters);
            console.log("Parent Entity text box accepts special characters");
        } catch (error) {
            console.error("Error occurred while verifying Parent Entity text box functionality:", error);
        }
    }

    async verifyParentEntityAcceptsBlankSpaces(blankSpaces: string) {
        try {
            // Verify that the parent entity text box is visible
            await expect(this.parentEntity).toBeVisible();
            console.log("Parent Entity is visible on the page");

            // Fill the parent entity text box with the provided blank spaces
            await this.parentEntity.fill(blankSpaces);
            console.log("Filled Parent Entity text box with blank spaces:", blankSpaces);

            // Get the value of the parent entity text box to verify that it accepts the blank spaces
            const enteredValue = await this.parentEntity.inputValue();
            console.log("Entered value in Parent Entity text box:", enteredValue);

            // Verify that the entered value matches the provided blank spaces
            await expect(enteredValue).toBe(blankSpaces);
            console.log("Parent Entity text box accepts blank spaces");
        } catch (error) {
            console.error("Error occurred while verifying Parent Entity text box functionality:", error);
        }
    }

    async verifyParentEntityAcceptsLeadingAndTrailingSpaces(leadingAndTrailingSpaces: string) {
        try {
            // Verify that the parent entity text box is visible
            await expect(this.parentEntity).toBeVisible();
            console.log("Parent Entity is visible on the page");

            // Fill the parent entity text box with the provided leading and trailing spaces
            await this.parentEntity.fill(leadingAndTrailingSpaces);
            console.log("Filled Parent Entity text box with leading and trailing spaces:", leadingAndTrailingSpaces);

            // Get the value of the parent entity text box to verify that it accepts the leading and trailing spaces
            const enteredValue = await this.parentEntity.inputValue();
            console.log("Entered value in Parent Entity text box:", enteredValue);

            // Verify that the entered value matches the provided leading and trailing spaces
            await expect(enteredValue).toBe(leadingAndTrailingSpaces);
            console.log("Parent Entity text box accepts leading and trailing spaces");
        } catch (error) {
            console.error("Error occurred while verifying Parent Entity text box functionality:", error);
        }
    }

    async verifyParentEntityShowsList(parentEntityAlphabets: string) {
        try {
            // Verify that the parent entity text box is visible
            await expect(this.parentEntity).toBeVisible();
            console.log("Parent Entity is visible on the page");

            // Fill the parent entity text box with the provided alphabets
            await this.parentEntity.fill(parentEntityAlphabets);
            console.log("Filled Parent Entity text box with alphabets:", parentEntityAlphabets);

            // Define the expected list of suggestions
            const expectedSuggestions = [
                "Test - outside network",
                "Public Hospital Test",
                "Hospital Test Provider",
                "Polyclinic Test Provider",
                "Test - Not contracted"
            ];

            // Wait for the list of suggestions to be visible
            const suggestionListLocator = this.page.locator('//div[@class="cdk-overlay-pane"]//mat-option'); // Update the locator with the actual class or selector for the suggestion list
            await expect(suggestionListLocator).toBeVisible();
            console.log("Suggestion list is visible");

            // Verify that each expected suggestion is present in the suggestion list
            for (const suggestion of expectedSuggestions) {
                const suggestionItemLocator = suggestionListLocator.locator(`text=${suggestion}`);
                await expect(suggestionItemLocator).toBeVisible();
                console.log(`Suggestion "${suggestion}" is visible in the list`);
            }

        } catch (error) {
            console.error("An error occurred during verification:", error);
            throw error;
        }
    }


    async ParentEntityValues(alphabets: string) {

        // Define the expected list of suggestions
        const expectedSuggestions = [" Test - Not contracted ", " Test - outside network ", " Public Hospital Test ", " Hospital Test Provider ", " Polyclinic Test Provider ", " Laboratory Test Provider ", " Physiotherapy Center Test Provider ", " Ambulatory Care & Same Day Surgery Center Test Provider ", " Home Health Care Test Provider ", " Radiology Center Test Provider "]
        // Click on the dropdown to display the options

        // Verify that the parent entity text box is visible
        await expect(this.parentEntity).toBeVisible();
        console.log("Parent Entity is visible on the page");

        // Fill the parent entity text box with the provided alphabets
        await this.parentEntity.fill(alphabets);
        console.log("Filled Parent Entity text box with alphabets:", alphabets);
        await this.page.waitForTimeout(10000);
        // Get the text content of all dropdown options
        const dropdownOptionsLocator = this.page.locator('//div[@class="cdk-overlay-pane"]//mat-option');

        const dropdownOptions = await dropdownOptionsLocator.allTextContents();

        // Log the dropdown values for debugging purposes
        console.log('Dropdown values:', dropdownOptions);

        // Verify that the expected values are present in the dropdown options
        for (const value of expectedSuggestions) {
            console.log('Checking value:', value);
            await expect(dropdownOptions).toContain(value);
        }
        console.log('Dropdown values are correct');


    }

    async verifyUserCanSelectValueFromList(alphabets) {
        // Define the expected list of suggestions
        const expectedSuggestions = [
            " Test - Not contracted ",
            " Test - outside network ",
            " Public Hospital Test ",
            " Hospital Test Provider ",
            " Polyclinic Test Provider ",
            " Laboratory Test Provider ",
            " Physiotherapy Center Test Provider ",
            " Ambulatory Care & Same Day Surgery Center Test Provider ",
            " Home Health Care Test Provider ",
            " Radiology Center Test Provider "
        ];

        // Verify that the parent entity text box is visible
        await expect(this.parentEntity).toBeVisible();
        console.log("Parent Entity is visible on the page");

        // Fill the parent entity text box with the provided alphabets
        await this.parentEntity.fill(alphabets);
        console.log("Filled Parent Entity text box with alphabets:", alphabets);
        await this.page.waitForTimeout(10000);

        // Get the locator for the dropdown options
        const dropdownOptionsLocator = this.page.locator('//div[@class="cdk-overlay-pane"]//mat-option');

        // Verify that the dropdown options contain the expected values
        const dropdownOptions = await dropdownOptionsLocator.allTextContents();
        console.log('Dropdown values:', dropdownOptions);

        for (const value of expectedSuggestions) {
            console.log('Checking value:', value);
            await expect(dropdownOptions).toContain(value);
        }
        console.log('Dropdown values are correct');

        // Select a value from the dropdown list
        const valueToSelect = expectedSuggestions[0].trim(); // Choose the first expected value for demonstration

        // Click on the option to select it
        const optionLocator = this.page.locator(`//div[@class="cdk-overlay-pane"]//mat-option[.//*[contains(text(), "${valueToSelect}")]]`);
        await optionLocator.click();
        console.log('Selected value from the dropdown:', valueToSelect);

        // Verify that the selected value is displayed in the parent entity text box
        const selectedValue = await this.parentEntity.inputValue();
        await expect(selectedValue).toBe(valueToSelect);
        console.log('Verified that the selected value is displayed in the text box:', selectedValue);
    }


    async verifyUserCanSelectOneValueAtATime(alphabets: string) {
        // Define the expected list of suggestions
        const expectedSuggestions = [
            " Test - Not contracted ",
            " Test - outside network ",
            " Public Hospital Test ",
            " Hospital Test Provider ",
            " Polyclinic Test Provider ",
            " Laboratory Test Provider ",
            " Physiotherapy Center Test Provider ",
            " Ambulatory Care & Same Day Surgery Center Test Provider ",
            " Home Health Care Test Provider ",
            " Radiology Center Test Provider "
        ];

        // Verify that the parent entity text box is visible
        await expect(this.parentEntity).toBeVisible();
        console.log("Parent Entity is visible on the page");

        // Fill the parent entity text box with the provided alphabets
        await this.parentEntity.fill(alphabets);
        console.log("Filled Parent Entity text box with alphabets:", alphabets);
        await this.page.waitForTimeout(10000);

        // Get the locator for the dropdown options
        const dropdownOptionsLocator = this.page.locator('//div[@class="cdk-overlay-pane"]//mat-option');

        // Verify that the dropdown options contain the expected values
        const dropdownOptions = await dropdownOptionsLocator.allTextContents();
        console.log('Dropdown values:', dropdownOptions);

        for (const value of expectedSuggestions) {
            console.log('Checking value:', value);
            await expect(dropdownOptions).toContain(value);
        }
        console.log('Dropdown values are correct');

        // Select a value from the dropdown list
        const valueToSelect = expectedSuggestions[0].trim(); // Choose the first expected value for demonstration

        // Click on the option to select it
        const optionLocator = this.page.locator(`//div[@class="cdk-overlay-pane"]//mat-option[.//*[contains(text(), "${valueToSelect}")]]`);
        await optionLocator.click();
        console.log('Selected value from the dropdown:', valueToSelect);

        // Verify that the selected value is displayed in the parent entity text box
        const selectedValue = await this.parentEntity.inputValue();
        await expect(selectedValue).toBe(valueToSelect);
        console.log('Verified that the selected value is displayed in the text box:', selectedValue);

        // Try selecting another value from the dropdown to ensure only one value can be selected at a time
        const newValueToSelect = expectedSuggestions[1].trim(); // Choose the second expected value for demonstration

        // Fill the parent entity text box again to trigger the dropdown
        await this.parentEntity.fill(alphabets);
        await this.page.waitForTimeout(10000);

        // Click on the new option to select it
        const newOptionLocator = this.page.locator(`//div[@class="cdk-overlay-pane"]//mat-option[.//*[contains(text(), "${newValueToSelect}")]]`);
        await newOptionLocator.click();
        console.log('Selected new value from the dropdown:', newValueToSelect);

        // Verify that the new selected value is displayed in the parent entity text box
        const newSelectedValue = await this.parentEntity.inputValue();
        await expect(newSelectedValue).toBe(newValueToSelect);
        console.log('Verified that the new selected value is displayed in the text box:', newSelectedValue);

        // Ensure the previously selected value is not present in the text box anymore
        await expect(newSelectedValue).not.toBe(valueToSelect);
        console.log('Verified that only one value can be selected at a time');
    }

    async verifyIDDoesNotAcceptAlphabets(parentEntityAlphabets: string) {
        try {
            // Verify that the ID text box is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID is visible on the page");

            // Fill the ID text box with the provided alphabets
            await this.idOnSearchCriteria.fill(parentEntityAlphabets);
            console.log("Filled ID text box with alphabets:", parentEntityAlphabets);

            // Get the value of the ID text box to verify that it does not accept alphabets
            const enteredValue = await this.idOnSearchCriteria.inputValue();
            console.log("Entered value in ID text box:", enteredValue);

            // Verify that the entered value is not equal to the provided alphabets
            await expect(enteredValue).not.toBe(parentEntityAlphabets);
            console.log("ID text box does not accept alphabets");
        } catch (error) {
            console.error("Error occurred while verifying ID text box functionality:", error);
        }
    }
    async verifyIDAcceptsNumbers(numbers: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with the provided numbers
            await this.idOnSearchCriteria.fill(numbers);
            console.log("Filled ID textbox with numbers:", numbers);

            // Get the value of the ID textbox to verify that it accepts numbers
            const enteredValue = await this.idOnSearchCriteria.inputValue();
            console.log("Entered value in ID textbox:", enteredValue);

            // Verify that the entered value matches the provided numbers
            await expect(enteredValue).toBe(numbers);
            console.log("ID textbox accepts numbers");
        } catch (error) {
            console.error("Error occurred while verifying ID textbox functionality:", error);
        }
    }

    async verifyIDDoesNotAcceptSpecialCharacters(specialCharacters: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with the provided special characters
            await this.idOnSearchCriteria.fill(specialCharacters);
            console.log("Filled ID textbox with special characters:", specialCharacters);

            // Get the value of the ID textbox to verify that it does not accept special characters
            const enteredValue = await this.idOnSearchCriteria.inputValue();
            console.log("Entered value in ID textbox:", enteredValue);

            // Verify that the entered value does not contain any special characters
            const containsSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(enteredValue);
            await expect(containsSpecialCharacters).toBe(false);
            console.log("ID textbox does not accept special characters");
        } catch (error) {
            console.error("Error occurred while verifying ID textbox functionality:", error);
        }
    }

    async verifyIDAcceptsBlankSpaces(blankSpaces: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with the provided blank spaces
            await this.idOnSearchCriteria.fill(blankSpaces);
            console.log("Filled ID textbox with blank spaces:", blankSpaces);

            // Get the value of the ID textbox to verify that it accepts blank spaces
            const enteredValue = await this.idOnSearchCriteria.inputValue();
            console.log("Entered value in ID textbox:", enteredValue);

            // Verify that the entered value matches the provided blank spaces
            await expect(enteredValue).toBe(blankSpaces);
            console.log("ID textbox accepts blank spaces");
        } catch (error) {
            console.error("Error occurred while verifying ID textbox functionality:", error);
        }
    }

    async verifyIDDoesNotAcceptBlankSpaces(blankSpaces: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with blank spaces
            await this.idOnSearchCriteria.fill(blankSpaces);
            console.log("Filled ID textbox with blank spaces:", blankSpaces);

            // Get the value of the ID textbox to verify that it does not accept blank spaces
            const enteredValue = await this.idOnSearchCriteria.inputValue();
            console.log("Entered value in ID textbox:", enteredValue);

            // Verify that the entered value does not contain blank spaces
            const containsBlankSpaces = /\s/.test(enteredValue);
            await expect(containsBlankSpaces).toBe(false);
            console.log("ID textbox does not accept blank spaces");
        } catch (error) {
            console.error("Error occurred while verifying ID textbox functionality:", error);
        }
    }


    async verifySingleAlphabetSearchError(singleChar: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with the single alphabet from JSON input
            await this.idOnSearchCriteria.fill(singleChar);
            console.log("Filled ID textbox with single alphabet:", singleChar);

            // Click on the Search button
            await this.searchButton.click();
            console.log("Clicked on the Search button");

            // Verify that the error popup message is displayed
            const errorMessage = await this.errorPopupMessage.textContent();
            const expectedErrorMessage = "One or more validation errors occurred.";
            await expect(errorMessage).toBe(expectedErrorMessage);
            console.log("Error popup message is displayed as expected:", errorMessage);
        } catch (error) {
            console.error("Error occurred while verifying single alphabet search error:", error);
        }
    }
    async verifySingleSpecialCharacterSearchError(singleSpecialSymbol: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with the single special character from JSON input
            await this.idOnSearchCriteria.fill(singleSpecialSymbol);
            console.log("Filled ID textbox with single special character:", singleSpecialSymbol);

            // Click on the Search button
            await this.searchButton.click();
            console.log("Clicked on the Search button");

            // Verify that the error popup message is displayed
            const errorMessage = await this.errorPopupMessage.textContent();
            const expectedErrorMessage = "One or more validation errors occurred.";
            await expect(errorMessage).toBe(expectedErrorMessage);
            console.log("Error popup message is displayed as expected:", errorMessage);
        } catch (error) {
            console.error("Error occurred while verifying single special character search error:", error);
        }
    }
    async verifyNumberWithBlankSpacesSearch(numberWithSpaces: string) {
        try {
            // Verify that the ID textbox is visible
            await expect(this.idOnSearchCriteria).toBeVisible();
            console.log("ID textbox is visible on the page");

            // Fill the ID textbox with the number and blank spaces from JSON input
            await this.idOnSearchCriteria.fill(numberWithSpaces);
            console.log("Filled ID textbox with number and blank spaces:", numberWithSpaces);

            // Click on the Search button
            await this.searchButton.click();
            console.log("Clicked on the Search button");

            // Verify that the error popup message is displayed
            const errorPopupVisible = await this.errorPopupMessage.isVisible();
            const enteredValue = await this.idOnSearchCriteria.inputValue();

            if (/\s/.test(numberWithSpaces)) {
                // Expect error message to be displayed if blank spaces are included
                await expect(errorPopupVisible).toBe(true);
                console.log("Error popup message is displayed as expected due to blank spaces");
            } else {
                // Expect no error message if only numbers are entered
                await expect(errorPopupVisible).toBe(false);
                console.log("No error popup message displayed, input accepted with only numbers");
            }
        } catch (error) {
            console.error("Error occurred while verifying number with blank spaces search:", error);
        }
    }


    async verifyLabelTextboxAcceptsAlphabets(alphabets: string) {
        try {
            // Verify that the label text box is visible
            await expect(this.labelTextbox).toBeVisible();
            console.log("Label textbox is visible on the page");

            // Fill the label text box with the provided alphabets
            await this.labelTextbox.fill(alphabets);
            console.log("Filled label textbox with alphabets:", alphabets);

            // Get the value of the label text box to verify that it accepts the alphabets
            const enteredValue = await this.labelTextbox.inputValue();
            console.log("Entered value in label textbox:", enteredValue);

            // Verify that the entered value matches the provided alphabets
            await expect(enteredValue).toBe(alphabets);
            console.log("Label textbox accepts alphabets");
        } catch (error) {
            console.error("Error occurred while verifying label textbox functionality:", error);
        }
    }


    async verifyLabelTextboxAcceptsNumbers(numbers: string) {
        try {
            // Verify that the label text box is visible
            await expect(this.labelTextbox).toBeVisible();
            console.log("Label textbox is visible on the page");

            // Fill the label text box with the provided numbers
            await this.labelTextbox.fill(numbers);
            console.log("Filled label textbox with numbers:", numbers);

            // Get the value of the label text box to verify that it accepts the numbers
            const enteredValue = await this.labelTextbox.inputValue();
            console.log("Entered value in label textbox:", enteredValue);

            // Verify that the entered value matches the provided numbers
            await expect(enteredValue).toBe(numbers);
            console.log("Label textbox accepts numbers");
        } catch (error) {
            console.error("Error occurred while verifying label textbox functionality:", error);
        }
    }

    async verifyLabelTextboxAcceptsSpecialCharacters(specialCharacters: string) {
        try {
            // Verify that the label text box is visible
            await expect(this.labelTextbox).toBeVisible();
            console.log("Label textbox is visible on the page");

            // Fill the label text box with the provided special characters
            await this.labelTextbox.fill(specialCharacters);
            console.log("Filled label textbox with special characters:", specialCharacters);

            // Get the value of the label text box to verify that it accepts the special characters
            const enteredValue = await this.labelTextbox.inputValue();
            console.log("Entered value in label textbox:", enteredValue);

            // Verify that the entered value matches the provided special characters
            await expect(enteredValue).toBe(specialCharacters);
            console.log("Label textbox accepts special characters");
        } catch (error) {
            console.error("Error occurred while verifying label textbox functionality:", error);
        }
    }

    async verifyLabelTextboxAcceptsBlankSpaces(blankSpaces: string) {
        try {
            // Verify that the label text box is visible
            await expect(this.labelTextbox).toBeVisible();
            console.log("Label textbox is visible on the page");

            // Fill the label text box with the provided blank spaces
            await this.labelTextbox.fill(blankSpaces);
            console.log("Filled label textbox with blank spaces:", blankSpaces);

            // Get the value of the label text box to verify that it accepts the blank spaces
            const enteredValue = await this.labelTextbox.inputValue();
            console.log("Entered value in label textbox:", enteredValue);

            // Verify that the entered value matches the provided blank spaces
            await expect(enteredValue).toBe(blankSpaces);
            console.log("Label textbox accepts blank spaces");
        } catch (error) {
            console.error("Error occurred while verifying label textbox functionality:", error);
        }
    }

    async verifyLabelTextboxAcceptsLeadingAndTrailingSpaces(leadingAndTrailingSpaces: string) {
        try {
            // Verify that the label text box is visible
            await expect(this.labelTextbox).toBeVisible();
            console.log("Label textbox is visible on the page");

            // Fill the label text box with the provided blank spaces
            await this.labelTextbox.fill(leadingAndTrailingSpaces);
            console.log("Filled label textbox with blank spaces:", leadingAndTrailingSpaces);

            // Get the value of the label text box to verify that it accepts the blank spaces
            const enteredValue = await this.labelTextbox.inputValue();
            console.log("Entered value in label textbox:", enteredValue);

            // Verify that the entered value matches the provided blank spaces
            await expect(enteredValue).toBe(leadingAndTrailingSpaces);
            console.log("Label textbox accepts Leading And Trailing Spaces");
        } catch (error) {
            console.error("Error occurred while verifying label textbox functionality:", error);
        }
    }


    async verifyFromDateLabelAndTextboxDisplayed() {
        try {
            // Verify that the from date label is visible
            await expect(this.fromDateLabel).toBeVisible();
            console.log("From date label is visible on the page");

            // Verify that the from date textbox is visible
            await expect(this.fromDateTextbox).toBeVisible();
            console.log("From date textbox is visible on the page");
        } catch (error) {
            console.error("Error occurred while verifying from date label and textbox:", error);
        }
    }

}


