import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalonCardComponent } from './components/salon-card/salon-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { SalonMainCardComponent } from './components/salon-main-card/salon-main-card.component';
import { TreatmentsPanelComponent } from './components/treatments-panel/treatments-panel.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    SalonCardComponent,
    SalonMainCardComponent,
    TreatmentsPanelComponent
  ],
    exports: [
        SalonCardComponent,
        TreatmentsPanelComponent,
        SalonMainCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatTreeModule,
        MatIconModule,
        MatListModule
    ]
})
export class SalonModule { }
