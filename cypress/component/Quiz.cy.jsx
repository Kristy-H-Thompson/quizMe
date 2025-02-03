describe('Quiz Component', () => {
    it('should display the start button', () => {
      cy.visit('/');
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.question').should('be.visible');
    });
  
    it('should show the next question after answering', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('.question').should('be.visible');
      cy.get('input[type="radio"]').first().click();
      cy.get('.question').next().should('be.visible');
    });
  
    it('should show the score when the quiz is over', () => {
      // Assuming your quiz has 10 questions
      for (let i = 0; i < 10; i++) {
        cy.get('input[type="radio"]').first().click();
        cy.get('.next-button').click();
      }
      cy.get('.score').should('be.visible');
    });
  });