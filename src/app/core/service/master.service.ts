import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EnvService} from "./env.service";
import {MasterDto} from "../domain/dto/master.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  private MASTER_URL: string;

  constructor(
    private readonly http: HttpClient,
    private readonly env: EnvService
  ) {
    this.MASTER_URL = env.getApiUrl().concat('master')
  }

  add(
    masterDTO: MasterDto
  ): Observable<any> {
    return this.http.post(this.MASTER_URL, masterDTO)
  }

  deleteById(
    masterId: number
  ) {
    return this.http.delete(`${this.MASTER_URL}${masterId}`)
  }

  getById(
    masterId: number
  ) {
    return this.http.get(`${this.MASTER_URL}${masterId}`)
  }

  addTreatment(
    masterId: number,
    treatmentIds: [number]
  ) {
    return this.http.patch(`${this.MASTER_URL}${masterId}/add`, treatmentIds)
  }

  update(
    masterDTO: MasterDto,
    masterId: number
  ): Observable<any> {
    return this.http.patch(`${this.MASTER_URL}${masterId}`, masterDTO)
  }

}
