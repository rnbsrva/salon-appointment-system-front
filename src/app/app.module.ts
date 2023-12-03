import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SalonModule} from "./features/salon/salon.module";
import {MatNativeDateModule} from '@angular/material/core';
import {TuiRootModule} from "@taiga-ui/core";
import {ChatModule} from "./features/chat/chat.module";
import {AuthModule} from "./features/auth/auth.module";
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';


@NgModule({
    declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    SalonModule,
    TuiRootModule,
    ChatModule,
    MatNativeDateModule,
    AuthModule,
  ],
  providers: [
    {
     provide:HTTP_INTERCEPTORS,
     useClass:ErrorInterceptor,
     multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
