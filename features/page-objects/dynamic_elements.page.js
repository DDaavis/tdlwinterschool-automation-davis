import { Page } from "./page.js";

class DynamicElementsPage extends Page {
    get startButton() { return $("#start button"); }
}

export default new DynamicElementsPage();