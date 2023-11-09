import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "./env.service";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private FEEDBACK_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.FEEDBACK_URL = env.getApiUrl().concat('auth/')
  }

  do(
  ){

  }
}
