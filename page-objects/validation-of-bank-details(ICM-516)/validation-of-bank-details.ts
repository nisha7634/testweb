import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import exp from "constants";


export class BankDetails {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly authorizationNo: Locator;
    readonly paymentMethod: Locator;
    readonly batchingmenu: Locator;
    readonly openBatchMenu: Locator;
    readonly txt_BatchID: Locator;
    public country: Locator;
    public iBanNumber: Locator;
    public swiftBicBank: Locator;
    public accountNumber: Locator;
    public accountName: Locator;
    public paymentCurrencyCode: Locator;
    public bankName: Locator;
    public bankAddress: Locator;
    public branch: Locator;
    readonly quichSearch: Locator;
    readonly claimsMenu: Locator;
    readonly batching: Locator;
    readonly OpenBatchMenu: Locator;
    readonly openBatchHeading: Locator;
    readonly btn_nxt: Locator;
    readonly quickSearch: Locator;
    readonly pre_approval: Locator;
    readonly newpre_approvalLink: Locator;
    readonly beneficiaryTxtield: Locator;
    readonly searchCardNumber: Locator;
    readonly requestedSource: Locator;
    readonly consultationDate: Locator;
    readonly FOB: Locator;
    readonly inpatient: Locator;
    readonly initialClaim: Locator;
    readonly processedClaim: Locator;
    readonly authorizedClaim: Locator;
    readonly actionsBtn: Locator;
    readonly dltClaimBtn: Locator;
    readonly searchClaimBox: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.authorizationNo = page.locator('(//div[@class="td-content ng-star-inserted" and text()="EUR"])[2]')
        //this.batchingmenu = page.locator('//img[@src="assets/iris/icons/navbar/batching.svg"]');
        this.batchingmenu = page.locator('//span[text()=" Batching "]')
        this.openBatchMenu = page.locator('//a[contains(.," Open Batch")]');
        this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
        this.paymentMethod = this.newPage.locator("//div[text()='Payment Method']");
        this.quichSearch = page.getByPlaceholder('Quick Search');
        this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
        this.batching = page.locator('span[class="ng-star-inserted"]');
        this.OpenBatchMenu = page.locator("//a[normalize-space()='Open Batch']");
        this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
        this.openBatchHeading = page.locator('//div[@class="heading"]');
        //this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
        this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
        this.quickSearch = page.getByPlaceholder('Quick Search');
        this.pre_approval = page.getByText('Pre-approvals');
        this.newpre_approvalLink = page.getByRole('link', { name: 'New Pre-approval' })
        this.beneficiaryTxtield = page.getByPlaceholder('Select Beneficiary')
        this.searchCardNumber = page.getByText('SearchCard Numberfor:')
        this.requestedSource = page.getByLabel('Requested Source').locator('div').first();
        this.consultationDate = page.getByTitle('Consultation Date').getByLabel('Open calendar')
        this.FOB = page.getByLabel('FOB').locator('span');
        this.inpatient = page.getByText('In-Patient', { exact: true });
        this.searchClaimBox = page.locator('(//input[@id="new-grid-search-input"])[2]')
        this.initialClaim = page.locator('(//div[text()="Initial"])[1]');
        this.processedClaim = page.locator('(//div[text()="Processed"])[1]');
        this.authorizedClaim = page.locator('(//strong[@class="pipe-match" and text()="Processed"])[1]');
        //this.actionsBtn = page.locator('//span[@class="icon icon-action"]');
        // this.dltClaimBtn = page.locator('//span[text()="Delete Claim"]');

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

    async openInitialClaim() {
        await this.initialClaim.dblclick();
        [this.newPage] = await Promise.all([
            this.context.waitForEvent('page'),
        ])
    }


    async enterClaimToSearch_Processes_AUthorized() {
        await this.searchClaimBox.fill('Processed');
        await this.page.keyboard.press('Enter');

    }
    async openAutorizedClaim() {
        await this.authorizedClaim.dblclick();
        [this.newPage] = await Promise.all([
            this.context.waitForEvent('page'),
        ])
    }




