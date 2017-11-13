import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  enterSearchHeroInInput(searchHero: string) {
    element(by.id('search-box')).sendKeys(searchHero);
  }
  
  getSearchResult() {  
    return element(by.id('search-component')).all(by.tagName("div")).all(by.tagName("div")).first().getText();
  }  
  deleteHeroes() {
    element.all(by.tagName('li')).last().element(by.buttonText("x")).click();
  }

  selectADashboardHeroe() {
    var heroeName = element.all(by.css('.module.hero')).all(by.tagName('h4')).first().getText();
    element.all(by.css('.module.hero')).all(by.tagName('h4')).first().click();
    return heroeName;
  }

  seletcAListHeroe(){
    var heroName = element.all(by.tagName("li")).last().all(by.tagName("span")).last().getText();
    element.all(by.tagName('li')).last().click();    
    return heroName;
  }

  editHeroe(){
    element(by.tagName("input")).clear();
    element(by.tagName("input")).sendKeys("Hercules");
    element(by.buttonText("Save")).click();
  }

  viewDetails(){
    element(by.buttonText("View Details")).click();
  }

  getHeroeName(){
    return element(by.tagName("input")).getAttribute("value");
  }
}
