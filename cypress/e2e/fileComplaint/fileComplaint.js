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

And("คลิกเมนูยื่นคำร้องเรียน", () => {
  cy.wait(4000);
  cy.get(".ttt-menu-bg").click();
  cy.get(".has-treeview > .nav > :nth-child(1) > .nav-link").click();
});

And("ยืนยันข้อตกลงหลักเกณฑ์รับคำร้องเรียน", () => {
  cy.wait(2000);
  cy.get("#checkbox-acceptance").click();
  cy.get(".modal-footer > .w-100").click();
});

Then("ระบบแสดงหน้าเมนูยื่นคำร้องเรียน", () => {
  cy.get("h3.mb-4 > b").contains("แบบฟอร์มคำร้องเรียน");
});

And("ประเภทคำร้องเรียน: {string}", (type_name) => {
  cy.wait(1000);
  cy.get(".css-1hwfws3").click();

  // เลือก input ตัวแรก
  cy.get("input").first().type(`${type_name}{enter}`);
});

And("หัวข้อเรื่องคำร้องเรียน: {string}", (title) => {
  cy.wait(1000);
  cy.get("#complaintSubject").type(title);
});

And("รายละเอียดคำร้องเรียน: {string}", (detail) => {
  cy.wait(1000);
  cy.get("#complaintDetails").type(detail);
});

And("สิ่งที่ต้องการให้แก้ไข: {string}", (fixed) => {
  cy.wait(1000);
  cy.get("#requestedResolution").type(fixed);
});

And("แนบไฟล์ภาพหลักฐาน {string}", (image) => {
  cy.wait(1000);
  cy.get('input[type="file"]').attachFile(image);
  cy.wait(6000);
});

Then("ระบบบันทึกคำร้องเรียนและแสดงหมายเลขคำร้อง", () => {
  cy.wait(1000);
  cy.get(".btn").click();
  cy.wait(6000);
  cy.get(".row > :nth-child(2) > .col").click();
  cy.wait(1000);
  cy.get(".col").click();
});

Then("กดปุ่มยกเลิก", () => {
  cy.wait(1000);
  cy.get('.lucide').click();
});
