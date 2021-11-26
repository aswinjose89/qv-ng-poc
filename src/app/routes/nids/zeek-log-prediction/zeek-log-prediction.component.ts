import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-zeek-log-prediction',
  templateUrl: './zeek-log-prediction.component.html',
  styleUrls: ['./zeek-log-prediction.component.scss']
})
export class ZeekLogPredictionComponent implements OnInit {
  public input: any;

  constructor(private toastr: ToastrService, private api:  ApiService) { }

  ngOnInit(): void {
    this.getPredictedNidsData()
  }

  getPredictedNidsData(){
  }

}
