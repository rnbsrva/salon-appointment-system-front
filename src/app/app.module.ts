import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {TuiRootModule} from '@taiga-ui/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule,
    TuiRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
