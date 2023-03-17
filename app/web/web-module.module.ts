import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { SettingComponent } from './components/setting/setting.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RecordComponent } from './components/record/record.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastModule } from 'primeng/toast';
import { TestComponent } from './components/test/test.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    LoginComponent,
    SettingComponent,
    FavoriteComponent,
    RecordComponent,
    SubscribeComponent,
    DashboardComponent,
    TestComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    MessagesModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path:'', component: LoginComponent},
      { path:'dashboard', component: DashboardComponent},
      { path:'setting', component: SettingComponent},
      { path:'record', component: RecordComponent},
      { path:'subscribe', component: SubscribeComponent},
      { path:'favorite', component:FavoriteComponent},
      { path:'test', component:TestComponent}
    ]),
  ]
})
export class WebModuleModule { }
