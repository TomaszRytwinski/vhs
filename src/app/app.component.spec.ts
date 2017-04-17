import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { VhsesComponent } from "./vhses.component";
import { RouterLinkStubDirective, RouterOutletStubComponent } from "./testing/router-stubs";

describe('AppComponent(templateUrl)', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, RouterLinkStubDirective, RouterOutletStubComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> Video rental shop', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain("Video rental shop");
  });
});
