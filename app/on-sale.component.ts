import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'on-sale',
  template: `
  <button *ngIf="currentKeg.onSale === false" class="btn" (click)="onSale(currentKeg)">Put on Sale</button>
  <button *ngIf="currentKeg.onSale === true" class="btn" (click)="offSale(currentKeg)">Take off Sale</button>
  `
})

export class OnSaleComponent {
  @Input() currentKeg: Keg;
  @Output() onSaleClickSender = new EventEmitter();
  @Output() offSaleClickSender = new EventEmitter();

  onSale(currentKeg: Keg) {
    this.onSaleClickSender.emit(currentKeg);
  }

  offSale(currentKeg: Keg) {
    this.offSaleClickSender.emit(currentKeg);
  }
}
