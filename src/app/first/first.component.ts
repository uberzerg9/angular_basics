import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  propertyOne = 'Hello';
  propertyTwo = 111;
  propertyBool = true;
  propertyObj1 = {};
  propertyObj2 = {
    prop1: 'some value'
  };
  emptyProp:any;
  notEmptyProp;

  constructor() {
    this.notEmptyProp = 'not empty';
    this.startInterval();
  }

  returnStringMethod() {
    return 'hello some string text';
  }

  counter: number = 0;
  startInterval() {
    setInterval(() => {
      this.counter++;
    }, 1000)
  }

  ngOnInit() {

  }
}
