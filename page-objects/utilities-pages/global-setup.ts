import { DynamicName } from "./dynamicNaming";
import { expect, test } from "@playwright/test";
import path from "path";
import fs from 'fs';

test.afterEach(async ({ page, request, baseURL }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        let scPath: string = `test-results/screenshots/sc.png`;
        await page.screenshot({ path: scPath });
        testInfo.annotations.push({ type: 'Screen shot on Failure', description: scPath });

        const file = path.resolve(scPath);
        const image = fs.readFileSync(file);
        const testCaseID: string = testInfo.title.split(':')[0];
        const projectID: string = testCaseID.split('-')[0];

        if (!baseURL || !testCaseID || !projectID) {
            console.error('Missing required parameters for API request.');
            return;
        }

        try {
            const response = await request.post(`${baseURL}/api/v1/project/${projectID}/testcase/${testCaseID}/attachment`, {
                headers: {
                    Accept: "*/*",
                    ContentType: "multipart/form-data",
                },
                multipart: {
                    file: {
                        name: `${process.env.TEST_CYCLE_ID || "ICM-CY-0"}_${DynamicName.fileName()}`,
                        mimeType: "image/png",
                        buffer: image,
                    },
                },
            });

            if (!response.ok()) {
                console.error(`Failed to post attachment. Status: ${response.status()}`);
            } else {
                console.log('Attachment posted successfully.');
            }
        } catch (error) {
            console.error('Error in API request:', error);
        }
    }
});
