
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vhs } from './vhs';
import { VhsService } from './vhs.service';


@Component({
  selector: 'my-vhs',
  providers: [VhsService],
  templateUrl: './vhses.component.html'

  ,

})


export class VhsesComponent implements OnInit {
  vhses: Vhs[];
  selectedVhs: Vhs;
  model: Vhs;
  newVhs: Vhs;
  idSearch: number;
  name: string;
  year: number;
  idSort: number;
  nameSort: number;
  yearSort: number;

  onSelect(vhs: Vhs): void {
    this.selectedVhs = vhs;
    this.createNewVhs();
  }
  constructor(private vhsService: VhsService) { }

  getVhses() {
    this.vhsService.getVhses().then(vhses => this.vhses = vhses);
  }

  ngOnInit(): void {
    this.model = new Vhs();
    this.newVhs = new Vhs();
    this.getVhses();
    this.selectedVhs = new Vhs();
    this.idSort = 0;
    this.nameSort = 0;
    this.yearSort = 0;
  }

  add(name: string, year: number): void {
    var newVhs = new Vhs();
    newVhs.name = name;
    newVhs.year = year;
    if (!name) { return; }
    this.vhsService.create(newVhs)
      .then(vhs => {
        this.vhses.push(vhs);
      });
  }
  delete(vhs: Vhs): void {
    this.vhsService
      .delete(vhs.id)
      .then(() => {
        this.vhses = this.vhses.filter(h => h !== vhs);
        if (this.selectedVhs === vhs) { this.selectedVhs = null; }
      });
  }
  createNewVhs(): void {
    this.newVhs.urlGif =  this.selectedVhs.urlGif;
    this.newVhs.urlJpeg =  this.selectedVhs.urlJpeg;
    this.newVhs.name = this.selectedVhs.name;
    this.newVhs.year = this.selectedVhs.year;
    this.newVhs.id =  this.selectedVhs.id;
  }
  rent(vhs: Vhs): void {
    vhs.rented = 1;
    this.vhsService.update(vhs);
  }
  searchVhs() {
    this.vhsService.getVhses().then(vhses => this.vhses = vhses)
      .then(vhs => {
        this.vhses = this.vhses.filter(vhs => vhs.rented == 0);
        if (this.idSearch !== undefined && this.idSearch.toString() !== '') { this.vhses = this.vhses.filter(vhs => vhs.id == this.idSearch); }
        if (this.name !== undefined && this.name !== '') { this.vhses = this.vhses.filter(vhs => vhs.name.toLowerCase().indexOf(this.name.toLowerCase().toString()) != -1); }
        if (this.year !== undefined && this.year.toString() !== '') { this.vhses = this.vhses.filter(vhs => vhs.year == this.year); }
      });
  }
  update(id: number, name: string, year: number, vhsUrlJpeg: string, vhsUrlGif: string) {
    var newVhs = new Vhs();
    newVhs.id = id;
    newVhs.rented = 0;
    newVhs.name = name;
    newVhs.year = year;
    newVhs.urlJpeg = vhsUrlJpeg;
    newVhs.urlGif = vhsUrlGif;
    this.vhsService.update(newVhs);
  }

  sort(param: string): void {
    if (param === 'id') {
      if (this.idSort === 0) {
        this.sortByIdAs();
      }
      else {
        this.sortByIdDs();
      }
      if (this.idSort === 0) {
        this.idSort = 1;
      } else if (this.idSort === 1) {
        this.idSort = 0;
      }
    }

    if (param === 'name') {
      if (this.nameSort === 0) {
        this.sortByNameAs();
      } else {
        this.sortByNameDs();

      }
      if (this.nameSort === 0) {
        this.nameSort = 1;
      } else if (this.nameSort === 1) {
        this.nameSort = 0;
      }

    }

    if (param === 'year') {
      if (this.yearSort === 0) {
        this.sortByYearAs();
      } else {
        this.sortByYearDs();
      }
      if (this.nameSort === 0) {
        this.yearSort = 1;
      } else if (this.nameSort === 1) {
        this.yearSort = 0;
      }
    }

  }
  sortByIdAs(): void {
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
  }

  sortByIdDs(): void {
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

  sortByNameAs(): void {
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
  }

  sortByNameDs(): void {
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

  sortByYearAs(): void {
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
  }

  sortByYearDs(): void {
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
}
