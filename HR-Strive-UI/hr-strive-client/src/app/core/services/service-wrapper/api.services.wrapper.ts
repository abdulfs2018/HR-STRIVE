import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ConfigurationService } from "../configuration/configuration.service";

@Injectable({
  providedIn: "root",
})
export class ApiWrapperService {
  constructor(
    private httpClient: HttpClient,
    private configuration: ConfigurationService
  ) { }


//   public getRegistrars(): Observable<Array<LoginResponse>> {
//     return this.httpClient.get<Array<LoginResponse>>(`${this.configuration.baseApiURL}/Login/CheckLoginDetail`);
//   }

}