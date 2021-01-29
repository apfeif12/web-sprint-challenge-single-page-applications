describe("user-onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  const nameInput = () => cy.get('input[name="name"]');
  const toppingCheck = () => cy.get('input[name="pepperoni"]');
  const submit = () => cy.get("button");

  it("type in name", () => {
    nameInput()
      .should("exist")
      .type("Alex Pfeifer")
      .should("have.value", "Alex Pfeifer");
  });

  it("check toppings", () => {
    toppingCheck()
      .should("exist")
      .click()
      .click()
  });
  it("submit", () => {
    nameInput().type("Alex Pfeifer");
    toppingCheck().click()
    submit().click()
  });
});
