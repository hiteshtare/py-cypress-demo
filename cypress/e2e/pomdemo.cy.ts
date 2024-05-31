import { LoginPage } from './pages/loginPage';

const loginPage = new LoginPage();

it('POM Demo', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  loginPage.enterUsername('Admin');
  loginPage.enterPassword('admin123');

  loginPage.clickLogin();

  // cy.get('input[name="username"]').type('Admin');
  // cy.get('input[name="password"]').type('admin123');
  // cy.wait(1000);
  // cy.get('.oxd-button').click();
});