class SearchPage {
    visit() {
      cy.visit('/');
    }
  
    enterFirstName(firstName) {
      cy.get('[data-test=search-input]').type(firstName);
    }
  
    clickSearchButton() {
      cy.get('[data-test=search-button]').click();
    }
  
    verifySearchResults(firstName) {
      cy.get('[data-test=character-name]')
        .should('contain', firstName);
    }
  }
  
  export const searchPage = new SearchPage();
  