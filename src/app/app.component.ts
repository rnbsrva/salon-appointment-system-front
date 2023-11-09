import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChatService} from "./core/service/chat.service";
import {AuthService} from "./core/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
