Feature: Power Monitor Connection

    Feature Login page will work depending on the user credentials.

Background:

    Given Open the IoT Connect web browser

    # Scenario: Testing Access to the Power Monitor Screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     Then Successfully Accessed the Power Monitor Screen

    Scenario: Testing the Display of the Power Monitor Connection Screen
        When Provide valid "ProjectIOT" and "IOT@1234"
        And Click on submit button  
        And Click the Power Moniter Connection menu bar
        # Then Successfully Accessed the Power Monitor Screen
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # Then The system displays the date "05/09/2023" correctly
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system displays "CO Detector C" as specified correctly
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "789527"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor A"
        # And Enter the monitor ID "123456"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "789527"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Search button
        # Then The system displays "CO Detector C" as specified correctly
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "789527"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Click the Search button
        # Then The system displays "CO Detector C" as specified correctly
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "999999"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system displays "CO Detector C" as specified correctly
        # And Enter the monitor name "Monitor XX"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Enter the monitor ID "999999"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Enter the monitor ID "538135"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "Monitor XX"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system displays monitor data according to the specified date "05/09/2023"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system displays monitor data based on the specified ID "538135" correctly
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor ID "538135"
        # And Click the Search button
        # Then The system displays monitor data based on the specified ID "538135" correctly
        # And Enter the monitor ID "999999"
        # And Click the Search button
        # Then The system does not display any information
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "999999"
        # And Click the Date picker button
        # And Select date "05/09/2034"
        # And Click the Search button
        # Then The system does not display any information
        # And Click the Previous Button
        # Then Successfully clicked the Previous Button
        # And Click the Next Button
        # Then Successfully clicked the Next Button
        And Enter the monitor name "CO Detector C"
        And Enter the monitor ID "999999"
        And Click the Date picker button
        And Select date "05/09/2034"


    # Scenario: Testing the text box
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Enter the monitor name "CO Detector C"
    #     Then The system will display "CO Detector C" as entered in the monitor name text box
    #     And Enter the monitor ID "538135"
    #     Then The system will display "538135" as entered in the monitor ID text box

    # Scenario: Testing the date picker
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the Date picker button
    #     Then The system displays the current calendar correctly

    # Scenario: Multi-Item Dropdown
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the Show entries "10" items
    #     Then Displaying "10" items correctly
    #     And Click the Show entries "20" items
    #     Then Displaying "20" items correctly

    # Scenario: Test the Previous Button
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the Previous Button
    #     Then Successfully clicked the Previous Button

    # Scenario: Test the Next Button
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the Next Button
    #     Then Successfully clicked the Next Button