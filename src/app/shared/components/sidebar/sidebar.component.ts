import {Component, OnInit} from '@angular/core';
import {inject} from "@angular/core";
import {Sidebar} from "../../types";
import {NavbarService} from "../../service/navbar.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  sidebar$: Observable<Sidebar>

  constructor(
    private navService:
      NavbarService) {
  }

  ngOnInit() {
    this.sidebar$ = this.navService.commonNavigation()
  }

}
