import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  counter:number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  consoleCounter(e:any) {
    alert(e);
  }

  consoleEventObj1(e:any) {
    alert(e);
    alert(e.type);
  }

  consoleEventObjValue(e:any) {
    alert(e);
  }

  a = 'old';
  b = ' text1';

  constructor() {}
  ngOnInit() {}
}
