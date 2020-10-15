import { Component } from '@angular/core';

// D component decorator metadata
@Component({
  selector: 'app-root', // a custom html tag dt can b use to represent ds component e.g. <app-root/> angular will render ds component whenever ds tag is used. ds selector is used in the index.html to render the app component
  templateUrl: './app.component.html', // ds point to d html file dt represents d view for ds component
  styleUrls: ['./app.component.css'], // array of css files dt is specific to ds component alone
})

// AppComponent class
export class AppComponent {
  // We are sending ds field as a prop to our child component
  name = 'Data Sent To Child From Parent';
  propFromChild: string;
}
