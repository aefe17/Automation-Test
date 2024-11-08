class CartPage {
  goToCart() {
    // Goes to the cart page
    cy.get('a[href="/view_cart"]').first().click();
    cy.url().should("include", "/view_cart");
    cy.contains("Shopping Cart").should("be.visible");
  }

  proceedToCheckout() {
    cy.get(".nav").then(($navbar) => {
      // Validates with the navbar text if the user is logged in
      if ($navbar.text().includes("Logout")) {
        cy.get(".check_out").click();
      } else if ($navbar.text().includes("Signup / Login")) {
        cy.get(".check_out").click();
        cy.get(".modal-content").should("be.visible");
      }
      // Throws an error if the user status cannot be determined
      else {
        throw new Error("Unable to determine user login status");
      }
    });
  }

  goToLogin() {
    //Goes to the login page through the modal
    cy.get('.modal-body a[href="/login"]').click();
    cy.url().should("include", "/login");
  }
}

export default new CartPage();
