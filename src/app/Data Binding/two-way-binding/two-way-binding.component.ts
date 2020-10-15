import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <!--    We are binding the keyEvent of ds element to d 'inputState' field of our state i.e. updating d state in realtime with the value entered in ds input element-->
    <input type="text" [(ngModel)]="inputState" />
    <!--we display in realtime d updated state-->
    {{ inputState }}
  `,
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  inputState: string;
  constructor() {}

  ngOnInit(): void {}
}
