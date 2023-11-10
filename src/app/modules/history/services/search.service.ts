import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api
  private readonly token = environment.token;

  constructor(private http: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.URL}/tracks?src=${term}`)
      .pipe(
        map((dataRaw: any) => dataRaw.data)
      )
  }
}