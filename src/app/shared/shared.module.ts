import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { CommonNavBarComponent } from './components/common-nav-bar/common-nav-bar.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  imports: [
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    MatListModule,
    MatIconModule, HttpClientModule, MatMenuModule, MatToolbarModule
  ],
  declarations: [SidebarComponent, FooterComponent, CommonNavBarComponent],
    exports: [SidebarComponent, FooterComponent, CommonNavBarComponent]
})
export class SharedModule {
}
