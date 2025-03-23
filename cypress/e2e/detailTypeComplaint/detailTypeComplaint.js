import {
  Before,
  After,
  Given,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";
import "cypress-file-upload";

Before(() => {
  cy.reload();
});

After(() => {
  cy.reload();
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Given("เปิดเว็บไซต์ PMRP", () => {
  cy.visit("/");
});

When("กรอกไอดี {string} และรหัสผ่าน {string}", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
});

And("คลิกปุ่มเข้าสู่ระบบ", () => {
  cy.get("#btn_login").click();
});

And("คลิกเมนูประเภทคำร้องเรียน", () => {
  cy.wait(4000);
  cy.get(".ttt-menu-bg").click();
  cy.get(':nth-child(5) > .nav-link').click();
});

And("ยืนยันข้อตกลงหลักเกณฑ์รับคำร้องเรียน", () => {
  cy.wait(2000);
  cy.get("#checkbox-acceptance").click();
  cy.get(".modal-footer > .w-100").click();
});

And("กรอกประเภทคำร้องเรียน {string}", (complaintType) => {
  cy.wait(1000);
  cy.get('.form-control').type(complaintType);
});

And("เลือกสถานะ {string}", (complaintStatus) => {
  cy.wait(1000);
  cy.get('.css-1hwfws3').click();
  // เลือก input ตัวแรก
  cy.get('#react-select-2-option-0').first().type(`${complaintStatus}{enter}`);
});

And("คลิกปุ่มถัดไป", () => {
  cy.get(':nth-child(7) > .lucide').click();
});

And("คลิกปุ่มค้นหา", () => {
  cy.get(':nth-child(3) > .form-group > .btn').click();
});

Then("ระบบแสดงหน้าเมนูประเภทคำร้องเรียน", () => {
  cy.get('.mb-3').contains("จัดการประเภทคำร้องเรียน");
});
