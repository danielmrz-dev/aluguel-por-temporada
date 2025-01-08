import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICepResponse } from "../interfaces/cep-response.interface";

@Injectable({
    providedIn: 'root'
})
export class ViaCepService {

    private readonly _http = inject(HttpClient);

    getAddress(cep: string): Observable<ICepResponse> {
        return this._http.get<ICepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
    }

    IsCepValid(cep: string): Observable<boolean> {
        return this._http.get<ICepResponse>(`https://viacep.com.br/ws/${cep}/json/`).pipe(
            map(address => address.cep ? true : false)
        )
    }
}