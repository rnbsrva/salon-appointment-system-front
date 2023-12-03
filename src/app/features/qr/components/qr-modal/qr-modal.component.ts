import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QrService} from "../../../../core/service/qr.service";

@Component({
  selector: 'app-qr-modal',
  templateUrl: './qr-modal.component.html',
  styleUrls: ['./qr-modal.component.scss']
})
export class QrModalComponent implements OnInit {
  @Input('url') url: string
  qrCodeUrl:string
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(
    private qrService: QrService
  ) {
  }

  ngOnInit() {
    this.qrService.generate(this.url)
      .subscribe(res => {
        this.qrCodeUrl = URL.createObjectURL(res)
      });
  }

  closeModal() {
    this.closeModalEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}
