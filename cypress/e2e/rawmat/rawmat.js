import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// เปิดเว็บเบราว์เซอร์
Given('Open the IoT Connect web browser', () => {
  cy.visit('/');
});

// กรอกชื่อและรหัสผ่านที่ถูกต้อง
When('Provide valid {string} and {string}', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
});

// คลิกปุ่ม submit เพื่อเข้าสู่ระบบ
And('Click on submit button', () => {
  cy.get('#btn_login').click();
});

// คลิกเมนู rawmat In-Out
And('Click the rawmat menu bar', () => {
  cy.wait(4000);
  cy.get(':nth-child(2) > .ttt-menu-bg').click();
  cy.get('.has-treeview.menu-open > .nav > :nth-child(3) > .nav-link').click();
});

// ตรวจสอบว่าหัวข้อเรื่องตรงไหม
Then('Successfully entered the rawmat screen', () => {
  cy.get('h1').contains('Rawmat In-Out');
});

// ตรวจสอบกล่องข้อความ materail No ไม่ป้อนข้อมูล
And('Do not enter information in the Materkail No text box', () => {
  cy.wait(4000);
  cy.get('.filter > :nth-child(1)').type(' ');
});

// ตรวจสอบกล่องข้อความ materail Name ไม่ป้อนข้อมูล
And('Do not enter information in the Materkail Name text box', () => {
  cy.wait(4000);
  cy.get('.filter > :nth-child(2)').type(' ');
});

// ตรวจสอบกล่องข้อความ materail No ไม่ป้อนข้อมูล
And('Do not enter any information', () => {
  cy.wait(4000);
  cy.get('.filter > :nth-child(1)').type(' ');
});

Then('The system does not display messages', () => {
  cy.wait(4000);
  cy.get('[value=" "]').should('be.visible', ' ');
});

// คลิกกล่องข้อความ materail No
And('Click text box Material No',() => {
  cy.get('.filter > :nth-child(1)').click();
});

// ตรวจสอบกล่องข้อความ materail No ป้อนข้อมูล
And('Enter Material No {string}',(materailNo) => {
  cy.get('.filter > :nth-child(1)').type(materailNo);
});

Then('Verify that the Materail No message box contains the information {string}', (materailNo) => {
  cy.wait(4000);
  cy.get('.filter > :nth-child(1)').should('be.visible', materailNo);
  cy.get('.filter > :nth-child(1)').clear();
});

// คลิกกล่องข้อความ materail Name
And('Click text box Material Name', () => {
  cy.get('.filter > :nth-child(2)').click();
});

And('Enter Material Name {string}', (materailName) => {
  cy.get('.filter > :nth-child(2)').type(materailName);
});

Then('Verify that the Materail Name message box contains the information {string}', (materailName) => {
  cy.get('.filter > :nth-child(2)').should('be.visible', materailName);
  cy.get('.filter > :nth-child(2)').clear();
});

And('Clcik the search button', () => {
  cy.get('.filter > .btn-primary').click();
});

Then('The system does not display anything in the message box', () => {
  cy.get('.filter > :nth-child(1)').should('be.visible',' ');
  cy.get('.filter > :nth-child(2)').should('be.visible',' ');
});

And('Select data in dropdown list {string}', (dropdown) => {
  cy.wait(4000);
  cy.get('.p-dropdown').click();
  cy.get('[aria-label="'+dropdown+'"]').click();
});

Then('The system displays messages and information as specified {string} correctly', (category) => {
  cy.get('.p-dropdown-label').should('text', category);
  cy.get('.btn-outline-dark').click();
})

Then('The system correctly displays Material No {string} in the table', (materailNo) => {
  cy.get('[data-test="table-body"] > tr > :nth-child(2)').should('text', materailNo)
  cy.get('.btn-outline-dark').click();
})

Then('The system does not display any information', () => {
  cy.get('.col-5 > p').should('text', 'Showing 0 to 0 of 0 entries');
  cy.get('.btn-outline-dark').click();
})

Then('The system correctly displays Material Name {string} in the table', (materailName) => {
  cy.get('[data-test="table-body"] > tr > :nth-child(4)').should('text', materailName)
  cy.get('.btn-outline-dark').click();
})

Then('The system correctly displays Category "Metals" in the table', (category) => {

})

Then('The system displays messages and information as specified {string}, {string} correctly', (materailNo, materailName) => {
  cy.get('[data-test="table-body"] > tr > :nth-child(2)').should('text', materailNo)
  cy.get('[data-test="table-body"] > tr > :nth-child(4)').should('text', materailName)
  cy.get('.btn-outline-dark').click();
})

And('Click Model Category button', () => {
  cy.get('.p-dropdown').click();
})

Then('The list of available options in the system appears correctly', () => {
  cy.get('.p-dropdown-items').should('be.visible');
  cy.get('.btn-outline-dark').click();
})

And('Click show entries button', () => {
  cy.get('.form-control').select(0);
})
