import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-model-prediction',
  templateUrl: './model-prediction.component.html',
  styleUrls: ['./model-prediction.component.scss']
})
export class ModelPredictionComponent implements OnInit {
  search='';
  constructor() { }

  ngOnInit(): void {
  }

}
