import { BrowserContext, Keyboard, Locator, Page, expect } from "@playwright/test";
import exp from "constants";
const puppeteer = require('puppeteer');


export class eoBCustDetails_4 {
    newPage: Page;
    readonly page: Page;
    readonly context: BrowserContext;

    readonly fromDateLabel: Locator;
    readonly fromDateTextbox: Locator;
    readonly fromDatecalendarIcon: Locator;
    readonly toDateLabel: Locator;
    readonly toDateCalendarIcon: Locator;
    readonly openCalendar: Locator;
    readonly fromDateTXt: Locator;
    readonly toDateTxt: Locator;
    readonly fromReleaseDateLabel: Locator;
    readonly fromReleaseDateTextbox: Locator;
    readonly fromReleaseDateCalendarIcon: Locator;
    readonly calendarElement: Locator;
    readonly selectedDateElement: Locator;
    readonly toReleaseDateLabel: Locator;
    readonly toReleaseDateTextbox: Locator;
    readonly toReleaseDateCalendarIcon: Locator;
    readonly fromDeliveryDate: Locator;
    readonly fromReleaseDateTXt: Locator;
    readonly toReleaseDateTxt: Locator;
    readonly fromDeliveryDateLabel: Locator;
    readonly fromDeliveryDateTextbox: Locator;
    readonly fromDeliveryDateCalendarIcon: Locator;
    readonly toDeliveryDateLabel: Locator;
    readonly toDeliveryDateTextbox: Locator;
    readonly toDeliveryDateCalendarIcon: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.context = context;
        this.page = page;
        this.newPage = page;

