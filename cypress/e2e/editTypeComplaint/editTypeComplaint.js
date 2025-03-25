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
  cy.get('.main-header > :nth-child(1) > :nth-child(1) > .nav-link').click();
  cy.get(".ttt-menu-bg").click();
  cy.get(':nth-child(5) > .nav-link').click();
});

And("คลิกปุ่มแก้ไขประเภทคำร้องเรียน", () => {
  cy.wait(4000);
  cy.get(':nth-child(1) > :nth-child(5) > .d-flex > .lucide-square-pen').click();
});

And("ยืนยันข้อตกลงหลักเกณฑ์รับคำร้องเรียน", () => {
  cy.wait(2000);
  cy.get("#checkbox-acceptance").click();
  cy.get(".modal-footer > .w-100").click();
});

And("กรอกชื่อประเภทคำร้อง {string}", (typeName) => {
  cy.get('#complaintTypeName').clear().type(typeName);
});

And("กรอกรายละเอียดประเภทคำร้อง {string}", (typeDetail) => {
  cy.get('#complaintTypeDetails').clear().type(typeDetail);
});

And("เปิดใช้งานการมองเห็น", () => {
  cy.get('.switch-label').click();
});

Then("ระบบแสดงหน้าเมนูแก้ไขประเภทคำร้องเรียน", () => {
  cy.get('.font-weight-bold').contains("แก้ไขประเภทคำร้องเรียน");
});

Then("คลิกปุ่มบันทึก", () => {
  cy.get('.btn').click();
  cy.get('.row > :nth-child(2) > .col').click();
  cy.wait(5000);
});

Then("คลิกปุ่มยกเลิก", () => {
  cy.get('.lucide').click();
});