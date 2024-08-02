import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGoogleSheetsService {

  constructor( private http: HttpClient ){}

    public getHoja = async(): Promise<any> => 
        this.http
            .get<any>(`http://localhost:8000/cuota`)
            .toPromise()
            .then((res) => ({...res}));
}