    async verifyPaymentMethodOptionVisible() {
        await this.newPage.waitForLoadState("networkidle");
        await this.newPage.waitForSelector("//div[text()='Payment Method']")
        const isPaymentOptionVisible = await this.newPage.locator("//div[text()='Payment Method']").isVisible();
        expect(isPaymentOptionVisible).toBeTruthy();
    }

    async clickOnPaymentMethodOption() {
        await this.newPage.locator("//div[text()='Payment Method']").click()
    }

    async verifyBankAccountDetailsPage() {
        const isVisible = await this.newPage.locator("//span[text()='Bank Account Details']").isVisible();
        expect(isVisible).toBeTruthy();
    }

    async verifyBankAccountDetailsPageDetails() {
        const bankTransferBtn = this.newPage.locator('label[for="mat-radio-8-input"]');
        await this.newPage.waitForLoadState("networkidle");

        // Locate the element using XPath
        const chequeDeliveryRadioButton = await this.page.$('//div[contains(text(), "Cheque Delivery")]/preceding-sibling::div[@class="mat-radio-outer-circle"]');

        // Check if the element is found
        if (chequeDeliveryRadioButton) {
            // Click the radio button if it exists
            await chequeDeliveryRadioButton.click();
        } else {
            // Handle the case where the element is not found
            console.error('Cheque Delivery radio button not found');
        }


        await bankTransferBtn.click();
        this.country = this.newPage.locator("[formcontrolname='countryBank']");
        await expect(this.country).toBeVisible();

        //this.iBanNumber = this.newPage.locator("[formcontrolname='ibanBank']");
        this.iBanNumber = this.newPage.locator('//input[@formcontrolname="ibanBank"]');
        await expect(this.iBanNumber).toBeVisible();

        this.swiftBicBank = this.newPage.locator("[formcontrolname='swiftBicBank']");
        await expect(this.swiftBicBank).toBeVisible();

        this.accountNumber = this.newPage.locator("[formcontrolname='accountNoBank']");
        await expect(this.accountNumber).toBeVisible();

        this.accountName = this.newPage.locator("[formcontrolname='accountNameBank']");
        await expect(this.accountName).toBeVisible();

        this.paymentCurrencyCode = this.newPage.locator("[formcontrolname='currencyBank']");
        await expect(this.paymentCurrencyCode).toBeVisible();

        this.bankName = this.newPage.locator("//mat-form-field[contains(@class,'example-chip-list mat-form-field')]//input");
        await expect(this.bankName).toBeVisible();

        this.bankAddress = this.newPage.locator("[formcontrolname='bankAddressBank']");
        await expect(this.bankAddress).toBeVisible();

        this.branch = this.newPage.locator('[formcontrolname="branchBank"]');
        await expect(this.branch).toBeVisible()

    }

    async selectCountry(option: string) {
        await this.newPage.waitForTimeout(2000)
        await this.country.click({ force: true });
        await this.newPage.locator("//span[@class='mat-option-text' and contains(text(),'" + option + "')]").click();
    }

    async UpdateCountry(option: string) {
        await this.newPage.waitForTimeout(2000)
        await this.country.click({ force: true });
        await this.newPage.locator("//span[@class='mat-option-text' and contains(text(),'" + option + "')]").click();
        //span[@class='mat-option-text' and contains(text(),'France') and not(contains(text(),'Metropolitan'))]

    }
    async verifySelectedCountry(option: string) {
        const selectedCountry = await this.country.innerText();
        expect(selectedCountry.trim()).toBe(option);
    }

    async entreSWIFTBIC(text: string) {
        await this.newPage.waitForTimeout(1000);
        await this.swiftBicBank.click()
        await this.swiftBicBank.type(text);
    }

    async verifySWIFTBICfieldIsEditable() {
        const isEditable = await this.swiftBicBank.isEditable();
        expect(isEditable).toBeTruthy()
    }


