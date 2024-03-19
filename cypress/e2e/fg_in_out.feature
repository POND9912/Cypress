Feature: FG In-Out

    Feature Login page will work depending on the user credentials.

    Background:

        // Login เข้าสู่ระบบเลย
        Given Open the IoT Connect web browser
        When Provide valid "ProjectIOT" and "IOT@1234"
        And Click on submit button
        And Click the FG In-Out menu bar
        And Click icon edit

    # Scenario: Testing Login
        # When Provide valid "ProjectIOT" and "IOT@1234"
        # And Click on submit button

    # Scenario: Testing go to the FG In-Out menu
        # And Click the FG In-Out menu bar
        # Then Successfully entered the FG In-Out screen

    # Scenario: Testing form search
        # And Not entering the Product No
        # Then The system does not display the Product No in the text box
        # And Enter the Product No "10fcdbb4"
        # Then The system will display "10fcdbb4" as entered in the Product No text box

        # And Not entering the Product Name
        # Then The system does not display the Product Name in the text box
        # And Enter the Product Name "AquaFusion"
        # Then The system will display "AquaFusion" as entered in the Product Name text box

        # And Not entering the Category
        # Then The system does not display the Category in the text box
        # And Select "Furniture" from the Category dropdown
        # Then Should see "Furniture" is selected

    # Scenario: Testing the search button no data
    #     And Not entering the Product No
    #     Then The system does not display the Product No in the text box

    #     And Not entering the Product Name
    #     Then The system does not display the Product Name in the text box

        # And Not entering the Category
        # Then The system does not display the Category in the text box

    #     And Click the Search button
    #     The system displays the data of all product correctly at the present time


    # Scenario: Test the clear button
    #     And Enter the Product No "10fcdbb4"
    #     And Enter the Product Name "AquaFusion"
    #     And Select "Furniture" from the Category dropdown
    #     And Click the clear button
    #     Then The system does not display the Product No in the text box
    #     Then The system does not display the Product Name in the text box
    #     Then The system does not display the Category in the text box

#    Scenario: Testing Search all information is correct.
#         And Enter the Product No "10fcdbb4"
#         And Enter the Product Name "AquaFusion"
#         And Select "Furniture" from the Category dropdown
#         And Click the Search button
#         Then The system display the list of searched products "10fcdbb4", "AquaFusion", "Furniture" 

    #    Scenario: Testing Search Product No is wrong
    #     And Enter the Product No "A999"
    #     And Enter the Product Name "AquaFusion"
    #     And Select "Furniture" from the Category dropdown
    #     And Click the Search button
    #     Then The system does not display any information

    # Scenario: Testing Search Product Name is wrong
    #     And Enter the Product No "10fcdbb4"
    #     And Enter the Product Name "B999"
    #     And Select "Furniture" from the Category dropdown
    #     And Click the Search button
    #     Then The system does not display any information

    # Scenario: Test global search
    #      And Click text box 
    #      Then The system does not display

    #  Scenario: Test global search found
    #     And Click text box 
    #     And Entering information '10fcdbb4'
    #     Then The system display list searched

    # Scenario: Testing the drop-down menu showing
    #     And Click the FG In-Out menu bar
    #     And Select "20" from multiple options
    #     Then Displaying "20" items correctly

    # Scenario: Test the Next button
    #     And Click the next button
    #     Then Clicked the next button successfully

    # Scenario: Testing the Previous button
    #     And Click the previous button
    #     Then Clicked the previous button successfully


# ================================================ Open Modal ================================================

# Scenario: Testing icon edit and open modal
#     And Click icon edit
#     Then Successfully entered the Modal screen

# Scenario: Testing icon cross and close modal
#     And Click icon edit
#     And Click icon cross
#     Then Successfully closed the Modal screen

#================================================ In bound ================================================

# Scenario: Testing click radio In bound
#     And Click radio In bound
#     Then Successfully display table the Modal 

# Scenario: Testing In bound Lot in Stock
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     Then Successfully display nameParagraph Lot in Stock

# Scenario: Testing In bound Lot in Stock Showing
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     And Select "2" from multiple options In bound Lot in Stock Showing
#     Then Displaying "2" items correctly In bound Lot in Stock Showing

# Scenario: Testing In bound Lot in Stock global search
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     And Click text box global search
#     Then The system does not display global search

# Scenario: Testing In bound Lot in Stock global search found
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     And Click text box global search
#     And Entering information 'LOT20211117-540' from modal
#     Then The system display list searched from modal

# Scenario: Testing button save
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     And Click button save
#     Then Successfully display alert 

# Scenario: Testing button save change 'yes'
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     And Click button save
#     And Click button save yes
#     Then Successfully display alert complte
    
# Scenario: Testing button save change 'no'
#     And Click radio In bound
#     And Click Navbar Lot in Stock
#     And Click button save
#     And Click button save no
#     Then Successfully display alert cancle

    # Scenario: Test the Next button Lot in Stock !
    #     And Click the next button Lot in Stock !
        # Then Clicked the next button successfully Lot in Stock !

    # Scenario: Testing the Previous button Lot in Stock 
    #     And Click the previous button Lot in Stock 
    #     Then Clicked the previous button successfully Lot in Stock 

# Scenario: Testing the date picker
#     And Click the Date picker button
#     # Then Successfully entered the date picker

# Scenario: Testing form the Product No
#     And Click the form the Product No

# Scenario: Testing form the Rack Name
#     And Click the form the Rack Name

# Scenario: Testing form the Row !
#     And Click the form the Row

# Scenario: Testing form the Column !
#     And Click the form the Column

# Scenario: Testing form the Amount
#     And Click the form the Amount

# Scenario: Testing form the Remark
#     And Click the form the Remark

# Scenario: Testing form the Forklift
#     And Click the form the Forklift




# Scenario: Testing In bound Lot History
#     And Click radio In bound
#     And Click Navbar Lot History
#     Then Successfully display nameParagraph Lot History

Scenario: Testing In bound Lot History Showing
    And Click radio In bound
    And Click Navbar Lot History
    And Select "20" from Show entries In bound Lot History
    Then Successfully display "20" Show entries In bound Lot History

#    Scenario: Test global search
#         And Click radio In bound
#         And Click Navbar Lot History
#          And Click text box global search
#          Then The system does not display global search

    #  Scenario: Test global search found
    #     And Click radio In bound
    #     And Click Navbar Lot History
    #     And Click text box global search
    #     And Entering information "LOT20211123-115" global search
    #     Then The system display list searched global search


    # Scenario: Test the Next button
    #     And Click the next button
    #     Then Clicked the next button successfully

    # Scenario: Testing the Previous button
    #     And Click the previous button
    #     Then Clicked the previous button successfully

#================================================ Out bound ================================================

# Scenario: Testing click radio Out bound fifo
#     And Click radio Out bound 
#     Then Successfully display nameParagraph Out bound Lot in Stock 

# Scenario: Testing click radio Out bound manual
#     And Click radio Out bound 
#     And Click toggle switch
#     Then Successfully display nameParagraph Out bound Lot in Stock manual

    
