import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// # 1. `cy.visit()`: ใช้เพื่อเข้าชมหน้าเว็บที่คุณต้องการทดสอบ.

// # 2. `cy.get()`: ใช้เพื่อเลือก HTML elements บนหน้าเว็บเพื่อทดสอบ.

// # 3. `cy.click()`: ใช้เพื่อคลิกที่ elements ที่ถูกเลือก.

// # 4. `cy.type()`: ใช้เพื่อป้อนข้อความลงใน elements เช่น input fields.

// # 5. `cy.contains()`: ใช้เพื่อค้นหา elements ที่มีข้อความหรือเนื้อหาที่ระบุ.

// # 6. `cy.should()`: ใช้เพื่อทำการตรวจสอบเงื่อนไขต่าง ๆ บน elements เช่นการตรวจสอบข้อความ, คลาส, หรือคุณสมบัติอื่น ๆ.

// # 7. `cy.intercept()`: ใช้เพื่อสร้างการจำลองการเรียก API และควบคุมการตอบสนองของ API เพื่อทดสอบการประสิทธิภาพของแอปพลิเคชัน.

// # 8. `cy.route()`: คำสั่งที่เก่าและถูกแทนที่ด้วย `cy.intercept()` ใน Cypress 6 ขึ้นไป.

// # 9. `cy.exec()`: ใช้สำหรับการรันคำสั่งเป็นคำสั่งใน shell (Command Line) และจัดการกับกระบวนการภายนอก.

// # 10. `cy.scrollTo()`: ใช้เพื่อเลื่อนหน้าเว็บไปยังตำแหน่งที่ระบุ.

// # 11. `cy.wait()`: ใช้สำหรับการรอคอยเพื่อรอให้เหตุการณ์หรือเงื่อนไขเกิดขึ้น.

// # 12. `cy.its()`: ใช้สำหรับการเข้าถึงคุณสมบัติของ elements และทำการตรวจสอบ.

// # 13. `cy.invoke()`: ใช้สำหรับการเรียกใช้ฟังก์ชันหรือเมทอดบน elements และทำการตรวจสอบ.

// # 14. `cy.fixture()`: ใช้สำหรับการโหลดข้อมูลจาก fixture files เพื่อใช้ในการทดสอบ.

// # 15. `cy.route2()`: ใช้สำหรับการจำลองการเรียก API ใน Cypress 7 ขึ้นไป.

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
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

// คลิกเมนู F/G In-Out
And('Click the FG In-Out menu bar', () => {
  cy.wait(4000);
  cy.get(':nth-child(2) > .ttt-menu-bg').click();
  cy.get('.menu-open > .nav > :nth-child(1) > .nav-link').click();
});

// ตรวจสอบว่าหัวข้อเรื่องตรงไหม
Then('Successfully entered the FG In-Out screen', () => {
  cy.get('h1').contains('F/G In-Out');
});

// ทดสอบโดยไม่กรอกรหัสผลิตภัณฑ์
And('Not entering the Product No', () => {
  cy.wait(4000)
  cy.get('.filter > :nth-child(1)').type(' ');
})

// ระบบไม่แสดงรหัสผลิตภัณฑ์
Then('The system does not display the Product No in the text box', () => {
  cy.get('.filter > :nth-child(1)').should('be.visible', ' ');
});

// กรอกรหัสผลิตภัณฑ์ '10fcdbb4'
And('Enter the Product No {string}', (productNo) => {
  cy.wait(4000)
  cy.get('.filter > :nth-child(1)').type(productNo);
});

// ระบบแสดงรหัสผลิตภัณฑ์ '10fcdbb4' ในกล่องข้อความ
Then('The system will display {string} as entered in the Product No text box', (productNo) => {
    cy.get('.filter > :nth-child(1)').should('be.visible', productNo);
    cy.get('.filter > :nth-child(1)').clear();
});

// ไม่กรอกชื่อผลิตภัณฑ์
And('Not entering the Product Name', () => {
  cy.get('.filter > :nth-child(2)').type(' ');
});

