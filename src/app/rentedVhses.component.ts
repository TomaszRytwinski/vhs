
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vhs } from './vhs';
import { VhsService } from './vhs.service';


@Component({
  selector: 'rented-vhs',
  providers: [VhsService],
  templateUrl: './rentedVhses.component.html'

  ,

})

export class RentedVhsesComponent implements OnInit {
  vhses: Vhs[];
  selectedVhs: Vhs;
  idSort: number;
  nameSort: number;
  yearSort: number;
  idSearch: number;
  name: string;
  year: number;
  penalty: number;
  isDamaged: boolean;
  penaltyDamaged: number;
  isRewined: boolean;
  penaltyRewind: number;
  isDelayed: boolean;
  penaltyDelayed: number;

  onSelect(vhs: Vhs): void {
    this.selectedVhs = vhs;
  }
  vhsDamage(): void {
    this.isDamaged = !this.isDamaged;
    this.sum();
  }
  vhsDelayed(): void {
    this.isDelayed = !this.isDelayed;
    this.sum();
  }
  vhsRewined(): void {
    this.isRewined = !this.isRewined;
    this.sum();
  }
  sum(): void {
    if (this.isDamaged) {
      this.penaltyDamaged = 5;
    } else {
      this.penaltyDamaged = 0;
    }
    if (this.isRewined) {
      this.penaltyRewind = 1;
    } else {
      this.penaltyRewind = 0;
    }
    if (this.isDelayed) {
      this.penaltyDelayed = 2;
    } else {
      this.penaltyDelayed = 0;
    }
    this.penalty = this.penaltyDamaged + this.penaltyRewind + this.penaltyDelayed;
  }
  constructor(private vhsService: VhsService) { }

  getVhses() {
    this.vhsService.getVhses().then(vhses => this.vhses = vhses);
  }

  ngOnInit(): void {
    this.sum();
    this.getVhses();
    this.idSort = 0;
    this.nameSort = 0;
    this.yearSort = 0;
    this.penalty = 0;
    this.isDamaged = false;
    this.isRewined = false;
    this.isDelayed = false;
  }

  getBack(vhs: Vhs): void {
    vhs.rented = 0;
    this.vhsService.update(vhs);
  }
  searchVhs() {
    this.vhsService.getVhses().then(vhses => this.vhses = vhses)
      .then(vhs => {
        this.vhses = this.vhses.filter(vhs => vhs.rented == 1);
        if (this.idSearch !== undefined && this.idSearch.toString() !== '') { this.vhses = this.vhses.filter(vhs => vhs.id == this.idSearch); }
        if (this.name !== undefined && this.name !== '') { this.vhses = this.vhses.filter(vhs => vhs.name.indexOf(this.name.toString()) != -1); }
        if (this.year !== undefined && this.year.toString() !== '') { this.vhses = this.vhses.filter(vhs => vhs.year == this.year); }
      });
  }
  sort(param: string): void {
    if (param === 'id') {
      if (this.idSort === 0) {
        var swapped;
        do {
          swapped = false;
          for (var i = 0; i < this.vhses.length - 1; i++) {
            if (this.vhses[i].id > this.vhses[i + 1].id) {
              var temp = this.vhses[i];
              this.vhses[i] = this.vhses[i + 1];
              this.vhses[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      } else {
        var swapped;
        do {
          swapped = false;
          for (var i = 0; i < this.vhses.length - 1; i++) {
            if (this.vhses[i].id < this.vhses[i + 1].id) {
              var temp = this.vhses[i];
              this.vhses[i] = this.vhses[i + 1];
              this.vhses[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      }
      if (this.idSort === 0) {
        this.idSort = 1;
      } else if (this.idSort === 1) {
        this.idSort = 0;
      }
    }

    if (param === 'name') {
      if (this.nameSort === 0) {
        var swapped;
        do {
          swapped = false;
          for (var i = 0; i < this.vhses.length - 1; i++) {
            if (this.vhses[i].name > this.vhses[i + 1].name) {
              var temp = this.vhses[i];
              this.vhses[i] = this.vhses[i + 1];
              this.vhses[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      } else {
        var swapped;
        do {
          swapped = false;
          for (var i = 0; i < this.vhses.length - 1; i++) {
            if (this.vhses[i].name < this.vhses[i + 1].name) {
              var temp = this.vhses[i];
              this.vhses[i] = this.vhses[i + 1];
              this.vhses[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      }
      if (this.nameSort === 0) {
        this.nameSort = 1;
      } else if (this.nameSort === 1) {
        this.nameSort = 0;
      }

    }

    if (param === 'year') {
      if (this.nameSort === 0) {
        var swapped;
        do {
          swapped = false;
          for (var i = 0; i < this.vhses.length - 1; i++) {
            if (this.vhses[i].year > this.vhses[i + 1].year) {
              var temp = this.vhses[i];
              this.vhses[i] = this.vhses[i + 1];
              this.vhses[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      } else {
        var swapped;
        do {
          swapped = false;
          for (var i = 0; i < this.vhses.length - 1; i++) {
            if (this.vhses[i].year < this.vhses[i + 1].year) {
              var temp = this.vhses[i];
              this.vhses[i] = this.vhses[i + 1];
              this.vhses[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      }
      if (this.nameSort === 0) {
        this.nameSort = 1;
      } else if (this.nameSort === 1) {
        this.nameSort = 0;
      }
    }

  }
}
