import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "./env.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private MESSAGE_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.MESSAGE_URL = env.getApiUrl().concat('chat/message/')
  }

  get(
    salonId: number,
    userId: number
  ): Observable<any> {
    return this.http.get(`${this.MESSAGE_URL}`, {
      params: {
        userId,
        salonId
      }
    })
  }


}
