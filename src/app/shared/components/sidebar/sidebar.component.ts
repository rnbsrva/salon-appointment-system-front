import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {inject} from "@angular/core";
import {Sidebar} from "../../types";
import {NavbarService} from "../../service/navbar.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  sidebar$: Observable<Sidebar>
  open = false

  constructor(
    private navService:
      NavbarService) {
  }

  ngOnInit() {
    this.sidebar$ = this.navService.commonNavigation()
  }


  toggle(open: boolean): void {
    this.open = open;
  }


  protected readonly JSON = JSON;
}
