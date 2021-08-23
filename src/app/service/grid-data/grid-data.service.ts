import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GridData } from 'src/app/models/grid-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GridDataService {
  constructor(private readonly httpClient: HttpClient) {}

  getData(): Observable<GridData[]> {
    return this.httpClient.get<GridData[]>(environment.dataUrl);
  }
}
