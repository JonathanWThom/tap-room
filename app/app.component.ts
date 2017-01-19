import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="intro">
    <h1 id="logo">Tap Room</h1>
  </div>
    <div class="row">
      <div class="col-sm-7">
        <keg-list [childKegList]="masterKegList" (editClickSender)="editKeg($event)" (pintClickSender)="sellPint($event)" (growlerClickSender)="sellGrowler($event)" (bigGrowlerClickSender)="sellBigGrowler($event)" (onSaleClickSender)="onSale($event)" (offSaleClickSender)="offSale($event)"></keg-list>
      </div>
      <div class="col-sm-4 col-sm-offset-1">
        <happy-hour [childKegList]="masterKegList" (happyHourClickSender)="happyHour()" (notHappyHourClickSender)="notHappyHour()"></happy-hour>
        <edit-keg [childSelectedKeg]="selectedKeg" (doneClickedSender)="finishedEditing()"></edit-keg>
        <new-keg (newKegSender)="addKeg($event)"></new-keg>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('Wanderale', 'Wander Brewing', 5, 6, 'Belgian Ale'),
    new Keg('Kulshan Red Ale', 'Kulshan Brewing', 5, 5, 'Red Ale'),
    new Keg('Budweiser', 'Budweiser', 3, 2.5, 'Lager'),
    new Keg('Guiness', 'Guiness', 6, 6, 'Stout'),
    new Keg('Racer Five IPA', 'Racer 5', 5, 6.5, 'IPA')
  ];

  notHappyHour() {
    for (let keg of this.masterKegList) {
      if (keg.onSale === true && keg.manualHappyHour === false) {
        keg.onSale = false;
        keg.price *= 1.25;
      }
    }
  }

  happyHour() {
    for (let keg of this.masterKegList) {
      if (keg.onSale === false) {
        keg.onSale = true;
        keg.price *= 0.8;
      }
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
     // Logs Date. Unrelated to editKeg function
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  sellPint(currentKeg) {
    currentKeg.pints -= 1;
  }

  sellGrowler(currentKeg) {
    currentKeg.pints -= 2;
  }

  sellBigGrowler(currentKeg) {
    currentKeg.pints -= 4;
  }

  onSale(currentKeg) {
    currentKeg.onSale = true;
    currentKeg.price *= .8;
    currentKeg.manualHappyHour = true;
  }

  offSale(currentKeg) {
    currentKeg.onSale = false;
    currentKeg.price *= 1.25;
    currentKeg.manualHappyHour = false;
  }
}
