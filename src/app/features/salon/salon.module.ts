import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SalonCardComponent} from './components/salon-card/salon-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SalonMainCardComponent} from './components/salon-main-card/salon-main-card.component';
import {TreatmentsPanelComponent} from './components/treatments-panel/treatments-panel.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {TreatmentCategoryCardComponent} from './components/treatment-category-card/treatment-category-card.component';
import {FeedbackCardComponent} from './components/feedback-card/feedback-card.component';
import {FeedbackMiniCardComponent} from './components/feedback-mini-card/feedback-mini-card.component';
import {SalonImageGalleryComponent} from './components/salon-image-gallery/salon-image-gallery.component';
import {CoverPageComponent} from './components/cover-page/cover-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {AppointmentCardComponent} from './components/appointment-card/appointment-card.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from "@angular/material/datepicker";

import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from "@angular/material/select";
import {SalonSearchComponent} from './components/salon-search/salon-search.component';
import {SalonRoutingModule} from "./salon-routing.module";
import {QrModule} from "../qr/qr.module";


@NgModule({
  declarations: [
    SalonCardComponent,
    SalonMainCardComponent,
    TreatmentsPanelComponent,
    TreatmentCategoryCardComponent,
    FeedbackCardComponent,
    FeedbackMiniCardComponent,
    SalonImageGalleryComponent,
    CoverPageComponent,
    AppointmentCardComponent,
    SalonSearchComponent
  ],
  exports: [
    SalonCardComponent,
    TreatmentsPanelComponent,
    SalonMainCardComponent,
    TreatmentCategoryCardComponent,
    FeedbackCardComponent,
    FeedbackMiniCardComponent,
    SalonImageGalleryComponent,
    CoverPageComponent,
    AppointmentCardComponent,
    SalonSearchComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatNativeDateModule,
    MatTreeModule,
    MatIconModule,
    MatListModule,
    NgOptimizedImage,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatMenuModule,
    MatRadioModule,
    MatGridListModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    SalonRoutingModule,
    QrModule
  ]
})
export class SalonModule {
}
