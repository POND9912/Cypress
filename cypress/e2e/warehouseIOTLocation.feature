Feature: Warehouse IOT Location
    Feature Login page will work depending on the user credentials.

Background:
    Given เปิดเว็บ IOT Connect

Scenario: Testing the Previous button
        When กรอกข้อมูล "ProjectIOT" และ "IOT@1234"
        And Click on submit button
        And Click the History Power Moniter menu bar
        And Click the previous button
        Then Clicked the previous button successfully