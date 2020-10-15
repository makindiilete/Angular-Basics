import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForStructuralDirectiveComponent } from './ng-for-structural-directive.component';

describe('NgForStructuralDirectiveComponent', () => {
  let component: NgForStructuralDirectiveComponent;
  let fixture: ComponentFixture<NgForStructuralDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForStructuralDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
