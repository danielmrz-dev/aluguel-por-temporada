import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAddress } from "../interfaces/address.interface";

@Injectable({
    providedIn: 'root'
})
export class ViaCepService {

    private readonly _http = inject(HttpClient);

    getAddress(cep: string): Observable<IAddress> {
        return this._http.get<IAddress>(`https://viacep.com.br/ws/${cep}/json/`)
    }
}