/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should fill the registration form and submit', () => {
    cy.get('#firstName').type('Viktoriia');
    cy.get('#lastName').type('Mykhailiak');
    cy.get('#userEmail').type('viktoriia.mykhailiak@gmail.com');
    cy.get('label[for="gender-radio-2"]').click();
    cy.get('#userNumber').type('0635537015');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('September');
    cy.get('.react-datepicker__year-select').select('2005');
    cy.get('.react-datepicker__day--001')
      .not('.react-datepicker__day--outside-month')
      .click();

    cy.get('#subjectsInput').type('JavaScript{enter}', { force: true });

    cy.get('label[for="hobbies-checkbox-1"]').click({ force: true });

    cy.get('#currentAddress').type('Lviv, Ukraine', { force: true });

    cy.get('#react-select-3-input').type('NCR{enter}', { force: true });
    cy.get('#react-select-4-input').type('Delhi{enter}', { force: true });

    cy.get('#submit').click({ force: true });

    cy.contains('Thanks for submitting the form').scrollIntoView().should('be.visible');

    cy.get('tbody > tr').contains('td', 'Student Name').next().should('have.text', 'Viktoriia Mykhailiak');
    cy.get('tbody > tr').contains('td', 'Student Email').next().should('have.text', 'viktoriia.mykhailiak@gmail.com');
    cy.get('tbody > tr').contains('td', 'Gender').next().should('have.text', 'Female');
    cy.get('tbody > tr').contains('td', 'Mobile').next().should('have.text', '0635537015');
    cy.get('tbody > tr').contains('td', 'Date of Birth').next().should('have.text', '01 September,2005');
    cy.get('tbody > tr').contains('td', 'Hobbies').next().should('have.text', 'Sports');
    cy.get('tbody > tr').contains('td', 'Address').next().should('have.text', 'Lviv, Ukraine');
    cy.get('tbody > tr').contains('td', 'State and City').next().should('have.text', 'NCR Delhi');
  });
});
