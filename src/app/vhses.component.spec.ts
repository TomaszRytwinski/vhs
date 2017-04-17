import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule}           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { VhsesComponent } from "./vhses.component";
import { RouterLinkStubDirective, RouterOutletStubComponent } from "./testing/router-stubs";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';


import { Component, OnInit } from '@angular/core';


import { Vhs } from './vhs';
import { VhsService } from './vhs.service';


describe('RentedVhsesComponent(inline templateUrl)', function() {
  let de: DebugElement;
  let comp: VhsesComponent;
  let fixture: ComponentFixture<VhsesComponent>;
  let el: HTMLElement;
  let vhsService: VhsService;
  let movies = new Array<Vhs>();

  let vhsServiceStub = {
    getVhses() {
      return Promise.resolve([
        { id: 1, name: 'Pulp fiction', rented: 0, year: 1999, urlJpeg: "https://pmd205465tn-a.akamaihd.net/Miramax/279/95/hiamxwYTqGi5jcQNYzQwZxZRYqvKxtw5_h264_3800_640x360_352124483894.jpg" },
        { id: 2, name: 'The Green Mile', rented: 0, year: 1998, urlJpeg: "http://images.contentful.com/7h71s48744nc/4HxC7oQjxYkgS6kIWOiOKa/99d0b5014755a6e38eaa73ec3c5bed70/the-green-mile.jpg" },
        { id: 3, name: 'Forrest Gump', rented: 0, year: 1997, urlJpeg: "http://images.contentful.com/7h71s48744nc/ttbuWX4JtsGcpN25BIz41u/d6eb57c5801370b80e356e06f297f1af/Forrest-Gump-large.jpg" },
        { id: 4, name: 'The Shawshank', rented: 1, year: 1995, urlJpeg: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/09/09/ShawshankRedempt_184Pyxurz.jpg" },
        { id: 5, name: 'The Matrix', rented: 0, year: 1995, urlJpeg: "https://2.bp.blogspot.com/-2mxHUrtNNQI/VvCP1V94pNI/AAAAAAAAEqw/h9IWBjCeMowykzM8uXWWoOb3BymaZNTIQ/s1600/matrix-600x400.jpg" },
        { id: 6, name: 'Léon', rented: 0, year: 1993, urlJpeg: "https://i.ytimg.com/vi/Dc1KzpMnuX0/maxresdefault.jpg" },
        { id: 7, name: 'Avatar', rented: 0, year: 1991, urlJpeg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzgsFStqp1pkxWCsJweMsL6l0xWc_WGhwRfnJY7pnEkeSlsVv" },
        { id: 8, name: 'Gladiator', rented: 0, year: 1970, urlJpeg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5x1z5nRi5D273KnUv7ZjzVcCt97f-HfJSt4jpbJtKKvrGygJ1" }
      ])
    }
  };




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VhsesComponent, RouterLinkStubDirective, RouterOutletStubComponent],
      imports: [RouterTestingModule, HttpModule, FormsModule],
      providers: [VhsService]
    })
      .overrideComponent(VhsesComponent, {
        add: {
          providers: [{ provide: VhsService, useValue: vhsServiceStub }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VhsesComponent);
    comp = fixture.componentInstance;
    vhsService = fixture.debugElement.injector.get(VhsService);

  });


  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h1> Video rental shop', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain("List of VHS");
  });

  it('it should sort the movie by id asc', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.idSort = 0;
    comp.sort("id");
    expect(comp.vhses[0].id).toEqual(1);
  }));

  it('it should sort the movie by id desc', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.idSort = 1;
    comp.sort("id");
    expect(comp.vhses[0].id).toEqual(8);
  }));

  it('it should sort the movie by name asc', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.nameSort = 0;
    comp.sort("name");
    expect(comp.vhses[0].id).toEqual(7);
  }));

  it('it should sort the movie by name desc', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.nameSort = 1;
    comp.sort("name");
    expect(comp.vhses[0].id).toEqual(4);
  }));

  it('it should sort the movie by year asc', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.yearSort = 1;
    comp.sort("year");
    expect(comp.vhses[0].id).toEqual(1);
  }));

  it('it should sort the movie by year desc', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.yearSort = 0;
    comp.sort("year");
    expect(comp.vhses[0].id).toEqual(8);
  }));

  it('it should filter movies by name', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.name = "pulp";
    comp.searchVhs();
    expect(comp.vhses[0].id).toEqual(1);
  }));

  it('it should filter movies id', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.name = "";
    comp.idSearch = 2;
    comp.searchVhs();
    expect(comp.vhses[2].name).toEqual("The Green Mile");
  }));

  it('it should filter movies by year', fakeAsync(() => {
    comp.getVhses();
    tick();
    comp.name = "";
    comp.year = 1999;
    comp.searchVhs();
    expect(comp.vhses[5].name).toEqual("The Green Mile");
  }));



});
