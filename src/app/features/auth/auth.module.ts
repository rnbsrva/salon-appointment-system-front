import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModalComponent} from './components/auth-modal/auth-modal.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule} from "@taiga-ui/kit";


@NgModule({
  declarations: [
    AuthModalComponent
  ],
  exports: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    TuiInputModule,
  ]
})
export class AuthModule {
}
