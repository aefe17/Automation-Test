import HomePage from "../../support/pageObjectsModels/HomePage";
import ProductsPage from "../../support/pageObjectsModels/ProductsPage";
import ProductDetailsPage from "../../support/pageObjectsModels/ProductDetailsPage";
import CartPage from "../../support/pageObjectsModels/CartPage";
import RegisterPage from "../../support/pageObjectsModels/RegisterPage";
import CheckoutPage from "../../support/pageObjectsModels/CheckoutPage";
import PaymentPage from "../../support/pageObjectsModels/PaymentPage";

// Define standard device viewports
const viewports = [
  { device: "Desktop - Small", width: 1280, height: 800 },
  { device: "Desktop - Standard", width: 1366, height: 768 },
  { device: "Desktop - Large", width: 1920, height: 1080 },
  { device: "iPad - Large", width: 1024, height: 1366 },
  { device: "Mobile - Small", width: 360, height: 640 },
  { device: "Mobile - Medium", width: 375, height: 812 },
  { device: "Mobile - Large", width: 428, height: 926 },
];
// Set the random Quantity for the product
const randomQuantity = Math.floor(Math.random() * 20) + 1;

describe("Automation Exercise - User Flow", () => {
  viewports.forEach((viewport) => {
    describe(`Viewport: ${viewport.device}`, () => {
      beforeEach(() => {
        // Set the viewport size for each device
        cy.viewport(viewport.width, viewport.height);
        //Step 1: Visit the website
        cy.visit("https://automationexercise.com");
        cy.screenshot("products-page"); // Screenshot after navigating to Products
      });

      it("Automated User Flow Retail Page ", () => {
        // Step 2: Navigate to the products page
        HomePage.navigateToProducts();
        //Step 3: Choose the third product and view its details
        ProductsPage.selectProductByIndex(2);
        //Step 4: Enter a random quantity and add to cart
        ProductDetailsPage.enterQuantity(randomQuantity);
        ProductDetailsPage.addToCart();
        //Step 5: Proceed to Cart
        CartPage.goToCart();
        //Step 6: Proceed to Checkout
        CartPage.proceedToCheckout();
        CartPage.goToLogin();
        //Step 7: Register a new user account using random Data
        RegisterPage.registerNewUser();
        //Step 8: Continue to checkout and confirm order
        CartPage.goToCart();
        CartPage.proceedToCheckout();
        CheckoutPage.confirmOrder();
        //Step 9: Payment and Logout
        PaymentPage.confirmPaymentAndLogout();
      });
    });
  });
});
