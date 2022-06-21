import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponentInstance: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    appComponentInstance =
      TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should have 1 to 5 as default numbers', () => {
    const expectedNumbers = [1, 2, 3, 4, 5];

    appComponentInstance.defaultNumbers$.subscribe((defaultNumbers) => {
      expect(defaultNumbers).toEqual(expectedNumbers);
    });
  });
});
