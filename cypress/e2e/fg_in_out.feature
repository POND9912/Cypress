Feature: FG In-Out

    Feature Login page will work depending on the user credentials.

Background:

    // Login เข้าสู่ระบบเลย
    Given Open the IoT Connect web browser
    When Provide valid "ProjectIOT" and "IOT@1234"
    And Click on submit button

    # Scenario: Testing Login
    # When Provide valid "ProjectIOT" and "IOT@1234"
    # And Click on submit button

    # Scenario: Testing the Previous button
    #     And Click the FG In-Out menu bar
    #     Then Successfully entered the FG In-Out screen

    Scenario: Testing the Previous button
        And Click the FG In-Out menu bar
        And Not entering the Product No 
        Then The system does not display the Product No in the text box
        And Enter the Product No "10fcdbb4"
        Then The system will display "10fcdbb4" as entered in the Product No text box
        # And Not entering the Product Name
        # Then The system does not display the Product Name in the text box
        # And Enter the Product Name "AquaFusion"
        # Then The system will display "AquaFusion" as entered in the Product Name text box