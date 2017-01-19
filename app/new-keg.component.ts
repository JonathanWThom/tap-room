import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
    <div class="form">
      <h3>New Keg</h3>
      <div class="form-input">
        <label>Name:</label>
        <input #newName>
      </div>
      <div class="form-input">
        <label>Brand:</label>
        <input #newBrand>
      </div>
      <div class="form-input">
        <label>Price:</label>
        <input #newPrice>
      </div>
      <div class="form-input">
        <label>Alcohol %:</label>
        <input #newAlcoholContent>
      </div>
      <div class="form-input form-group">
        <label>Type:</label>
        <select #newType class="form-control">
          <option value="Belgian Ale">Belgian Ale</option>
          <option value="Red Ale">Red Ale</option>
          <option value="Lager">Lager</option>
          <option value="IPA">IPA</option>
          <option value="Stout">Stout</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button class="btn btn-block" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newType.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newType.value='';">Submit</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number, type: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, type);
    this.newKegSender.emit(newKegToAdd)
  }

}
