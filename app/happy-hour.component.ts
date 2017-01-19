import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'happy-hour',
  template: `
    <label>Happy Hour Time</label>
    <input #happyHourInput>
    <button (click)="setHappyHour(happyHourInput.value); checkHappyHour(); happyHourInput.value = ''" class="btn">What time?</button>
  `
})

export class HappyHourComponent implements OnInit  {
  @Input() childKegList: Keg[];

  happyTime: number = null;

  setHappyHour(time) {
    this.happyTime = parseInt(time);
  }

  happyHour() {
    for (let keg of this.childKegList) {
      if (keg.onSale === false) {
        keg.onSale = true;
        keg.price *= 0.8;
      }
    }
  }

  notHappyHour() {
    for (let keg of this.childKegList) {
      if (keg.onSale === true) {
        keg.onSale = false;
        keg.price *= 1.25;
      }
    }
  }

checkHappyHour() {
  if (this.currentTime.getHours() === this.happyTime) {
    this.happyHour();
  } else if (this.currentTime.getHours() !== this.happyTime){
    this.notHappyHour();
  }
}

currentTime: Date = new Date();

  autoHappyHour() {
    var that = this;
    setInterval(function() {
      this.currentTime = new Date();
      that.checkHappyHour();
    }, 1000);
  }

  ngOnInit() {
    this.autoHappyHour();
  }

}
