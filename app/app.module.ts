import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { HappyHourComponent } from './happy-hour.component';
import { SellBeerComponent } from './sell-beer.component';
import { OnSaleComponent } from './on-sale.component';
import { StylePipe } from './style.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    NewKegComponent,
    HappyHourComponent,
    SellBeerComponent,
    OnSaleComponent,
    StylePipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
