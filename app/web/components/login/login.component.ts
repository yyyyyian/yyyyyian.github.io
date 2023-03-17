import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router) { }
  

  Singup(){
    this.router.navigate(['web/singup']);
    console.log("123");
  }

  register(){
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    registerLink?.addEventListener('click', () => {
      wrapper?.classList.add('active');
    })
  }

  loginlink(){
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    loginLink?.addEventListener('click', () => {
      wrapper?.classList.remove('active');
    })
  }

  forgot() {
    const wrapper = document.querySelector('.wrapper');
    const forgotLink = document.querySelector('.password-link');
    forgotLink?.addEventListener('click', () => {
      wrapper?.classList.add('disable');
    })
  }

  backlogin(){
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.forgot-link');
    loginLink?.addEventListener('click', () => {
      wrapper?.classList.remove('disable');
    })
  }

  Login(){
    const account = "1234@gmail.com";
    const password = "1234";

    var account_html = (<HTMLInputElement>document.getElementById("email")).value;
    var password_html = (<HTMLInputElement>document.getElementById("password")).value;

    if(account == account_html && password == password_html){
      this.router.navigate(['dashboard']);
    }else{
      window.alert("帳號或密碼錯誤");
    }
  }
}
