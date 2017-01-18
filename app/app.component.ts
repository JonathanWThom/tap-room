import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneClickedSender)="finishedEditing()"></edit-keg>
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

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
