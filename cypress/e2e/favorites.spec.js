import { searchPage } from '../pages/searchPage';
import { favoritesPage } from '../pages/favoritesPage';

describe('Favorites Functionality', () => {
  beforeEach(() => {
    searchPage.visit();
  });

  it('TC006: Add character to favorites', () => {
    searchPage.enterFirstName('Rick');
    searchPage.clickSearchButton();
    favoritesPage.addCharacterToFavorites('Rick');
    favoritesPage.verifyCharacterNotInMainList('Rick');
    favoritesPage.verifyCharacterInFavoritesList('Rick');
  });

  it('TC007: Remove character from favorites', () => {
    // Add Rick to favorites first
    searchPage.enterFirstName('Rick');
    searchPage.clickSearchButton();
    favoritesPage.addCharacterToFavorites('Rick');
    
    // Now remove Rick from favorites
    favoritesPage.removeCharacterFromFavorites('Rick');
    favoritesPage.verifyCharacterBackInMainList('Rick');
  });
});
