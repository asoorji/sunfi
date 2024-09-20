import { searchPage } from '../pages/searchPage';

describe('Search Functionality', () => {
  it('TC001: Verify search by first name', () => {
    searchPage.visit();
    searchPage.enterFirstName('Rick');
    searchPage.clickSearchButton();
    searchPage.verifySearchResults('Rick');
  });
});
