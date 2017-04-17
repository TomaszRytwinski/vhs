import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { VhsService } from './vhs.service';
import 'rxjs/add/operator/switchMap';
import { Vhs } from './vhs';

@Component({
  selector: 'vhs-detail',
  templateUrl: './vhs-detail.component.html',

})
export class VhsDetailComponent {
  vhs: Vhs;
  constructor(
    private vhsService: VhsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.vhsService.getVhs(+params['id']))
      .subscribe(vhs => this.vhs = vhs);
  }

  goBack(): void {
    this.location.back();
  }
}
