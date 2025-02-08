describe("E2E - Tech Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001"); 
    cy.intercept("GET", "/api/questions/random").as("getQuestions");
  });

  // Should have a start quiz button
  it("should display Start Quiz button on load", () => {
    cy.contains("Start Quiz").should("be.visible");
  });

  // Quiz should start when button is pressed
  it("should start the quiz when Start Quiz is clicked", () => {
    cy.contains("Start Quiz").click();
    cy.pause();
    cy.wait("@getQuestions");
    cy.get("h2", { timeout: 6000 }).should("exist"); 
  });

  // Next question
  it("should move to the next question when an answer is clicked", () => {
    cy.contains("Start Quiz").click();
    cy.pause();
    cy.wait("@getQuestions");
  
    // Ensure button is visible and clickable
    cy.get("button").eq(1).should("be.visible").click();
    
    cy.wait(2000);  // Adjust the wait time if necessary, or replace with a more specific event like a page load
    cy.get("h2").should("not.contain", "What is 2 + 2");
  });

  // Display your score
  it("should display final score when quiz is completed", () => {
    // Start the quiz
    cy.contains("Start Quiz").click();
  
    // Wait for the first question to appear
    cy.get(".card", { timeout: 10000 }).should("be.visible");
  
    // Loop through each question and answer them
    for (let i = 0; i < 10; i++) {
      // Ensure the current question is visible
      cy.get(".card")
        .should("be.visible")
        .within(() => {
          // Click the first answer button for the current question
          cy.get("button")
            .first()
            .should("be.visible")
            .click();
        });
  
      // Wait for the next question to appear (you can adjust this wait time)
      if (i < 9) {
        cy.wait(1000); // Adjust time if needed for question transitions
      }
    }
  
    // Ensure the quiz completion message appears
    cy.contains("Quiz Completed", { timeout: 7000 }).should("be.visible");
  
    // Check that the score is displayed in the correct format
    cy.get(".alert.alert-success")
      .should("be.visible")
      .and(($alert) => {
        expect($alert.text()).to.match(/^Your score: \d+\/10$/); // Ensure the score is for 10 questions
      });
  });

  it("should display final score when quiz is completed and restart when Take New Quiz is clicked", () => {
    // Start the quiz
    cy.contains("Start Quiz").click();
  
    // Wait for the first question to appear
    cy.get(".card", { timeout: 10000 }).should("be.visible");
  
    // Loop through each question and answer them
    for (let i = 0; i < 10; i++) {
      // Ensure the current question is visible
      cy.get(".card")
        .should("be.visible")
        .within(() => {
          // Click the first answer button for the current question
          cy.get("button")
            .first()
            .should("be.visible")
            .click();
        });
  
      // Wait for the next question to appear (you can adjust this wait time)
      if (i < 9) {
        cy.wait(1000); // Adjust time if needed for question transitions
      }
    }
  
    // Ensure the quiz completion message appears
    cy.contains("Quiz Completed", { timeout: 7000 }).should("be.visible");
  
    // Check that the score is displayed in the correct format
    cy.get(".alert.alert-success")
      .should("be.visible")
      .and(($alert) => {
        expect($alert.text()).to.match(/^Your score: \d+\/10$/); // Ensure the score is for 10 questions
      });
  
    // Now restart the quiz by clicking "Take New Quiz"
    cy.wait(700); // Optionally wait to ensure quiz completion
    cy.contains("Take New Quiz", { timeout: 8000 }).click();
  
    // Wait for the questions to load again (using alias if needed)
    cy.wait("@getQuestions");
  
    // Ensure the first question is visible after restarting
    cy.wait(500); // Short wait before verifying the first question
    cy.get("h2").should("contain", " "); // Check if the question content is reset or blank (you can adjust this condition)
  });});