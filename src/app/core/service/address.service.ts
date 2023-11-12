import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "./env.service";
import {AddressDto} from "../domain/dto/address.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly ADDRESS_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.ADDRESS_URL = env.getApiUrl().concat('/address')
  }

  update(
    addressDTO: AddressDto,
    addressId: number
  ): Observable<any> {
    return this.http.patch(`${this.ADDRESS_URL}/${addressId}`, addressDTO)
  }

}
