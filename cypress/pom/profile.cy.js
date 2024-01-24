export default class EditProfile {
    /**
       * Button View Profile
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getViewProfileButton().click();
       */
    static getViewProfileButton() {
         return cy.get ('[type="button"][aria-label="Edit your account"]');
      }

       /**
       * Button View Profile
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getProfileButton().click();
       */
    static getProfileButton() {
      return cy.get ('p:contains("View Profile")').parent('li');
     }
   
    /**
       * Button Edit
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getEditButton().click();
       */
    static getEditButton() {
        return cy.get ('[class="flex items-start hidden md:flex"]').children('button[type="button"][id="btn_edit_profile"]');
      }

       /**
       * Field First Name
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getFirstNameField().type();
       */
    static getFirstNameField() {
        return cy.get ('[id="First_Name"]');
      }

       /**
       * Field Last Name
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getLastNameField().type();
       */
    static getLastNameField() {
        return cy.get ('[id="Last_Name"]');
      }

      /**
       * Field Job Title
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getJobTittleField().type('Software Engineer');
       */
    static getJobTittleField() {
        return cy.get ('[id="Job_Title"]');
      }

       /**
       * Field Nationality
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getNationalityField().type('indonesia{enter}');
       */
    static getNationalityField() {
        return cy.get ('[id="FK_Nationality"]');
      }

      /**
       * Field Gender
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getGenderField().type('Female{enter}');
       */
    static getGenderField() {
        return cy.get ('[id="FK_Gender"]');
      }

      /**
       * Field Religion
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getReligionField().type('Kristen{enter}');
       */
    static getReligionField() {
        return cy.get ('[id="Personal_Religion"]');
      }

      /**
       * Field Country
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getCountryField().type('Indonesia{enter}');
       */
    static getCountryField() {
        return cy.get ('[id="FK_Country"]');
      }

      /**
       * Field Province
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getProvinceField().type('Papua{enter}');
       */
    static getProvinceField() {
        return cy.get ('[id="FK_Province"]');
      }

       /**
       * Field City
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getCityField().type('Manokwari{enter}');
       */
    static getCityField() {
        return cy.get ('[id="FK_City"]');
      }

       /**
       * Field Date Of Birth
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getDateOfBirthField().type('18-09-1992{enter}');
       */
    static getDateOfBirthField() {
        return cy.get ('[id="Personal_DOB"]');
      }


     /**
       * Field Phone Number
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getPhoneNumberField().type('8135098556');
       */
     static getPhoneNumberField() {
        return cy.get ('[id="Personal_PhoneNumber"]');
      }

       /**
       * Field Place of Birth
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getPlaceOfBirthField().type('Sumbawa');
       */
     static getPlaceOfBirthField() {
        return cy.get ('[id="Personal_BirthPlace"]');
      }

       /**
       * Field ZIP Code
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getZipCodeField().type('123456');
       */
     static getZipCodeField() {
        return cy.get ('[id="Post_Code"]');
      }

      /**
       * Field Full Address
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getFullAddressField().type('Jakarta');
       */
     static getFullAddressField() {
        return cy.get ('[id="Personal_Address"]');
      }

      /**
       * Field About Me
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getAboutMesField().type('I am a good listener and learner, able to communicate well with a group and on an individual level. I am able to motivate and direct my talents and skills to meet objectives. I always seek to achieve a high standard in whatever work I undertake. I am well organised with a clear and positive approach to problem solving.');
       */
     static getAboutMesField() {
        return cy.get ('[id="Personal_Summary"]');
      }

      /**
       * Button Save
       * @returns {Promise} cy.get promise
       * @example
       * EditProfile.getSaveButton().click();
       */
    static getSaveButton() {
        return cy.get ('[id="btn_save"]');
      }
    }