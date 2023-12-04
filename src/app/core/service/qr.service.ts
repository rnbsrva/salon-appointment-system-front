import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "./env.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private readonly QR_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.QR_URL = env.getApiUrl().concat('qr/')
  }

  generate(
    data: string
  ): Observable<any> {
    return this.http.get(this.QR_URL+ `generate`, {
      params: {data},
      responseType: 'blob'
    })
  }


}
