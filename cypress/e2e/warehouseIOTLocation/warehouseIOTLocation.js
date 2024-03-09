import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Cypress.on('uncaught:exception', (err, runnable) => {
    return err? false : true;
});

Given('เปิดเว็บ IOT Connect', () => {
    cy.visit('/');
});

When('กรอกข้อมูล {string} และ {string}', (username, password) => {
    cy.get('#username').clear();
    cy.get('#username').type(username);
    cy.get('#password').clear();
    cy.get('#password').type(password);
});

And('Click on submit button', () => {
    cy.get('#btn_login').click();
});

And('Click the History Power Moniter menu bar', () => {
    cy.wait(4000);
    cy.get(':nth-child(3) > .ttt-menu-bg').click();
    cy.get('.menu-open > .nav > :nth-child(4) > .nav-link').click();
});

// Then('Successfully entered the history screen', () => {
//     cy.get('h1').contains('History Power Monitor');
// });