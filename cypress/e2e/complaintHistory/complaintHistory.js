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

And("คลิกเมนูประวัติคำร้องเรียน", () => {
  cy.wait(4000);
  cy.get(".ttt-menu-bg").click();
  cy.get(".nav > :nth-child(2) > .nav-link").click();
});

And("ยืนยันข้อตกลงหลักเกณฑ์รับคำร้องเรียน", () => {
  cy.wait(2000);
  cy.get("#checkbox-acceptance").click();
  cy.get(".modal-footer > .w-100").click();
});

And("กรอกหมายเลขคำร้องเรียน {string}", (complaintCode) => {
  cy.wait(1000);
  cy.get(".form-group > .form-control").type(complaintCode);
});

And("เลือกประเภทคำร้องเรียน {string}", (complaintStatus) => {
  cy.wait(1000);
  cy.get(
    ":nth-child(4) > .form-group > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3"
  ).click();

  // เลือก input ตัวแรก
  cy.get("#react-select-3-option-0").first().type(`${complaintStatus}{enter}`);
});

And("คลิกปุ่มค้นหา", () => {
  cy.get(":nth-child(5) > .form-group > .btn").click();
});

And("เลือกคำร้องเรียนที่ต้องการดู", () => {
  cy.get(
    ':nth-child(1) > :nth-child(8) > [style="display: flex; justify-content: center; gap: 5px; color: rgb(0, 64, 142);"] > div > #btn_edit'
  ).click();
});

And("เลือกวันที่ {string}", (date) => {
  cy.get(".input-group > .form-control").invoke("val", date).trigger("change");
});

Then("ดาวน์โหลดไฟล์", () => {
  cy.get('.border > .d-flex').click();
  cy.get('.col-md > .mb-2').click();
});

Then("ระบบแสดงหน้าจอติดตามคำร้องเรียน", () => {
  cy.get(".font-weight-bold").contains("ติดตามสถานะคำร้องเรียน");
});

Then("ระบบแสดงหน้าเมนูประวัติคำร้องเรียน", () => {
  cy.get("h1").contains("ประวัติคำร้องเรียน");
});
