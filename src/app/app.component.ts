import { Component} from '@angular/core';
import { parse } from 'querystring';
// import JsonDoc from '../assets/JsonDoc.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  JsonObj=[];
  arrBirds: string [];
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
      var DynamicGen= this.JsonObj;

    //var DynamicGen =[{"DropDown":"Table","Heading":"Order Form","Position":"1","Rows":"1","Column":"1","Key":"Project","Value":"p1","checkBox":true},{"dropDown":"Table","checkBox":true,"Heading":"Project Information","Position":"2","Rows":"1","Column":"1","Key":"Pr","Value":"p2"}]

     //var DynamicGen= [{"dropDown":"Table","Heading":"Order Form","checkBox":true,"Position":"1","Rows":"1","Column":"1","Key":"Project Name","Value":"P1"},{"dropDown":"Table","checkBox":true,"Heading":"Order Form","Position":"1","Rows":"1","Column":"2","Key":"Building Name","Value":"B1"},{"dropDown":"Table","checkBox":true,"Heading":"Order Form","Position":"1","Rows":"1","Column":"3","Key":"Unit Name","Value":"U1"},{"dropDown":"Table","checkBox":true,"Heading":"Order Form","Position":"1","Rows":"2","Column":"1","Key":"Project UI ID","Value":"ID1"},{"dropDown":"Table","checkBox":true,"Heading":"Order Form","Position":"1","Rows":"2","Column":"2","Key":"Oracle Project ID","Value":"O1"}]

    // Starting Checking Positing Value at step 1

    if(DynamicGen!=null){
      var position = [];
      for (var i = 0; i < DynamicGen.length; i++) {
        for (var key in DynamicGen[i]) {
            if (position.indexOf(key) === -1) {
                position.push(key);

                var col = [];
            for (var i = 0; i < DynamicGen.length; i++) {
                for (var key in DynamicGen[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
              // CREATE DYNAMIC TABLE.
              var table = document.createElement("table");

              // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

              var tr = table.insertRow(-1);                   // TABLE ROW.

              for (var i = 0; i < col.length; i++) {
                  var th = document.createElement("th");      // TABLE HEADER.
                  th.innerHTML = col[i];
                  tr.appendChild(th);
              }

              // ADD JSON DATA TO THE TABLE AS ROWS.
              for (var i = 0; i < DynamicGen.length; i++) {

                  tr = table.insertRow(-1);

                  for (var j = 0; j < col.length; j++) {
                      var tabCell = tr.insertCell(-1);
                      tabCell.innerHTML = DynamicGen[i][col[j]];
                  }
              }
              // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
              var divContainer = document.getElementById("showData");
              divContainer.innerHTML = "";
              divContainer.appendChild(table);

            }
        }
    }
    }
  }

}

