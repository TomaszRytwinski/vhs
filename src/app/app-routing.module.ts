import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VhsDetailComponent } from './vhs-detail.component';
import { VhsesComponent }     from './vhses.component';
import {RentedVhsesComponent} from './rentedVhses.component';

const routes: Routes = [
  { path: 'detail/:id', component: VhsDetailComponent },
  { path: 'vhses',     component: VhsesComponent },
  { path: 'rentedVhses', component: RentedVhsesComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
