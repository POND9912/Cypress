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
  cy.wait(4000);
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

// คลิกปุ่ม clear
And('Click the Clear button', () => {
  cy.get('.btn-outline-dark').click();
})

// เคลียร์ข้อมูลสำเร็จ
Then('Data clearance successful', () => {
  cy.get('.filter > :nth-child(1)').should('text', '');
  cy.get('.filter > :nth-child(2)').should('text', '');
  cy.get('.date-picker').should('text', '');
})

// คลิกปุ่ม Add
And('Click the Add Button', () => {
  cy.wait(4000);
  cy.get('.add').click();
})

// แสดงหน้า Add Power Monitor Connection
Then('The Add Power Monitor Connection Page is displayed', () => {
  cy.get('.title-add').title('Add Power Monitor');
})

// กรอกข้อมูลมอนิเตอร์ไอดี
And("Enter Monitor ID {string}", (monitorID) => {
  cy.wait(2000);
  cy.get(':nth-child(1) > .form-input').type(monitorID);
});

// กรอกข้อมูลชื่อมอนิเตอร์
And("Enter Monitor Name {string}", (monitorName) => {
  cy.get('.mt-\\[25px\\] > :nth-child(2) > .form-input').type(monitorName);
});

// กรอกรายละเอียดมอนิเตอร์
And("Enter Monitor Details {string}", (detail) => {
  cy.wait(2000);
  cy.get('#detail').type(detail);
});

// กรอกสถานที่ตั้งของมอนิเตอร์
And("Enter Location {string}", (location) => {
  cy.wait(2000);
  cy.get('#location').type(location);
});

// กรอกหมายเหตุ
And("Enter Remarks {string}", (remarks) => {
  cy.wait(2000);
  cy.get('#remark').type(remarks);
});

// ระบุความถี่ของ API
And("Specify API Frequency {string}", (location) => {
  cy.wait(2000);
  cy.get('.form-input.ml-2').type(location);
});

// คลิกปุ่ม Add Monitor
And("Click the Add Monitor button", () => {
  cy.get('.add').click();
})

// ระบบทำการเพิ่มข้อมูลมอนิเตอร์
Then('The system is adding a monitor named {string}', (monitorName) => {
  cy.get('.swal2-confirm').click();
  cy.wait(4000);
  cy.get('.global').type(monitorName);
})

// ระบบแสดง Error
Then('The system is unable to add the monitor', () => {
  cy.get('#swal2-title').title('Error');
  cy.get('.swal2-confirm').click();
  cy.get('.cancel').click();
  cy.get('.swal2-confirm').click();
})

// คลิกปุ่มยกเลิก
And('Click the Cancel button', () => {
  cy.get('.cancel').click();
})

// ระบบทำการยกเลิกการเพิ่มมอนิเตอร์
Then('The system for canceling monster additions', () => {
  cy.get('#swal2-title').title('Cancel');
  cy.get('.swal2-confirm').click();
});

// คลิกไอคอนแก้ไข
And('Click the edit icon', () => {
  cy.get(':nth-child(1) > .action > [href="/IoT_Master_Data/PowerMonitorConnection/editMonitor"] > img').click();
});

// เข้าสู่หน้าแก้ไขมอนิเตอร์
Then('The Edit Power Monitor screen is displayed', () => {
  cy.get('.title-add').title('Edit Power Monitor');
})

// คลิกไอคอน View
And('Click the view icon', () => {
  cy.get(':nth-child(1) > .action > [href="/IoT_Master_Data/PowerMonitorConnection/viewMonitor"] > img').click();
})

// เข้าสู่หน้า View
Then('The View Power Monitor screen is displayed', () => {
  cy.get('.title-add').title('View Power Monitor');
})

// คลิกปุ่มปิด
And('Click the close button', () => {
  cy.get('.form-button').click();
})

// กลับไปยังหน้า View
Then('Return to the View Power Monitor screen', () => {
  cy.get("h1").contains("Power Monitor Connection");
})

// คลิกไอคอนลบ
And('Click the delete icon', () => {
  cy.wait(4000);
  cy.get(':nth-child(1) > .action > .delete-icon').click();
});

// เข้าสู่หน้า Delete
Then('The Delete Power Monitor screen is displayed', () => {
  cy.get('#swal2-title').title('Are you sure?');
});

// คลิกปุ่มลบ
And('Click the delete button', () => {
  cy.get('.swal2-confirm').click();
})

// ระบบทำการลบมอนิเตอร์
Then('The system deletes the monster', () => {
  cy.get('#swal2-title').title('Deleted!');
  cy.get('.swal2-confirm').click();
})

// คลิกปุ่มยกเลิก
And('Click the cancel button', () => {
  cy.get('.swal2-cancel').click();
})

// ระบบทำการยกเลิกการลบมอนิเตอร์
Then('The system cancels the monster deletion', () => {
  cy.get('h1').contains('Power Monitor Connection');
})