import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'sell-beer',
  template: `
    <button class="btn btn-success" (click)="sellPint(currentKeg)">Sell a Pint</button>
    <button class="btn btn-info" (click)="sellGrowler(currentKeg)">Sell a Growler</button>
    <button class="btn btn-warning" (click)="sellBigGrowler(currentKeg)">Sell a Big Growler</button>
  `
})

export class SellBeerComponent {


}
