import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule} from "@taiga-ui/kit";
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AuthRoutingModule} from './auth-routing.module'

@NgModule({
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    TuiInputModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
