import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    console.log(this.name); // undefined
  }

  // changes is an object with a list of keys from type string
  // and the values are SimpleChange objects
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    // name is set ==> change detected
    console.log(changes.name);
    // changes = { 'name': { currentValue: 'Angular 12', previousValue: {} } }
  }

  ngOnInit() {
    console.log('on init HelloComponent: ' + this.name);
  }

  ngOnDestroy() {
    console.log('on destroy: ' + this.name);
  }
}
