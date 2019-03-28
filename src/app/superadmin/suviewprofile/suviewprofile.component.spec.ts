import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuviewprofileComponent } from './suviewprofile.component';

describe('SuviewprofileComponent', () => {
  let component: SuviewprofileComponent;
  let fixture: ComponentFixture<SuviewprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuviewprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
