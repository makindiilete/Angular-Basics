import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  // We are sending ds field as a prop to our child component
  name = 'Data Sent To Child From Parent';
  propFromChild: string;

  constructor() {}

  ngOnInit(): void {}
}
