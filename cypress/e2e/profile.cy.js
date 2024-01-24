import EditProfile from "../pom/profile.cy";
import SignIn from '../pom/login.cy';
import { faker } from '@faker-js/faker';
let FirstName;
let LastName;
describe('Edit Profile', () => {
  beforeEach(() => {
    FirstName = faker.person.firstName(); 
    LastName = faker.person.lastName();
    cy.visit('https://taldio.com')
    SignIn.getSignInButton().click();
    SignIn.getEmailField().type("dummytesting1212@gmail.com");
    SignIn.getPasswordField().type("Dummytaldio?");
    SignIn.getSubmitButton().click();
    cy.url().should('contain', 'https://taldio.com/home');
  })

  it('Talent should be successfully Edit profile', () => {
    EditProfile.getViewProfileButton().click();
    EditProfile.getProfileButton().click();
    EditProfile.getEditButton().click();
    EditProfile.getFirstNameField().clear();
    EditProfile.getFirstNameField().type(FirstName);
    EditProfile.getLastNameField().clear();
    EditProfile.getLastNameField().type(LastName);
    EditProfile.getJobTittleField().clear();
    EditProfile.getJobTittleField().type('Software Engineer');
   cy.get('[aria-label="Clear"]')[0];
    EditProfile.getNationalityField().type('indonesia{downArrow}{enter}');
    EditProfile.getPlaceOfBirthField().clear();
    EditProfile.getPlaceOfBirthField().type('Sumbawa');
    EditProfile.getDateOfBirthField().clear();
    EditProfile.getDateOfBirthField().type('18121992{downArrow}{enter}');
    cy.get('[aria-label="Clear"]')[1];
    EditProfile.getGenderField().type('Male{downArrow}{enter}');
    cy.get('[aria-label="Clear"]')[2];
    EditProfile.getReligionField().type('Hindu{downArrow}{enter}');
    cy.get('[aria-label="Clear"]')[3];
    EditProfile.getCountryField().type('Singapore{downArrow}{enter}');
    cy.wait(1000);
    cy.get('[aria-label="Clear"]')[4];
    EditProfile.getProvinceField().type('Central Singapore{downArrow}{enter}');
    cy.wait(1000);
    cy.get('[aria-label="Clear"]')[5];
    EditProfile.getCityField().type('Singapore{downArrow}{enter}');
    cy.wait(1000);
    EditProfile.getZipCodeField().clear();
    EditProfile.getZipCodeField().type('112233');
    EditProfile.getFullAddressField().clear();
    EditProfile.getFullAddressField().type('Hollan Road, Singapore');
    EditProfile.getAboutMesField().clear();
    EditProfile.getAboutMesField().type('I am a good listener and learner, able to communicate well with a group and on an individual level. I am able to motivate and direct my talents and skills to meet objectives. I always seek to achieve a high standard in whatever work I undertake. I am well organised with a clear and positive approach to problem solving');
    EditProfile.getSaveButton().click();
    cy.url().should('contain', 'https://taldio.com/profile');
        })

        it('Talent should can not saved edit profile when one of the fields is not filled', () => {
            EditProfile.getViewProfileButton().click();
            EditProfile.getProfileButton().click();
            EditProfile.getEditButton().click({force:true});
            EditProfile.getFirstNameField().clear();
            cy.get('[id="First_Name-helper-text"]').should('contain.text', 'First Name is a required field');
    EditProfile.getLastNameField().clear();
    EditProfile.getLastNameField().type(LastName);
    EditProfile.getJobTittleField().clear();
    EditProfile.getJobTittleField().type('Software Engineer');
    cy.get('[aria-label="Clear"]')[0];
    EditProfile.getNationalityField().type('indonesia{downArrow}{enter}');
    EditProfile.getPlaceOfBirthField().clear();
    EditProfile.getPlaceOfBirthField().type('Sumbawa');
    EditProfile.getDateOfBirthField().clear();
    EditProfile.getDateOfBirthField().type('18121992{downArrow}{enter}');
    cy.get('[aria-label="Clear"]')[1];
    EditProfile.getGenderField().type('Male{downArrow}{enter}');
    cy.get('[aria-label="Clear"]')[2];
    EditProfile.getReligionField().type('Hindu{downArrow}{enter}');
    cy.get('[aria-label="Clear"]')[3];
    EditProfile.getCountryField().type('Singapore{downArrow}{enter}');
    cy.wait(1000);
    cy.get('[aria-label="Clear"]')[4];
    EditProfile.getProvinceField().type('Central Singapore{downArrow}{enter}');
    cy.wait(1000);
    cy.get('[aria-label="Clear"]')[5];
    EditProfile.getCityField().type('Singapore{downArrow}{enter}');
    cy.wait(1000);
    EditProfile.getZipCodeField().clear();
    EditProfile.getZipCodeField().type('112233');
    EditProfile.getFullAddressField().clear();
    EditProfile.getFullAddressField().type('Hollan Road, Singapore');
    EditProfile.getAboutMesField().clear();
    EditProfile.getAboutMesField().type('I am a good listener and learner, able to communicate well with a group and on an individual level');
    EditProfile.getSaveButton().should('be.disabled');
            })
})