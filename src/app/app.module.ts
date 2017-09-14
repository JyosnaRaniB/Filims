import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,IonicPageModule  } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FilmDetailsPage} from '../pages/film.details.page/film.details.page';
import { HttpModule } from '@angular/http';
import { LogoutPage } from "../pages/Logout/logout";
import { LoginPage } from "../pages/login/login";
import { ApiProvider } from '../providers/api/api';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilmDetailsPage,
    LogoutPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
   // IonicPageModule.forChild(FilmDetailsPage),
   // IonicPageModule.forChild(LogoutPage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    FilmDetailsPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
