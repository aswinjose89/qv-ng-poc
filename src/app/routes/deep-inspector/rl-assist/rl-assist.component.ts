import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../core/services';

import * as Highcharts from 'highcharts';
import {MatTableDataSource} from '@angular/material/table';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

const Wordcloud = require('highcharts/modules/wordcloud');
Wordcloud(Highcharts);

@Component({
  selector: 'app-rl-assist',
  templateUrl: './rl-assist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rl-assist.component.scss']
})
export class RlAssistComponent implements OnInit {
  public input: any;

  public activity;
  public xData;
  public label;
  options:any;

  fixedDisplayedColumns: string[] = ['position', 'name', 'fixed_err_cnt', 'total_program_err_cnt', 'fixed_err_dtls'];
  unFixedDisplayedColumns: string[] = ['position', 'name', 'unfixed_err_cnt', 'total_program_err_cnt', 'unfixed_err_dtls'];
  unFixedErrTypeDisplayedColumns: string[] = ['position', 'unique_err' ];

  public dataSourceFixed;
  public dataSourceUnFixed;
  public dataSourceUnFixedUniqueErr;
  public errRules: any;

  constructor(private toastr: ToastrService, private api:  ApiService) {
  }

  ngOnInit(): void {
    this.errRules= {
      "expected statement":0,
      "expected identifier":0,
      "undeclared":0,
      "invalid operands": 0,
      "expected expression":0,
      "expected declaration": 0,
      "expected declaration specifiers": 0,
      "expected ;": 0,
      "expected =": 0,
      "expected )":0
      }
    this.getRlAssistDetails();
  }

  wordCloud(flag, data: any){
    if (flag === "fixed_errors"){
      Highcharts.chart('fixedErrorWordCloud', this.wcOptions(data));
    }
    else if (flag === "unfixed_errors"){
      Highcharts.chart('unFixedErrorWordCloud', this.wcOptions(data));
    }
  }

  wcOptions(data): any{
    let options = {
      accessibility: {
          screenReaderSection: {
              beforeChartFormat: '<h5>{chartTitle}</h5>' +
                  '<div>{chartSubtitle}</div>' +
                  '<div>{chartLongdesc}</div>' +
                  '<div>{viewTableButton}</div>'
          }
      },
      plotOptions: {
        wordcloud: {
            minFontSize: 45,
            maxFontSize: 100
        },
        series: {
            cursor: 'pointer',
            events: {
                click: function(event) {
                    let pointdata= this.chart.series[0].data.filter(x=>x.name===event.target.textContent);
                    // showHashtagTweetsFromBubble(event.target, event, event.target.textContent)
                    alert(JSON.stringify(pointdata[0].data))
                }
            }
        }
    },
      series: [{
          type: 'wordcloud',
          data: data,
          name: 'Occurrences'
      }],
      title: {
          text: ''
      }
    };
    return options
  }

  wcFixedErrorData(data): any{
    let arrDtls= [];
    for (const property in data) {
      let temp= {};
      temp['name'] = property;
      temp['weight'] =(data[property]['fixed_error_details'])? data[property]['fixed_error_details'].length: 0;
      temp['data'] = data[property];
      arrDtls.push(temp);
    }
    return arrDtls
  }

  wcUnFixedErrorData(data): any{
    let arrDtls= [];
    for (const property in data) {
      let temp= {};
      temp['name'] = property;
      temp['weight'] =(data[property]['unfixed_error_details'])? data[property]['unfixed_error_details'].length: 0;
      temp['data'] = data[property];
      arrDtls.push(temp);
    }
    return arrDtls
  }

  getRlAssistDetails(){
    this.api.get("deepinspector/rlassist/predicted", this.input).subscribe((data)=>{
      if(data.status == "success"){
        this.wordCloud("fixed_errors", this.wcFixedErrorData(data.result.program_dtls));
        this.wordCloud("unfixed_errors", this.wcUnFixedErrorData(data.result.program_dtls));
        // this.dataSource =
        let [ dataSource, all_unfixed_err_dtls ] = this.tableData(data.result.program_dtls);
        this.dataSourceFixed= new MatTableDataSource(dataSource);
        this.dataSourceUnFixed= new MatTableDataSource(dataSource);
        this.dataSourceUnFixedUniqueErr= new MatTableDataSource(all_unfixed_err_dtls);
        this.showToast("Loaded RlAssist Data..");
      }
    },
    (error)=>{
        this.api.errorResponse(error);
    });
  }
  tableData(data){
    let arrDtls= [];
    let cnt=0, unfixed_cnt=0;
    let unfixed_unique_type_err_dtls: any =[], unfixedUniqueDataSource= []
    for (const property in data) {
      cnt++;
      let temp= {};
      temp['position'] = cnt;
      temp['name'] = property;
      temp['unfixed_err_cnt'] =(data[property]['unfixed_error_details'])? data[property]['unfixed_error_details'].length: 0;
      temp['fixed_err_cnt'] =(data[property]['fixed_error_details'])? data[property]['fixed_error_details'].length: 0;
      temp['fixed_err_dtls'] =data[property]['fixed_error_details'];
      temp['unfixed_err_dtls'] =data[property]['unfixed_error_details'];
      temp['total_program_errors'] =data[property]['total_program_errors'];
      temp['total_program_err_cnt'] =data[property]['total_program_errors'].length;
      arrDtls.push(temp);
      if(data[property]['unfixed_error_details']){
        unfixed_unique_type_err_dtls.push(data[property]['unfixed_error_details'])
      }
    }
    unfixed_unique_type_err_dtls= [...new Set(unfixed_unique_type_err_dtls.flatMap(m=>m))]
    unfixed_unique_type_err_dtls.forEach(val => {
      let ruleLevel = 0;//0=no rule found, 1= rule found, 2= duplicate rule found
      for (const property in this.errRules) {
        if(val.includes(property)){
          ruleLevel= 2
          if (this.errRules[property]==0){
            this.errRules[property]++
            ruleLevel= 1
          }
          break;
        }
        else{
          ruleLevel= 0
        }
      }
      if(ruleLevel==0 || ruleLevel==1){
        unfixed_cnt++;
        unfixedUniqueDataSource.push({"position": unfixed_cnt, "unique_err": val});
      }

    });
    return [ arrDtls, unfixedUniqueDataSource ]
  }
  showToast(obj: any) {
    this.toastr.success(JSON.stringify(obj));
  }

  applyFilterFixed(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceFixed.filter = filterValue.trim().toLowerCase();
  }

  applyFilterUnfixed(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUnFixed.filter = filterValue.trim().toLowerCase();
  }

}
