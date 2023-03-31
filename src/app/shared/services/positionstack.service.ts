import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = '44d8a0e056c7159dab7727f3939df054';

export interface PositionStackResult {
  latitude: number;
  longitude: number;
}

export interface PositionStackResults {
  data: PositionStackResult[];
}

@Injectable({
  providedIn: 'root',
})
export class PositionstackService {
  constructor(private readonly http: HttpClient) {}

  public getCoordinates(
    postalcode = '',
    street = '',
    city = ''
  ): Observable<PositionStackResults> {
    city = city.trim();
    const query = `${street}, ${city} ${postalcode}`;
    const options = query
      ? {
          params: new HttpParams()
            .set('access_key', API_KEY)
            .set('query', query)
            .set('limit', '10')
            .set('postal_code', postalcode),
        }
      : {};

    return this.http.get(
      '/positionstack',
      options
    ) as Observable<PositionStackResults>;
  }
}
