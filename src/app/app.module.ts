import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { VhsDetailComponent } from './vhs-detail.component';
import { VhsesComponent }     from './vhses.component';
import { VhsService }         from './vhs.service';
import { AppRoutingModule }     from './app-routing.module';
import {RentedVhsesComponent} from './rentedVhses.component';
import {VhsSearchComponent} from './vhs-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],

  declarations: [
    AppComponent,
    VhsDetailComponent,
    VhsesComponent,
    VhsSearchComponent,
    RentedVhsesComponent
  ],
  bootstrap: [AppComponent],
  providers: [VhsService]
})
export class AppModule { }
