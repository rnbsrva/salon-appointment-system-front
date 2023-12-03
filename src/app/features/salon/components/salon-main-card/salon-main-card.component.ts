import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Salon} from "../../../../core/domain/model/salon";
import {SalonService} from "../../../../core/service/salon.service";
import {QrService} from "../../../../core/service/qr.service";

@Component({
  selector: 'app-salon-main-card',
  templateUrl: './salon-main-card.component.html',
  styleUrls: ['./salon-main-card.component.scss'],
})
export class SalonMainCardComponent implements OnInit {
  salonName = "Womaniq";
  salonAddress = "Kabanbay batyr avenue, 62";
  phone = "8 777 956 8920"
  instagram = "@rnbsrva"
  salon: Salon
  qrOpened:boolean= false

  constructor(
    private route: ActivatedRoute,
    private salonService: SalonService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']

      // this.salonService.getById(id)
      //   .subscribe(res => this.salon = res)
    })
  }

  currentUrl():string{
    return window.location.href
  }

  openQr(){
    this.qrOpened = true
  }

}
