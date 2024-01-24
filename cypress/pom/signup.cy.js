export default class SignUp {
/**
   * Button Sign Up 
   * @returns {Promise} cy.get promise
   * @example
   * SignUp.getSignUpButton().click();
   */
static getSignUpButton() {
    return cy.get ('button[id="btn_signin"]').siblings();
  }

    /**
     * Field Full Name to Create Account
     * @returns {Promise} cy.get promise
     * @example
     * SignUp.getFullNameField().type('Sarah Koja');
     */
    static getFullNameField() {
      return cy.get('[id="Personal_FullName"]');
    }

    /**
     * Field Email to Create Account
     * @returns {Promise} cy.get promise
     * @example
     * SignUp.getEmailField().type('miami@gmail.com');
     */
    static getEmailField() {
        return cy.get('[id="Personal_Email"]');
      }

      /**
     * Field Phone Number to Create Account
     * @returns {Promise} cy.get promise
     * @example
     * SignUp.getPhoneNumberField().type('phoneNumber');
     */
    static getPhoneNumberField() {
        return cy.get('[id="Personal_Handphone"]');
      }

       /**
     * Field Password to Create Account
     * @returns {Promise} cy.get promise
     * @example
     * SignUp.getPasswordField().type('faker.person.fullName()+ '!');
     */
    static getPasswordField() {
        return cy.get('[id="Password"]');
      }

      /**
     * Field Confirm Password to Create Account
     * @returns {Promise} cy.get promise
     * @example
     * SignUp.getConfirmPasswordField().type('faker.person.fullName()+ '!');
     */
    static getConfirmPasswordField() {
        return cy.get('[id="Re_Password"]');
      }

      /**
   * Button Sign Up on Form Registration
   * @returns {Promise} cy.get promise
   * @example
   * SignUp.getSignUpButtonFormRegistration().click();
   */
static getSignUpButtonFormRegistration() {
    return cy.get ('[id="btn_signup"][type="button"]');
}
}