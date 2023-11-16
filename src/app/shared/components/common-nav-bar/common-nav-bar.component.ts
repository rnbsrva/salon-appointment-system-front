import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Observable} from "rxjs";
import {Sidebar} from "../../types";
import {NavbarService} from "../../service/navbar.service";
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'app-common-nav-bar',
  templateUrl: './common-nav-bar.component.html',
  styleUrls: ['./common-nav-bar.component.scss']
})
export class CommonNavBarComponent implements OnInit{

  sidebar$: Observable<Sidebar>

  @ViewChild('menu') menu: ElementRef;


  constructor(
    private navService:
      NavbarService) {
  }

  ngOnInit(): void {
    this.sidebar$ = this.navService.commonNavigation()
  }

}
