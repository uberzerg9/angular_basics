import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  message = "Just text";

  show(text:any) {
    this.message = text;
  }

  constructor() {}
  ngOnInit() {}
}
