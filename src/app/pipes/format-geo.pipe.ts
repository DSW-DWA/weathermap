import { Pipe, PipeTransform } from '@angular/core';
import { GeoDTO } from 'src/DTOs/GeoDTO';
import { environment } from 'src/environments/environment.development';

@Pipe({
  name: 'formatGeo'
})
export class FormatGeoPipe implements PipeTransform {

  transform(value: GeoDTO, localNameKey?: string): string {
    if (!value) {
      return '';
    }

    let displayName = value.name;

    const key = localNameKey || environment.defaultLocalNameKey;

    if (key && value.local_names && value.local_names[key]) {
      displayName = value.local_names[key];
    }

    let result = `${displayName}, ${value.country}`;
    
    if (value.state) {
      result += `, ${value.state}`;
    }

    result += ` (Lat: ${value.lat}, Lon: ${value.lon})`;

    return result;
  }

}
