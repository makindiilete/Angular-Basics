import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <h2>{{ nameProp }}</h2>
    <button (click)="sendEventToParent()">Send Prop To Parent</button>
  `,
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent {
  // here we are using our customName as ds field name and then inside the @Input() method, we define the name of d prop we are expecting
  // @Input('nameProp') customName;
  @Input() nameProp;

  @Output() propFromChild = new EventEmitter();

  sendEventToParent() {
    this.propFromChild.emit('Data Sent To Parent From Child');
  }
}
