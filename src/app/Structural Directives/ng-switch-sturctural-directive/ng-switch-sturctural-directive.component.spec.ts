import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchSturcturalDirectiveComponent } from './ng-switch-sturctural-directive.component';

describe('NgSwitchSturcturalDirectiveComponent', () => {
  let component: NgSwitchSturcturalDirectiveComponent;
  let fixture: ComponentFixture<NgSwitchSturcturalDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchSturcturalDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchSturcturalDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
