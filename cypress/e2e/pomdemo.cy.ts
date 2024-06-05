import { LoginPage } from './pages/loginPage';

const loginPage = new LoginPage();

beforeEach(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})

describe('All Login Tests', () => {

  it('Login with Valid credentials', () => {
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
  
    loginPage.clickLogin();
  
    cy.get('.oxd-userdropdown-tab').click();
  });
  
  
  it('Login with Invalid username', () => {
    loginPage.enterUsername('AdminPY');
    loginPage.enterPassword('admin123');
  
    loginPage.clickLogin();
  
    cy.get('.oxd-userdropdown-tab').click();
  });

  it('Login with Invalid password', () => {
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin1234');
  
    loginPage.clickLogin();
  
    cy.get('.oxd-userdropdown-tab').click();
  });
});

