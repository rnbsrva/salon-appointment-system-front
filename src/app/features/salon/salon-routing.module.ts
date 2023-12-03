import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalonMainCardComponent} from './components/salon-main-card/salon-main-card.component';

const routes: Routes = [
  {path: 'salon/:id', component: SalonMainCardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SalonRoutingModule {

}
