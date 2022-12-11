import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {

  colSpan = 3;
  interpolationContent = 'main value';
  textInformation = 'some info text';

  consoleDir(elem:any) {
    console.log(elem)
    console.dir(elem)
  }

  valueR:number = 40;

  increase() {
    this.valueR++;
  }

  decrease() {
    this.valueR--;
  }

  constructor() {}
  ngOnInit() {}
}
