import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser, $ } from "@wdio/globals";
import page from "../page-objects/page.js";

Given("I am on {word} page", async function(pageName) {
    await page.open(pageName);
});