import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../core/services';
@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  input: any;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {      
      fieldGroup: [
        {
          key: 'models',
          wrappers: ['panel'],
          templateOptions: { label: 'ExternalModel' },
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'modelName',
              templateOptions: {
                label: 'Model Names',
                options: [
                  { value: "ET", name: 'Event Tree' },
                  { value: "FT", name: 'Fault Tree' },              
                  { value: "graph", name: 'graph' },
                  { value: "markov", name: 'markov' },
                ],
                labelProp: 'name',
                valueProp: (option) => option,
                compareWith: (o1, o2) => o1.value === o2.value,
                required: true,
                description: 'This is a custom field type.',
              },
              wrappers: ['form-field'],
            },
            {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'subType',
              templateOptions: {
                label: 'Sub Type',
                options: [
                  { value: "SR2ML.ETModel", name: 'SR2ML.ETModel' },
                  { value: "SR2ML.FTModel", name: 'SR2ML.FTModel' },
                  { value: "SR2ML.GraphModel", name: 'SR2ML.GraphModel' },
                  { value: "SR2ML.MarkovModel", name: 'SR2ML.MarkovModel' },
                ],
                labelProp: 'name',
                valueProp: (option) => option,
                compareWith: (o1, o2) => o1.value === o2.value,
                required: true,
                description: 'This is a custom field type.',
              },
              wrappers: ['form-field'],
            },
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'topEvents',
              templateOptions: {
                label: 'Top Events',
                required: false,
              },
            },
            {
              className: 'col-sm-3',
              key: 'map',
              type: 'select',
              templateOptions: {
                label: 'Maps',
                multiple: true,
                valueProp: (option) => option,
                compareWith: (o1, o2) => o1.value === o2.value,
                options: [
                  {label: 'BE1', value: 'statusBE1'},
                  {label: 'BE2', value: 'statusBE2'},
                  {label: 'BE3', value: 'statusBE3'},
                  {label: 'BE4', value: 'statusBE4'}
                ],
              },
            }
          ],
        },
        {
          key: 'distributions',
          wrappers: ['panel'],
          templateOptions: { label: 'Distributions' },
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'names',
              templateOptions: {
                label: 'Names',
                options: [
                  { value: "binomial", name: 'BinomialDistribution' },
                  { value: "bernoulli", name: 'BernoulliDistribution' },              
                  { value: "markov", name: 'MarkovCategorical' },
                  { value: "exponential", name: 'ExponentialDistribution' },
                  { value: "gamma", name: 'GammaDistribution' },
                  { value: "beta", name: 'BetaDistribution' },
                ],
                labelProp: 'name',
                valueProp: (option) => option,
                compareWith: (o1, o2) => o1.value === o2.value,
                required: true,
                description: 'This is a custom field type.',
              },
              wrappers: ['form-field'],
            }
          ],
        },
        {
          key: 'samplers',
          wrappers: ['panel'],
          templateOptions: { label: 'Samplers' },
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'names',
              templateOptions: {
                label: 'Names',
                options: [
                  { value: "MonteCarlo", name: 'MonteCarlo' },
                  { value: "Stratified", name: 'Stratified' },              
                  { value: "Grid", name: 'Grid Based' },
                  { value: "Sparse Grid", name: 'Sparse Grid Collocation' },
                  { value: "Sobol", name: 'Sobol Decomposition' }
                ],
                labelProp: 'name',
                valueProp: (option) => option,
                compareWith: (o1, o2) => o1.value === o2.value,
                required: true,
                description: 'This is a custom field type.',
              },
              wrappers: ['form-field'],
            }
          ],
        },
        {
          key: 'runinfo',
          wrappers: ['panel'],
          templateOptions: { label: 'Run info' },
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'workingDirectory',
              templateOptions: {
                label: 'Working Directory',
                options: [
                  { value: "binomial", name: 'ETmodel' },
                  { value: "bernoulli", name: 'ETmodelTD' },              
                  { value: "markov", name: 'FTmodel' },
                  { value: "exponential", name: 'FTmodelTD' }
                ],
                labelProp: 'name',
                valueProp: (option) => option,
                compareWith: (o1, o2) => o1.value === o2.value,
                required: true,
                description: 'This is a custom field type.',
              },
              wrappers: ['form-field'],
            },
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'sequence',
              templateOptions: {
                label: 'Sequence',
                required: false,
              },
            },
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'batchSize',
              templateOptions: {
                label: 'Batch Size',
                required: false,
              },
            }
          ],
        }
      ],
    }
  ];
  constructor(private toastr: ToastrService, private api:  ApiService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.input = {};
      for (var key in this.model){
        this.input[key]=JSON.stringify(this.model[key])
      }

      // this.showToast(this.model);
      this.api.get("raven/logos", this.input).subscribe((data)=>{
        if(data.status == "success"){
          this.showToast("LOGOS input Xml has been created successfully.");
        }
        
      },
      (error)=>{
          this.api.errorResponse(error);
      });
    }
  }

  showToast(obj: any) {
    this.toastr.success(JSON.stringify(obj));
  }

}
