import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'happy-hour',
  template: `
    <div class="happy-hour">
      <h3>Happy Hour</h3>

      <div class="happy-hour-buttons">
        <button class="btn btn-success" (click)="happyHour()">Happy Hour</button>
        <button class="btn btn-danger" (click)="notHappyHour()">Stop Happy Hour</button>
      </div>

      <div class="happy-hour-time">
        <input #happyHourInput placeholder="Enter time (0-24)">
        <button (click)="setHappyHour(happyHourInput.value); checkHappyHour(); happyHourInput.value = ''" class="btn">Set Time</button>
      </div>
      <div *ngIf="happyTime" class="happyTime">
        <div *ngIf="happyTime > 12">
          <h3>Happy Hour: {{this.happyTime - 12}}:00 PM</h3>
        </div>
        <div *ngIf="happyTime < 12">
          <h3>Happy Hour: {{this.happyTime}}:00 AM</h3>
        </div>
      </div>
    </div>
  `
})

export class HappyHourComponent implements OnInit  {
  @Input() childKegList: Keg[];
  @Output() happyHourClickSender = new EventEmitter();
  @Output() notHappyHourClickSender = new EventEmitter();

  happyTime: number = null;
  currentTime: Date = new Date();
  happyHourSet: boolean = false;

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
    this.happyHourSet = true;
    this.happyHourClickSender.emit();
  }

  notHappyHour() {
    this.notHappyHourClickSender.emit();
  }

  checkHappyHour() {
    if (this.currentTime.getHours() === this.happyTime) {
      this.happyHour();
    } else if (this.currentTime.getHours() !== this.happyTime && this.happyHourSet === false){
      this.notHappyHour();
    }
  }

}
