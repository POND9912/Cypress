import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// เปิดเว็บเบราว์เซอร์
Given("Open the IoT Connect web browser", () => {
  cy.visit("/");
});

// กรอกชื่อและรหัสผ่านที่ถูกต้อง
When("Provide valid {string} and {string}", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
});

// คลิกปุ่ม submit เพื่อเข้าสู่ระบบ
And("Click on submit button", () => {
  cy.get("#btn_login").click();
});

// คลิกเมนู History Power Monitor
And("Click the Power Moniter Connection menu bar", () => {
  cy.wait(4000);
  cy.get(":nth-child(3) > .ttt-menu-bg").click();
  cy.get(".has-treeview.menu-open > .nav > :nth-child(1) > .nav-link").click();
});

// ตรวจสอบว่าหัวข้อเรื่องตรงไหม
Then("Successfully Accessed the Power Monitor Screen", () => {
  cy.get("h1").contains("Power Monitor Connection");
});

// กรอกชื่อมอนิเตอร์ CO Detector C
And("Enter the monitor name {string}", (monitorName) => {
  cy.wait(4000);
  cy.get(".filter > :nth-child(1)").type(monitorName);
});

// ระบบแสดงชื่อมอนิเตอร์ CO Detector C ในกล่องข้อความ
Then(
  "The system will display {string} as entered in the monitor name text box",
  (monitorName) => {
    cy.get(".filter > :nth-child(1)").should("have.value", monitorName);
    cy.get(".filter > :nth-child(1)").clear();
  }
);

// กรอกไอดีมอนิเตอร์ 538135
And("Enter the monitor ID {string}", (monitorID) => {
  cy.wait(4000);
  cy.get(".filter > :nth-child(2)").type(monitorID);
});

// ระบบแสดงไอดีมอนิเตอร์ 538135 ในกล่องข้อความ
Then(
  "The system will display {string} as entered in the monitor ID text box",
  (monitorID) => {
    cy.get(".filter > :nth-child(2)").should("have.value", monitorID);
    cy.get(".filter > :nth-child(2)").clear();
  }
);

// คลิกเพื่อเปิดปฎิทิน
And("Click the Date picker button", () => {
  cy.wait(4000);
  cy.get(".date-picker").click();
});

// เปิดปฎิทินสำเร็จ
Then("The system displays the current calendar correctly", () => {
  cy.get(".react-datepicker__month-container").should("be.visible");
});

// เลือกวันที่ 05/09/2023
And("Select date {string}", (date) => {
  cy.get(".date-picker").type(date).click();
});

// ระบแสดงวันที่ 05/09/2023 ได้ถูกต้อง
Then("The system displays the date {string} correctly", (date) => {
  cy.get(".date-picker").should("have.value", date);
  cy.get(".date-picker").clear();
});

// คลิกปุ่ม Search
And("Click the Search button", () => {
  cy.get(".filter > .btn-primary").click();
});
// ระบบแสดงชื่อมอนิเตอร์ตามที่ระบุไว้อย่างถูกต้อง
Then("The system displays {string} as specified correctly", (monitorName) => {
  cy.wait(4000);
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(2)').should(
    "text",
    monitorName
  );
  cy.get(".btn-outline-dark").click();
});

// ระบบไม่แสดงข้อมูล
Then("The system does not display any information", () => {
  cy.wait(4000);
  cy.get(".col-5 > p").should("text", "Showing 0 to 0 of 0 entries");
  cy.get(".btn-outline-dark").click();
});

// ระบบแสดงข้อมูลตามวันที่
Then(
  "The system displays monitor data according to the specified date {string}",
  (date) => {
    cy.wait(4000);
    cy.get(".date-picker").should("have.value", date);
    cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(2)').should(
      "text",
      "CO Detector C"
    );
  }
);

// ระบบแสดงข้อมูลตามไอดีมอนิเตอร์
Then('The system displays monitor data based on the specified ID {string} correctly', (monitorID) => {
    cy.get('[data-test="table-body"] > tr > :nth-child(3)').should('text', monitorID);
})

// คลิก Drop Down List
And('Click the Show entries {string} items', (select) => {
    cy.get('.form-control').select(select)
})

// เลือก Drop Down List สำเร็จ
Then('Displaying {string} items correctly', (select) => {
  cy.wait(4000);
  cy.get('.form-control').should('have.value', select);
  cy.get('.form-control').clear();
});

// คลิกปุ่มก่อนหน้า
And('Click the Previous Button', () => {
  cy.get(':nth-child(5) > .btn').click();
  cy.get('.row > :nth-child(2) > .btn').click();
});

// คลิกปุ่มก่อนหน้าสำเร็จ
Then('Successfully clicked the Previous Button', () => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(1)').should('text', '1');
});

// คลิกปุ่มถัดไป
And('Click the Next Button', () => {
  cy.get(':nth-child(5) > .btn').click();
});

// คลิกปุ่มถัดไปสำเร็จ
Then('Successfully clicked the Next Button', () => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(1)').should('text', '11');
});