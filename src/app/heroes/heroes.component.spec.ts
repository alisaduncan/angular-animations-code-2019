import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HeroAddHarness } from '../hero-add/testing/hero-add-harness';
import { HeroAddComponent } from '../hero-add/hero-add.component';
import { By } from '@angular/platform-browser';

describe('HeroesComponent- deep testing', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let loader: HarnessLoader;

  const mockHerosService = {
    getHeroes: () => of([
      { id: 11, name: 'Mr. Nice' }
    ]),
    addHero: (hero) => {},
    deleteHero: (hero) => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
      ],
      declarations: [ HeroesComponent, HeroAddComponent ],
      providers: [
        {provide: HeroService, useValue: mockHerosService},
        {provide: ActivatedRoute, useValue: { snapshot: { url: ['test']}}},
        ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should be created', async () => {
    expect(component).toBeTruthy();
  });

  it('calls add method when hero is added', async () => {
    const HERO_NAME = 'Dandelion';
    const addMethodSpy = spyOn(component, 'add').and.stub();
    const addHeroHarness = await loader.getHarness(HeroAddHarness);
    expect(addHeroHarness).toBeTruthy();
    await addHeroHarness.setValue(HERO_NAME);
    await addHeroHarness.clickButton();
    expect(addMethodSpy).toHaveBeenCalledOnceWith(HERO_NAME);
  });

  it('calls add method when hero is added - no harness', async () => {
    const HERO_NAME = 'Feels bad';
    const addMethodSpy = spyOn(component, 'add').and.stub();

    const addHero = fixture.debugElement.query(By.directive(HeroAddComponent));
    expect(addHero).toBeTruthy();

    addHero.query(By.css('input')).nativeElement.value = HERO_NAME;
    addHero.query(By.css('button')).nativeElement.click();
    expect(addMethodSpy).toHaveBeenCalledOnceWith(HERO_NAME);
  });
});
