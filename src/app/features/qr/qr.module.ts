import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrModalComponent } from './components/qr-modal/qr-modal.component';



@NgModule({
  declarations: [
    QrModalComponent
  ],
  exports: [
    QrModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QrModule { }
