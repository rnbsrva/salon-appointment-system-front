import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {EnvService} from "./env.service";
import {SalonDto} from "../domain/dto/salon.dto";
import {Observable} from "rxjs";
import {SalonSearchDto} from "../domain/search/salon-search.dto";

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  private SALON_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.SALON_URL = env.getApiUrl().concat('salon/')
  }

  add(
    salonDTO: SalonDto
  ): Observable<any> {
    return this.http.post(this.SALON_URL, salonDTO)
  }

  fetchSuggestions(
    query: string
  ): Observable<any> {
    return this.http.get(`${this.SALON_URL}suggest`, {
      params: {query}
    })
  }

  search(salonSearchDetails: SalonSearchDto, from: number | null, size: number | null): Observable<any> {
    let params = new HttpParams();

    if (from !== null) {
      params = params.set('from', from.toString());
    }

    if (size !== null) {
      params = params.set('size', size.toString());
    }

    console.log( this.http.post(`${this.SALON_URL}search`, salonSearchDetails, {params}));

    return this.http.post(`${this.SALON_URL}search`, salonSearchDetails, {params});
  }

  getById(
    salonId: number
  ): Observable<any> {
    return this.http.get(`${this.SALON_URL}${salonId}`)
  }

  deleteById(
    salonId: number
  ): Observable<any> {
    return this.http.delete(`${this.SALON_URL}${salonId}`)
  }

}
