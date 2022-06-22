import { Component } from '@angular/core';
import { of } from 'rxjs';

export const DEFAULT_NUMBERS = [...Array(5).keys()].map((number) => ++number);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  defaultNumbers$ = of(
    DEFAULT_NUMBERS,
    DEFAULT_NUMBERS.map((number) => number + 5)
  );
}
