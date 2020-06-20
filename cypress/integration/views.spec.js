describe("Verify the app loads", () => {
  it("Visit the app root url", () => {
    cy.visit("/");
    cy.contains("[data-cy=headline]", "Welcome to Your Vue.js App");
  });
});
