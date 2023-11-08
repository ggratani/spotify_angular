import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})

export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover:'https://th.bing.com/th/id/OIP.fuh_05g6z3xRv_JAxxzD1AHaEo?pid=ImgDet&rs=1',
    album:'Perro',
    name:'Perro nombre',
    url:'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }
  
  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) => {

      }
    )
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy():void{
    this.listObservers$.forEach( u => u.unsubscribe())
  }
}
