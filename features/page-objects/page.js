export class Page {
    get flashMessage() { return $("#flash"); }
    textMessage(text) { return $(`//h4[text()="${text}"]`); }

    async open(page) {
        await browser.navigateTo(`https://the-internet.herokuapp.com/${page}`);
    }
}

export default new Page();