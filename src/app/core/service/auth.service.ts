import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegistrationDto} from "../domain/dto/registration.dto";
import {environment} from "../../../environments/environment";
import {EnvService} from "./env.service";
import {ResetPasswordDto} from "../domain/dto/reset-password.dto";
import {ForgotPasswordDto} from "../domain/dto/forgot-password.dto";
import {AuthDto} from "../domain/dto/auth.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.AUTH_URL = env.getApiUrl().concat('auth/')
  }

  register(
    req: RegistrationDto
  ): Observable<any> {
    return this.http.post(`${this.AUTH_URL}register`, req)
  }

  requestToResetPassword(
    req: ResetPasswordDto
  ): Observable<any> {
    return this.http.patch(`${this.AUTH_URL}reset-password`, req)
  }

  requestForgotPassword(
    email: string
  ): Observable<any> {
    return this.http.get(`${this.AUTH_URL}request-forgot-password`, {
      params: {email}
    })
  }

  confirmForgotPassword(
    req: ForgotPasswordDto,
    token: string
  ): Observable<any> {
    return this.http.post(`${this.AUTH_URL}confirm-forgot-password`, req, {
      params: {
        verification_token: token
      }
    })
  }

  emailConfirmation(
    token: string
  ): Observable<any> {
    return this.http.get(`${this.AUTH_URL}email-confirmation`, {
      params: {
        verification_token: token
      }
    })
  }

  authenticate(
    auth: AuthDto
  ) {
    return this.http.post(`${this.AUTH_URL}authenticate`, auth)
  }


}
