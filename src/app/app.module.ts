import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { TrackingDetailsComponent } from './components/tracking-details/tracking-details.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NotificationComponent } from './components/notification/notification.component';
import { MemberComponent } from './components/member/member.component';
const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrackingComponent,
    TrackingDetailsComponent,
    NotificationComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