        this.fromDateTextbox = page.locator('//input[@formcontrolname="fromDate"]')
        this.fromDateLabel = page.locator('//label[@for="fromdate"]//mat-label[1]')
        this.fromDatecalendarIcon = page.locator('(//button[@aria-label="Open calendar"])[1]')
        this.toDateLabel = page.locator('//input[@formcontrolname="toDate"]')
        this.toDateCalendarIcon = page.locator('(//button[@aria-label="Open calendar"])[2]')
        this.openCalendar = page.locator('//mat-calendar[@id="mat-datepicker-0"]')
        this.fromDateTXt = page.locator('//input[@id="fromdate"]')
        this.toDateTxt = page.locator('//input[@formcontrolname="toDate"]')
        this.fromReleaseDateLabel = page.locator('//input[@formcontrolname="fromReleaseDate"]')
        this.fromReleaseDateTextbox = page.locator('//input[@id="fromreleasedate"]')
        this.fromReleaseDateCalendarIcon = page.locator('(//button[@aria-label="Open calendar"])[3]')
        this.calendarElement = page.locator('//button[@aria-label="Next month"]')
        this.selectedDateElement = page.locator('//td[contains(@class,"mat-calendar-body-cell mat-calendar-body-active")]')
        this.toReleaseDateLabel = page.locator('//input[@formcontrolname="toReleaseDate"]')
        this.toReleaseDateTextbox = page.locator('//input[@id="toreleasedate"]')
        this.toReleaseDateCalendarIcon = page.locator('(//button[@aria-label="Open calendar"])[4]')
        this.toReleaseDateTxt = page.locator('//input[@formcontrolname="toReleaseDate"]')
        this.fromReleaseDateTXt = page.locator('//input[@formcontrolname="fromReleaseDate"]')
        this.fromDeliveryDateLabel = page.locator('input[name="fromDeliveryDate"]')
        this.fromDeliveryDateTextbox = page.locator('//input[@formcontrolname="fromDeliveryDate"]')
        this.fromDeliveryDateCalendarIcon = page.locator('(//button[@aria-label="Open calendar"])[5]')
        this.toDeliveryDateCalendarIcon = page.locator('(//button[@aria-label="Open calendar"])[6]')
        this.toDeliveryDateLabel = page.locator('input[name="toDeliveryDate"]')
        this.toDeliveryDateTextbox = page.locator('input[name="toDeliveryDate"]')



    }


    async verifyFromDateLabelAndTextboxDisplayed() {

        // Verify that the from date label is visible
        await expect(this.fromDateLabel).toBeVisible();
        console.log("From date label is visible on the page");

        // Verify that the from date textbox is visible
        await expect(this.fromDateTextbox).toBeVisible();
        console.log("From date textbox is visible on the page");

    }


    async verifyFromDateCalendarIconDisplayed() {


        // Verify if the calendar icon is displayed
        if (this.fromDatecalendarIcon) {
            console.log("Calendar icon is displayed on the page");
        } else {
            console.error("Calendar icon is not displayed on the page");
        }
    }



    async VerifyFromDateCalendarFunctionality() {

        // Check if the calendar icon is displayed
        if (this.fromDatecalendarIcon) {
            console.log("Calendar icon is displayed on the page");

            // Click on the calendar icon
            await this.fromDatecalendarIcon.click();
            await this.page.waitForTimeout(3000);

            // Verify that the current date is selected
            const currentDate = new Date().getDate();
            const selectedDateElement = this.selectedDateElement;

            if (selectedDateElement) {
                const selectedDate = await selectedDateElement.textContent();

                if (selectedDate !== null && parseInt(selectedDate) === currentDate) {
                    console.log("Current date is selected by default in the calendar");
                } else {
                    console.error("Current date is not selected by default in the calendar");
                }
            } else {
                console.error("Selected date element is not found in the calendar");
            }
        } else {
            console.error("Calendar icon is not displayed on the page");
        }

    }

    async verifyToDateLabelAndTextboxDisplayed() {

        // Verify that the from date label is visible
        await expect(this.toDateLabel).toBeVisible();
        console.log("To date label is visible on the page");

        // Verify that the from date textbox is visible
        await expect(this.toDateLabel).toBeVisible();
        console.log("To date textbox is visible on the page");

    }

    async verifyToDateCalendarIconDisplayed() {
        // Verify if the calendar icon is displayed
        if (this.toDateCalendarIcon) {
            console.log("TO Date Calendar icon is displayed on the page");
        } else {
            console.error("To Date Calendar icon is not displayed on the page");
        }
    }

    async VerifyToDateCalendarFunctionality() {

        // Check if the calendar icon is displayed
        if (this.toDateCalendarIcon) {
            console.log("Calendar icon is displayed on the page");

            // Click on the calendar icon
            await this.toDateCalendarIcon.click();

            // Wait for the calendar to open
            await this.page.waitForSelector('//mat-calendar[@class="mat-calendar ng-trigger ng-trigger-fadeInCalendar"]');

            // Verify that the current date is selected
            const currentDate = new Date().getDate();
            const selectedDateElement = await this.page.$('//td[contains(@class,"mat-calendar-body-cell mat-calendar-body-active")]');

            if (selectedDateElement) {
                const selectedDate = await selectedDateElement.textContent();

                if (selectedDate !== null && parseInt(selectedDate) === currentDate) {
                    console.log("Current date is selected by default in the calendar");
                } else {
                    console.error("Current date is not selected by default in the calendar");
                }
            } else {
                console.error("Selected date element is not found in the calendar");
            }
        } else {
            console.error("Calendar icon is not displayed on the page");
        }


    }



    async verifySelectFromPastDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day before today's date
        let oldDate = day - 1;

        // Convert to string to match the format used in the calendar
        let oldDateStr = oldDate.toString();

        // Open the calendar and select the past date
        await this.fromDatecalendarIcon.click();
        await this.page.locator('//*[text()=' + oldDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the past date is selected correctly
        const selectedDateLocator = this.fromDateTXt.inputValue();
        console.log(selectedDateLocator);
        console.log(oldDateStr);


        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(oldDateStr);
        })
    }



    async verifySelectFromFutureDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day after today's date (future date)
        let futureDate = day + 1;

        // Convert to string to match the format used in the calendar
        let futureDateStr = futureDate.toString();

        // Open the calendar and select the future date
        await this.fromDatecalendarIcon.click();
        await this.page.locator('//*[text()=' + futureDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the future date is selected correctly
        const selectedDateLocator = this.fromDateTXt.inputValue();
        console.log(selectedDateLocator);
        console.log(futureDateStr);

        // Check if the selected date input value contains the future date string
        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(futureDateStr);

        });
    }



    async verifySelectToPastDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day before today's date
        let oldDate = day - 1;

        // Convert to string to match the format used in the calendar
        let oldDateStr = oldDate.toString();

        // Open the calendar and select the past date
        await this.toDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + oldDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the past date is selected correctly
        const selectedDateLocator = this.fromDateTXt.inputValue();
        console.log(selectedDateLocator);
        console.log(oldDateStr);


        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(oldDateStr);
        })
    }



    async verifySelectToFutureDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day after today's date (future date)
        let futureDate = day + 1;

        // Convert to string to match the format used in the calendar
        let futureDateStr = futureDate.toString();

        // Open the calendar and select the future date
        await this.toDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + futureDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the future date is selected correctly
        const selectedDateLocator = this.fromDateTXt.inputValue();
        console.log(selectedDateLocator);
        console.log(futureDateStr);

        // Check if the selected date input value contains the future date string
        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(futureDateStr);

        });
    }



    async verifyToLessThanFromDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate(); // Extract day as a number
        let month = date.getMonth() + 1; // Extract month as a number
        let year = date.getFullYear(); // Extract year as a number

        // Open the calendar and select the "From" date (today's date)
        await this.fromDatecalendarIcon.click();
        await this.page.locator('//*[text()=' + day + ']').click();

        // Wait for a brief moment before interacting with the ToDate calendar
        await this.page.waitForTimeout(1000);

        // Open the calendar and select the "To" date (yesterday's date)
        let yesterday = day - 1; // Subtract 1 from day (assuming the day is within the month)
        await this.toDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + yesterday + ']').click();

        // Verify that the selected "To" date is less than the selected "From" date
        const fromDateValue = await this.fromDateTXt.inputValue();
        const toDateValue = await this.toDateTxt.inputValue();

        const fromDate = new Date(fromDateValue);
        const toDate = new Date(toDateValue);

        // Verify that the "To" date is less than the "From" date by comparing their timestamps
        expect(toDate.getTime()).toBeLessThan(fromDate.getTime());
    }


    async verifyToGreaterThanFromDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate(); // Extract day as a number
        let month = date.getMonth() + 1; // Extract month as a number
        let year = date.getFullYear(); // Extract year as a number

        // Open the calendar and select the "From" date (today's date)
        await this.fromDatecalendarIcon.click();
        await this.page.locator('//*[text()=' + day + ']').click();

        // Wait for a brief moment before interacting with the ToDate calendar
        await this.page.waitForTimeout(1000);

        // Open the calendar and select the "To" date (tomorrow's date)
        let tomorrow = day + 1; // Add 1 to day (assuming the day is within the month)
        await this.toDateCalendarIcon.click();
        await this.page.locator('//div[contains(@class, "mat-calendar-body-cell-content") and text()=' + tomorrow + ']').click();

        // Verify that the selected "To" date is greater than the selected "From" date
        const fromDateValue = await this.fromDateTXt.inputValue();
        const toDateValue = await this.toDateTxt.inputValue();

        const fromDate = new Date(fromDateValue);
        const toDate = new Date(toDateValue);

        // Verify that the "To" date is greater than the "From" date by comparing their timestamps
        expect(toDate.getTime()).toBeGreaterThan(fromDate.getTime());
    }

    async verifyToSameAsFromDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate(); // Extract day as a number
        let month = date.getMonth() + 1; // Extract month as a number
        let year = date.getFullYear(); // Extract year as a number

        // Open the calendar and select the "From" date (today's date)
        await this.fromDatecalendarIcon.click();
        await this.page.locator('//*[text()=' + day + ']').click();

        // Wait for a brief moment before interacting with the ToDate calendar
        await this.page.waitForTimeout(1000);

        // Open the calendar and select the same "To" date as the "From" date
        await this.toDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + day + ']').click();

        // Verify that the selected "To" date is the same as the selected "From" date
        const fromDateValue = await this.fromDateTXt.inputValue();
        const toDateValue = await this.toDateTxt.inputValue();

        const fromDate = new Date(fromDateValue);
        const toDate = new Date(toDateValue);

        // Verify that the "To" date is the same as the "From" date
        expect(toDate.getTime()).toEqual(fromDate.getTime());
    }

    async verifyFromReleaseDateLabelAndTextboxDisplayed() {

        // Verify that the "From Release Date" label is visible
        await expect(this.fromReleaseDateLabel).toBeVisible();
        console.log("From Release Date label is visible on the page");

        // Verify that the "From Release Date" textbox is visible
        await expect(this.fromReleaseDateTextbox).toBeVisible();
        console.log("From Release Date textbox is visible on the page");

    }

    async verifyReleaseDateCalendarIcon() {
        // Verify if the calendar icon is displayed
        if (this.fromReleaseDateCalendarIcon) {
            console.log("From release Date Calendar icon is displayed on the page");
        } else {
            console.error("From release Date Calendar icon is not displayed on the page");
        }
    }




    async VerifyFromReleaseDateCalendarFunctionality() {

        // Check if the calendar icon is displayed
        if (this.fromReleaseDateCalendarIcon) {
            console.log("Calendar icon is displayed on the page");

            // Click on the calendar icon
            await this.fromReleaseDateCalendarIcon.click();
            await this.page.waitForTimeout(3000);

            // Verify that the current date is selected
            const currentDate = new Date().getDate();
            const selectedDateElement = this.selectedDateElement;

            if (selectedDateElement) {
                const selectedDate = await selectedDateElement.textContent();

                if (selectedDate !== null && parseInt(selectedDate) === currentDate) {
                    console.log("Current date is selected by default in the calendar");
                } else {
                    console.error("Current date is not selected by default in the calendar");
                }
            } else {
                console.error("Selected date element is not found in the calendar");
            }
        } else {
            console.error("Calendar icon is not displayed on the page");
        }

    }


    async verifySelectFromReleasePastDate() {

        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day before today's date
        let oldDate = day - 1;

        // Convert to string to match the format used in the calendar
        let oldDateStr = oldDate.toString();

        // Open the calendar and select the past date
        await this.fromReleaseDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + oldDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the past date is selected correctly
        const selectedDateLocator = this.fromReleaseDateTXt.inputValue();
        console.log(selectedDateLocator);
        console.log(oldDateStr);


        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(oldDateStr);
        })
    }


    async verifySelectFromFutureReleaseDate() {

        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day after today's date (future date)
        let futureDate = day + 1;

        // Convert to string to match the format used in the calendar
        let futureDateStr = futureDate.toString();

        // Open the calendar and select the future date
        await this.fromReleaseDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + futureDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the future date is selected correctly
        const selectedDateLocator = this.fromReleaseDateTXt.inputValue();
        console.log(selectedDateLocator);
        console.log(futureDateStr);

        // Check if the selected date input value contains the future date string
        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(futureDateStr);

        });
    }


    async verifyToReleaseDateLabelAndTextboxDisplayed() {

        // Verify that the "From Release Date" label is visible
        await expect(this.toReleaseDateLabel).toBeVisible();
        console.log("From Release Date label is visible on the page");

        // Verify that the "From Release Date" textbox is visible
        await expect(this.toReleaseDateTextbox).toBeVisible();
        console.log("From Release Date textbox is visible on the page");

    }


    async verifyToReleaseDateCalendarIcon() {

        // Wait for the calendar icon to appear
        await this.toReleaseDateCalendarIcon.waitFor();

        // Verify if the calendar icon is visible
        const isCalendarIconVisible = await this.toReleaseDateCalendarIcon.isVisible();
        if (isCalendarIconVisible) {
            console.log("To Release Date Calendar icon is displayed on the page");
        } else {
            console.error("To Release Date Calendar icon is not displayed on the page");
        }
    }


    async VerifyToReleaseDateCalendarFunctionality() {

        // Check if the calendar icon is displayed
        if (this.toReleaseDateCalendarIcon) {
            console.log("Calendar icon is displayed on the page");

            // Click on the calendar icon
            await this.toReleaseDateCalendarIcon.click();

            // Wait for the calendar to open
            await this.calendarElement.waitFor();
            //await this.page.waitForSelector('//mat-calendar[@class="mat-calendar ng-trigger ng-trigger-fadeInCalendar"]');

            // Verify that the current date is selected
            const currentDate = new Date().getDate();
            const selectedDateElement = await this.page.$('//td[contains(@class,"mat-calendar-body-cell mat-calendar-body-active")]');

            if (selectedDateElement) {
                const selectedDate = await selectedDateElement.textContent();

                if (selectedDate !== null && parseInt(selectedDate) === currentDate) {
                    console.log("Current date is selected by default in the calendar");
                } else {
                    console.error("Current date is not selected by default in the calendar");
                }
            } else {
                console.error("Selected date element is not found in the calendar");
            }
        } else {
            console.error("Calendar icon is not displayed on the page");
        }


    }


    async verifySelectToReleasePastDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day before today's date
        let oldDate = day - 1;

        // Convert to string to match the format used in the calendar
        let oldDateStr = oldDate.toString();

        // Open the calendar and select the past date
        await this.toReleaseDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + oldDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the past date is selected correctly
        const selectedDateLocator = this.toReleaseDateTextbox.inputValue();
        console.log(selectedDateLocator);
        console.log(oldDateStr);


        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(oldDateStr);
        })
    }



    async verifySelectToReleaseFutureDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day after today's date (future date)
        let futureDate = day + 1;

        // Convert to string to match the format used in the calendar
        let futureDateStr = futureDate.toString();

        // Open the calendar and select the future date
        await this.toReleaseDateCalendarIcon.click();
        await this.page.locator(`//*[text()='${futureDateStr}']`).click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the future date is selected correctly
        const selectedDateValue = await this.toReleaseDateTextbox.inputValue();
        console.log(selectedDateValue);
        console.log(futureDateStr);

        // Check if the selected date input value contains the future date string
        expect(selectedDateValue).toContain(futureDateStr);
    }



    async verifyToReleaseLessThanFromReleaseDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate(); // Extract day as a number
        let month = date.getMonth() + 1; // Extract month as a number
        let year = date.getFullYear(); // Extract year as a number

        // Open the calendar and select the "From" date (today's date)
        await this.fromReleaseDateCalendarIcon.click();
        await this.page.locator(`//*[text()='${day}']`).click();

        // Wait for a brief moment before interacting with the ToDate calendar
        await this.page.waitForTimeout(1000);

        // Open the calendar and select the "To" date (yesterday's date)
        let yesterday = day - 1; // Subtract 1 from day (assuming the day is within the month)
        await this.toReleaseDateCalendarIcon.click();
        await this.page.locator(`//*[text()='${yesterday}']`).click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(1000);

        // Verify that the selected "To" date is less than the selected "From" date
        const fromDateValue = await this.fromReleaseDateTXt.inputValue();
        const toDateValue = await this.toReleaseDateTxt.inputValue();

        console.log("From Date Value: ", fromDateValue);
        console.log("To Date Value: ", toDateValue);

        const fromDate = new Date(fromDateValue);
        const toDate = new Date(toDateValue);

        // Verify that the "To" date is less than the "From" date by comparing their timestamps
        expect(toDate.getTime()).toBeLessThan(fromDate.getTime());
    }

    async verifyToReleaseGreaterThanFromReleaseDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate(); // Extract day as a number
        let month = date.getMonth() + 1; // Extract month as a number
        let year = date.getFullYear(); // Extract year as a number

        // Open the calendar and select the "From Release" date (today's date)
        await this.fromReleaseDateCalendarIcon.click();
        await this.page.locator('//*[text()="' + day + '"]').click();

        // Wait for a brief moment before interacting with the To Release Date calendar
        await this.page.waitForTimeout(1000);

        // Open the calendar and select the "To Release" date (tomorrow's date)
        let tomorrow = day + 1; // Add 1 to day (assuming the day is within the month)
        await this.toReleaseDateCalendarIcon.click();
        await this.page.locator('//div[contains(@class, "mat-calendar-body-cell-content") and text()="' + tomorrow + '"]').click();

        // Wait for a brief moment to ensure the date is selected
        await this.page.waitForTimeout(1000);

        // Verify that the selected "To Release" date is greater than the selected "From Release" date
        const fromReleaseDateValue = await this.fromReleaseDateTXt.inputValue();
        const toReleaseDateValue = await this.toReleaseDateTxt.inputValue();

        const fromReleaseDate = new Date(fromReleaseDateValue);
        const toReleaseDate = new Date(toReleaseDateValue);

        // Verify that the "To Release" date is greater than the "From Release" date by comparing their timestamps
        expect(toReleaseDate.getTime()).toBeGreaterThan(fromReleaseDate.getTime());
    }


    async verifyToReleaseSameAsFromReleaseDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate(); // Extract day as a number
        let month = date.getMonth() + 1; // Extract month as a number
        let year = date.getFullYear(); // Extract year as a number

        // Open the calendar and select the "From Release" date (today's date)
        await this.fromReleaseDateCalendarIcon.click();
        await this.page.locator('//*[text()="' + day + '"]').click();

        // Wait for a brief moment before interacting with the To Release Date calendar
        await this.page.waitForTimeout(1000);

        // Open the calendar and select the "To Release" date (same as today's date)
        await this.toReleaseDateCalendarIcon.click();
        await this.page.locator('//div[contains(@class, "mat-calendar-body-cell-content") and text()="' + day + '"]').click();

        // Wait for a brief moment to ensure the date is selected
        await this.page.waitForTimeout(1000);

        // Verify that the selected "To Release" date is the same as the selected "From Release" date
        const fromReleaseDateValue = await this.fromReleaseDateTXt.inputValue();
        const toReleaseDateValue = await this.toReleaseDateTxt.inputValue();

        const fromReleaseDate = new Date(fromReleaseDateValue);
        const toReleaseDate = new Date(toReleaseDateValue);

        // Verify that the "To Release" date is the same as the "From Release" date by comparing their timestamps
        expect(toReleaseDate.getTime()).toEqual(fromReleaseDate.getTime());
    }

    async verifyToFromDeliveryDateLabelAndTextboxDisplayed() {

        // Verify that the "From Release Date" label is visible
        await expect(this.fromDeliveryDateLabel).toBeVisible();
        console.log("From Delivery Date label is visible on the page");

        // Verify that the "From Release Date" textbox is visible
        await expect(this.fromDeliveryDateTextbox).toBeVisible();
        console.log("From Delivery Date textbox is visible on the page");

    }


    async verifyFromDeliveryDateCalendarIcon() {

        // Wait for the calendar icon to appear
        await this.fromDeliveryDateCalendarIcon.waitFor();

        // Verify if the calendar icon is visible
        const isCalendarIconVisible = await this.fromDeliveryDateCalendarIcon.isVisible();
        if (isCalendarIconVisible) {
            console.log("From Delivery Date Calendar icon is displayed on the page");
        } else {
            console.error("From Delivery Date Calendar icon is not displayed on the page");
        }
    }

    async VerifyFromDeliveryDateCalendarFunctionality() {

        // Check if the calendar icon is displayed
        if (this.fromDeliveryDateCalendarIcon) {
            console.log("Calendar icon is displayed on the page");

            // Click on the calendar icon
            await this.fromDeliveryDateCalendarIcon.click();

            // Wait for the calendar to open
            await this.calendarElement.waitFor();
            //await this.page.waitForSelector('//mat-calendar[@class="mat-calendar ng-trigger ng-trigger-fadeInCalendar"]');

            // Verify that the current date is selected
            const currentDate = new Date().getDate();
            const selectedDateElement = await this.page.$('//td[contains(@class,"mat-calendar-body-cell mat-calendar-body-active")]');

            if (selectedDateElement) {
                const selectedDate = await selectedDateElement.textContent();

                if (selectedDate !== null && parseInt(selectedDate) === currentDate) {
                    console.log("Current date is selected by default in the calendar");
                } else {
                    console.error("Current date is not selected by default in the calendar");
                }
            } else {
                console.error("Selected date element is not found in the calendar");
            }
        } else {
            console.error("Calendar icon is not displayed on the page");
        }

    }

    async verifySelectFromDeliveryPastDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day before today's date
        let oldDate = day - 1;

        // Convert to string to match the format used in the calendar
        let oldDateStr = oldDate.toString();

        // Open the calendar and select the past date
        await this.fromDeliveryDateCalendarIcon.click();
        await this.page.locator('//*[text()=' + oldDateStr + ']').click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the past date is selected correctly
        const selectedDateLocator = this.fromDeliveryDateTextbox.inputValue();
        console.log(selectedDateLocator);
        console.log(oldDateStr);


        selectedDateLocator.then(function (result) {
            console.log(result);
            expect(result).toContain(oldDateStr);
        })
    }

    async verifySelectFromDeliveryFutureDate() {
        // Get today's date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // Get the day after today's date (future date)
        let futureDate = day + 1;

        // Convert to string to match the format used in the calendar
        let futureDateStr = futureDate.toString();

        // Open the calendar and select the future date
        await this.toReleaseDateCalendarIcon.click();
        await this.page.locator(`//*[text()='${futureDateStr}']`).click();

        // Wait for the date to be selected (if necessary)
        await this.page.waitForTimeout(3000);

        // Verify that the future date is selected correctly
        const selectedDateValue = await this.toReleaseDateTextbox.inputValue();
        console.log(selectedDateValue);
        console.log(futureDateStr);

        // Check if the selected date input value contains the future date string
        expect(selectedDateValue).toContain(futureDateStr);
    }


    async verifyToToDeliveryDateLabelAndTextboxDisplayed() {

        // Verify that the "From Release Date" label is visible
        await expect(this.toDeliveryDateLabel).toBeVisible();
        console.log("To Delivery Date label is visible on the page");

        // Verify that the "From Release Date" textbox is visible
        await expect(this.toDeliveryDateTextbox).toBeVisible();
        console.log("To Delivery Date textbox is visible on the page");

    }

    async verifyToDeliveryDateCalendarIcon() {

        // Wait for the calendar icon to appear
        await this.toDeliveryDateCalendarIcon.waitFor();

        // Verify if the calendar icon is visible
        const isCalendarIconVisible = await this.toDeliveryDateCalendarIcon.isVisible();
        if (isCalendarIconVisible) {
            console.log("To Delivery Date Calendar icon is displayed on the page");
        } else {
            console.error("To Delivery Date Calendar icon is not displayed on the page");
        }
    }

}
