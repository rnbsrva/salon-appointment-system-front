import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  getApiUrl() {
    return environment.apiUrl;
  }

  getWSUrl() {
    return environment.wsUrl;
  }
}
