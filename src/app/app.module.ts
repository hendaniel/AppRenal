import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";
import { PipesModule } from "./pipes/pipes.module";
import { NeedAuthGuard } from "./NeedAuthGuard";
import { DatePipe, AsyncPipe } from "@angular/common";

import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { File } from "@ionic-native/file/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    DatePipe,
    AsyncPipe,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    File,
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
