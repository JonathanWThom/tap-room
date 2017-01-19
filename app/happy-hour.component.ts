import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'happy-hour',
  template: `
    <h4>Happy Hour</h4>
    <button class="btn btn-success" (click)="happyHour()">Happy Hour</button>
    <button class="btn btn-danger" (click)="notHappyHour()">Stop Happy Hour</button>
    <input #happyHourInput>
    <button (click)="setHappyHour(happyHourInput.value); checkHappyHour(); happyHourInput.value = ''" class="btn">What time?</button>
  `
})

export class HappyHourComponent implements OnInit  {
  @Input() childKegList: Keg[];
  @Output() happyHourClickSender = new EventEmitter();
  @Output() notHappyHourClickSender = new EventEmitter();

  happyTime: number = null;
  currentTime: Date = new Date();

  ngOnInit() {
    this.autoHappyHour();
  }

  setHappyHour(time) {
    this.happyTime = parseInt(time);
  }

  autoHappyHour() {
    var that = this;
    setInterval(function() {
      this.currentTime = new Date();
      that.checkHappyHour();
    }, 1000);
  }

  happyHour() {
    this.happyHourClickSender.emit();
  }

  notHappyHour() {
    this.notHappyHourClickSender.emit();
  }

  checkHappyHour() {
    if (this.currentTime.getHours() === this.happyTime) {
      this.happyHour();
    } else if (this.currentTime.getHours() !== this.happyTime){
      this.notHappyHour();
    }
  }

}
