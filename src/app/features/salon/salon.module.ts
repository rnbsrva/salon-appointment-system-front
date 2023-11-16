import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SalonCardComponent } from './components/salon-card/salon-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { SalonMainCardComponent } from './components/salon-main-card/salon-main-card.component';
import { TreatmentsPanelComponent } from './components/treatments-panel/treatments-panel.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { TreatmentCategoryCardComponent } from './components/treatment-category-card/treatment-category-card.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { FeedbackMiniCardComponent } from './components/feedback-mini-card/feedback-mini-card.component';
import { SalonImageGalleryComponent } from './components/salon-image-gallery/salon-image-gallery.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    SalonCardComponent,
    SalonMainCardComponent,
    TreatmentsPanelComponent,
    TreatmentCategoryCardComponent,
    FeedbackCardComponent,
    FeedbackMiniCardComponent,
    SalonImageGalleryComponent,
    CoverPageComponent
  ],
    exports: [
        SalonCardComponent,
        TreatmentsPanelComponent,
        SalonMainCardComponent,
        TreatmentCategoryCardComponent,
        FeedbackCardComponent,
        FeedbackMiniCardComponent,
        SalonImageGalleryComponent,
        CoverPageComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatTreeModule,
        MatIconModule,
        MatListModule,
        NgOptimizedImage,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})
export class SalonModule { }
