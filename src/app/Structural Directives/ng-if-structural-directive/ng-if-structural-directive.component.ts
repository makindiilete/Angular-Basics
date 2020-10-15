import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-structural-directive',
  template: `
    <h1>Structural Directive</h1>
    <!--  ds element will show n d template if d value/fn passed to d ngIf results to true-->
    <h4 *ngIf="true">Show if truthy</h4>
    <!--  ds element will not get rendered n d template if d value/fn passed to d ngIf results to false-->
    <h4 *ngIf="handleFalsy()">Hide if falsy</h4>
    <!--    ngIf condition from class property-->
    <h4 *ngIf="displayName">
      Show/Hide depending on the displayName value of the class
    </h4>
    <!--    If & else block inside template-->
    <!--    If showName is true, display ds tag else, look for the tag with the elseBlock variable and render it-->
    <h2 *ngIf="showName; else elseBlock">Name Is Visible</h2>
    <!--    Else block : - We use ng-template inside else block-->
    <ng-template #elseBlock>
      <h2>Name Is Hidden</h2>
    </ng-template>

    <!--    ALTERNATE SYNTAX-->
    <!--    if display name is true, render the element in d thenBlock else render the element in d elseBlock2-->
    <div *ngIf="displayName; then thenBlock; else elseBlock2"></div>
    <ng-template #thenBlock>
      <h2>Then Block</h2>
    </ng-template>
    <ng-template #elseBlock2>
      <h2>Else Block</h2>
    </ng-template>
  `,
  styleUrls: ['./ng-if-structural-directive.component.css'],
})
export class NgIfStructuralDirectiveComponent {
  displayName = false;
  showName = false;

  handleFalsy(): boolean {
    return false;
  }
}
