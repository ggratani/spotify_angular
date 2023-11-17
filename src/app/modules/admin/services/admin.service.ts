import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  editTrack$(track: any): Observable<any> {

    const filteredTrack = {
      name: track.name,
      album: track.album,
      cover: track.cover
    };
    console.log(filteredTrack)
    console.log(`${this.URL}/tracks/edit/${track.uid}`)

    return this.httpClient.put(`${this.URL}/tracks/edit/${track.uid}`, filteredTrack)
    .pipe(
      map(({ data }: any) => {
        console.log(data)
        return data
      })
    )
  }

  addTrack$(track: any): Observable<any> {

    return this.httpClient.post(`${this.URL}/tracks/add`, track)
    .pipe(
      map(({ data }: any) => {
        console.log(data)
        return data
      })
    )
  }

  deleteTrack$(id: any): Observable<any> {

    return this.httpClient.delete(`${this.URL}/tracks/delete/${id}`)
    .pipe(
      map(({ data }: any) => {
        console.log(data)
        return data
      })
    )
  }
}
