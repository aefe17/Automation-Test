class ProductsPage {
  selectProductByIndex(index) {
    // Click on the product image to view the product details
    cy.get(".product-image-wrapper .choose").eq(index).find("a").click();
  }
}

export default new ProductsPage();
