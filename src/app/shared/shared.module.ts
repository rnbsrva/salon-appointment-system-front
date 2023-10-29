import {NgModule} from '@angular/core';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from './components/footer/footer.component';
import {CommonNavBarComponent} from './components/common-nav-bar/common-nav-bar.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";

import {TuiActiveZoneModule} from "@taiga-ui/cdk";
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiAccordionModule} from "@taiga-ui/kit";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TuiActiveZoneModule,
    MatToolbarModule,
    MatMenuModule,
    TuiSidebarModule,
    TuiAccordionModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
  ],
  declarations: [SidebarComponent, FooterComponent, CommonNavBarComponent],
  exports: [SidebarComponent, FooterComponent, CommonNavBarComponent]
})
export class SharedModule {
}
