it('Google Search', ()=> {
  
  cy.visit('https://google.com');
  cy.get('#APjFqb').type("YSS Mumbai");

  cy.wait(3000)
  cy.contains('Google Search').click();

  cy.contains('Images').click();

});