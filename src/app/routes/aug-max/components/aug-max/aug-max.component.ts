import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { ToastrService } from 'ngx-toastr';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

import { ApiService } from '../../../../core/services';

@Component({
  selector: 'app-aug-max',
  templateUrl: './aug-max.component.html',
  styleUrls: ['./aug-max.component.scss']
})
export class AugMaxComponent implements OnInit {
  trainingform = new FormGroup({
    gpu: new FormControl(),
    epochs: new FormControl(),
    batchsize: new FormControl(),
    lambda: new FormControl(),
  });
  testform = new FormGroup({
    gpu: new FormControl(),
    ckpt_path: new FormControl(),
    save_root_path: new FormControl(),
  });

  datasets = [
    {value: 'cifar10', name: 'cifar10'},
    {value: 'cifar100', name: 'cifar100'},
    {value: 'tin', name: 'tin'},
    {value: 'IN', name: 'IN'},
  ];
  models = [
    {value: 'ResNet18', name: 'ResNet18'},
    {value: 'ResNet50', name: 'ResNet50'},
    {value: 'WRN40', name: 'WRN40'},
    {value: 'ResNeXt29', name: 'ResNeXt29'},
  ];
  optimizers = [
    {value: 'sgd', name: 'sgd'},
    {value: 'adam', name: 'adam'},
  ];
  attackers = [
    {value: 'pgd', name: 'pgd'},
    {value: 'fat', name: 'fat'},
  ];
  modes = [
    {value: 'clean', name: 'clean'},
    {value: 'c', name: 'c'},
    {value: 'v2', name: 'v2'},
    {value: 'sta', name: 'sta'},
    {value: 'all', name: 'all'},
  ];
  corruptions = [
    {value: 'gaussian_noise', name: 'gaussian_noise'},
    {value: 'shot_noise', name: 'shot_noise'},
    {value: 'impulse_noise', name: 'impulse_noise'},
    {value: 'defocus_blur', name: 'defocus_blur'},
    {value: 'glass_blur', name: 'glass_blur'},
    {value: 'motion_blur', name: 'motion_blur'},
    {value: 'zoom_blur', name: 'zoom_blur'},
    {value: 'snow', name: 'snow'},
    {value: 'frost', name: 'frost'},
    {value: 'fog', name: 'fog'},
    {value: 'brightness', name: 'brightness'},
    {value: 'contrast', name: 'contrast'},
    {value: 'elastic_transform', name: 'elastic_transform'},
    {value: 'pixelate', name: 'pixelate'},
    {value: 'jpeg_compression', name: 'jpeg_compression'},
  ];
  constructor(private toastr: ToastrService, private api:  ApiService) { }

  ngOnInit(): void {
  }

  submit(form) {
    if (form.valid) {
      // this.input = {};
      // for (var key in this.model){
      //   this.input[key]=JSON.stringify(this.model[key])
      // }
      // this.api.get("ais/training", this.input).subscribe((data)=>{
      //   if(data.status == "success"){
      //     this.showToast("Model training completed successfully.");
      //   }

      // },
      // (error)=>{
      //     this.api.errorResponse(error);
      // });
    }
  }

  reset(form) {
    form.reset();
  }

  showToast(obj: any) {
    this.toastr.success(JSON.stringify(obj));
  }

}
