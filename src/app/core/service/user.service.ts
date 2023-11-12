import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "./env.service";
import {UserDto} from "../domain/dto/user.dto";
import {catchError, delay, Observable, of, retry, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.USER_URL = env.getApiUrl().concat('/user')
  }


  update(
    userDto:UserDto,
    id:number
  ):Observable<any>{
    return this.http.patch(`${this.USER_URL}/${id}`, userDto)
      .pipe(
        tap(() => {console.log('Executing user update')}),
        catchError(err => of(err)),
        delay(100),
        retry(2)
      )
  }


}