// ระบบไม่แสดงชื่อผลิตภัณฑ์
Then('The system does not display the Product Name in the text box', () => {
  cy.get('.filter > :nth-child(2)').should('be.visible', ' ');
});

// กรอกชื่อผลิตภัณฑ์ 'AquaFusion'
And('Enter the Product Name {string}', (productName) => {
  cy.get('.filter > :nth-child(2)').type(productName);
});

// ระบบแสดงชื่อผลิตภัณฑ์ 'AquaFusion'
Then('The system will display {string} as entered in the Product Name text box', (productName) => {
    cy.get('.filter > :nth-child(2)').should('be.visible', productName);
    cy.get('.filter > :nth-child(2)').clear();
});

// ไม่เลือกหมวดหมู่
And('Not entering the Category', () => {
  // cy.get('.p-dropdown-trigger').type(' ');
  cy.get('.p-dropdown-trigger').click();

});

// ระบบไม่แสดงข้อมูลหมวดหมู่ในช่อง Dropdown
Then('The system does not display the Category in the text box', () => {
  cy.get('.p-dropdown-trigger').should('be.visible', ' ');
});

// // เลือกหมวดหมู่ 'Furniture'
And('Select {string} from the Category dropdown', (Furniture) => {
  cy.get('.p-dropdown-trigger').click();
  cy.get('.p-dropdown-item').contains(Furniture).should('be.visible').click();
});

// //ระบบแสดงชื่อผลิตภัณฑ์ 'Furniture'
Then('Should see {string} is selected', (Furniture) => {
  cy.get('.p-dropdown-label').should('contain', Furniture); // ตรวจสอบว่า dropdown มีข้อความ "Furniture" หลังจากที่เลือก
});

// คลิกปุ่ม Search
And('Click the Search button', () => {
  cy.get('.filter > .btn-primary').click();
});

// ระบบแสดงข้อมูลทั้งหมด
Then('The system displays the data of all product correctly at the present time', () => {
  cy.get('.table-responsive').should('be.visible')
})

// ระบบแสดงข้อมูลตรงกับที่ค้นหา
Then('The system display the list of searched products {string}, {string}, {string}',(productNo, productName, Furniture)=>{
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(2)').should('be.visible', productNo);
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(3)').should('be.visible', productName);
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(4)').should('be.visible', Furniture);
});

// ระบบไม่แสดงข้อมูล
Then('The system does not display any information', () => {
  cy.wait(2000)
  cy.get('.col-5 > p').should('text', 'Showing 0 to 0 of 0 entries')
  cy.get('.btn-outline-dark').click();
})

//เช็คปุ่ม clear
And('Click the clear button', () => {
  cy.get('.btn-outline-dark').click();
})

//คลิก text box global search
And('Click text box',()=>{
  cy.get('.global-search').click();
});

//ระบบไม่แสดงข้อมูลต่าง ๆ ใน text box
Then('The system does not display', () => {
  cy.get('.global-search').should('be.visible', ' ');
});

//กรอกข้อมูล Product No ใน global search เพื่อค้นหา 
And('Entering information {string}',(productNo)=>{
  cy.get('.global-search').type(productNo);
});

//ระบบแสดงข้อมูลในตารางตรงกับที่ค้นหา global search
Then('The system display list searched',()=>{
  cy.get('[data-test="table-body"] > tr > :nth-child(2)').should('be.visible')
});

// คลิกตัวเลือกหลายรายการ Showing
And('Select {string} from multiple options', (select) => {
  cy.wait(2000);
  cy.get('.form-control').select(0).should('have.value', select);
});

// แสดงจำนวนข้อมูลได้ถูกต้อง
Then('Displaying {string} items correctly', (select) => {
  cy.get('.col-5 > p').should('text', 'Showing 1 to ' + select + ' of 50 entries');
});

// คลิกปุ่มก่อนหน้า
And('Click the previous button', () => {
  cy.wait(2000);
  cy.get(':nth-child(7) > .btn').click();
  cy.get('.paginate > :nth-child(1) > .btn').click();
});

