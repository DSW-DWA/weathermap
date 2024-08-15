import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap } from 'rxjs';
import { ApiService } from '../Services/api.service';
import { GeoDTO } from 'src/DTOs/GeoDTO';

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

  constructor(private searchService: ApiService) {
    this.results$ = new Observable<GeoDTO[]>();
  }
  ngOnInit() {
  }
  search(): void {
    if (this.searchQuery != '') {
      this.results$ = this.searchService.getGeo(this.searchQuery);
      
    } else {
      this.results$ = new Observable<GeoDTO[]>();
      
    }

    this.selectedGeoData = undefined;
  }

  selectGeoData(data: any): void {
    this.selectedGeoData = data;
  }
}
