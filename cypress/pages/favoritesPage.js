class FavoritesPage {
    addCharacterToFavorites(characterName) {
      cy.contains(characterName)
        .parent('[data-test=character-card]')
        .find('[data-test=favorite-button]')
        .click();
    }
  
    verifyCharacterNotInMainList(characterName) {
      cy.get('[data-test=main-character-list]')
        .should('not.contain', characterName);
    }
  
    verifyCharacterInFavoritesList(characterName) {
      cy.get('[data-test=favorites-list]')
        .should('contain', characterName);
    }
  
    removeCharacterFromFavorites(characterName) {
      cy.get('[data-test=favorites-list]')
        .contains(characterName)
        .parent('[data-test=character-card]')
        .find('[data-test=remove-favorite-button]')
        .click();
    }
  
    verifyCharacterBackInMainList(characterName) {
      cy.get('[data-test=main-character-list]')
        .should('contain', characterName);
    }
  }
  
  export const favoritesPage = new FavoritesPage();
  