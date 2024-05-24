import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { conferencia } from './conferencia';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

ApiURL:string = environment.baseURL + "conferences.json";
constructor(private http:HttpClient) { }

getConferencias(): Observable< conferencia [] > {
  return this.http.get<conferencia[]>(this.ApiURL)
}

}