    async autofillSWIFTBIC(text) {
        // Wait for the page to load and necessary timeout
        await this.newPage.waitForTimeout(1000);

        // Verify the SWIFT/BIC field is editable
        const isEditable = await this.swiftBicBank.isEditable();
        expect(isEditable).toBeTruthy();

        // Auto-fill the SWIFT/BIC field with the provided text
        if (isEditable) {
            await this.swiftBicBank.click();
            await this.swiftBicBank.fill(''); // Clear any existing text
            await this.swiftBicBank.type(text); // Type the new text
        }
    }


    async enterIBANNumber(value: string) {
        await this.iBanNumber.fill(value);
        await this.iBanNumber.press('Tab');
        //await this.swiftBicBank.click()
        await this.newPage.waitForTimeout(1000)
    }

    async updateIBAN() {
        await this.iBanNumber.click();
        await this.iBanNumber.clear();

    }


    async updateCpuntry() {
        //await test.step("7. Click on the Dropdown and select country", async () => {
        //await bankDetails.selectCountry(bankDetailsData['TC-1654'].country);

        await this.country.click();
        await this.iBanNumber.clear();

    }
    async verifyIsAccountNumberFieldDisplayedAndAutoFilled() {
        await expect(this.accountNumber).toBeVisible();

        const accountNumberValue = await this.accountNumber.inputValue();
        expect(accountNumberValue).not.toBeNull();
    }

    async enterAccountName(accountName: string) {
        await this.accountName.fill(accountName);
    }

    async verifyAccountName(accountName: string) {
        const actualName = await this.accountName.inputValue();
        expect(actualName).toBe(accountName);
    }

    async verifyIsFieldsAutofilled() {
        const swiftBicValue = await this.swiftBicBank.inputValue();
        expect(swiftBicValue).not.toBeNull();

        const accountNumberValue = await this.accountNumber.inputValue();
        expect(accountNumberValue).not.toBeNull();

        const bankName = await this.bankName.inputValue();
        expect(bankName).not.toBeNull();

        const bankAddress = await this.bankAddress.inputValue();
        expect(bankAddress).not.toBeNull();

        const branch = await this.branch.innerText();
        expect(branch).not.toBeNull();
    }

    async verifyIBANErrorMessagePopupDisplayed() {
        const isPopupDisplayed = await this.newPage.locator("(//mat-dialog-container[@role='dialog'])[2]").isVisible();
        expect(isPopupDisplayed).toBeTruthy()
    }

    async clickOnOkButton() {
        await this.newPage.click('//button[@class="ok-button"]');
    }


    async clickOnOkButtononPopup() {
        await this.newPage.click("//button[text()='OK']");
    }
    async verifyErrorMessage(errorMessage: string) {
        const actualErrorMessage = await this.newPage.getByText(errorMessage).textContent();
        expect(actualErrorMessage?.trim()).toBe(errorMessage);
    }

    async verifyIBANNumberLegth(value: string) {
        const IBANNumber = await this.iBanNumber.inputValue();
        const count = IBANNumber.length
        expect(`${count}`).toBe(value)
    }

    async verifyAreFirstTwoValuesChar() {
        const IBANNumber = await this.iBanNumber.inputValue();
        const firstTwoChars = IBANNumber.slice(0, 2);
        const isFirstValueChar = Boolean(firstTwoChars.charAt(0).match(/[a-zA-Z]/));
        const isSecondValueChar = Boolean(firstTwoChars.charAt(1).match(/[a-zA-Z]/));
        expect(isFirstValueChar && isSecondValueChar).toBeTruthy()
    }

    async selectCurrency(currency: string) {
        await this.newPage.click('[formcontrolname="currencyBank"]');
        await this.newPage.locator("//span[@class='mat-option-text' and contains(text(),'" + currency + "')]").click();
    }

    async clickOnCurrency() {
        await this.newPage.click('[formcontrolname="currencyBank"]');
    }

    async verifyIsDropDownDisplayed() {
        const isDropDownDisplyed = await this.newPage.locator('//div[@class="cdk-overlay-pane"]').isVisible();
        expect(isDropDownDisplyed).toBeTruthy();
    }

    async verifySelectedCurrency(currency: string) {
        const selectedCurrency = await this.newPage.locator('[formcontrolname="currencyBank"]').innerText()
        expect(selectedCurrency.trim()).toBe(currency);
    }

