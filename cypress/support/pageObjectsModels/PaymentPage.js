import { faker } from "@faker-js/faker";

class PaymentPage {
  confirmPaymentAndLogout() {
    // Sets the name and payment details
    const name = Cypress.env("randomName");
    cy.url().should("include", "/payment");
    cy.get('input[data-qa="name-on-card"]').type(name);
    cy.get('input[data-qa="card-number"]').type(
      faker.finance.creditCardNumber()
    );
    cy.get('input[data-qa="cvc"]').type(faker.finance.creditCardCVV());
    cy.get('input[data-qa="expiry-month"]').type(
      faker.date.month().toString().padStart(2, "0")
    );
    cy.get('input[data-qa="expiry-year"]').type(
      faker.date.future().getFullYear().toString()
    );
    // Clicks the pay button and confirms the order and logs out of the app
    cy.get('button[data-qa="pay-button"]').click();
    cy.contains("Order Placed!").should("be.visible");
    cy.get('a[href="/logout"]').click();
  }
}

export default new PaymentPage();
