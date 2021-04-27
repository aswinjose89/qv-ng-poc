import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../core/services';

@Component({
  selector: 'app-model-training',
  templateUrl: './model-training.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./model-training.component.scss']
})
export class ModelTrainingComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  input: any;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {      
      fieldGroup: [
        {
          key: 'modeltraining',
          wrappers: ['panel'],
          templateOptions: { label: 'Model Training Parameters' },
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'epochs',
              templateOptions: {
                label: 'Number of Epochs',
                type: 'number',
                placeholder: 'Enter the epochs count..',
                description: 'Default epoch is 5',
                required: true,
              },
            },
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'layer1_size',
              templateOptions: {
                label: 'Layer1 Size',
                type: 'number',
                placeholder: 'Enter the layer size..',
                description: 'Default size is 32',
                required: true,
              },
            },
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'dropout',
              templateOptions: {
                label: 'Dropout',
                type: 'number',
                placeholder: 'Enter the dropout..',
                description: 'Default value is 0.2',
                required: true,
              },
            },
            {
              className: 'col-sm-3',
              type: 'input',
              key: 'batchlength',
              templateOptions: {
                label: 'Batch length',
                type: 'number',
                placeholder: 'Enter the batch length..',
                description: 'Default value is 5',
                required: true,
              },
            },
            {
              className: 'col-sm-3',
              type: 'combobox',
              key: 'optimizer',
              templateOptions: {
                label: 'Optimizer',
                options: [
                  { value: "adam", name: 'Adam' },
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
              key: 'loss',
              templateOptions: {
                label: 'Loss',
                options: [
                  { value: "mae", name: 'MAE' },
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
      this.api.get("ais/training", this.input).subscribe((data)=>{
        if(data.status == "success"){
          this.showToast("Model training completed successfully.");
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
