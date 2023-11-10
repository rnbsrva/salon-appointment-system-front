import {NgModule, Optional, SkipSelf} from "@angular/core";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PhonePipe } from './pipes/phone.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ReactiveFormsModule,CommonModule
  ],
    declarations: [
        UserProfileComponent,
        PhonePipe,
        ContactsComponent,
    ],
    exports: [
        UserProfileComponent,
        ContactsComponent,
    ],
    providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
