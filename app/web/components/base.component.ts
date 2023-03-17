import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";




@Component({
    selector: 'app-base',
    template: '',
    providers: [ MessageService ]
})

export class BaseComponent {
    constructor( protected router: Router) {}

    menu(){
        let siderbar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".menu");
        sidebarBtn?.addEventListener("click", () =>{
          siderbar?.classList.toggle("close");
        });
      }
    
      logout(){
        this.router.navigate(['']);
      }
    
      Setting(){
        this.router.navigate(['setting']);
      }
    
      Subsrcribe(){
        this.router.navigate(['subscribe']);
      }
    
      Favorite(){
        this.router.navigate(['favorite']);
      }
    
      User(){
        this.router.navigate(['user']);
      }
      Record(){
        this.router.navigate(['record']);
      }
    
      Dashboard(){
        this.router.navigate(['dashboard']);
      }
}