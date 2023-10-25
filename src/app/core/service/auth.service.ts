import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

type UserRegistrationDTO = {}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(
    req: UserRegistrationDTO
  ): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/register', req)
  }

}
