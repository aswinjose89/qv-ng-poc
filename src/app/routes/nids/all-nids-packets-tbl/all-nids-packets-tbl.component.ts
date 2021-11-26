import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';
import {MatTableDataSource} from '@angular/material/table';

import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-all-nids-packets-tbl',
  templateUrl: './all-nids-packets-tbl.component.html',
  styleUrls: ['./all-nids-packets-tbl.component.scss']
})
export class AllNidsPacketsTblComponent implements OnInit {
  public input: any;

  columns: string[] = ['position','log_file', 'uid', 'id.orig_h', 'id.orig_p', "id.resp_h", "id.resp_p","proto",
  "service","duration", "orig_bytes", "resp_bytes", "conn_state"];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private toastr: ToastrService, private api:  ApiService) { }

  ngOnInit(): void {
    this.getNidsData();
  }

  getNidsData(){
    this.api.get("nids/nids_packets", this.input).subscribe((data)=>{
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
      let zeek_packet_msg= JSON.parse(val['_source']['message'])
      zeek_packet_msg['position']= idx+1;
      zeek_packet_msg['log_file']= val['_source']["container"].id
      dataCollection.push(zeek_packet_msg);
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
  "log_file": string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];
