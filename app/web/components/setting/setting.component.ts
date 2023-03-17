import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent extends BaseComponent {
  constructor(router:Router) {
    super( router)
   }
}
