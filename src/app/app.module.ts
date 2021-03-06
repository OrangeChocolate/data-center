import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import { HttpModule } from '@angular/http';
import {AuthService} from "../providers/auth-service";
import {SchoolRoll} from "../pages/school-roll/school-roll";
import {Help} from "../pages/help/help";
import {SchoolRollService} from "../providers/school-roll-service";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {InfoSearch} from "../pages/info-search/info-search";
import {InfoDetail} from "../pages/info-detail/info-detail";
import {Statistics} from "../pages/statistics/statistics";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SchoolRoll,
    Help,
    InfoSearch,
    InfoDetail,
    Statistics,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SchoolRoll,
    Help,
    InfoSearch,
    InfoDetail,
    Statistics,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    SchoolRollService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
