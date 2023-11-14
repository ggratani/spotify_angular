import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit, OnDestroy{
  listResults: Array<TrackModel> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  async loadDataAll(): Promise<any> {
    this.listResults = await this.trackService.getAllTracks$().toPromise()
  }

  ngOnDestroy(): void {
  }
}
