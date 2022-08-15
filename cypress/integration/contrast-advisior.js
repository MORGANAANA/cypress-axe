  /// <reference types="cypress"/>
  <reference types="@applitools/eyes-cypress" />
  
  describe ('Contrast Advisior Demo', () => {
    it('should show contrast issues on Applitools dashboard',() => {
        cy.eyesOpen({
            appName:'Contrast Advisior Demo',
            batchName: 'Contrast Advisior Demo'
        });
        cy.visit('https://heavyweight.nl/');
        cy.eyesCheckWindow();
        cy.eyesClose();
    });
  });

  
