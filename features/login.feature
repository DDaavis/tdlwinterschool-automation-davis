Feature: Login

    Scenario: Succesfully log in with valid username and password
        Given I am on Login page
        When I enter "tomsmith" username
        And I enter "SuperSecretPassword!" password
        And I press on Login button
        Then I see a message "You logged into a secure area!"
        And I see the Logout button

    Scenario: Cnnot log in with invalid username and password
        Given I am on Login page
        When I enter "sdfsadg" username
        And I enter "arhsrtnsrtns" password
        And I press on Login button
        Then I see a message "Your username is invalid!"
        And I don't see the Logout button