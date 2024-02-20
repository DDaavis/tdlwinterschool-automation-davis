import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import loginPage from "../page-objects/login.page.js";

When('I enter {string} username', async function(username) {
    await loginPage.usernameInput.setValue(username);
});

When('I enter {string} password', async function(password) {
    await loginPage.passwordInput.setValue(password);
});

When('I press on Login button', async function() {
    await loginPage.loginButton.click();
});

Then('I {word} see the Logout button', async function(visibility) {
    if (visibility === "do") {
        await expect(loginPage.logoutButton).toBeDisplayed();
    } else if (visibility === "don't") {
        await expect(loginPage.logoutButton).not.toBeDisplayed();
    } else {
        throw Error(`Visiblity ${visibility} not supported`);
    }
});