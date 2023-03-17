import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(router:Router, messageService: MessageService) {
    super(router)
   }

   displayth1?: boolean;

   displayth2?: boolean;

   displayth3?: boolean;

   displayth4?: boolean;

   displayth5?: boolean;

   displayth6?: boolean;

  ngOnInit(): void {
    this.Run();
  }

   Run(){
    var counter = 1;
    setInterval(function(){
      var element = <HTMLInputElement> document.getElementById('radio'+counter);
      element.checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    },5000);
   }

   showteacher1() {
      this.displayth1 = true;
   }

   showteacher2() {
    this.displayth2 = true;
   }
  
   showteacher3() {
    this.displayth3 = true;
  }

  showteacher4() {
    this.displayth4 = true;
  }

  showteacher5() {
    this.displayth5 = true;
  }

  showteacher6() {
    this.displayth6 = true;
  }
}