    async verifySuccesPopIsDisplayed() {
        await this.newPage.waitForTimeout(2000)
        const isPopupDisplayed = await this.newPage.locator("(//confirm-popup[@class='ng-star-inserted']//div)[1]").isVisible()
        expect(isPopupDisplayed).toBeTruthy();
    }

    async clickOnPopupOKButton() {
        await this.newPage.click("//button[text()='OK']");
    }

    async verifyUserIsNotABleToFInishCLaim_WithoutPaymentDetails() {
        await this.newPage.getByRole('button', { name: 'Finish', exact: true }).click();
        await this.newPage.getByRole('button', { name: 'Yes' }).click();
        //await expect(this.newPage.getByText('Invoice Number is required.')).toBeVisible();
    }
    async VerifyWarning_whenFinishClaimWithoutPaymentDetails() {

    }
    async VerifyPaymentMethodOptionWhenClaim_Created() {

        let newCliam = this.newPage.locator('//div[text()="New Plan"]');
        let reimPage = this.newPage.locator('//a[contains(text(),"Add Reimbursement Processing Claim")]');
        await newCliam.click();
        await this.newPage.waitForLoadState("networkidle");
        console.log("User is on new claim creation page");
        await expect(reimPage).toBeTruthy();

        const paymetOption = this.newPage.locator('.link-text.ng-star-inserted');
        if (await paymetOption.isVisible()) {
            console.log('Payment method is visible on the page');
        } else {
            console.log('Payment Method is not visible on the page');
        }


        /*const paymetOption = this.newPage.locator('.link-text.ng-star-inserted');
        if (!(await paymetOption.isVisible())) {
            console.log('Payment Methos is not present on the page when the claim is created');
        }
        */
    }
    async VerifyPaymentMethodOptionWhenClaim_Processing() {
        let newCliam = this.newPage.locator('//div[text()="New Plan"]');
        let reimPage = this.newPage.locator('//a[contains(text(),"Add Reimbursement Processing Claim")]');
        await newCliam.click();
        await this.newPage.waitForLoadState("networkidle");
        console.log("User is on new claim creation page");
        await expect(reimPage).toBeTruthy();

        const paymetOption = this.newPage.locator('.link-text.ng-star-inserted');
        if (await paymetOption.isVisible()) {
            console.log('Payment method is visible on the page');
        } else {
            console.log('Payment Method is not visible on the page');
        }

    }
    async PaymentOptionsOnPamentPage() {
        const bankDetails = this.newPage.locator('label[for="mat-radio-8-input"]').isVisible();
        const chequeDetails = this.newPage.locator('label[for="mat-radio-9-input"]').isVisible();

    }

    async verifyCountryWhenIBANUpdate() {
        const fieldValue = await this.newPage.$eval('[formcontrolname="countryBank"]', element => element.textContent);

        if (fieldValue !== null && fieldValue.trim() !== '') {
            console.log('The field is not null:', fieldValue);
        } else {
            console.log('The field is null or empty.');
        }
    }


    async verifyChnagesWhenCountryChnagedAfterIBAN() {
        try {
            // Wait for the text field to appear on the page
            await this.newPage.waitForSelector("[formcontrolname='ibanBank']");

            // Extract the value of the text field
            const fieldValue = await this.newPage.$eval("[formcontrolname='ibanBank']", (element: SVGElement | HTMLElement) => {
                // Type assertion to HTMLInputElement
                const inputElement = element as HTMLInputElement;
                // Check if the element is an HTMLInputElement
                if (inputElement && inputElement instanceof HTMLInputElement) {
                    // Return the value of HTMLInputElement
                    return inputElement.value;
                } else {
                    // For other elements, return null
                    return null;
                }
            });

            // Check if the value is null or empty
            if (!fieldValue || fieldValue.trim() === '') {
                console.log(`IBAN field contains null or empty value.`);
                return true; // IBAN field contains null or empty value
            } else {
                console.log(`IBAN field contains value: '${fieldValue}'.`);
                return false; // IBAN field contains a non-null value
            }
        } catch (error) {
            console.error(`Error occurred while verifying IBAN field: ${error}`);
            return false; // Error occurred
        }
    }



