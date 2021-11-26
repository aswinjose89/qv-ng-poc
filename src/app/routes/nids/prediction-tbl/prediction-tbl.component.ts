import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';

import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-prediction-tbl',
  templateUrl: './prediction-tbl.component.html',
  styleUrls: ['./prediction-tbl.component.scss']
})
export class PredictionTblComponent implements OnInit {
  public input: any;

  columns: string[] = ['position', 'uid', 'id.orig_h', 'id.orig_p', "id.resp_h", "id.resp_p", "attack_type", "proto",
  "service","duration", "orig_bytes", "resp_bytes", "conn_state"];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private toastr: ToastrService, private api:  ApiService) { }

  ngOnInit(): void {
    this.getPredictedNidsData();
  }

  getPredictedNidsData(){
    this.api.get("nids/live_zeek_prediction", this.input).subscribe((data)=>{
      if(data.status == "success"){
        let records= data.result['hits']['hits'];
        let dataSet= this.tableData(records);
        this.dataSource= new MatTableDataSource(dataSet);
      }
    },
    (error)=>{
        this.api.errorResponse(error);
    });
  }

  tableData(records){
    let dataCollection= [];
    records.forEach((val, idx) => {
      if(val['_source']["container"].id=="conn.log"){
        let zeek_packet_msg= JSON.parse(val['_source']['message'])
        zeek_packet_msg['attack_type']= val['_source']["attack_type"]
        zeek_packet_msg['position']= idx+1;
        dataCollection.push(zeek_packet_msg);
      }
    });
    return dataCollection
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}

interface PeriodicElement {
  position: number;
  uid: string;
  "attack_type": string;
  "id.orig_h": string;
  "id.orig_p": string;
  "id.resp_h": string;
  "id.resp_p": string;
  "proto": string;
  "service": string;
  "duration": string;
  "orig_bytes": string;
  "resp_bytes": string;
  "conn_state": string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];
