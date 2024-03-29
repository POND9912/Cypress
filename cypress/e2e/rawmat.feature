Feature: Raw Mat

    Feature Login page will work depending on the user credentials.

Background:

    Given Open the IoT Connect web browser

    # Scenario: Testing access to the rawmat display screen
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the rawmat menu bar
    #     Then Successfully entered the rawmat screen

    # Scenario: Test message box 
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the rawmat menu bar
    #     And Do not enter information in the Materkail No text box
    #     Then The system does not display messages
    #     And Click text box Material No
    #     And Enter Material No "5ebdd928"
    #     Then Verify that the Materail No message box contains the information "5ebdd928"
    #     And Do not enter information in the Materkail Name text box
    #     Then The system does not display messages
    #     And Click text box Material Name
    #     And Enter Material Name "MetalMatrix"
    #     Then Verify that the Materail Name message box contains the information "MetalMatrix"
        # And Do not enter information in the text box " "
        # Then The system does not display any text in the text box
        # And Do not enter information in the text box "Metals"
        # Then The system displays the message specified in the text box correctly "Metals"

    # Scenario: Test the search button
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the rawmat menu bar
    #     And Clcik the search button
    #     Then The system does not display anything in the message box

    # Scenario: Test multiple options (Dropdown)
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the rawmat menu bar
    #     # And Click Model Category button
    #     # Then The list of available options in the system appears correctly
    #     And Select "10" from multiple options
    #     Then Displaying "10" items correctly
        
    # Scenario: Test the previous button (Previous button)
    #     When Provide valid "ProjectIOT" and "IOT@1234"
    #     And Click on submit button  
    #     And Click the rawmat menu bar
    #     And Click the next button
    #     Then The system displays the next table correctly "11"
    #     And Click the previous button
    #     Then The system displays the next table correctly "1"

    Scenario: Test the Rawmat screen display (Rawmat In-Out display)
        When Provide valid "ProjectIOT" and "IOT@1234"
        And Click on submit button  
        And Click the rawmat menu bar
    #     And Click Model Category button
    #     Then The list of available options in the system appears correctly
        # And Select data in dropdown list "Metals"
        # Then The system displays messages and information as specified "Metals" correctly
        # And Enter Material No "9e216ace"
        # And Clcik the search button
        # Then The system correctly displays Material No "9e216ace" in the table
        # And Enter Material No "TEST999"
        # And Clcik the search button
        # Then The system does not display any information
        # And Enter Material Name "MetalMingle"
        # And Clcik the search button
        # Then The system correctly displays Material Name "MetalMingle" in the table
        # And Enter Material Name "TEST999"
        # And Clcik the search button
        # Then The system does not display any information
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system correctly displays Category "Metals" in the table
        # And Enter Material No "e705cc41"
        # And Enter Material Name "MineralMingle"
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system displays messages and information as specified "e705cc41", "MineralMingle" correctly
        # And Enter Material No "e705cc41"
        # And Enter Material Name "MineralMingle"
        # And Clcik the search button
        # Then The system displays messages and information as specified "e705cc41", "MineralMingle" correctly
        # And Enter Material No "e705cc41"
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system correctly displays Material No "e705cc41" in the table
        # And Enter Material Name "MineralMingle"
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system correctly displays Material Name "MineralMingle" in the table
        # And Enter Material No "TEST99"
        # And Enter Material Name "MineralMingle"
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system does not display any information
        # And Enter Material No "e705cc41"
        # And Enter Material Name "TEST99"
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system does not display any information
        # And Enter Material No "TEST99"
        # And Enter Material Name "TEST99"
        # And Select data in dropdown list "Metals"
        # And Clcik the search button
        # Then The system does not display any information
        # And Click the next button
        # And Click the previous button
        # Then The system displays the next table correctly "1"
        # And Click the edit button
        # Then The system displays "73" correctly
        # And Select Radio In bound
        # Then The list of options appears correctly
        # And Select the Lot in Stock navigation bar
        # Then The system displays the table correctly
        # And Click the edit button
        # And Select "10" from multiple options in modal
        # Then Displaying "10" items correctly in modal
        And Click the edit button
        And Click the calendar in the modal
        And Choose a date '05/03/2023'
        Then The selected date is displayed correctly
        And Enter the inventory number "LOT20210417-126"
        Then The system correctly enters information "LOT20210417-126" into the warehouse number text box