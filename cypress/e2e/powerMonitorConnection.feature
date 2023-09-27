Feature: Power Monitor Connection

    Feature Login page will work depending on the user credentials.

Background:

    Given Open the IoT Connect web browser

    # Scenario: Testing Access to the Power Monitor Screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     Then Successfully Accessed the Power Monitor Screen

    # Scenario: Testing the Display of the Power Monitor Connection Screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
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
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Clear button
        # Then Data clearance successful
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor ID "538135"
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Click the Search button
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor ID "538135"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # And Click the Clear button
        # Then Data clearance successful
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor ID "538135"
        # And Click the Search button
        # And Click the Clear button
        # Then Data clearance successful
        # And Enter the monitor name "CO Detector C"
        # And Click the Date picker button
        # And Select date "05/09/2023"
        # And Click the Search button
        # And Click the Clear button
        # Then Data clearance successful

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

    # Scenario: Testing Access to the Add Power Monitor Page
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the Add Button
    #     Then The Add Power Monitor Connection Page is displayed

    # Scenario: Testing the Display of the Add Power Monitor Connection Page
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the Add Button
    #     Then The Add Power Monitor Connection Page is displayed
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is adding a monitor named "Monitor A"
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is adding a monitor named "Monitor A"
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is adding a monitor named "Monitor A"
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is adding a monitor named "Monitor A"
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Details "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Details "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Location "????"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Name "Monitor A"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor Details "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Location "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Remarks "????"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Specify API Frequency "5"
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Click the Add Monitor button
    #     Then The system is unable to add the monitor
    #     And Click the Add Button
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"
    #     And Click the Cancel button
    #     Then The system for canceling monster additions

    # Scenario: Test accessing the Edit Power Monitor page
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the edit icon
    #     Then The Edit Power Monitor screen is displayed

    # Scenario: Testing the display of the Edit Power Monitor screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the edit icon
    #     Then The Edit Power Monitor screen is displayed
    #     And Enter Monitor ID "123456"
    #     And Enter Monitor Name "Monitor A"
    #     And Enter Monitor Details "????"
    #     And Enter Location "????"
    #     And Enter Remarks "????"
    #     And Specify API Frequency "5"

    # Scenario: Testing the display of the View Power Monitor screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the Power Moniter Connection menu bar
    #     And Click the view icon
    #     Then The View Power Monitor screen is displayed
    #     And Click the close button
    #     Then Return to the View Power Monitor screen

    Scenario: Testing the access to the Delete Power Monitor page
        When Provide valid "ProjectIOT" and "IOT@1234"
        And Click on submit button  
        And Click the Power Moniter Connection menu bar
        And Click the delete icon
        Then The Delete Power Monitor screen is displayed
        And Click the delete button
        Then The system deletes the monster
        And Click the delete icon
        And Click the cancel button
        Then The system cancels the monster deletion