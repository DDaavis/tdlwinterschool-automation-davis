Feature: Login

    Scenario Outline: Log in user username and password
        Given I am on login page
        When I enter <username> username
        And I enter <password> password
        And I press on Login button
        Then I see a message <message>
        And I <visibility> see the Logout button

        @positive
        Examples:
            | username   | password               | message                          | visibility |
            | "tomsmith" | "SuperSecretPassword!" | "You logged into a secure area!" | do         |

        @negative
        Examples:
            | username  | password       | message                     | visibility |
            | "sdfsadg" | "arhsrtnsrtns" | "Your username is invalid!" | don't      |