import {NgModule, Optional, SkipSelf} from "@angular/core";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [],
  declarations: [
    UserProfileComponent
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