// เช็คลำดับเลขหน้าว่ากลับมายังเลขที่เดิมไหม
Then('Clicked the previous button successfully', () => {
  cy.get(':nth-child(2) > .btn').contains('1').should('be.visible');
});

// คลิกปุ่มถัดไป
And('Click the next button', () => {
  cy.wait(2000);
  cy.get(':nth-child(7) > .btn').click();
});

// เช็คว่า Showing x + 1 ไหม (เลื่อนไปหน้าที่ 2 คือ 10 + 1 = 11) 
Then('Clicked the next button successfully', () => {
  cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(1)').should('text', '11')
});



//================================================ Open Modal ================================================

And('Click icon edit',()=>{
  //คลิกโดยไม่สนใจการคอลลิชันของอีลิเมนต์ 
  cy.get(':nth-child(1) > .action > .edit-icon').click({force: true});
});

Then('Successfully entered the Modal screen',()=>{
  cy.wait(4000);
  cy.get('.text-3xl').contains('Edit Amount');
  cy.get('.text-1xl.col-span-2').contains('Product No');
  cy.get('.text-1xl.col-span-1').contains('Product Name');
  cy.get(':nth-child(6) > label').contains('In bound');
  cy.get(':nth-child(8) > label').contains('Out bound');
});

And('Click icon cross',()=>{
  cy.get('.text-5xl').click();
});

Then('Successfully closed the Modal screen',()=>{
  cy.get('h1').contains('F/G In-Out');
});

//================================================ In bound ================================================

And('Click radio In bound',()=>{
  cy.get('#inbound').click({force: true});
});

Then('Successfully display table the Modal',()=>{
  // cy.get('.TableInOUt').contains('Lot in Stock');
  // cy.get('.TableInOUt').contains('Lot History');
  cy.get('.pr-3').should('be.visible');
  
});

And('Click Navbar Lot in Stock',()=>{
  cy.wait(2000);
  cy.get('.Stock').contains('Lot in Stock').click({force: true});
});

Then('Successfully display nameParagraph Lot in Stock',()=>{
  cy.get('.min-w-full > thead > tr > :nth-child(1)').contains('Lot No');
  cy.get('.min-w-full > thead > tr > :nth-child(2)').contains('Rack Name');
  cy.get('.min-w-full > thead > tr > :nth-child(3)').contains('Row');
  cy.get('.min-w-full > thead > tr > :nth-child(4)').contains('Column');
  cy.get('.min-w-full > thead > tr > :nth-child(5)').contains('Amount');
  cy.get('.min-w-full > thead > tr > :nth-child(6)').contains('Expired Date');
});

// 
And('Select {string} from multiple options In bound Lot in Stock Showing', (select) => {
  cy.wait(2000);
  cy.get('.text-start > .form-control').select(select).should('have.value', select);
});

// แสดงจำนวนข้อมูลได้ถูกต้อง
Then('Displaying {string} items correctly In bound Lot in Stock Showing', (select) => {
  cy.get('.TableInOut > .row > .col-5').should('text', 'Showing 1 to ' + select + ' of 2 entries');
});

//คลิก text box global search
And('Click text box global search',()=>{
  cy.get('.text-end > form > .global-search').click();
});

//ระบบไม่แสดงข้อมูลต่าง ๆ ใน text box
Then('The system does not display global search', () => {
  cy.get('.text-end > form > .global-search').should('be.visible', ' ');
});

//กรอกข้อมูล Lot No ใน global search เพื่อค้นหา 
And('Entering information {string} from modal',(lotNo)=>{
  cy.get('.text-end > form > .global-search').type(lotNo);
});

//ระบบแสดงข้อมูลในตารางตรงกับที่ค้นหา global search
Then('The system display list searched from modal',()=>{
  cy.get('.min-w-full > tbody > :nth-child(1) > :nth-child(1)').should('be.visible')
});

And('Click button save',()=>{
  cy.get('.save').click();
});

Then('Successfully display alert',()=>{
  cy.get('.swal2-popup').contains('Do you want to Save the changes');
});

And('Click button save yes',()=>{
  cy.get('.swal2-confirm').click();
});

