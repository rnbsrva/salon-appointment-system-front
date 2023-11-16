import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputModule} from "@taiga-ui/kit";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    SignInComponent,
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
  ]
})
export class AuthModule {
}
