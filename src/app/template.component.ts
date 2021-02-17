import { Component, OnInit, Input,Output,EventEmitter, } from '@angular/core';
import { ITestTemplate } from './test.interface';
import { AbstractControl, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive, Params } from '@angular/router';
import { NgZone } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
@Component({
  selector: 'app-template',
  template: `

 <div style='width:100%' id="contentInside" *ngFor="let template of templates;let i = index; ">
 <input class="check-mark" id ="chk{{i}}" type="checkbox" [(ngModel)]='testTemplate[i].checkBox'>
  <select class="dropdown-color" [(ngModel)]='testTemplate[i].DropDown'  id="drp{{i}}">
  <option  class="dropdown-item" value="null" selected="selected"> Please choose one </option>
  <option class="dropdown-item" value="BannerImage">Banner Image</option>
  <option class="dropdown-item" value="Table">Table</option>
  <option class="dropdown-item" value="Rows/Column">Rows/Column</option>
  <option class="dropdown-item" value="KEY/VAlUE">Key/Value</option>
  <option class="dropdown-item" value="markdown" >Markdown</option>
  <option class="dropdown-item" value="binary">Binary</option>
</select>
<br />
 <input class="text-box" [(ngModel)]='testTemplate[i].BannerImage'  id ="BannerImage{{i}}" type="file" placeholder="Banner Image"/>
 <input class="text-box" [(ngModel)]='testTemplate[i].Heading'  id ="Heading{{i}}" type="text" placeholder="Heading"/>
 <input class="text-box" [(ngModel)]='testTemplate[i].Position'  id ="Position{{i}}" type="text" placeholder="Position"/>
 <input class="text-box" [(ngModel)]='testTemplate[i].Rows'  id ="Rows{{i}}" (change)="UpateRows($event)" type="text" placeholder="Rows"/>
 <input class="text-box" [(ngModel)]='testTemplate[i].Column'  id ="Column{{i}}" (change)="UpdateColumns($event)" type="text" placeholder="Column"/>
 <input class="text-box" [(ngModel)]='testTemplate[i].Key'  id ="KEY{{i}}" type="text" placeholder="Key"/>&nbsp;
 <input class="text-box" [(ngModel)]='testTemplate[i].Value'  id ="VALUE{{i}}" type="text" placeholder="Value"/>
</div>

<button (click)="add()">Add Template</button>
<button (click)="ViewHtml()"> View Document</button>
<button (click)="Cancel()"> Cancel</button>
<button (click)="submitTemplate()"> Submit</button>
<br/>
<h1>{{json}}</h1>
`,
  styles: [`
#contentInside{
  margin:7px;
  display:inline-flex;
},
.form-control {
  color: #555;

}
`],
styleUrls: ['./app.component.css']
})
export class TemplateComponent implements OnInit {
  testTemplate: ITestTemplate[] = [];
  testTemplates: ITestTemplate = <ITestTemplate>{};
  templates = [];
  json: string;
  OutPutString:any=[];
  @Output() myoutput:EventEmitter<string>=new EventEmitter();

  HTMLObject:any=[{
    "Rows":1,
    "Column":1,
  }]
  showTable:boolean=false;
  constructor(private ngZone: NgZone, public router: Router,) {}


  ngOnInit() {

    this.add();

  }


  add() {
    this.testTemplates = <ITestTemplate>{};
    this.testTemplates.DropDown=null;
    this.templates.push(this.templates.length);
    this.testTemplate.push(this.testTemplates);
  }
  Cancel(){
    window.location.reload();
  }
  submitTemplate() {
    let json = this.testTemplate;
    let body = JSON.stringify({ json });
    this.json = body;
    this.OutPutString=body;



  }
  UpateRows(r){
    this.HTMLObject.Rows=r.target.value;
    this.showTable=false;
  }
  UpdateColumns(c){
    this.showTable=true;
    this.HTMLObject.Column=c.target.value;

  }
  ViewHtml(){
    this.submitTemplate();
    this.myoutput.emit(this.OutPutString);
    this.ngZone.run(() => this.router.navigateByUrl('/DocumentView'));
  }
}
