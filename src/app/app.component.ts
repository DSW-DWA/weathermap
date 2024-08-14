import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'weathermap';

  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.apiService.getGeo('Moscow').subscribe((data) => {console.log(data)});
    
  }
}
