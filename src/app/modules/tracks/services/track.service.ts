import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;
  private readonly token = environment.token;

  constructor(private httpClient: HttpClient) { 
    
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTemp = listTracks.filter(a => a._id !== id)
      resolve(listTemp)
    })
  }

  getAllTracks$(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.httpClient.get(`${this.URL}/tracks`, {headers})
    .pipe(
      map(({ data }: any) => {
        console.log(data)
        return data
      })
    )
  }

  getAllRandom$(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.httpClient.get(`${this.URL}/tracks`, {headers})
    .pipe(
      mergeMap(({ data }: any) => this.skipById(data, 30)),
      catchError((err) => {
        const { status, statusText } = err
        console.log("rompio", [status, statusText])
        return of([])
      })
    )
  }
}
