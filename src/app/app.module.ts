import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './Data Binding/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Data Binding/property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassBindingComponent } from './Data Binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Data Binding/style-binding/style-binding.component';
import { EventBindingComponent } from './Data Binding/event-binding/event-binding.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { TwoWayBindingComponent } from './Data Binding/two-way-binding/two-way-binding.component';
import { NgIfStructuralDirectiveComponent } from './Structural Directives/ng-if-structural-directive/ng-if-structural-directive.component';
import { NgForStructuralDirectiveComponent } from './Structural Directives/ng-for-structural-directive/ng-for-structural-directive.component';
import { NgSwitchSturcturalDirectiveComponent } from './Structural Directives/ng-switch-sturctural-directive/ng-switch-sturctural-directive.component';
import { ComponentInteractionComponent } from './Component interaction/childComponent/component-interaction.component';
import { ParentComponentComponent } from './Component interaction/parent-component/parent-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { FirstListComponent } from './Services/first-list/first-list.component';
import { SecondDetailComponent } from './Services/second-detail/second-detail.component';
import { EmployeeService } from './Services/employee.service';
import { HttpService } from './Services/Http & Observable/http.service';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { ErrorInterceptService } from './Services/Http & Observable/error-intercept.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVariableComponent,
    TwoWayBindingComponent,
    NgIfStructuralDirectiveComponent,
    NgForStructuralDirectiveComponent,
    NgSwitchSturcturalDirectiveComponent,
    ComponentInteractionComponent,
    ParentComponentComponent,
    PipesComponent,
    FirstListComponent,
    SecondDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    EmployeeService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
