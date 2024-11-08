class CheckoutPage {
  confirmOrder() {
    // Confirms the order and proceeds to the payment page
    cy.url().should("include", "/checkout");
    cy.get('textarea[name="message"]').type(
      "Please deliver between 9 AM - 5 PM."
    );
    cy.get('a[href="/payment"]').click();
  }
}

export default new CheckoutPage();
