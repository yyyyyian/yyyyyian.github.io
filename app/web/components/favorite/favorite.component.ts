import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent extends BaseComponent {
  constructor(router:Router) {
    super(router)
   }
}
