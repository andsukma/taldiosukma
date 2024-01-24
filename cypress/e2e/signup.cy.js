import { faker } from '@faker-js/faker';
import SignUp from '../pom/signup.cy';
let randomName;
let randomEmail;
let randomNumber;
describe('Sign Up Taldio', () => {
  beforeEach(() => {
    cy.visit('https://taldio.com')
    randomEmail = faker.internet.email(); 
    randomName = faker.person.fullName();
    randomNumber = faker.number.int({min:999999,max:999999999999});
  })

  it('Talent Register with input valid data should be success #QR-TC-1201', () => {
    const Password = '!'+ randomName;
    SignUp.getSignUpButton().click();
    SignUp.getFullNameField().type(randomName);
    SignUp.getEmailField().type(randomEmail);
    SignUp.getPhoneNumberField().type(randomNumber);
    SignUp.getPasswordField().type(Password);
    SignUp.getConfirmPasswordField().type(Password);
    SignUp.getSignUpButtonFormRegistration().click();
    cy.url().should('contain', 'https://taldio.com/resendemail');
   })

   it('Talent Register with input invalid data should be failed #QR-TC-1202', () => {
    const Password = '!'+ randomName;
    SignUp.getSignUpButton().click();
    SignUp.getFullNameField().type(randomName);
    SignUp.getEmailField().type('kutoAji');
    cy.get('[id="Personal_Email-helper-text"]').should('contain.text', 'Invalid email format');
    SignUp.getPhoneNumberField().type('12345');
    cy.get('[id="Personal_Handphone-helper-text"]').should('contain.text', 'Phone number length must less than 13 and more than 9');
    SignUp.getPasswordField().type('passwo');
    cy.get('[id="Password-helper-text"]').should('contain.text', 'Password must include at least one uppercase letter and one special character');
    SignUp.getConfirmPasswordField().type('Pasw0rd!');
    cy.get('[id="Re_Password-helper-text"]').should('contain.text', 'Passwords must match exactly');
   })

  it('Talent Register with input email has been registered on taldio should be failed #QR-TC-1204', () => {
    const Password = '!'+ randomName;
    SignUp.getSignUpButton().click();
    SignUp.getFullNameField().type(randomName);
    SignUp.getEmailField().type('sukimin.imin88@gmail.com');
    SignUp.getPhoneNumberField().type(randomNumber);
    SignUp.getPasswordField().type(Password);
    SignUp.getConfirmPasswordField().type(Password);
    SignUp.getSignUpButtonFormRegistration().click();
    cy.get('[role="status"]').then(text=>{
    expect(text.text()).to.have.string("Registration failed. email Has Been Registered")
    });
  })
  })
