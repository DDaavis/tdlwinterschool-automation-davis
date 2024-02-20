import { Page } from "./page.js";

class LoginPage extends Page {
    get usernameInput() { return $("#username"); }
    get passwordInput() { return $("#password"); }
    get loginButton() { return $("button[type=submit]"); }
    get logoutButton() { return $("i*=Logout"); }
}

export default new LoginPage();