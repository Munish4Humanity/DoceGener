import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {
  JsonObj:any=[{}]
  constructor() { }
  ngOnInit() {
  }
  getdata(value){
    this.JsonObj=value;
  }

}
