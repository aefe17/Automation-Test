class ProductDetailsPage {
  enterQuantity(quantity) {
    // Clear the input field and type the quantity
    cy.get("#quantity").clear().type(quantity);
  }

  addToCart() {
    // Click the add to cart button and confirm the modal
    cy.get(".cart").click();
    cy.get(".modal-header").should("contain", "Added!");
    cy.get(".modal-footer .btn-success").click();
  }
}

export default new ProductDetailsPage();
