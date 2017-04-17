import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { RentedVhsesComponent } from "./rentedVhses.component";
import { RouterLinkStubDirective, RouterOutletStubComponent } from "./testing/router-stubs";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Vhs } from './vhs';
import { VhsService } from './vhs.service';


describe('RentedVhsesComponent(inline templateUrl)', function () {
  let de: DebugElement;
  let comp: RentedVhsesComponent;
  let fixture: ComponentFixture<RentedVhsesComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentedVhsesComponent, RouterLinkStubDirective, RouterOutletStubComponent],
      imports:[RouterTestingModule, HttpModule, FormsModule],
      providers:[VhsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedVhsesComponent);
    comp = fixture.componentInstance;

  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> Video rental shop', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain("List of rented VHS");
  });

  it('should be no panalty on init', () => {
    fixture.detectChanges();
    comp.sum();
    expect(comp.penalty).toEqual(0);
  });

  it('should be 5 $ panalty when demage', () => {
    fixture.detectChanges();
    comp.isDamaged = true;
    comp.sum();
    expect(comp.penalty).toEqual(5);
  });

  it('should be 6 $ panalty when demage and not rewind', () => {
    fixture.detectChanges();
    comp.isDamaged = true;
    comp.isRewined = true;
    comp.sum();
    expect(comp.penalty).toEqual(6);
  });

  it('should be 8 $ panalty when demage and not rewind and delayed', () => {
    fixture.detectChanges();
    comp.isDamaged = true;
    comp.isRewined = true;
    comp.isDelayed = true;
    comp.sum();
    expect(comp.penalty).toEqual(8);
  });


});
