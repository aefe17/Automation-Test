import { faker } from "@faker-js/faker";

class RegisterPage {
  registerNewUser() {
    //Generate Random Data
    const randomName = faker.name.fullName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();

    // Store generated data in Cypress environment variables
    Cypress.env("randomName", randomName);
    Cypress.env("randomEmail", randomEmail);
    Cypress.env("randomPassword", randomPassword);

    //Fill out the initial regisration form
    cy.get('input[data-qa="signup-name"]').type(randomName);
    cy.get('input[data-qa="signup-email"]').type(randomEmail);
    cy.get('button[data-qa="signup-button"]').click();

    //Fill in user details
    cy.get("#id_gender1").check();
    cy.get("#password").type(randomPassword);
    cy.get("#days").select("10");
    cy.get("#months").select("April");
    cy.get("#years").select("1990");
    cy.get("#first_name").type(faker.name.firstName());
    cy.get("#last_name").type(faker.name.lastName());
    cy.get("#company").type(faker.company.name());
    cy.get("#address1").type(faker.address.streetAddress());
    cy.get("#country").select("United States");
    cy.get("#state").type(faker.address.state());
    cy.get("#city").type(faker.address.city());
    cy.get("#zipcode").type(faker.address.zipCode());
    cy.get("#mobile_number").type(faker.phone.number("###-###-####"));
    cy.get('button[data-qa="create-account"]').click();
    //Validate the account creation
    cy.contains("Account Created!").should("be.visible");
    cy.get("a.btn-primary").click();
  }
}

export default new RegisterPage();
