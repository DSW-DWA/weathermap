import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap } from 'rxjs';
import { ApiService } from '../Services/api.service';
import { GeoDTO } from 'src/DTOs/GeoDTO';
import { WeatherDTO } from 'src/DTOs/WeatherDTO';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit{
  searchQuery: string = '';
  results$: Observable<GeoDTO[]>;
  noResults: boolean = false;
  selectedGeoData: GeoDTO | undefined;
  showDetails: boolean = false; 
  weather$: Observable<WeatherDTO> | null = null;

  constructor(private apiService: ApiService) {
    this.results$ = new Observable<GeoDTO[]>();
  }
  ngOnInit() {
  }
  search(): void {
    if (this.searchQuery != '') {
      this.results$ = this.apiService.getGeo(this.searchQuery);
      
    } else {
      this.results$ = new Observable<GeoDTO[]>();
      
    }

    this.selectedGeoData = undefined;
  }

  selectGeoData(data: GeoDTO): void {
    this.selectedGeoData = data;

    this.weather$ = this.apiService.getWeather(data.lat, data.lon)
  }
}
