import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { MemberGuard } from './auth/components/guards/member.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'track', component: TrackingComponent},
  {path: 'notification', component: NotificationComponent, canActivate: [MemberGuard]},
  {path: 'member', component: MemberComponent, canActivate: [MemberGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
