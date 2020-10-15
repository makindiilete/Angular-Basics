import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVariableComponent } from './template-ref-variable.component';

describe('TemplateRefVariableComponent', () => {
  let component: TemplateRefVariableComponent;
  let fixture: ComponentFixture<TemplateRefVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
