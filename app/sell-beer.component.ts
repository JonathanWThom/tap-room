import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'sell-beer',
  template: `
    <button class="btn" (click)="sellPintClicked(currentKeg)">Sell a Pint</button>
    <button class="btn" (click)="sellGrowlerClicked(currentKeg)">Sell a Growler</button>
    <button class="btn" (click)="sellBigGrowlerClicked(currentKeg)">Sell a Big Growler</button>
  `
})

export class SellBeerComponent {
  @Input() currentKeg: Keg;

  @Output() pintClickSender = new EventEmitter();
  @Output() growlerClickSender = new EventEmitter();
  @Output() bigGrowlerClickSender = new EventEmitter();

  sellPintClicked(currentKeg: Keg) {
    this.pintClickSender.emit(currentKeg);
  }

  sellGrowlerClicked(currentKeg: Keg) {
    this.growlerClickSender.emit(currentKeg);
  }

  sellBigGrowlerClicked(currentKeg: Keg) {
    this.bigGrowlerClickSender.emit(currentKeg);
  }

}
