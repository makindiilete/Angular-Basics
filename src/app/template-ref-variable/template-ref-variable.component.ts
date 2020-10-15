import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  template: `
    <h1>Template Reference Variable..</h1>
    <!--    Ds input field is a variable (#htmlVar) dat can be passed to d class -->
    <input #htmlVar type="text" />
    <!--    send d input element as arg to the logHandler-->
    <button (click)="logHandler(htmlVar)">Log</button>
  `,
  styleUrls: ['./template-ref-variable.component.css'],
})
export class TemplateRefVariableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Here we can log the value of the input element
  logHandler(htmlInputElement: HTMLInputElement) {
    console.log(htmlInputElement.value);
  }
}
