import { Component, Input } from '@angular/core';
import { GeoDTO } from 'src/DTOs/GeoDTO';
import { Daily, Hourly, WeatherDTO } from 'src/DTOs/WeatherDTO';

@Component({
  selector: 'app-weather-tables',
  templateUrl: './weather-tables.component.html',
  styleUrls: ['./weather-tables.component.scss']
})
export class WeatherTablesComponent {
  @Input() geoData: GeoDTO | null = null;
  @Input() weatherData: WeatherDTO | null = null;

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  getHourlyData(): Hourly[] {
    return this.weatherData?.hourly || [];
  }

  getDailyData(): Daily[] {
    return this.weatherData?.daily || [];
  }
}
