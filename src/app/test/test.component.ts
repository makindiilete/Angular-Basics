import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div>Inline Template</div>
    <p>Inline Paragraph</p>`,
  styles: ['div{color: red}']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
