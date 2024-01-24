import SignIn from '../pom/login.cy';
describe('Sign In Taldio', () => {
  beforeEach(() => {
    cy.visit('https://taldio.com')
  })

  it('Talent login taldio with valid username and password should be success', () => {
    SignIn.getSignInButton().click();
    SignIn.getEmailField().type("dummytesting1212@gmail.com");
    SignIn.getPasswordField().type("Dummytaldio?");
    SignIn.getSubmitButton().click();
    cy.url().should('contain', 'https://taldio.com/home');
   })

   it('Talent login taldio with Invalid username and password should be failed', () => {
    SignIn.getSignInButton().click();
    SignIn.getEmailField().type("dewata@proton.com");
    SignIn.getPasswordField().type("Bowo21!");
    SignIn.getSubmitButton().click();
    cy.url().should('not.contain', 'https://taldio.com/profile');
  })
})
