import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', loadChildren:() => import('./web/web-module.module').then(m => m.WebModuleModule)}
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
