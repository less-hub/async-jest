import { TestBed } from '@angular/core/testing';
import { firstValueFrom, lastValueFrom } from 'rxjs';
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

  it('should emit first value as numbers from 1 to 5', async () => {
    const expectedNumbers = [1, 2, 3, 4, 5];
    const numbers = await firstValueFrom(appComponentInstance.defaultNumbers$);

    expect(numbers).toEqual(expectedNumbers);
  });

  it('should emit last value as numbers from 6 to 10', async () => {
    const expectedNumbers = [6, 7, 8, 9, 10];
    const numbers = await lastValueFrom(appComponentInstance.defaultNumbers$);

    expect(numbers).toEqual(expectedNumbers);
  });
});
