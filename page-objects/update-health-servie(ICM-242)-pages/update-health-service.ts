import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import exp from "constants";
import { threadId } from "worker_threads";


export class HealthServiceDetails {
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
    readonly provider: Locator;
    readonly serviceItemDescription: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;
        this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
        this.batchingmenu = page.locator('//img[@src="assets/iris/icons/navbar/batching.svg"]');
        this.openBatchMenu = page.locator('//a[contains(.," Open Batch")]');
        this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
        this.paymentMethod = this.newPage.locator("//div[text()='Payment Method']");
        this.quichSearch = page.getByPlaceholder('Quick Search');
        this.claimsMenu = page.locator('//mat-sidenav//a[@href="/layout/search-claim"]');
        this.batching = page.locator('span[class="ng-star-inserted"]');
        this.OpenBatchMenu = page.locator("//a[normalize-space()='Open Batch']");
        this.txt_BatchID = page.locator('//input[@id="mat-input-2"]');
        this.openBatchHeading = page.locator('//div[@class="heading"]');
        this.authorizationNo = page.locator('tbody tr:nth-child(1) td:nth-child(4) div:nth-child(1)');
        this.provider = page.locator('input[name="provider"]');
        this.serviceItemDescription = page.locator('//td[contains(@class,"mat-cell cdk-column-itemDescription")]');

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

    async enterProviderValue(updateHealthServiceData: string) {
        console.log("Verify the User can Enter the valid Provider Value");
        await this.page.getByLabel('Provider*').click();
        await this.page.getByLabel('Provider*').fill(updateHealthServiceData);
        await this.page.keyboard.press('Backspace');
        await this.page.waitForTimeout(5000);
        await this.page.locator('//mat-option//span[text()="' + updateHealthServiceData + '"]').click();

    }
    async verifyUserCanAddServiceItems(serviceItemCode: string) {
        // Click 'Add Service Item' button
        await this.page.getByTitle('Add Service Item').click();

        // Wait for a short period to allow the okButton to appear
        await this.page.waitForTimeout(2000);

        // Try to select the 'Ok' button if it becomes visible
        const okButton = await this.page.$('button.ok-button');
        if (okButton) {
            // Wait for the 'Ok' button to be visible
            const isOkButtonVisible = await okButton.isVisible();
            if (isOkButtonVisible) {
                await okButton.click();
                console.log('Clicked on Ok button');
            } else {
                console.log('Ok button is not visible, proceeding with further steps');
            }
        } else {
            console.log('Ok button not found, proceeding with further steps');
        }



        // Proceed with adding the service item
        const serviceItemsLabel = this.page.getByLabel('Services Items');
        const combobox = serviceItemsLabel.getByRole('combobox');
        await combobox.fill(serviceItemCode);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('Tab');

        console.log("User is able to add Service Items using Add items");
    }


    async VerifyUserCanSeeServiceItemDescriptionInEnglish_German(serviceDescription: string) {
        const cellElement = await this.page.$(`xpath=//td[contains(text(), "${serviceDescription}")]`);

        if (cellElement) {
            const cellText = await cellElement.innerText();
            console.log('Cell text:', cellText);

            // Trim both the cell text and service description to remove any leading or trailing whitespace
            const trimmedCellText = cellText.trim();
            const trimmedServiceDescription = serviceDescription.trim();

            if (trimmedCellText === trimmedServiceDescription) {
                console.log('Cell text matches the service description:', cellText);
            } else {
                console.error('Cell text does not match the service description');
            }
        } else {
            console.error('Cell element not found');
        }
    }



    async selectSpecificAssessment(specificAssessment: string) {
        await this.page.getByLabel('Specific Assessment*').click();
        await this.page.getByLabel('Specific Assessment*').fill(specificAssessment);
        await this.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        // await this.page.locator('//mat-option//span[text()="' + specificAssessment + '"]').click();
        await this.page.locator('//div[text()="' + specificAssessment + '"]').dblclick();
        await this.page.waitForTimeout(2000);

    }


}