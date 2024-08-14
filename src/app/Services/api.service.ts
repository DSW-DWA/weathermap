import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { GeoDTO } from 'src/DTOs/GeoDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) 
  { 
  }

  getGeo(query: string, limit: string = '5'): Observable<GeoDTO[]>
  {
    return this.http.get<GeoDTO[]>(`${environment.geoApiUrl}direct?q=${query}&limit=${limit}&appid=${environment.apiKey}`);
  }
}