    async verifyCurrencyWhenIBANUpdate() {
        const fieldValue = await this.newPage.$eval('[formcontrolname="currencyBank"]', element => element.textContent);

        if (fieldValue !== null && fieldValue.trim() !== '') {
            console.log('The field is not null:', fieldValue);
        } else {
            console.log('The field is null or empty.');
        }
    }

    async verifyIBANFieldValue(IBANNumber: string) {
        await this.page.waitForTimeout(10000);
        const ibanNumberafterSave = await this.iBanNumber.inputValue();
        console.log(ibanNumberafterSave);
        expect(ibanNumberafterSave).toBe(IBANNumber);
    }

    async VerifyCountryNameFieldValue(country: string) {
        const accountCountryafterSave = await this.country.getAttribute('value');
        console.log(accountCountryafterSave);
        expect(accountCountryafterSave).toBe(country);
    }

    async VerifypaymentCurrencyCodeValue(currency: string) {
        const accountCurrencyafterSave = await this.paymentCurrencyCode.getAttribute('value');
        console.log(accountCurrencyafterSave);
        expect(accountCurrencyafterSave).toBe(currency);
    }

    async updateAccountName(UpdatedAccountName: string) {
        await this.accountName.clear();
        await this.accountName.fill(UpdatedAccountName);
    }

    async VerifypaymentAccountNameValue(UpdatedAccountName: string) {
        const nameAfterUpdate = await this.accountName.inputValue();
        console.log(nameAfterUpdate);
        await this.page.waitForTimeout(5000);
        expect(nameAfterUpdate).toBe(UpdatedAccountName);
    }

    async verifyActionBtnOnPrcessingPage() {
        let actionsBtn = this.newPage.locator('//span[@class="icon icon-action"]');
        expect(actionsBtn).toBeVisible();
        console.log("Actions btn is displyed on the page");
        await actionsBtn.click();
    }

    async verifyActionFunctionality() {
        let actionsBtn = this.newPage.locator('div.actions-text');
        let btnValidate = this.newPage.locator('//span[text()="Validate ASOAP"]');
        expect(actionsBtn).toBeVisible();
        console.log("Actions btn is displyed on the page");
        await actionsBtn.click();
        console.log("User is able to click on the Actions btn");
        expect(btnValidate).toBeTruthy();

    }

    async verifyUnvalidateClaimProcess() {
        try {
            let unvalidateBtn = this.newPage.locator('//span[text()="Unvalidate"]');
            let validationMsg = this.newPage.locator('//span[text()="Claim unvalidated successfully"]');
            let okBtn = this.newPage.locator('//button[text()="OK"]');
            let validateASOPBtn = this.newPage.locator('//span[text()="Validate ASOAP"]');

            await unvalidateBtn.click();
            await expect(validationMsg).toBeVisible();
            await okBtn.click();
            await validateASOPBtn.isEnabled();
        } catch (error) {
            console.error('An error occurred during claim verification:', error);
        }
    }

    async openProcesedClaim() {
        await this.processedClaim.dblclick();
        [this.newPage] = await Promise.all([
            this.context.waitForEvent('page'),
        ])

    }

    async openRequiredClaimFromBatch(claimNumber: string) {
        let serachReqCliamTxt = await this.newPage.locator('(//input[@id="new-grid-search-input"])[2]');
        await serachReqCliamTxt.fill(claimNumber);
        this.openClaim();
    }
    async verifyUserCanFinishClaim() {
        let finishBtn = await this.newPage.locator('button[class="finish mat-button mat-button-base ng-star-inserted"] span[class="txt-span"]');
        let warning = await this.newPage.locator('//span[text()="This will Finish the Medical Plan, are you sure you want to continue?"]')
        expect(finishBtn).toBeEnabled();
        console.log("User can click on the finish Btn");
        expect(warning).toBeVisible();
        console.log(" Finish the Medical Plan pop up is displayed")
    }


}