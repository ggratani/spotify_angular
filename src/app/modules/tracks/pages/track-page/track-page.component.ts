import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})

export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any> {
    const dataRaw = await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe( response => {
        this.tracksRandom = response
      }, err => {
        
        console.log("error de conexion")
      })
  }

  ngOnDestroy(): void {
  }
}
