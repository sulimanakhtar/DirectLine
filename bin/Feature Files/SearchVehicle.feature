Feature: To check vechile insurance cover

  Scenario: To verify vehicle has insurance cover
    Given I am At home screen
    When I enter vehicle registration
    And Click on find vehicle button
    Then I can see the results
    And close the browser