And('Click button save no',()=>{
  cy.get('.swal2-cancel').click();
});

Then('Successfully display alert complte',()=>{
  cy.get('.swal2-header').contains('Save');
});

Then('Successfully display alert cancle',()=>{
  cy.get('.text-3xl').contains('Edit Amount');
});

// คลิกปุ่มถัดไป
And('Click the next button Lot in Stock ', () => {
  cy.wait(4000);
  cy.get('.TableInOut > .row > .paginate > :nth-child(3) > .btn').click();
});

Then('Clicked the next button successfully Lot in Stock ', () => {
  
});

// คลิกปุ่มก่อนหน้า
And('Click the previous button Lot in Stock', () => {
  cy.wait(4000);
  cy.get('.TableInOut > .row > .paginate > :nth-child(3) > .btn').click();
  cy.get('.TableInOut > .row > .paginate > :nth-child(1)').click();
});

// เช็คลำดับเลขหน้าว่ากลับมายังเลขที่เดิมไหม
Then('Clicked the previous button successfully Lot in Stock ', () => {
  cy.get('.TableInOut > .row > .paginate > :nth-child(2) > .btn').contains('1').should('be.visible');

});

// คลิกปุ่มก่อนหน้า
And('Click the previous button Lot in Stock', () => {
  cy.wait(2000);
  // Click the previous button
  cy.get('.TableInOut > .row > .paginate > :nth-child(3) > .btn').click({force: true});
});

// เช็คลำดับเลขหน้าว่ากลับมายังเลขที่เดิมไหม
Then('Clicked the previous button successfully Lot in Stock', () => {
  // Check if the previous button has the correct page number after clicking
  cy.get('.TableInOut > .row > .paginate > :nth-child(2) > .btn').contains('1').should('be.visible');
});






And('Click Navbar Lot History',()=>{
  cy.get('.History').contains('Lot History').click({force: true});
});

Then('Successfully display nameParagraph Lot History',()=>{
  cy.get('.min-w-full > thead > tr > :nth-child(1)').contains('No');
  cy.get('.min-w-full > thead > tr > :nth-child(2)').contains('Lot No');
  cy.get('.min-w-full > thead > tr > :nth-child(3)').contains('Rack Name');
  cy.get('.min-w-full > thead > tr > :nth-child(4)').contains('Status');
  cy.get('.min-w-full > thead > tr > :nth-child(5)').contains('Row');
  cy.get('.min-w-full > thead > tr > :nth-child(6)').contains('Column');
  cy.get('.min-w-full > thead > tr > :nth-child(7)').contains('Amount');
  cy.get('.min-w-full > thead > tr > :nth-child(8)').contains('Added Date');
  cy.get('.min-w-full > thead > tr > :nth-child(9)').contains('Remark');
});



//คลิก text box global search
And('Click text box global search',()=>{
  cy.get('.text-end > form > .global-search').click();
});

//ระบบไม่แสดงข้อมูลต่าง ๆ ใน text box
Then('The system does not display global search', () => {
  cy.get('.text-end > form > .global-search').should('be.visible', 'LOT20211123-115');
});

//กรอกข้อมูล Product No ใน global search เพื่อค้นหา 
And('Entering information {string} global search',(lotNo)=>{
  cy.get('.text-end > form > .global-search').type(lotNo);
});

//ระบบแสดงข้อมูลในตารางตรงกับที่ค้นหา global search
Then('The system display list searched global search',()=>{
  cy.get('.min-w-full > tbody > :nth-child(1) > :nth-child(2)').should('be.visible')
});

And('Select {string} from Show entries In bound Lot History',(select)=>{
  cy.get('.text-start > .form-control').select(select).should('have.value', select);

});


Then('Successfully display {string} Show entries In bound Lot History', (select) => {
  cy.get('.TableInOut > .row > .col-5').should('text', 'Showing 1 to ' + select + ' of 23 entries');
});

















//================================================ Out bound ================================================

And('Click toggle switch',()=>{
  cy.get('.slider').click({force: true});
});

And('Click radio Out bound',()=>{
  cy.get('#outbound').click({force: true});
});


