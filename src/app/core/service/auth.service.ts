import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegistrationDto} from "../domain/dto/registration.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  register(
    req: RegistrationDto
  ): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/register', req)
  }

}
