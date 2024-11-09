class HomePage {
  navigateToProducts() {
    // Click on the Products link
    cy.get('a[href="/products"]').click();
    cy.url().should("include", "/products");
  }
}

export default new HomePage();
