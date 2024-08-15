import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { GeoDTO } from 'src/DTOs/GeoDTO';
import { Observable } from 'rxjs';
import { WeatherDTO } from 'src/DTOs/WeatherDTO';

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

  getWeather(lat: number, lon: number): Observable<WeatherDTO>
  {
    return this.http.get<WeatherDTO>(`${environment.dataApiUrl}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&units=metric&appid=${environment.apiKey}`);
  }
}