Then('Successfully display nameParagraph Out bound Lot in Stock',()=>{
  cy.wait(2000);
  cy.get('.min-w-full > thead > tr > :nth-child(1)').contains('Lot No');
  cy.get('.min-w-full > thead > tr > :nth-child(2)').contains('Rack Name');
  cy.get('.min-w-full > thead > tr > :nth-child(3)').contains('Row');
  cy.get('.min-w-full > thead > tr > :nth-child(4)').contains('Column');
  cy.get('.min-w-full > thead > tr > :nth-child(5)').contains('Amount');
  cy.get('.min-w-full > thead > tr > :nth-child(6)').contains('Expired Date');
});

Then('Successfully display nameParagraph Out bound Lot in Stock manual',()=>{
  cy.wait(2000);
  cy.get('.min-w-full > thead > tr > :nth-child(1)').contains('Select');
  cy.get('.min-w-full > thead > tr > :nth-child(2)').contains('Lot No');
  cy.get('.min-w-full > thead > tr > :nth-child(3)').contains('Rack Name');
  cy.get('.min-w-full > thead > tr > :nth-child(4)').contains('Row');
  cy.get('.min-w-full > thead > tr > :nth-child(5)').contains('Column');
  cy.get('.min-w-full > thead > tr > :nth-child(6)').contains('Amount');
  cy.get('thead > tr > :nth-child(7)').contains('Expired Date');
});

// // คลิกเพื่อเปิดปฎิทิน
// And("Click the Date picker button", (select) => {
//   cy.wait(4000);
//   // cy.get('#exp_date').click();
//   cy.get('[data-top="367.15625"]').select();

// });

// // เปิดปฎิทินสำเร็จ
// Then("The system displays the current calendar correctly", () => {
//   cy.get('.react-datepicker__month-container').should('be.visible');
// });

// //เช็คว่าตรงวันที่ปัจุบันหรือไม่
// Then('Successfully entered the date picker', () => {
//   const currentDate = new Date();
//   // นำเดือนปัจจุบันมาแปลงเป็นชื่อของเดือน
//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   const currentMonth = months[currentDate.getMonth()];
//   // สร้างสตริง "DD Month YYYY"
//   const formattedDate = `${currentDate.getDate()} ${currentMonth} ${currentDate.getFullYear()}`;
//   cy.get('.exp_date').should('be.visible', formattedDate);
// })

// // เลือกวันที่ 11/08/2023
// And('Select date {string}', (date) => {
//   cy.get('.date-picker').type(date).click();
// });

// // ระบแสดงวันที่ 11/08/2023 ได้ถูกต้อง
// Then('The system displays the date {string} correctly', (date) => {
//   cy.get('.date-picker').should('be.visible', date);
//   cy.get('.date-picker').clear();
// });

// // ระบบแสดงข้อมูลตามวันที่กรอกได้ถูกต้อง
// Then('The system correctly displays the date {string}, and the information is accurate', (date) => {
//   cy.get('[data-test="table-body"] > :nth-child(1) > :nth-child(10)').should('be.visible', date)
//   cy.get('.btn-outline-dark').click();
// })


And('Click the form the Product No',()=>{
  cy.get('.grid.mb-3 > :nth-child(3) > .formModal').click();
});

And('Click the form the Rack Name',()=>{
  cy.get('.grid.mb-3 > :nth-child(4) > #dropdownModal').select('');
});

And('Click the form the Row',()=>{
  cy.get('.grid.mb-3 > :nth-child(5) > #dropdownModalrow').select('');
});

And('Click the form the Column',()=>{
  cy.get(':nth-child(5) > :nth-child(5) > #dropdownModalrow').select('');
});

And('Click the form the Amount',()=>{
  cy.get(':nth-child(5) > :nth-child(2) > .formModal').click();
});

And('Click the form the Remark',()=>{
  cy.get(':nth-child(5) > :nth-child(3) > .formModal').click();
});

And('Click the form the Forklift',()=>{
  cy.get(':nth-child(5) > :nth-child(4) > #dropdownModal').click();
});

