import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">{{currentKeg.name}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Wanderale', 'Wander Brewing', 5, 6, 'Belgian Ale'),
    new Keg('Kulshan Red Ale', 'Kulshan Brewing', 5, 5, 'Red Ale'),
    new Keg('Budweiser', 'Budweiser', 3, 2.5, 'Yellow Water')
  ]
}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public style: string) { }
}
