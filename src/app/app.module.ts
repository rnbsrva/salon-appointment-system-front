import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SalonModule} from "./features/salon/salon.module";
import {TuiRootModule} from "@taiga-ui/core";
import {ChatModule} from "./features/chat/chat.module";

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
        ChatModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
