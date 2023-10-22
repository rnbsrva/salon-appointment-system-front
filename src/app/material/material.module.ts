import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

const arr = [
  CommonModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: arr,
  exports: arr
})
export class MaterialModule { }
