import { TagContentType } from '@angular/compiler';
import { parse } from 'querystring';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('table') table: ElementRef;

  ngAfterViewInit() {
      // console.log(this.Project.nativeElement.innerHTML);
  }
  constructor(
    private exportAsService: ExportAsService
  ) { }
  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'table',
    options: {
      jsPDF: {
        orientation: 'landscape'
      },
      pdfCallbackFn: this.pdfCallbackFn // to add header and footer
    }
  };
  JsonObj=[];
  // HTMLText: HTMLElement;
  rn:any;
  cn:any;
  ngOnInit () {
    // this.httpService.get('./assets/birds.json').subscribe(
    //   data => {
    //     this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
    //     //  console.log(this.arrBirds[1]);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );
  }

  getdata(value){
    this.JsonObj=value;
  }

  GenerateHtmlView(){

      // var FinalJson=this.JsonObj;

       var FinalJson=[{"DropDown":"Table","checkBox":true,"Heading":"Order Form","Position":"1","Rows":"2","Column":"1","Key":"Project Name","Value":"P1"},{"DropDown":"Table","checkBox":true,"Heading":"","Position":"1","Rows":"1","Column":"2","Key":"Building Name","Value":"P2"},{"DropDown":"Table","checkBox":true,"Position":"2","Heading":"Project Information","Rows":"1","Column":"1","Key":"Customer Name","Value":"Munish"},{"DropDown":"Table","checkBox":true,"Position":"2","Rows":"`","Column":"2","Key":"User Name","Value":"Uname"},{"DropDown":"Rows/Column","checkBox":true,"Position":"1","Rows":"3","Column":"4"}]
      //var Table=[{"DropDown":"Table","checkBox":true,"Heading":"Project Order ","Position":"1","Rows":"-1","Column":"3"},{"DropDown":null}];
      //  var FinalJson=[{"DropDown":"Rows/Column","checkBox":true,"Position":"1","Rows":"3","Column":"4"}];

    // Starting Checking Positing Value at step 1

    if(FinalJson!=null){
      for (var i = 0; i < FinalJson.length;i++) {
    if(FinalJson!=null && FinalJson[i].DropDown=="Table" || FinalJson[i].DropDown=="Rows/Column" ){
      if(FinalJson[i].DropDown=="Rows/Column"){
        this.rn=FinalJson[0].Rows;
        this.cn=FinalJson[0].Column;
        var table = document.createElement("table");
        var tr = table.insertRow(-1);
        for (var r = 0; r < this.rn; r++) {
              tr = table.insertRow(r);
              for(var c=0;c< parseInt(this.cn); c++){
                     var y=tr.insertCell(c);
                     y.innerHTML=FinalJson[c].Key +""+FinalJson[c].Value;
              }
          }
      // for (var r = 0; r < this.rn; r++) {
      //     tr = table.insertRow(r);
      //     var x=tr;
      //     for(var c=0;c< parseInt(FinalJson[r].Column,10); c++){
      //       var y=x.insertCell(c);
      //       y.innerHTML=FinalJson[c].Key +":"+ FinalJson[c].Value;
      // }
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    }
  }
  }
    // var i=0;
    // if(DynamicGen!=null){
    //   var position = [];
    //   for (var i = 0; i < DynamicGen.length;i++) {
    //     for (var key in DynamicGen[i]) {
    //         if (position.indexOf(key) === -1) {


    //           //  position.push(key);

    //         //     var col = [];
    //         // for (var i = 0; i < DynamicGen.length; i++) {
    //         //     for (var key in DynamicGen[i]) {

    //         //         if (col.indexOf(key) === -1) {
    //         //             col.push(key);
    //         //         }


    //         //     }
    //         // }

    //          //this.cn=2;
    //           // CREATE DYNAMIC TABLE.

    //         }
    //           var table = document.createElement("table");

    //           // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    //          var tr = table.insertRow(-1);                   // TABLE ROW.
    //           for (var r = 0; r < 3; r++) {
    //            tr = table.insertRow(r);
    //           var x=tr;
    //           for(var c=0;c< parseInt(DynamicGen[r].Column,10); c++){
    //             var y=x.insertCell(c);
    //             y.innerHTML=DynamicGen[c].Key +":"+ DynamicGen[c].Value;
    //           }
    //         }

    //           // for (var r = 0; r < parseInt(this.rn,10); r++) {

    //           //     tr = table.insertRow(r);

    //           //     for (var j = 0; j < col.length; j++) {
    //           //       for (var j = 0; j < col.length; j++) {
    //           //         var tabCell = tr.insertCell(-1);
    //           //         tabCell.innerHTML = DynamicGen[r][col[j]];

    //           //     }

    //           // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    //           var divContainer = document.getElementById("showData");
    //           divContainer.innerHTML = "";
    //           // this.HTMLText=table;
    //           divContainer.appendChild(table);

    //         }
    //     }
    // }
    // }
  }
}



exportAsString(type: SupportedExtensions, opt?: string) {
  this.config.elementIdOrContent = '<div> test string </div>';
  this.exportAs(type, opt);
  setTimeout(() => {
    this.config.elementIdOrContent = 'table';
  }, 1000);
}

exportAs(type: SupportedExtensions, opt?: string) {
  this.config.type = type;
  if (opt) {
    this.config.options.jsPDF.orientation = opt;
  }
  this.exportAsService.save(this.config, 'myFile').subscribe(() => {
    // save started
  });
  // this.exportAsService.get(this.config).subscribe(content => {
  //   const link = document.createElement('a');
  //   const fileName = 'export.pdf';

  //   link.href = content;
  //   link.download = fileName;
  //   link.click();
  //   console.log(content);
  // });
}

pdfCallbackFn (pdf: any) {
  // example to add page number as footer to every page of pdf
  const noOfPages = pdf.internal.getNumberOfPages();
  for (let i = 1; i <= noOfPages; i++) {
    pdf.setPage(i);
    pdf.text('Page ' + i + ' of ' + noOfPages, pdf.internal.pageSize.getWidth() - 100, pdf.internal.pageSize.getHeight() - 30);
  }
}


}
