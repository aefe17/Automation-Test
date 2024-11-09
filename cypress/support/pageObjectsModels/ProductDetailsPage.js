class ProductDetailsPage {
  enterQuantity(quantity) {
    // Clear the input field and type the quantity
    cy.screenshot("product-details-page");
    cy.get("#quantity").clear().type(quantity);
    cy.screenshot("quantity-entered");
  }

  addToCart() {
    // Click the add to cart button and confirm the modal
    cy.get(".cart").click();
    cy.get(".modal-header").should("contain", "Added!");
    cy.screenshot("product-added-to-cart"); 
    cy.get(".modal-footer .btn-success").click();
  }
}

export default new ProductDetailsPage();
