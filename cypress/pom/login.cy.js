export default class SignIn {
    /**
       * Button Sign In
       * @returns {Promise} cy.get promise
       * @example
       * SignIn.getSignInButton().click();
       */
    static getSignInButton() {
        return cy.get ('[id="btn_signin"]');
      }

       /**
       * Button Submit
       * @returns {Promise} cy.get promise
       * @example
       * SignIn.getSubmitButton().click();
       */
    static getSubmitButton() {
        return cy.get ('[id="btn_signin_submit"]');
      }

       /**
     * Field Email for Sign In
     * @returns {Promise} cy.get promise
     * @example
     * SignIn.getEmailField().type('miami@gmail.com');
     */
    static getEmailField() {
        return cy.get('[id="username"]');
      }

       /**
     * Field Password for Sign In
     * @returns {Promise} cy.get promise
     * @example
     * SignIn.getPasswordField().type('Ara4ra!');
     */
    static getPasswordField() {
        return cy.get('[id="password"]');
      }
    }