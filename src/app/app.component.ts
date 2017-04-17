import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1 >Video rental shop</h1>
    <table align="center">
    <tr>
      <th><button class="buttonMenu" routerLink="/vhses"> VHS movies listing </button> </th>
      <th><button class="buttonMenu"> Subscribed customers </button> </th>
      <th><button class="buttonMenu" routerLink="/rentedVhses"> List of rented tapes </button> </th>
      </tr>
    </table>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
