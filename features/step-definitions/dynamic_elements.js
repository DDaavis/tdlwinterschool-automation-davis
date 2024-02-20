import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import dynamicElementsPage from "../page-objects/dynamic_elements.page.js";

When("I press the Start button", async function() {
    await dynamicElementsPage.startButton.click();
});