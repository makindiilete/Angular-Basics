import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfStructuralDirectiveComponent } from './ng-if-structural-directive.component';

describe('NgIfStructuralDirectiveComponent', () => {
  let component: NgIfStructuralDirectiveComponent;
  let fixture: ComponentFixture<NgIfStructuralDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfStructuralDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
