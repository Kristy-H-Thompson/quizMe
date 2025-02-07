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
    cy.wait("@getQuestions");
    cy.get("button").eq(1).should("be.visible").click();
    cy.wait(7000);
    cy.get("h2").should("not.contain", "What is 2 + 2"); 
  });

  // Display your score
  it("should display final score when quiz is completed", () => {
    cy.pause(); // Pause for debugging if needed
  
    // Ensure the quiz completion alert appears
    cy.contains("Quiz Completed", { timeout: 7000 }).should("be.visible");
  
    // Ensure that the score is displayed in the correct format using regex
    cy.get(".alert.alert-success")
      .should("be.visible")
      .and(($alert) => {
        // Match the score format using regex
        expect($alert.text()).to.match(/^Your score: \d+\/\d+$/);
      });
  });

  it("should restart quiz when Take New Quiz is clicked", () => {
    cy.wait(600);
    cy.contains("Take New Quiz", { timeout:7000}).click(); 
    cy.pause();

    cy.wait("@getQuestions"); 
    cy.wait(500);
    cy.get("h2").should("contain", " "); 
  });
});