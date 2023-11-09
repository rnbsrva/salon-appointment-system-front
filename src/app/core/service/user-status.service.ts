import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {Observable} from "rxjs";
import {EnvService} from "./env.service";

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  private USER_STATUS_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.USER_STATUS_URL = env.getApiUrl().concat('chat/status/')
  }

  userIsOnline(
    userId: number
  ): Observable<any> {
    return this.http.get(`${this.USER_STATUS_URL}user/${userId}`)
  }

  supportChatIsOnline(
    salonId: number
  ) {
    return this.http.get(`${this.USER_STATUS_URL}user/${salonId}`)
  }
}
