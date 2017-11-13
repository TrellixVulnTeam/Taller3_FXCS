import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should edite an hero (DP3)', () => {
    page.navigateTo();    
    var heroeName = page.selectADashboardHeroe();
    page.editHeroe();
  });

  it('should navigate to an hero (DP4)', () => {
    page.navigateTo();    
    var heroeName = page.selectADashboardHeroe();
    expect(page.getHeroeName()).toEqual(heroeName);
  });

});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
 
  it('should search an hero (DP1)', () => {
    page.navigateTo();    
    const HeroeName =  'Tornado';
    page.enterSearchHeroInInput(HeroeName);
    expect(page.getSearchResult()).toBe(HeroeName);
  });

  it('should delete an hero (DP2)', () => {
    page.navigateToHeroes();
    var before = (page.getAllHeroes().count());
    page.deleteHeroes();
    expect(page.getAllHeroes().count()).toBe(before.then(n=> n - 1));
  });

  it('should navigate to an hero (DP5)', () => {
    page.navigateToHeroes();
    var heroName = page.seletcAListHeroe();
    page.viewDetails();
    expect(page.getHeroeName()).toEqual(heroName);
  });
});
