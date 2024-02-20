import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import loginPage from "../page-objects/login.page.js";

Then('I see a message {string}', async function(message) {
    await expect(loginPage.flashMessage)
        .toHaveText(expect.stringContaining(message));
});

Then("I see a text {string}", async function(text) {
    await expect(loginPage.textMessage(text)).toBeDisplayed();
});