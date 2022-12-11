import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  result = '';

  show(elem1:any, elem2:any, elem3:any) {
    for (let i = 0; i < arguments.length; i++) {
      console.dir(arguments[i]);

      this.result += arguments[i].localName + ', '
    }
  }

  constructor() {}
  ngOnInit():void {}
}
