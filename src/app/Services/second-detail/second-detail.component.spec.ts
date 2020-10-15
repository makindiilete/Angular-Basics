import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDetailComponent } from './second-detail.component';

describe('SecondDetailComponent', () => {
  let component: SecondDetailComponent;
  let fixture: ComponentFixture<SecondDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
