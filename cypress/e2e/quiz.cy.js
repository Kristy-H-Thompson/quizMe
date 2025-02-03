describe('End-to-End Tech Quiz', () => {
    it('should complete the quiz and show the score', () => {
      cy.visit('/');  // Visit the app's URL
      cy.get('button').contains('Start Quiz').click();
      
      // Loop through all questions
      for (let i = 0; i < 10; i++) {
        cy.get('input[type="radio"]').first().click();  // Answer question
        cy.get('.next-button').click();  // Move to next question
      }
  
      // Verify that the score is shown at the end of the quiz
      cy.get('.score').should('be.visible');
    });
  });